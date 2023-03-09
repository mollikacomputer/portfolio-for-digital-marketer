import React, { useEffect, useState } from "react";

import ManageServiceData from "./ManageServiceData";
const ManageService = () => {

  const [services, setServices] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:5000/service`)
      .then( res => res.json())
      .then(data => setServices(data))
  } ,[]);
  
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
              services.map( service => <ManageServiceData key={service?._id} service={service} /> )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageService;
