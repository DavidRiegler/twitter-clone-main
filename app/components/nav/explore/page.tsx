'use client'

import { useRouter } from 'next/navigation'
import { Navigation } from "../../navigation"
import { Trends } from "../../trends"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Explore() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  const trendingTopics = [
    { id: 1, name: "#JavaScript", tweets: "120K" },
    { id: 2, name: "#ReactJS", tweets: "95K" },
    { id: 3, name: "#WebDev", tweets: "82K" },
    { id: 4, name: "#CodingLife", tweets: "78K" },
    { id: 5, name: "#TechNews", tweets: "65K" },
  ]

  return (
    <div className="container mx-auto flex min-h-screen">
      <Navigation onLogout={handleLogout} />
      <main className="w-1/2 border-r p-4">
        <h1 className="mb-4 text-xl font-bold">Explore</h1>
        <Input placeholder="Search Twitter" className="mb-4" />
        <Card>
          <CardHeader>
            <CardTitle>Trending Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {trendingTopics.map((topic) => (
                <li key={topic.id} className="flex justify-between items-center">
                  <span className="font-medium">{topic.name}</span>
                  <span className="text-sm text-gray-500">{topic.tweets} Tweets</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Who to follow</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {["TechGuru", "CodeMaster", "DesignPro"].map((user, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">{user}</p>
                      <p className="text-sm text-gray-500">@{user.toLowerCase()}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Follow</Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
      <Trends />
    </div>
  )
}