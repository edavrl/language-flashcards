"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { languages, levels, getSetsForLanguageAndLevel } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Award, AlertTriangle } from "lucide-react"

type ProgressStats = {
  total: number
  known: number
  unknown: number
  percentage: number
  lastStudied: number | null
}

type WordStats = {
  id: string
  word: string
  translation: string
  known: boolean
  reviewCount: number
  lastReviewed: number | null
}

export default function Statistics() {
  const [selectedLanguage, setSelectedLanguage] = useState("english")
  const [selectedTranslationLanguage, setSelectedTranslationLanguage] = useState("turkish")
  const [selectedLevel, setSelectedLevel] = useState("A1")
  const [availableSets, setAvailableSets] = useState<string[]>([])
  const [stats, setStats] = useState<Record<string, ProgressStats>>({})
  const [difficultWords, setDifficultWords] = useState<WordStats[]>([])
  const [recentlyLearned, setRecentlyLearned] = useState<WordStats[]>([])
  const [loading, setLoading] = useState(false)
  const [isStatsLoading, setIsStatsLoading] = useState(false)

  useEffect(() => {
    // Load settings to get default language
    const savedSettings = localStorage.getItem("flashcard-settings")
    if (savedSettings) {
      const settings = JSON.parse(savedSettings)
      setSelectedLanguage(settings.targetLanguage)
      setSelectedTranslationLanguage(settings.translationLanguage)
      setSelectedLevel(settings.level)
    }

    loadSets()
  }, [])

  useEffect(() => {
    loadSets()
  }, [selectedLanguage, selectedLevel])

  useEffect(() => {
    if (availableSets.length > 0) {
      loadStats()
    }
  }, [availableSets, selectedLanguage, selectedLevel])

  const loadSets = async () => {
    setLoading(true)
    try {
      const sets = await getSetsForLanguageAndLevel(selectedLanguage, selectedLevel)
      setAvailableSets(sets)
    } catch (error) {
      console.error("Error loading sets:", error)
    } finally {
      setLoading(false)
    }
  }

  const loadStats = () => {
    if (availableSets.length === 0) return

    setIsStatsLoading(true)

    const statsData: Record<string, ProgressStats> = {}
    let allWords: WordStats[] = []

    // Load stats for each set
    availableSets.forEach((set) => {
      const progressKey = `${selectedLanguage}-${selectedLevel}-${set}-progress`
      const savedProgress = JSON.parse(localStorage.getItem(progressKey) || "[]") as WordStats[]

      const knownCount = savedProgress.filter((card) => card.known).length
      const lastStudiedCard = [...savedProgress].sort((a, b) => {
        if (!a.lastReviewed) return 1
        if (!b.lastReviewed) return -1
        return b.lastReviewed - a.lastReviewed
      })[0]

      statsData[set] = {
        total: savedProgress.length,
        known: knownCount,
        unknown: savedProgress.length - knownCount,
        percentage: savedProgress.length > 0 ? Math.round((knownCount / savedProgress.length) * 100) : 0,
        lastStudied: lastStudiedCard?.lastReviewed || null,
      }

      // Add to all words collection
      allWords = [...allWords, ...savedProgress]
    })

    setStats(statsData)

    // Find difficult words (reviewed multiple times but still not known)
    const difficult = allWords
      .filter((word) => !word.known && word.reviewCount > 1)
      .sort((a, b) => b.reviewCount - a.reviewCount)
      .slice(0, 10)

    setDifficultWords(difficult)

    // Find recently learned words
    const recent = allWords
      .filter((word) => word.known && word.lastReviewed)
      .sort((a, b) => {
        if (!a.lastReviewed) return 1
        if (!b.lastReviewed) return -1
        return b.lastReviewed - a.lastReviewed
      })
      .slice(0, 10)

    setRecentlyLearned(recent)
    setIsStatsLoading(false)
  }

  const formatDate = (timestamp: number | null) => {
    if (!timestamp) return "Never"
    return new Date(timestamp).toLocaleDateString()
  }

  const formatSetName = (set: string) => {
    return set?.replace("set", "Set ").trim() || ""
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-primary">Learning Statistics</h1>
            <Link href="/study">
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">Continue Learning</Button>
            </Link>
          </div>

          <Card className="mb-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-primary">Language Progress</CardTitle>
              <CardDescription>Select a language and level to view your learning progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger className="border-primary/20 focus:ring-primary">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(languages).map((lang) => (
                        <SelectItem key={lang} value={lang}>
                          {languages[lang].name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger className="border-primary/20 focus:ring-primary">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      {levels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-6">
                {loading ? (
                  <div className="text-center py-8 text-gray-500">Loading sets...</div>
                ) : availableSets.length > 0 ? (
                  availableSets.map((set) => (
                    <div key={set} className="space-y-2 p-4 rounded-lg bg-gray-50">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <BookOpen className="h-5 w-5 text-primary mr-2" />
                          <h3 className="font-medium text-primary">{formatSetName(set)}</h3>
                        </div>
                        <Badge className="bg-primary">
                          {stats[set]?.known || 0} / {stats[set]?.total || 0} words
                        </Badge>
                      </div>
                      <Progress value={stats[set]?.percentage || 0} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> Last studied: {formatDate(stats[set]?.lastStudied)}
                        </span>
                        <span className="flex items-center">
                          <Award className="h-3 w-3 mr-1" /> {stats[set]?.percentage || 0}% complete
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">No sets available for this language and level</div>
                )}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="difficult" className="mb-6">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger
                value="difficult"
                className="data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                <AlertTriangle className="mr-2 h-4 w-4" /> Difficult Words
              </TabsTrigger>
              <TabsTrigger value="recent" className="data-[state=active]:bg-accent data-[state=active]:text-white">
                <Award className="mr-2 h-4 w-4" /> Recently Learned
              </TabsTrigger>
            </TabsList>

            <TabsContent value="difficult">
              <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-secondary">Words You Find Difficult</CardTitle>
                  <CardDescription>These words have been marked as unknown multiple times</CardDescription>
                </CardHeader>
                <CardContent>
                  {isStatsLoading ? (
                    <div className="text-center py-8 text-gray-500">Loading difficult words...</div>
                  ) : difficultWords.length > 0 ? (
                    <div className="divide-y">
                      {difficultWords.map((word) => (
                        <div key={word.id} className="py-3 flex justify-between items-center">
                          <div>
                            <p className="font-medium text-gray-800">{word.word}</p>
                            <p className="text-sm text-gray-500">{word.translation}</p>
                          </div>
                          <Badge variant="outline" className="border-secondary/30 text-secondary">
                            Reviewed {word.reviewCount} times
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500 flex flex-col items-center">
                      <AlertTriangle className="h-12 w-12 text-gray-300 mb-2" />
                      <p>No difficult words found. Keep studying!</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recent">
              <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-accent">Recently Learned Words</CardTitle>
                  <CardDescription>Words you've recently marked as known</CardDescription>
                </CardHeader>
                <CardContent>
                  {isStatsLoading ? (
                    <div className="text-center py-8 text-gray-500">Loading recently learned words...</div>
                  ) : recentlyLearned.length > 0 ? (
                    <div className="divide-y">
                      {recentlyLearned.map((word) => (
                        <div key={word.id} className="py-3 flex justify-between items-center">
                          <div>
                            <p className="font-medium text-gray-800">{word.word}</p>
                            <p className="text-sm text-gray-500">{word.translation}</p>
                          </div>
                          <Badge variant="outline" className="border-accent/30 text-accent">
                            {formatDate(word.lastReviewed)}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500 flex flex-col items-center">
                      <Award className="h-12 w-12 text-gray-300 mb-2" />
                      <p>No recently learned words. Start studying!</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
