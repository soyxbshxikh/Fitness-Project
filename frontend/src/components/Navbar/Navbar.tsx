"use client"
import React from 'react'
import logo from '../../assets/logo.png'
import { IoIosBody } from 'react-icons/io'
import './Navbar.css'
import Link from 'next/link'
import Image from 'next/image'
import AuthPopup from '../AuthPopup/AuthPopup'

const Navbar = () => {
  const [isloggedin, setIsloggedin] = React.useState<boolean>(false)
  const [showpopup, setshowpopup] = React.useState<boolean>(false)

  return (
    <nav>
      <Image src={logo} alt="logo" />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/profile"><IoIosBody /></Link>
      {
        isloggedin ?
          <button>Logout</button>
          :
          <button
            onClick={() => {
              setshowpopup(true)
            }}
          >Login</button>
      }
      {
        showpopup && <AuthPopup setshowpopup={setshowpopup}/>
      }
    </nav>
  )
}

export default Navbar