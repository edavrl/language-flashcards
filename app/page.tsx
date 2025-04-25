import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <Image src="/logo.png" alt="Learn Easy Logo" width={150} height={60} priority />
            </div>
            {/* Main title */}
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Learn Easy</h1>

            {/* Language Learning Flashcards text */}
            <div className="mb-2 text-center">
              <h2 className="text-3xl font-bold text-primary inline-block">Language Learning Flashcards</h2>
            </div>

            {/* Card with welcome content */}
            <Card className="mb-10 border-none shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-primary">Welcome to Your Language Journey</CardTitle>
                <CardDescription className="text-base">
                  Learn vocabulary in sets of 10 words across multiple proficiency levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <h3 className="font-medium text-secondary flex items-center">
                      <span className="inline-block w-6 h-6 rounded-full bg-secondary text-white text-center mr-2">
                        1
                      </span>
                      Choose Your Languages
                    </h3>
                    <p className="text-gray-600 pl-8">Select your target language and translation language</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-secondary flex items-center">
                      <span className="inline-block w-6 h-6 rounded-full bg-secondary text-white text-center mr-2">
                        2
                      </span>
                      Select Your Level
                    </h3>
                    <p className="text-gray-600 pl-8">From beginner (A1) to advanced (C1)</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-secondary flex items-center">
                      <span className="inline-block w-6 h-6 rounded-full bg-secondary text-white text-center mr-2">
                        3
                      </span>
                      Choose a Word Set
                    </h3>
                    <p className="text-gray-600 pl-8">Each level has 5 sets with 10 words each</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-secondary flex items-center">
                      <span className="inline-block w-6 h-6 rounded-full bg-secondary text-white text-center mr-2">
                        4
                      </span>
                      Track Your Progress
                    </h3>
                    <p className="text-gray-600 pl-8">See your learning statistics for each set</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pt-2 pb-6">
                <Link href="/settings" className="w-full sm:w-auto">
                  <Button className="w-full bg-white hover:bg-gray-50 transition-opacity text-lg py-6 rounded-xl text-primary border border-primary/20">
                    Start Learning Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/settings" className="w-full">
                <Card className="h-full card-hover border-none shadow-md bg-white/80 backdrop-blur-sm">
                  <div className="h-2 bg-primary rounded-t-lg"></div>
                  <CardHeader>
                    <CardTitle className="text-black">Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="text-black">
                    Configure your language preferences and study options
                  </CardContent>
                </Card>
              </Link>

              <Link href="/study" className="w-full">
                <Card className="h-full card-hover border-none shadow-md bg-white/80 backdrop-blur-sm">
                  <div className="h-2 bg-secondary rounded-t-lg"></div>
                  <CardHeader>
                    <CardTitle className="text-black">Study</CardTitle>
                  </CardHeader>
                  <CardContent className="text-black">Practice vocabulary with interactive flashcards</CardContent>
                </Card>
              </Link>

              <Link href="/statistics" className="w-full">
                <Card className="h-full card-hover border-none shadow-md bg-white/80 backdrop-blur-sm">
                  <div className="h-2 bg-accent rounded-t-lg"></div>
                  <CardHeader>
                    <CardTitle className="text-black">Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="text-black">View your learning progress and challenging words</CardContent>
                </Card>
              </Link>

              <Link href="/about" className="w-full">
                <Card className="h-full card-hover border-none shadow-md bg-white/80 backdrop-blur-sm">
                  <div className="h-2 bg-gray-400 rounded-t-lg"></div>
                  <CardHeader>
                    <CardTitle className="text-black">About</CardTitle>
                  </CardHeader>
                  <CardContent className="text-black">Learn more about this application</CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
        <footer className="mt-16 text-center pb-6">
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-500">© 2024 Learn Easy - Tüm hakları Eda Vural'a aittir.</p>
            <p className="text-gray-400 text-sm mt-1">Designed with ❤️ for language learners</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
