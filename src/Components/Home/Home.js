import React from 'react';
import Comments from './Comments';
import HeroSection from './HeroSection';
import Skill from './Skill';
import Status from './Status';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Skill/>
            <Status />
            <Comments/>
        </div>
    );
};

export default Home;