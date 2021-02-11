import React, { useRef } from 'react'
import Advert from '../../component/Advert'
import Categories from '../Categories'
import MainContent from '../../component/MainContent'


function index() {
  return (
    <div className="main_display">
    <div className="main_content">
     <div  className="main_content_inner">
     <MainContent />
     </div>
     </div>

     <div className="category">
       <Categories />
     </div>

    </div>
  )
}

export default index
