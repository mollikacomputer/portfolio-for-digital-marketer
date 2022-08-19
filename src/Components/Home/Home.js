import React from 'react';
import Comments from './Comments';
import HeroSection from './HeroSection';
import Skill from './Skill';
import Status from './Status';

const Home = () => {
    return (
        <div>
            <h2 className='text-3xl' > Home page</h2>
            <HeroSection/>
            <Skill/>
            <Status />
            <Comments/>
        </div>
    );
};

export default Home;