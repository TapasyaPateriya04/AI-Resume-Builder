// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'lucide-react'

function Header() {
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>

    <img src='/logo.svg' width={50} height={50}/>


    <Link to={'/au'}
    <Button>Get Started</Button>
     
    </div>
  )
}

export default Header
