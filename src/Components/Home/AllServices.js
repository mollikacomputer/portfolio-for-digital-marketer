import React, { useEffect, useState } from "react";
import Service from "./Services/Service";


const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
      fetch(`https://portfolio-walid-server-mollikacomputer.vercel.app/service`)
      .then( res => res.json())
      .then(data => setServices(data))
  } ,[])

  return (

    <div id="comments" >
      <span className="flex justify-center items-center" >
      <h2 className="text-5xl text-primary" 
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      > Total Service {services.length} </h2>
      </span>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">

      {
        services.map( service => <Service key={service._id} service={service} >           
       </Service>)
       }
      
    </div>
    </div>
  );
};

export default AllServices;