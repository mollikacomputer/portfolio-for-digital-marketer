import React, { useEffect, useState } from "react";
import ManageServiceData from "./ManageServiceData";

const ManageService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
      fetch(`https://portfolio-walid-server-mollikacomputer.vercel.app/service`)
      .then( res => res.json())
      .then(data => setServices(data))
  } ,[]);
  
  const handleDeleteService = (id) =>{
    const proceed = window.confirm("Are you sure you want to delete?");
    if(proceed){
      // console.log("deleting service data with id", id);
      const url = `https://portfolio-walid-server-mollikacomputer.vercel.app/service/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res=> res.json())
      .then(data => {
        if(data.deletedCount>0){
          // console.log('deleted');
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
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th> Picture </th>
              <th> Title </th>
              <th> Budget </th>
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


