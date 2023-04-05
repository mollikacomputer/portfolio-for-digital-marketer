import React, { useEffect, useState } from "react";

import Comment from "./Comment";
import { Link } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
      fetch(`https://portfolio-walid-server-mollikacomputer.vercel.app/comment`)
      .then( res => res.json())
      .then(data => setComments(data))
  } ,[])

  return (

    <div id="comments" >
      <span className="flex justify-center items-center" >
      <h2 className="text-5xl text-primary" 
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      > Public reaction {comments.length} </h2>
      </span>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">

      {
        comments.slice(0,3).map( comment => <Comment key={comment._id} comment={comment} >           
       </Comment>)
       }
    </div>
    <div className='flex justify-center my-16'>
            <Link to={'/allcomments'} > <button class="btn btn-outline btn-primary">Show All Services </button>  </Link>
            </div>
    </div>
  );
};

export default Comments;