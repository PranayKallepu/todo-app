import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='not-found' >
      <img alt='not-found' src='/images/not-found.png' />
      <Link to='/'><div>go back</div></Link>  {/* go back to start page */}
    </div>
  )
}

export default NotFound
