import React from 'react'
import "./style.scss"
import {AiOutlineSearch} from "react-icons/ai"
import { Link } from 'react-router-dom'
const Navbar = () => {
   
  return (
    <div className='nav'>
      <div className="logo">
        <img src="./movix-logo.svg" className="logo" alt="" />
      </div>
      <div className="icons">
        <Link href="/" className='tv'><p>Tv Shows</p></Link>
        <Link href="/" className='movie'><p>Movies</p></Link>
        <AiOutlineSearch className='search-icon'/>
      </div>
    </div>
  )
}


export default Navbar;
