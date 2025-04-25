"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { languages, levels, getSetsForLanguageAndLevel } from "@/lib/data"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, BookOpen, Settings2, Shuffle } from "lucide-react"

export default function Settings() {
  const router = useRouter()
  const { toast } = useToast()

  const [settings, setSettings] = useState({
    targetLanguage: "english",
    translationLanguage: "turkish",
    level: "A1",
    set: "set1",
    frontSideLanguage: "target", // "target" or "translation"
    shuffleCards: true,
  })

  const [availableSets, setAvailableSets] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Load settings
    const savedSettings = localStorage.getItem("flashcard-settings")
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }

    // Load available sets for the selected language and level
    loadSets()
  }, [])

  useEffect(() => {
    // When language or level changes, load available sets
    loadSets()
  }, [settings.targetLanguage, settings.level])

  const loadSets = async () => {
    setLoading(true)
    try {
      const sets = await getSetsForLanguageAndLevel(settings.targetLanguage, settings.level)
      setAvailableSets(sets)

      // If current set is not available in the new language/level, select the first available set
      if (sets.length > 0 && !sets.includes(settings.set)) {
        handleChange("set", sets[0])
      }
    } catch (error) {
      console.error("Error loading sets:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: string, value: string | boolean) => {
    setSettings((prev) => {
      const newSettings = { ...prev, [field]: value }
      localStorage.setItem("flashcard-settings", JSON.stringify(newSettings))
      return newSettings
    })
  }

  const handleSave = () => {
    // Make sure target and translation languages are different
    if (settings.targetLanguage === settings.translationLanguage) {
      toast({
        title: "Invalid language selection",
        description: "Target language and translation language must be different.",
        variant: "destructive",
      })
      return
    }

    localStorage.setItem("flashcard-settings", JSON.stringify(settings))
    toast({
      title: "Settings saved",
      description: "Your language learning preferences have been updated.",
      className: "bg-primary text-white",
    })
    router.push("/study")
  }

  const formatSetName = (set: string) => {
    return set.replace("set", "Set ").trim()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-primary mb-6 text-center">Settings</h1>

          <Tabs defaultValue="language" className="mb-6">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="language" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Globe className="mr-2 h-4 w-4" /> Languages
              </TabsTrigger>
              <TabsTrigger value="level" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                <BookOpen className="mr-2 h-4 w-4" /> Level & Set
              </TabsTrigger>
              <TabsTrigger value="options" className="data-[state=active]:bg-accent data-[state=active]:text-white">
                <Settings2 className="mr-2 h-4 w-4" /> Options
              </TabsTrigger>
            </TabsList>

            <TabsContent value="language">
              <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-primary">Language Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="targetLanguage" className="text-base">
                      Target Language (Learning)
                    </Label>
                    <Select
                      value={settings.targetLanguage}
                      onValueChange={(value) => handleChange("targetLanguage", value)}
                    >
                      <SelectTrigger
                        id="targetLanguage"
                        className="border-primary/20 focus:ring-primary bg-white text-gray-800"
                      >
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

                  <div className="space-y-2">
                    <Label htmlFor="translationLanguage" className="text-base">
                      Translation Language
                    </Label>
                    <Select
                      value={settings.translationLanguage}
                      onValueChange={(value) => handleChange("translationLanguage", value)}
                    >
                      <SelectTrigger
                        id="translationLanguage"
                        className="border-primary/20 focus:ring-primary bg-white text-gray-800"
                      >
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(languages).map((lang) => (
                          <SelectItem key={lang} value={lang} disabled={lang === settings.targetLanguage}>
                            {languages[lang].name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="level">
              <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-secondary">Level & Set Selection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="level" className="text-base">
                      Proficiency Level
                    </Label>
                    <Select value={settings.level} onValueChange={(value) => handleChange("level", value)}>
                      <SelectTrigger
                        id="level"
                        className="border-secondary/20 focus:ring-secondary bg-white text-gray-800"
                      >
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

                  <div className="space-y-2">
                    <Label htmlFor="set" className="text-base">
                      Word Set
                    </Label>
                    <Select
                      value={settings.set}
                      onValueChange={(value) => handleChange("set", value)}
                      disabled={loading || availableSets.length === 0}
                    >
                      <SelectTrigger
                        id="set"
                        className="border-secondary/20 focus:ring-secondary bg-white text-gray-800"
                      >
                        <SelectValue placeholder={loading ? "Loading sets..." : "Select set"} />
                      </SelectTrigger>
                      <SelectContent>
                        {availableSets.map((set) => (
                          <SelectItem key={set} value={set}>
                            {formatSetName(set)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {availableSets.length === 0 && !loading && (
                      <p className="text-sm text-red-500 mt-1">No sets available for this language and level</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="options">
              <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-accent">Study Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="frontSideLanguage" className="text-base">
                      Front Side Language
                    </Label>
                    <Select
                      value={settings.frontSideLanguage}
                      onValueChange={(value) => handleChange("frontSideLanguage", value)}
                    >
                      <SelectTrigger
                        id="frontSideLanguage"
                        className="w-[180px] border-accent/20 focus:ring-accent bg-white text-gray-800"
                      >
                        <SelectValue placeholder="Select side" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="target">
                          {languages[settings.targetLanguage]?.name || "Target Language"}
                        </SelectItem>
                        <SelectItem value="translation">
                          {languages[settings.translationLanguage]?.name || "Translation Language"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Shuffle className="h-4 w-4 text-accent" />
                      <Label htmlFor="shuffle" className="text-base">
                        Shuffle Cards
                      </Label>
                    </div>
                    <Switch
                      id="shuffle"
                      checked={settings.shuffleCards}
                      onCheckedChange={(checked) => handleChange("shuffleCards", checked)}
                      className="data-[state=checked]:bg-accent"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-between">
            <Link href="/">
              <Button variant="outline" className="border-gray-300 hover:bg-gray-100 bg-white text-gray-800">
                Cancel
              </Button>
            </Link>
            <Button onClick={handleSave} className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Save & Start Learning
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
