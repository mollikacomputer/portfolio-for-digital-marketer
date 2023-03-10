import React, { useEffect, useState } from "react";

import ManageServiceData from "./ManageServiceData";
import { useParams } from "react-router-dom";

const ManageService = () => {

  const [services, setServices] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:5000/service`)
      .then( res => res.json())
      .then(data => setServices(data))
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
          const remaining = services.filter(service => service?._id !== id );
          setServices(remaining);
        }
        console.log(data);
      })
    }
  };

  // handle update

  return (
    <div>
      
      <h2 className="text-2xl "> Manage Service {services.length} </h2>
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
              services.map( service => 
              <ManageServiceData 
                key={service?._id} 
                service={service} 
                handleDeleteService={handleDeleteService}
                services={services}
                setServices={services}
                />
                  )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageService;


