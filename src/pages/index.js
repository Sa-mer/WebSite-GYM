import React from 'react'
import HeroSction from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Services from '../components/Services';


const  Home = () =>  {
   
    return (
        <>
            <HeroSction />
            <InfoSection {...homeObjOne}/>
            <Services />
        </>
    )
}

export default Home
