import React from "react";

const Service = ({service}) => {
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={service.image} alt="Shoes" alt="image" />
      </figure>
      <div class="card-body">
        <h2 class="card-title"> {service.name} </h2>
        <p>{service.description}</p>
        <h3 className="text-3xl" >My Budget ${service.budget} </h3>
      </div>
    </div>
  );
};

export default Service;
