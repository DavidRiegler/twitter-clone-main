import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface TweetFormProps {
  onSubmit: (content: string) => void
}

export function TweetForm({ onSubmit }: TweetFormProps) {
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim()) {
      onSubmit(content)
      setContent("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Textarea
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="mb-2"
      />
      <Button type="submit">Tweet</Button>
    </form>
  )
}