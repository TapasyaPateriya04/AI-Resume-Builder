//import React from 'react'

import NewResume from "./components/NewResume"

function Dashboard() {
  return (
    <div className="p-10 md:px20 lg:px-32">
     <h2 className="font-bold text-3xl">My Resume</h2>
     <p>Start creating resume for your next Job Role.</p>
     <div className="grid grid-cols-2 md:grid-cols-3
      lg:grid-cols-5 mt">

      <NewResume/>
     </div>
    </div>
  )
}

export default Dashboard
