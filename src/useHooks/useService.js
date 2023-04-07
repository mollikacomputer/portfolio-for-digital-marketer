import React, { useEffect, useState } from 'react';

const useService = () => {
    const [services, setServices] = useState({});
  useEffect(() => {
      fetch(`https://walid-server.vercel.app/service`)
      .then( res => res.json())
      .then(data => setServices(data))
  } ,[]);
  
  const handleDeleteService = (id) =>{
    const proceed = window.confirm("Are you sure you want to delete?");
    if(proceed){
      // console.log("deleting service data with id", id);
      const url = `https://walid-server.vercel.app/service/${id}`;
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
    return {
        useService,
        handleDeleteService
    };
};

export default useService;