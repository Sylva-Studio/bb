import React from 'react'

function index({setHidePost}) {
  return (
    <div className="hide">
    <div className='item'>
     <div className="hide_top">
     <h6>You have hidden this post</h6>
     <h6 className="undo" onClick={()=>setHidePost(false)}>Undo</h6>
     </div>
     <div className="hidding_tins">
       <div className="h1">
         <h6>Dislike Post</h6>
       </div>
       <div className="h1">
         <h6>Unfollow Username</h6>
       </div>
       <div className="h1">
         <h6>Mute Username</h6>
       </div>
       <div className="h1">
         <h6>Report</h6>
       </div>
     </div>
    </div>
    </div>
  )
}

export default index
