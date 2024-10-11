import React from 'react'
import Link from 'next/link'
import { Home, BarChart2, MessageSquare, Settings, Users } from 'lucide-react'

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white w-64 h-full shadow-lg">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-semibold">FeedbackPro</span>
      </div>
      <nav className="mt-6">
        <Link href="/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
          <Home className="h-5 w-5 mr-3" />
          Dashboard
        </Link>
        <Link href="/analytics" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
          <BarChart2 className="h-5 w-5 mr-3" />
          Analytics
        </Link>
        <Link href="/feedback" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
          <MessageSquare className="h-5 w-5 mr-3" />
          Feedback
        </Link>
        <Link href="/users" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
          <Users className="h-5 w-5 mr-3" />
          Users
        </Link>
        <Link href="/settings" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
          <Settings className="h-5 w-5 mr-3" />
          Settings
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar