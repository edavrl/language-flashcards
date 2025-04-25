"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { languages } from "@/lib/data"
import { useToast } from "@/hooks/use-toast"
import { Home, RotateCcw, ArrowRight, Check, X, BookOpen, Award } from "lucide-react"

type QuizWord = {
  id: string
  word: string
  translation: string
}

type QuizQuestion = {
  questionWord: string
  correctAnswer: string
  options: string[]
}

export default function Quiz() {
  const router = useRouter()
  const { toast } = useToast()

  const [quizData, setQuizData] = useState<{
    targetLanguage: string
    translationLanguage: string
    level: string
    set: string
    cards: QuizWord[]
  } | null>(null)

  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load quiz data from localStorage
    const savedQuizData = localStorage.getItem("quiz-data")
    if (!savedQuizData) {
      toast({
        title: "Quiz data not found",
        description: "Please complete a study session first.",
        variant: "destructive",
      })
      router.push("/study")
      return
    }

    try {
      const parsedData = JSON.parse(savedQuizData)
      setQuizData(parsedData)
      generateQuizQuestions(parsedData)
    } catch (error) {
      console.error("Error loading quiz data:", error)
      toast({
        title: "Error loading quiz",
        description: "There was a problem loading the quiz data.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }, [router, toast])

  const generateQuizQuestions = (data: any) => {
    const { cards, targetLanguage } = data

    if (!cards || cards.length === 0) {
      toast({
        title: "No vocabulary words found",
        description: "Please complete a study session first.",
        variant: "destructive",
      })
      router.push("/study")
      return
    }

    // Create questions from the cards
    const generatedQuestions = cards.map((card: QuizWord) => {
      // For each card, create a question where:
      // - The question is the translation word
      // - The correct answer is the target word
      // - The options include the correct answer and 3 random incorrect answers

      // Get 3 random incorrect answers from other cards
      const otherCards = cards.filter((c: QuizWord) => c.id !== card.id)
      const shuffledOtherCards = [...otherCards].sort(() => Math.random() - 0.5)
      const incorrectAnswers = shuffledOtherCards.slice(0, 3).map((c: QuizWord) => c.word)

      // Combine correct and incorrect answers and shuffle
      const allOptions = [card.word, ...incorrectAnswers].sort(() => Math.random() - 0.5)

      return {
        questionWord: card.translation,
        correctAnswer: card.word,
        options: allOptions,
      }
    })

    // Shuffle the questions
    const shuffledQuestions = [...generatedQuestions].sort(() => Math.random() - 0.5)
    setQuestions(shuffledQuestions)
  }

  const handleSelectAnswer = (answer: string) => {
    if (isAnswered) return

    setSelectedAnswer(answer)
    setIsAnswered(true)

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestartQuiz = () => {
    if (quizData) {
      generateQuizQuestions(quizData)
      setCurrentQuestionIndex(0)
      setSelectedAnswer(null)
      setIsAnswered(false)
      setScore(0)
      setQuizCompleted(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex justify-center items-center">
        <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
          <h2 className="text-xl font-medium mb-4 text-primary">Loading quiz...</h2>
          <Progress value={33} className="w-[300px]" />
        </div>
      </div>
    )
  }

  if (!quizData || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex justify-center items-center">
        <div className="max-w-md mx-auto text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-primary">Quiz Not Available</h1>
          <p className="mb-6">There was a problem loading the quiz. Please try again.</p>
          <Link href="/study">
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">Return to Study</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Show quiz completion screen
  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100)

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex justify-center items-center">
        <div className="max-w-md w-full mx-auto p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-4">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-primary mb-2">Quiz Completed!</h1>
            <p className="text-gray-600">
              You've completed the quiz for {quizData.set.replace("set", "Set ")} in{" "}
              {languages[quizData.targetLanguage]?.name} {quizData.level}
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-medium text-primary mb-4">Your Results</h2>

            <div className="grid grid-cols-3 gap-4 mb-4 text-center">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary">{questions.length}</div>
                <div className="text-xs text-gray-500">Total Questions</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-500">{score}</div>
                <div className="text-xs text-gray-500">Correct</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-red-500">{questions.length - score}</div>
                <div className="text-xs text-gray-500">Incorrect</div>
              </div>
            </div>

            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span>Score</span>
                <span>{percentage}%</span>
              </div>
              <Progress value={percentage} className="h-2" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Link href="/study" className="w-full">
              <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/10">
                <BookOpen className="mr-2 h-4 w-4" /> Back to Study
              </Button>
            </Link>

            <Button
              onClick={handleRestartQuiz}
              className="w-full bg-gradient-secondary hover:opacity-90 transition-opacity"
            >
              <RotateCcw className="mr-2 h-4 w-4" /> Retry Quiz
            </Button>
          </div>

          <div className="mt-4">
            <Link href="/" className="w-full">
              <Button variant="ghost" className="w-full text-gray-500 hover:text-primary hover:bg-primary/5">
                <Home className="mr-2 h-4 w-4" /> Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Current question
  const currentQuestion = questions[currentQuestionIndex]
  const translationLanguageName = languages[quizData.translationLanguage]?.name || quizData.translationLanguage
  const targetLanguageName = languages[quizData.targetLanguage]?.name || quizData.targetLanguage

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-primary">Vocabulary Quiz</h1>
            <div className="flex items-center">
              <Badge className="bg-primary">{targetLanguageName}</Badge>
              <span className="mx-2 text-gray-400">•</span>
              <Badge className="bg-secondary">{quizData.level}</Badge>
              <span className="mx-2 text-gray-400">•</span>
              <Badge className="bg-accent">{quizData.set.replace("set", "Set ")}</Badge>
            </div>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <div className="text-sm font-medium text-primary">Score: {score}</div>
          </div>

          <Progress value={(currentQuestionIndex / questions.length) * 100} className="mb-6 h-2" />

          <Card className="mb-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-center">
                <span className="block text-sm text-secondary mb-1">
                  What does this {translationLanguageName} word mean?
                </span>
                <span className="text-2xl font-bold">{currentQuestion.questionWord}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full h-14 text-left justify-start text-base ${
                    isAnswered && option === currentQuestion.correctAnswer
                      ? "border-green-500 bg-green-50 text-green-700"
                      : isAnswered && option === selectedAnswer
                        ? "border-red-500 bg-red-50 text-red-700"
                        : "border-gray-200 hover:bg-gray-50"
                  }`}
                  onClick={() => handleSelectAnswer(option)}
                  disabled={isAnswered}
                >
                  <span className="inline-block w-6 h-6 rounded-full bg-gray-200 text-gray-700 text-center mr-3">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                  {isAnswered && option === currentQuestion.correctAnswer && (
                    <Check className="ml-auto h-5 w-5 text-green-500" />
                  )}
                  {isAnswered && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                    <X className="ml-auto h-5 w-5 text-red-500" />
                  )}
                </Button>
              ))}
            </CardContent>
            <CardFooter className="pt-0">
              {isAnswered && (
                <Button
                  onClick={handleNextQuestion}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  {currentQuestionIndex < questions.length - 1 ? (
                    <>
                      Next Question <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    "Complete Quiz"
                  )}
                </Button>
              )}
            </CardFooter>
          </Card>

          <div className="flex justify-between">
            <Link href="/study">
              <Button variant="ghost" className="text-gray-500 hover:text-primary hover:bg-primary/5">
                <BookOpen className="mr-2 h-4 w-4" /> Back to Study
              </Button>
            </Link>
            <Button
              variant="ghost"
              onClick={handleRestartQuiz}
              className="text-gray-500 hover:text-primary hover:bg-primary/5"
            >
              <RotateCcw className="mr-2 h-4 w-4" /> Restart Quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
