import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const FeedbackWidget: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<string>('feedback')
  const [screenshot, setScreenshot] = useState<string | null>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle feedback submission
  }

  const captureScreenshot = () => {
    // Implement screenshot capture functionality
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Give Feedback</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send Feedback</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <RadioGroup defaultValue="feedback" onValueChange={(value) => setFeedbackType(value)}>
            <div className="flex space-x-2">
              <RadioGroupItem value="issue" id="issue" />
              <Label htmlFor="issue">Issue</Label>
            </div>
            <div className="flex space-x-2">
              <RadioGroupItem value="idea" id="idea" />
              <Label htmlFor="idea">Idea</Label>
            </div>
            <div className="flex space-x-2">
              <RadioGroupItem value="feedback" id="feedback" />
              <Label htmlFor="feedback">Feedback</Label>
            </div>
          </RadioGroup>
          <Input className="mt-4" placeholder="Title" />
          <Textarea className="mt-2" placeholder="Description" />
          {feedbackType === 'issue' && (
            <Button type="button" onClick={captureScreenshot} className="mt-2">
              Capture Screenshot
            </Button>
          )}
          {screenshot && <img src={screenshot} alt="Screenshot" className="mt-2 max-w-full h-auto" />}
          <Button type="submit" className="mt-4">Submit Feedback</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default FeedbackWidget
</boltArtifact>

Now, let's set up Firebase for backend services:

<boltArtifact id="firebase-setup" title="Set up Firebase">
<boltAction type="file" filePath="lib/firebase.ts">
import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const db = getFirestore(app)
const auth = getAuth(app)

export { app, db, auth }