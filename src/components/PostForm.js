import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewPost,
  toggleStatusFalse,
  toggleStatusTrue,
  
} from "../redux/addPostReducer";
import { Alert } from "./Alert";

function AddPostForm() {
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [body, setBody] = useState("");
  // const [addRequestStatus, setAddRequestStatus] = useState("idle")

  const statusAlert = useSelector((state) => state.post.statusAlert);
 

  const onTitleChange = (event) => setTitle(event.target.value);
  const onAuthorChange = (event) => setUserId(event.target.value);
  const onBodyChange = (event) => setBody(event.target.value);

  const dispach = useDispatch();

  // const canSave =
  //   [title, body, userId].every(Boolean) && addRequestStatus === 'idle'

  const onSavePost = () => {
    

    const newPost = {
      title,
      userId,
      body,
      id: Date.now().toString(),
      date: Date.now()  
    };
    console.log(newPost);


    if (title.trim() && userId.trim() && body.trim()) {
      // setAddRequestStatus("pending")
      dispach(addNewPost(newPost))
    } else {
      dispach(toggleStatusTrue()) 
      setTimeout(() => {
        dispach(toggleStatusFalse())
      }, 2000)
    } 
    
    
    
     
    
    setTitle('')
    setUserId('')
    setBody('')
    
  };
  return (
    <div className="mb-4">
      {statusAlert && <Alert />}
      <h2 className="fs-2 fw-bolder text-black-50 mb-4">Add a new post</h2>
      <form>
        <div className="mb-3">
          <label className="form-label fw-semibold">Post title:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Caption your post"
            onChange={onTitleChange}
            value={title}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Author:</label> 
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            aria-label="Nickname"
            onChange={onAuthorChange}
            value={userId}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Content:</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={onBodyChange}
            value={body}
          ></textarea>
        </div>
      </form>
      <button
        type="button"
        className="btn btn-primary px-3 py-2"
        onClick={onSavePost}
      >
        Save post
      </button>
    </div>
  );
}

export default AddPostForm;
