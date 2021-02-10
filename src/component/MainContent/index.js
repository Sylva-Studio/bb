import React, { useEffect, useState } from 'react'
import CreatePost from '../../pages/CreatePost'
import HidePost from '../HidePost'
import Slider from '../Slider'
function index() {

  const[isCreateOpen, setCreateOpen] = useState(false)
  const [isHidePostOpen, setHidePost] = useState(false)
  const [isFollowed, setFollowed] = useState(false)
  return (
    <>
    {
      isCreateOpen ? (<CreatePost setCreateOpen={setCreateOpen}/>) : 
      (
        <div onClick={()=>setCreateOpen(true)} className="item main_welcome">
        <div className="user_info">
         <img src="/image/service3flipped.jpg"  alt=""/>
         <h6>Username</h6>
         </div>
         <div className="main_text">
          <h4> What will you like tell us?</h4>
         </div>
        </div>
      )
    }
     {
       isHidePostOpen ? (<HidePost setHidePost={setHidePost}/>) :
       (
        <div className="item">
        <div className="item_header">
          <div className="top">
          <h6>category</h6>
          <div className="user_info">
          <img src="/image/service3flipped.jpg"  alt=""/>
          <div className="poster_info">
          <h6>Username</h6>
          <p>10 mins ago</p>
          </div>
          <h6 className="poster_occupation">Occupation</h6>
          </div>
          </div>
          <div className="left">
          <h6 className="hide_post" onClick={()=>setHidePost(true)}>X</h6>
          <button onClick={()=>setFollowed(!isFollowed)}>
            {isFollowed? 'Followed':'Follow'}
          </button>
          </div>
        </div>
        <div className="item_center">
          <h4 className="post_title">
          Fugiat nulla architecto hic voluptatem nemo
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla architecto hic voluptatem nemo, natus ex molestiae provident reiciendis. Similique architecto veniam fugit corporis nemo, ipsam asperiores atque praesentium aut?</p>
          <h6 className="read_more">More</h6>
          <img src="/image/service3flipped.jpg" alt="fugit corporis nemo"/>
        </div>
      
      <div className="item_footer">
        <div className="item_footer_left">
        <div className="like_dislike_btn">
          <h6 className="like"><i className="far fa-thumbs-up"></i><span> 1</span></h6>
          <h6> <i className="far fa-thumbs-down"></i></h6>
        </div>
        <div className="share">
            <h6><span><i className="fas fa-share-alt"></i> share</span></h6>
        </div>
        <div className="comment">
          <h6><span><i className="far fa-comment-dots"></i> comment</span></h6>
        </div>
        </div>
        <div className="item_footer_right">
          ...
        </div>
      </div>
      </div> 
       )
     }

     <div className="slide">
     <Slider/>
     </div>

{
       isHidePostOpen ? (<HidePost setHidePost={setHidePost}/>) :
       (
        <div className="item">
        <div className="item_header">
          <div className="top">
          <h6>category</h6>
          <div className="user_info">
          <img src="/image/service1.jpg" alt=""/>
          <div className="poster_info">
          <h6>Username</h6>
          <p>10 mins ago</p>
          </div>
          <h6 className="poster_occupation">Occupation</h6>
          </div>
          </div>
          <div className="left">
          <h6 className="hide_post" onClick={()=>setHidePost(true)}>X</h6>
          <button onClick={()=>setFollowed(!isFollowed)}>
            {isFollowed? 'Followed':'Follow'}
          </button>
          </div>
        </div>
        <div className="item_center">
          <h4 className="post_title">
          Fugiat nulla architecto hic voluptatem nemo
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla architecto hic voluptatem nemo, natus ex molestiae provident reiciendis. Similique architecto veniam fugit corporis nemo, ipsam asperiores atque praesentium aut?</p>
          <h6 className="read_more">More</h6>
          <img src="/image/service3flipped.jpg" alt="fugit corporis nemo"/>
        </div>
      
      <div className="item_footer">
        <div className="item_footer_left">
        <div className="like_dislike_btn">
          <h6 className="like"><i className="far fa-thumbs-up"></i><span> 1</span></h6>
          <h6> <i className="far fa-thumbs-down"></i></h6>
        </div>
        <div className="share">
            <h6><span><i className="fas fa-share-alt"></i> share</span></h6>
        </div>
        <div className="comment">
          <h6><span><i className="far fa-comment-dots"></i> comment</span></h6>
        </div>
        </div>
        <div className="item_footer_right">
          ...
        </div>
      </div>
      </div> 
       )
     }
    </>
  )
}

export default index
