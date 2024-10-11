import { useState, useEffect } from 'react'
import { collection, query, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export interface Feedback {
  id: string
  type: 'issue' | 'idea' | 'feedback'
  title: string
  description: string
  screenshot?: string
  createdAt: Date
  userId: string
}

export function useFeedback() {
  const [feedback, setFeedback] = useState<Feedback[]>([])

  useEffect(() => {
    const q = query(collection(db, 'feedback'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const feedbackList: Feedback[] = []
      querySnapshot.forEach((doc) => {
        feedbackList.push({ id: doc.id, ...doc.data() } as Feedback)
      })
      setFeedback(feedbackList)
    })
    return unsubscribe
  }, [])

  const addFeedback = async (newFeedback: Omit<Feedback, 'id'>) => {
    await addDoc(collection(db, 'feedback'), newFeedback)
  }

  const updateFeedback = async (id: string, updatedFeedback: Partial<Feedback>) => {
    await updateDoc(doc(db, 'feedback', id), updatedFeedback)
  }

  const deleteFeedback = async (id: string) => {
    await deleteDoc(doc(db, 'feedback', id))
  }

  return { feedback, addFeedback, updateFeedback, deleteFeedback }
}