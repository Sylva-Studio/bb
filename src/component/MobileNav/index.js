import React, { useState } from 'react'
import Link from 'next/link'

function index() {

  const [isSearchOpen, setSearchOpen] = useState(false)
  return (
   
    <div className="navBar mobile_only">
     <div className="navBar_inner top_menu">
     
      <div className="logo">
       <Link href="/">
       <a >MAS</a>
       </Link>
      </div>
     
      <div className="create_post">
      <Link href="/CreatePost">
       <a >
       <h5>Create Post</h5>
       </a>
       </Link>
      </div>
     </div>

     {
        isSearchOpen ? ( 
        <div className="mobile_search">
        <i class="fas fa-search"></i>
        <form >
        <input type="text" placeholder="Search Mas"/>
        </form>
        <h6 onClick={()=>setSearchOpen(false)}>Cancel</h6>
        </div>) : 
        ( <div className="down_menu">

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

        <div className="user">
        <i class="fas fa-user-circle"></i>
        <i class="fas fa-caret-down"></i>
        </div>

        <div onClick={()=>setSearchOpen(true)} className="search">
        <i class="fas fa-search"></i>
        </div>
        </div>
        )
      }
      </div>
      
  )
}

export default index
