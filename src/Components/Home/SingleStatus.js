import React from "react";

const SingleStatus = ({info}) => {

  return (
    <div className="card bg-base-100">
      <div class="text-center">
      {/* <img src={info.pic} alt="pic" class="rounded-xl" /> */}
      <span className="avatar" >
      <img src={info.icon} alt="pic" />
      </span>

        <h2 className="text-5xl font-bold" > {info.quantity}  </h2>
          <span className="text-primary" >{info.name}</span>
      </div>
    </div>
  );
};

export default SingleStatus;