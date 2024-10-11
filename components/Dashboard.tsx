import React from 'react'
import Sidebar from './Sidebar'
import FeedbackOverview from './FeedbackOverview'
import Analytics from './Analytics'
import FeedbackManagement from './FeedbackManagement'

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
          <FeedbackOverview />
          <Analytics />
          <FeedbackManagement />
        </div>
      </div>
    </div>
  )
}

export default Dashboard