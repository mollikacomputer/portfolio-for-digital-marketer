import React from "react";
import SingleStatus from "./SingleStatus";

const Status = () => {
  const statusInfo = [
    {
      id: 0,
      icon: `https://i.ibb.co/fpyrSgd/flag.jpg`,
      quantity: 5,
      name: "Countries",
    },
    {
      id: 1,
      icon: `https://i.ibb.co/qrCv4T5/projects.jpg`,
      quantity: "100+",
      name: "Complete projects",
    },
    {
      id: 2,
      icon: `https://i.ibb.co/HGRrVMg/people.jpg`,
      quantity: "50+",
      name: "happy clients",
    },
    {
      id: 3,
      icon: `https://i.ibb.co/n7K6JWn/feedback.jpg`,
      quantity: "10k+",
      name: "Publick actions",
    },
  ];

  return (
    <div className="my-16 items-center justify-center">
        <h2 className="text-2xl md:text-5xl text-primary flex justify-center items-center">
          MILLIONS OF BUSINESS WE PROVIDE
        </h2>
        <p className="flex justify-center items-center">Try to understand User Expectation</p>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-16">
        {
        statusInfo.map((info) => (
          <SingleStatus key={info._id} info={info}></SingleStatus>
        ))}
      </div>
      <div className="flex-none md:flex border gap-16 my-16 p-16 ">
        <span>
          <h2 className="text-primary text-3xl text-16 ">
            HAVE AN QUESTION ABOUT PRODUCT REQUEST
          </h2>
          <p>dont hisited contact us </p>
        </span>
        <button className="btn btn-primary px-16 mb-2"> Request for quate</button>
        <button className="btn btn-primary px-16"> Get a quate</button>
      </div>
    </div>
  );
};

export default Status;