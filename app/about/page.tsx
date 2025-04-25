import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, BarChart3 } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-primary mb-6 text-center">About This Application</h1>

          <Card className="mb-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-primary">Language Learning Flashcards</CardTitle>
              <CardDescription>A colorful, modern vocabulary learning application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                This application is designed to help language learners memorize vocabulary across multiple languages and
                proficiency levels. All data is stored locally in your browser using localStorage, so you can track your
                progress over time without needing to create an account.
              </p>
              <p className="text-gray-600">
                The application supports multiple languages and follows the Common European Framework of Reference for
                Languages (CEFR) levels: A1, A2, B1, B2, and C1. Each level contains 5 sets of 10 words each.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-primary mb-3 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" /> Learning Features
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-primary text-white text-center text-xs flex items-center justify-center mr-2 mt-0.5">
                        ✓
                      </span>
                      Study vocabulary with interactive flashcards
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-primary text-white text-center text-xs flex items-center justify-center mr-2 mt-0.5">
                        ✓
                      </span>
                      Choose your target language and translation language
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-primary text-white text-center text-xs flex items-center justify-center mr-2 mt-0.5">
                        ✓
                      </span>
                      Select which language appears on the front/back
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-primary text-white text-center text-xs flex items-center justify-center mr-2 mt-0.5">
                        ✓
                      </span>
                      Mark words as "Known" or "Unknown"
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-primary text-white text-center text-xs flex items-center justify-center mr-2 mt-0.5">
                        ✓
                      </span>
                      Shuffle cards for better memorization
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-secondary mb-3 flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" /> Progress Tracking
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-secondary text-white text-center text-xs flex items-center justify-center mr-2 mt-0.5">
                        ✓
                      </span>
                      View detailed statistics about your learning
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-secondary text-white text-center text-xs flex items-center justify-center mr-2 mt-0.5">
                        ✓
                      </span>
                      Track progress for each set of words
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-secondary text-white text-center text-xs flex items-center justify-center mr-2 mt-0.5">
                        ✓
                      </span>
                      Identify difficult words that need more practice
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-secondary text-white text-center text-xs flex items-center justify-center mr-2 mt-0.5">
                        ✓
                      </span>
                      See recently learned words
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-secondary text-white text-center text-xs flex items-center justify-center mr-2 mt-0.5">
                        ✓
                      </span>
                      Works on mobile devices and desktops
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-accent">How to Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-1">Configure Settings</h3>
                  <p className="text-gray-600">
                    Start by selecting your target language, translation language, proficiency level, and word set in
                    the Settings page.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-secondary mb-1">Study Flashcards</h3>
                  <p className="text-gray-600">
                    Go to the Study page to practice with flashcards. Click on a card to flip it and see the
                    translation. Mark words as "Known" or "Unknown" to track your progress.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-accent mb-1">Track Progress</h3>
                  <p className="text-gray-600">
                    Check your progress in the Statistics page to see how many words you've learned in each set and
                    which ones you find difficult.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link href="/settings">
                  <Button className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg py-6 px-8 rounded-xl">
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
