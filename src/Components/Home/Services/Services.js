import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    // get data from server side show UI
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/service`)
        .then( res => res.json())
        .then(data => setServices(data))
    } ,[])
    
    return (
        <div className='p-6'>
            <h2 className='text-5xl my-6' > Total Service : {services.length} </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16' >
            {
                services.map( service => <Service key={service._id} service={service} >
                    
                </Service> )
            }

            </div>
          
        </div>
    );
};

export default Services;