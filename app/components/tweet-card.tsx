import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CommentForm } from "./comment-form"
import { Heart, MessageCircle, Repeat, Trash2, ThumbsUp } from "lucide-react"

interface Comment {
  id: number
  content: string
  username: string
  likes: string[]
}

interface Tweet {
  id: number
  content: string
  username: string
  comments: Comment[]
  likes: string[]
  retweets: string[]
}

interface TweetCardProps {
  tweet: Tweet
  onAddComment: (tweetId: number, content: string) => void
  onLike: (tweetId: number) => void
  onRetweet: (tweetId: number) => void
  onDeleteComment: (tweetId: number, commentId: number) => void
  onLikeComment: (tweetId: number, commentId: number) => void
  currentUser: string
}

export function TweetCard({
  tweet,
  onAddComment,
  onLike,
  onRetweet,
  onDeleteComment,
  onLikeComment,
  currentUser
}: TweetCardProps) {
  const [showComments, setShowComments] = useState(false)

  const handleAddComment = (content: string) => {
    onAddComment(tweet.id, content)
  }

  const isLiked = tweet.likes.includes(currentUser)
  const isRetweeted = tweet.retweets.includes(currentUser)

  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex items-center">
          <Avatar className="h-8 w-8">
            <AvatarImage src={`https://i.pravatar.cc/32?img=${tweet.id}`} />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div className="ml-2">
            <p className="font-semibold">{tweet.username}</p>
            <p className="text-sm text-gray-500">@{tweet.username.toLowerCase()}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p>{tweet.content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" onClick={() => setShowComments(!showComments)}>
          <MessageCircle className="mr-2 h-4 w-4" />
          {tweet.comments.length}
        </Button>
        <Button
          variant={isRetweeted ? "default" : "ghost"}
          size="sm"
          onClick={() => onRetweet(tweet.id)}
        >
          <Repeat className="mr-2 h-4 w-4" />
          {tweet.retweets.length}
        </Button>
        <Button
          variant={isLiked ? "default" : "ghost"}
          size="sm"
          onClick={() => onLike(tweet.id)}
        >
          <Heart className="mr-2 h-4 w-4" />
          {tweet.likes.length}
        </Button>
      </CardFooter>
      {showComments && (
        <CardContent>
          <CommentForm onSubmit={handleAddComment} />
          {tweet.comments.map((comment) => (
            <div key={comment.id} className="mt-2 border-t pt-2">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{comment.username}</p>
                {comment.username === currentUser && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDeleteComment(tweet.id, comment.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <p>{comment.content}</p>
              <Button
                variant={comment.likes.includes(currentUser) ? "default" : "ghost"}
                size="sm"
                onClick={() => onLikeComment(tweet.id, comment.id)}
              >
                <ThumbsUp className="mr-2 h-4 w-4" />
                {comment.likes.length}
              </Button>
            </div>
          ))}
        </CardContent>
      )}
    </Card>
  )
}