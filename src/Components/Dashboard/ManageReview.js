import React, { useEffect, useState } from "react";
import ManageServiceData from "./ManageServiceData";

const ManageReview = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:5000/comment`)
      .then( res => res.json())
      .then(data => setComments(data))
  } ,[]);
  
  const handleDeleteService = (id) =>{
    const proceed = window.confirm("Are you sure you want to delete?");
    if(proceed){
      // console.log("deleting service data with id", id);
      const url = `http://localhost:5000/service/${id}`;
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
      
      <h2 className="text-2xl "> Manage Service {comments.length} </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th> Service Name </th>
              <th> Picture </th>
              <th> Delete </th>
              <th> Update </th>
            </tr>
          </thead>
          <tbody>
            {
              comments.map( service => 
              <ManageServiceData 
                key={service?._id} 
                service={service} 
                handleDeleteService={handleDeleteService}
                services={comments}
                setServices={comments}
                />
                  )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageReview;


