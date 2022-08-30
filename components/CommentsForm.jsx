import React, { useEffect, useRef, useState } from "react";

import {submitComment} from '../services'

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();


  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  },[])

  const handleCommentSubmission = () => {
    setError(false)


    const {value : comment } = commentEl.current
    const {value : name } = nameEl.current
    const {value : email } = emailEl.current
    const {checked : storeData} = storeDataEl.current


    if(!comment || !name || !email) {
      setError(true)
      return 
    }

    const commentObj = {name,email,comment,slug}




    if(storeData) {
      window.localStorage.setItem('name' , name)
      window.localStorage.setItem('email' , email)
    } else {
      window.localStorage.removeItem('name' , name)
      window.localStorage.removeItem('email' , email)
    }

    submitComment(commentObj)
    .then(res=> {
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      } , 3000)
    })
  }

  return (
    <div className="bg-white p-8 lg:p-8 pb-12 mb-8 border border-gray-300 rounded-xl">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave a Reply
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
        ref={commentEl}
          className="resize-none p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
        ref={nameEl}
          type="text"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input
        ref={emailEl}
          type="email"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>

      {error && <p className="text-xs text-red-500">All fields are required.</p>}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input type="checkbox" id="storeData" name="storeData" value="true" ref={storeDataEl} />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData">
            {" "}
            Save my name, email in this browser for the next time I comment.
          </label>
        </div>
      </div>

      <div className="mt-8">
        <button
        onClick={handleCommentSubmission}
          type="button"
          className="inline-block bg-pink-600 text-lg font-medium rounded-xl text-white px-3 py-2 cursor-pointer"
        >
          Post Comment
        </button>

      {showSuccessMessage && <span className="text-md float-right mt-3 text-green-500">Comment is submitted for review </span>}
      </div>
    </div>
  );
};

export default CommentsForm;
