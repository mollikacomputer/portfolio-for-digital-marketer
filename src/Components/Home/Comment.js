import React from 'react';
import Rating from './RatingStar';
import { FaBeer } from 'react-icons/fa';

const Comment = ({comment}) => {

    return (
        <div >
        <div className="card bg-base-100 shadow-xl p-4"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos="fade-right"
        >
          <div>
            <p className="text-left">
             {comment.descripton}
            </p>
          </div>
          <div className="flex">
            <div className="avatar my-8">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={comment.image} alt="people3" />
              </div>
            </div>
            <div className="card-body text-left align-middle">
              <h2 className="card-title"> {comment.name}</h2>
              <p>{comment.location} </p>


            {comment.rating} Star

            </div>
          </div>
        </div>
      </div>
    );
};

export default Comment;