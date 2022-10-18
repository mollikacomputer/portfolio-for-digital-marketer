import React from "react";
import profilePic from '../../Assets/images/profilepic.jpg';
import { TypeAnimation } from 'react-type-animation';
import Resume from '../../Assets/Resume.pdf';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';

const HeroSection = () => {

    const resumeTostify = () =>{
        toast('Resume Download Successfully');
    }

  return (
    <div className="hero min-h-screen bg-base-200" data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={profilePic}
          className="max-w-sm rounded-lg shadow-2xl" alt="profile pic"
        />
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
          <h1 className="text-5xl font-bold">Walid Mama</h1>
          <TypeAnimation
            sequence={
                [
                    'Digital Marketer', 1000,
                    'Facebook Marketing', 1000,
                    'Youtube Boosting', 1000,
                    'SMM Marketing', 1000,
                    'Email Marketing', 1000,
                    'Google Adward', 1000,
                    'SEO', 1000,
                    'Content Marketing', 1000,
                    'Onpage SEO', 1000,
                    'Off Page SEO', 1000,
                ]
            }
                        //  Replacing previous Text
            style={{ fontSize: '2em' }}
            wrapper="h2"
            repeat={Infinity}
        />
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary mr-6">Hire Me</button>
          <button onClick={resumeTostify} className="btn btn-primary"> <Link to={Resume} target="_blank" download>Download Resume</Link> </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
