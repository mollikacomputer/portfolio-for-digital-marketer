import React from 'react';
import Comments from './Comments';
import HeroSection from './HeroSection';
import Services from './Services/Services';
import Skill from './Skill';
import Status from './Status';

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <HeroSection/>
            <Skill/>
            <Status />
            <Services />
            <Comments/>
        </div>
    );
};

export default Home;