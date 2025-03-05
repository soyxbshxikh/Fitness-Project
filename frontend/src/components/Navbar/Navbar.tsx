import React from 'react'
import logo from '../../assets/logo.png'
import { IoIosBody } from 'react-icons/io'
import './Navbar.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
        <Image src={logo} alt="logo" />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/profile"><IoIosBody/></Link>
        <button>Sign Out</button>
    </nav>
  )
}

export default Navbar