import React from "react";

const Skill = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body card-title ">
        <h2 className="text-5xl"> My Skill lavel</h2>
        <div className="divider">X</div>
        <pre>
        <h2 className="text-4xl">
            HTML        <progress
              className="progress progress-secondary w-56"
              value="100"
              max="100"
            ></progress>
            <br />
            CSS         <progress
              className="progress progress-secondary w-56"
              value="90"
              max="100"
            ></progress>
            <br />
            JavaScripg  <progress
              className="progress progress-secondary w-56"
              value="80"
              max="100"
            ></progress>
            <br />
            ReactJs     <progress
              className="progress progress-secondary w-56"
              value="70"
              max="100"
            ></progress>
            <br />
            NodeJs      <progress
              className="progress progress-secondary w-56"
              value="60"
              max="100"
            ></progress>
            <br />
            ExpressJs   <progress
              className="progress progress-secondary w-56"
              value="50"
              max="100"
            ></progress>
            <br />
            MongoDB     <progress
              className="progress progress-secondary w-56"
              value="40"
              max="100"
            ></progress>
            
        </h2>
        </pre>
      </div>
    </div>
  );
};

export default Skill;
