import React from 'react'

function index({setCreateOpen}) {
  return (
    <div className="create">
      <div className="item ">
      <div onClick={()=>setCreateOpen(false)} className="close_create_form">
        <h6 >Close</h6>
      </div>
      <div className="user_info">
          <img src="/image/service1.jpg" alt=""/>
          <div className="poster_info">
          <h6>Username</h6>
          <p>10 mins ago</p>
          </div>
        </div>
        <div className="main_form_div">
        <form >
          <div className="create_form">
          <input type="text" placeholder="Title" name="" />
          </div>
          <div className="create_form">
          <textarea name="" placeholder="Content" rows="10"></textarea>
          </div>
          <div className="create_form">
          <select name="" value="Choose Category"  >
            <option value="Sports">Choose Category</option>
            <option value="Sports">Sports</option>
            <option value="Sports">Sports</option>
            <option value="Sports">Sports</option>
          </select>
          </div>
          <button>Create</button>
        </form>
        </div>
    </div>
    </div>
  )
}

export default index
