import React, { useEffect, useState } from "react";
import ManageCommentData from "./ManageCommentData";

const ManageComment = () => {

  const [comments, setComments] = useState([]);
  useEffect(() => {
      fetch(`https://walid-server.vercel.app/comment`)
      .then( res => res.json())
      .then(data => setComments(data))
  } ,[]);
  
  const handleDeleteComment = (id) =>{
    const proceed = window.confirm("Are you sure you want to delete?");
    if(proceed){
      // console.log("deleting service data with id", id);
      const url = `https://walid-server.vercel.app/comment/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res=> res.json())
      .then(data => {
        if(data.deletedCount>0){
          console.log('deleted');
          const remaining = comments.filter(comment => comment?._id !== id );
          setComments(remaining);
        }
        console.log(data);
      })
    }
  };
  // handle update
  return (
    <div>
      
      <h2 className="text-2xl "> Manage  {comments.length} Comment </h2>
      <div className="overflow-x-auto ">
        <table className="table table-compact ">
          {/* head */}
          <thead>
            <tr>

              <th> Picture </th>
              <th > Comment Name </th>
              {/* <th > Location </th> */}
              <th> Delete </th>
              <th> Update </th>
            </tr>
          </thead>
          <tbody>
            {
              comments.map( comment => 
              <ManageCommentData 
                key={comment?._id} 
                comment={comment} 
                handleDeleteComment={handleDeleteComment}
                comments={comments}
                setComments={setComments}
                />
                  )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageComment;


