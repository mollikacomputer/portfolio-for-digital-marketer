import React, { useEffect, useState } from "react";
// import People1 from "../../Assets/images/people1.png";
// import People2 from "../../Assets/images/people2.png";
// import People3 from "../../Assets/images/people3.png";
import Rating from "./RatingStar";
import Comment from "./Comment";

const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:5000/comment`)
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
        comments.map( comment => <Comment key={comment._id} comment={comment} >
                    
       </Comment> )
        }
      {/* <Comment/> */}
    </div>
    </div>
  );
};

export default Comments;