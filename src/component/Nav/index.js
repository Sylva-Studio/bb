import React from 'react'
import Link from 'next/link'
import MobileNav from '../MobileNav'


function index() {
  return (
    <>
    <div className="navBar desktop_only">
      <div className="navBar_inner">
      <div className="logo">
       <Link href="/">
       <a >MAS</a>
       </Link>
      </div>
      <div className="home">
      <Link href="/">
       <a >
       <i class="fas fa-home"></i>
       </a>
       </Link>
      </div>
      <div className="following">
      <Link href="/Following">
       <a >
       <i class="fas fa-user-friends"></i>
       </a>
       </Link>
      </div>
      <div className="hangOut">
      <Link href="/HangOut">
       <a >
       <i class="fas fa-smile"></i>
       </a>
       </Link>
      </div>
      <div className="liked">
      <Link href="/Liked">
       <a >
       <i class="fab fa-gratipay"></i>
       </a>
       </Link>
      </div>
      <div className="search">
      <i class="fas fa-search"></i>
      <input type="text" placeholder="Search Mas"/>
      </div>
      <div className="user">
      <i class="fas fa-user-circle"></i>
      </div>
      <div className="create_post">
      <Link href="/CreatePost">
       <a >
       <h5>Create Post</h5>
       </a>
       </Link>
      </div>
      </div>
      
    </div>
    <MobileNav/>
    </>
  )
}

export default index
