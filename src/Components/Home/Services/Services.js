import React, { useEffect, useState } from 'react';
import Service from './Service';
import { Link } from 'react-router-dom';

const Services = () => {
    // get data from server side show UI
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://walid-server.vercel.app/service`)
        .then( res => res.json())
        .then(data => setServices(data))
    } ,[]);

    return (
        <div className=''>
            <h2 className='text-5xl my-6' > Total Service : {services.length} </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16' >
            {
                services.slice(0,3).map( service => <Service key={service?._id} service={service} >  
                </Service> )
            }
            </div>
            <div className='flex justify-center my-16'>
            <Link to={'/allservices'} > <button class="btn btn-outline btn-primary">Show All Services </button>  </Link>
            </div>
        </div>
    );
};

export default Services;