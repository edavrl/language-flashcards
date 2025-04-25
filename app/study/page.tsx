"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Shuffle,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Settings,
  BarChart3,
  Home,
  ArrowRight,
  BookOpen,
} from "lucide-react"
import { languages, getVocabularyForSet, getSetsForLanguageAndLevel } from "@/lib/data"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

type FlashcardType = {
  id: string
  word: string
  translation: string
  known: boolean
  lastReviewed: number | null
  reviewCount: number
}

export default function Study() {
  const { toast } = useToast()
  const router = useRouter()

  const [settings, setSettings] = useState({
    targetLanguage: "english",
    translationLanguage: "turkish",
    level: "A1",
    set: "set1",
    frontSideLanguage: "target",
    shuffleCards: true,
  })

  const [cards, setCards] = useState<FlashcardType[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)
  const [completed, setCompleted] = useState(false)
  const [availableSets, setAvailableSets] = useState<string[]>([])
  const [stats, setStats] = useState({
    total: 0,
    known: 0,
    unknown: 0,
    percentage: 0,
  })

  useEffect(() => {
    // Load settings
    const savedSettings = localStorage.getItem("flashcard-settings")
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }

    // Load cards
    loadCards()
    loadAvailableSets()
  }, [])

  const loadAvailableSets = async () => {
    try {
      const savedSettings = JSON.parse(localStorage.getItem("flashcard-settings") || "{}")
      const level = savedSettings.level || "A1"

      const sets = await getSetsForLanguageAndLevel(savedSettings.targetLanguage, level)
      setAvailableSets(sets)
    } catch (error) {
      console.error("Error loading available sets:", error)
    }
  }

  // Modified to use the new data structure with proper translations
  const loadCards = async () => {
    setLoading(true)

    try {
      const savedSettings = JSON.parse(localStorage.getItem("flashcard-settings") || "{}")
      const targetLang = savedSettings.targetLanguage || "english"
      const translationLang = savedSettings.translationLanguage || "turkish"
      const level = savedSettings.level || "A1"
      const set = savedSettings.set || "set1"

      // Get vocabulary data for the specific set with proper translations
      const vocabulary = await getVocabularyForSet(targetLang, translationLang, level, set)

      // Load progress from localStorage
      const progressKey = `${targetLang}-${level}-${set}-progress`
      const savedProgress = JSON.parse(localStorage.getItem(progressKey) || "[]")

      // Merge vocabulary with saved progress
      const mergedCards = vocabulary.map((item) => {
        const savedCard = savedProgress.find((card: FlashcardType) => card.id === item.id)
        return {
          ...item,
          known: savedCard?.known || false,
          lastReviewed: savedCard?.lastReviewed || null,
          reviewCount: savedCard?.reviewCount || 0,
        }
      })

      // Shuffle if needed
      const cardsToUse = savedSettings.shuffleCards ? [...mergedCards].sort(() => Math.random() - 0.5) : mergedCards

      setCards(cardsToUse)
      updateProgress(cardsToUse)
    } catch (error) {
      console.error("Error loading cards:", error)
      toast({
        title: "Error loading vocabulary",
        description: "There was a problem loading the vocabulary data.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const updateProgress = (cardsArray: FlashcardType[]) => {
    const knownCount = cardsArray.filter((card) => card.known).length
    const percentage = cardsArray.length > 0 ? Math.round((knownCount / cardsArray.length) * 100) : 0
    setProgress(percentage)

    setStats({
      total: cardsArray.length,
      known: knownCount,
      unknown: cardsArray.length - knownCount,
      percentage: percentage,
    })
  }

  const saveProgress = (updatedCards: FlashcardType[]) => {
    const progressKey = `${settings.targetLanguage}-${settings.level}-${settings.set}-progress`
    localStorage.setItem(progressKey, JSON.stringify(updatedCards))
    updateProgress(updatedCards)
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setIsFlipped(false)
    } else {
      // All cards have been reviewed
      setCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setIsFlipped(false)
    }
  }

  const handleKnown = () => {
    const updatedCards = [...cards]
    updatedCards[currentIndex] = {
      ...updatedCards[currentIndex],
      known: true,
      lastReviewed: Date.now(),
      reviewCount: updatedCards[currentIndex].reviewCount + 1,
    }

    setCards(updatedCards)
    saveProgress(updatedCards)
    handleNext()
  }

  const handleUnknown = () => {
    const updatedCards = [...cards]
    updatedCards[currentIndex] = {
      ...updatedCards[currentIndex],
      known: false,
      lastReviewed: Date.now(),
      reviewCount: updatedCards[currentIndex].reviewCount + 1,
    }

    setCards(updatedCards)
    saveProgress(updatedCards)
    handleNext()
  }

  const handleShuffle = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5)
    setCards(shuffledCards)
    setCurrentIndex(0)
    setIsFlipped(false)

    toast({
      title: "Cards shuffled",
      description: "The order of the flashcards has been randomized.",
      className: "bg-primary text-white",
    })
  }

  const handleReset = () => {
    setCurrentIndex(0)
    setIsFlipped(false)
    setCompleted(false)

    toast({
      title: "Study session reset",
      description: "You've been taken back to the first card.",
      className: "bg-primary text-white",
    })
  }

  const handleNextSet = () => {
    // Find the current set index
    const currentSetIndex = availableSets.indexOf(settings.set)

    // If there's a next set, go to it
    if (currentSetIndex < availableSets.length - 1) {
      const nextSet = availableSets[currentSetIndex + 1]
      const newSettings = { ...settings, set: nextSet }

      // Save the new settings
      localStorage.setItem("flashcard-settings", JSON.stringify(newSettings))
      setSettings(newSettings)

      // Reset state for new set
      setCurrentIndex(0)
      setIsFlipped(false)
      setCompleted(false)

      // Load the new set
      setTimeout(() => {
        loadCards()
      }, 100)

      toast({
        title: "Next set loaded",
        description: `Now studying ${nextSet.replace("set", "Set ")}`,
        className: "bg-secondary text-white",
      })
    } else {
      // If this is the last set, show a message
      toast({
        title: "Last set completed",
        description: "You've completed all sets for this level!",
        className: "bg-accent text-white",
      })
    }
  }

  const handleStartQuiz = () => {
    // Save current set info to localStorage for the quiz
    localStorage.setItem(
      "quiz-data",
      JSON.stringify({
        targetLanguage: settings.targetLanguage,
        translationLanguage: settings.translationLanguage,
        level: settings.level,
        set: settings.set,
        cards: cards,
      }),
    )

    // Navigate to quiz page
    router.push("/quiz")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex justify-center items-center">
        <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
          <h2 className="text-xl font-medium mb-4 text-primary">Loading flashcards...</h2>
          <Progress value={33} className="w-[300px]" />
        </div>
      </div>
    )
  }

  if (cards.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex justify-center items-center">
        <div className="max-w-md mx-auto text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-primary">No Flashcards Available</h1>
          <p className="mb-6">There are no vocabulary words available for the selected language, level, and set.</p>
          <Link href="/settings">
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">Change Settings</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Show completion screen if all cards have been reviewed
  if (completed) {
    const isLastSet = availableSets.indexOf(settings.set) === availableSets.length - 1

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex justify-center items-center">
        <div className="max-w-md w-full mx-auto p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-4">
              <Check className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-primary mb-2">Set Completed!</h1>
            <p className="text-gray-600">
              You've completed {settings.set.replace("set", "Set ")} in {languages[settings.targetLanguage]?.name}{" "}
              {settings.level}
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-medium text-primary mb-4">Your Results</h2>

            <div className="grid grid-cols-3 gap-4 mb-4 text-center">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary">{stats.total}</div>
                <div className="text-xs text-gray-500">Total Words</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-500">{stats.known}</div>
                <div className="text-xs text-gray-500">Known</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-red-500">{stats.unknown}</div>
                <div className="text-xs text-gray-500">Unknown</div>
              </div>
            </div>

            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{stats.percentage}%</span>
              </div>
              <Progress value={stats.percentage} className="h-2" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <Link href="/" className="w-full">
              <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/10">
                <Home className="mr-2 h-4 w-4" /> Home
              </Button>
            </Link>

            {!isLastSet ? (
              <Button
                onClick={handleNextSet}
                className="w-full bg-gradient-secondary hover:opacity-90 transition-opacity"
              >
                Next Set <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Link href="/statistics" className="w-full">
                <Button className="w-full bg-gradient-accent hover:opacity-90 transition-opacity">
                  <BarChart3 className="mr-2 h-4 w-4" /> Statistics
                </Button>
              </Link>
            )}
          </div>

          {/* Changed button text from "Quize Katıl" to "Join Quiz" */}
          <Button
            onClick={handleStartQuiz}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:opacity-90 transition-opacity text-white mb-4"
          >
            <BookOpen className="mr-2 h-4 w-4" /> Join Quiz
          </Button>

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="ghost"
              onClick={handleReset}
              className="w-full text-gray-500 hover:text-primary hover:bg-primary/5"
            >
              <RotateCcw className="mr-2 h-4 w-4" /> Restart Set
            </Button>

            <Link href="/settings" className="w-full">
              <Button variant="ghost" className="w-full text-gray-500 hover:text-primary hover:bg-primary/5">
                <Settings className="mr-2 h-4 w-4" /> Settings
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const currentCard = cards[currentIndex]
  const targetLanguageName = languages[settings.targetLanguage]?.name || settings.targetLanguage
  const translationLanguageName = languages[settings.translationLanguage]?.name || settings.translationLanguage

  const frontContent = settings.frontSideLanguage === "target" ? currentCard.word : currentCard.translation
  const backContent = settings.frontSideLanguage === "target" ? currentCard.translation : currentCard.word
  const frontLanguage = settings.frontSideLanguage === "target" ? targetLanguageName : translationLanguageName
  const backLanguage = settings.frontSideLanguage === "target" ? translationLanguageName : targetLanguageName

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-primary">Study Flashcards</h1>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handleShuffle}
                title="Shuffle cards"
                className="border-primary/20 text-primary hover:bg-primary/10"
              >
                <Shuffle className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleReset}
                title="Reset to first card"
                className="border-primary/20 text-primary hover:bg-primary/10"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Link href="/settings">
                <Button
                  variant="outline"
                  size="icon"
                  title="Settings"
                  className="border-primary/20 text-primary hover:bg-primary/10"
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/statistics">
                <Button
                  variant="outline"
                  size="icon"
                  title="Statistics"
                  className="border-primary/20 text-primary hover:bg-primary/10"
                >
                  <BarChart3 className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <div className="flex items-center">
              <Badge className="bg-primary">{targetLanguageName}</Badge>
              <span className="mx-2 text-gray-400">•</span>
              <Badge className="bg-secondary">{settings.level}</Badge>
              <span className="mx-2 text-gray-400">•</span>
              <Badge className="bg-accent">{settings.set.replace("set", "Set ")}</Badge>
            </div>
            <div className="text-sm text-gray-500">
              {currentIndex + 1} / {cards.length}
            </div>
          </div>

          <Progress value={progress} className="mb-6 h-2" />

          <div
            className={`relative perspective-1000 w-full h-72 mb-6 cursor-pointer ${isFlipped ? "flip-card flipped" : "flip-card"}`}
            onClick={handleFlip}
          >
            {/* Front of card */}
            <Card className="flip-card-front absolute w-full h-full border-none shadow-lg bg-white/90 backdrop-blur-sm flex flex-col">
              <div className="h-2 bg-gradient-primary rounded-t-lg"></div>
              <div className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="text-sm font-medium text-primary mb-2">{frontLanguage}</div>
                <div className="text-3xl font-bold mb-4 text-center">{frontContent}</div>
                <div className="text-sm text-gray-400 mt-auto">Click to flip</div>
              </div>
            </Card>

            {/* Back of card */}
            <Card className="flip-card-back absolute w-full h-full border-none shadow-lg bg-white/90 backdrop-blur-sm flex flex-col">
              <div className="h-2 bg-gradient-secondary rounded-t-lg"></div>
              <div className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="text-sm font-medium text-secondary mb-2">{backLanguage}</div>
                <div className="text-3xl font-bold mb-4 text-center">{backContent}</div>
                <div className="text-sm text-gray-400 mt-auto">Click to flip back</div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button
              variant="outline"
              className="border-red-200 hover:bg-red-50 hover:text-red-600 h-14 text-base bg-white text-gray-800"
              onClick={handleUnknown}
            >
              <X className="mr-2 h-5 w-5" /> Don't Know
            </Button>
            <Button
              variant="outline"
              className="border-green-200 hover:bg-green-50 hover:text-green-600 h-14 text-base bg-white text-gray-800"
              onClick={handleKnown}
            >
              <Check className="mr-2 h-5 w-5" /> Know
            </Button>
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="border-primary/20 text-gray-800 hover:bg-primary/10 disabled:opacity-50 bg-white"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button
              variant="outline"
              onClick={handleNext}
              disabled={currentIndex === cards.length - 1}
              className="border-primary/20 text-gray-800 hover:bg-primary/10 disabled:opacity-50 bg-white"
            >
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
