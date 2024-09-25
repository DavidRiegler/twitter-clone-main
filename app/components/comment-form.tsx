import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface CommentFormProps {
  onSubmit: (content: string) => void
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim()) {
      onSubmit(content)
      setContent("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <Textarea
        placeholder="Add a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="mb-2"
      />
      <Button type="submit" size="sm">
        Reply
      </Button>
    </form>
  )
}