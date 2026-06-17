import React from 'react'
import { Link } from 'react-router-dom'

const RevisionHeader = () => {
  return (
    // tailwind
      <div className='flex justify-evenly h-[7vh]'>
        <Link to={'/revision/topic1'}>Let/Const/Var</Link>
      </div>
  )
}

export default RevisionHeader