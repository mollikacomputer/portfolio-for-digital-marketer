import React from 'react';
import HeroSection from './HeroSection';
import Skill from './Skill';

const Home = () => {
    return (
        <div>
            <h2 className='text-3xl' > Home page</h2>
            <HeroSection/>
            <Skill/>
        </div>
    );
};

export default Home;