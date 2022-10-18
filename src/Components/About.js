import React from "react";
import AboutUsImg from '../Assets/images/About-us.svg'
const About = () => {
  return (
    <div class="hero min-h-screen bg-base-200" data-aos="fade-up">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={AboutUsImg}
          class="max-w-sm rounded-lg shadow-2xl"
          alt="about us image"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          />
        <div 
        data-aos="fade-left" 
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
