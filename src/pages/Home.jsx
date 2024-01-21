import React, { useContext } from "react";
import { ActivityContext } from "../contexts/ActivityContext";
import Hero from "../components/hero/Hero";
import Skills from "../components/skills/Skills";
import QuickInfo from "../components/quickinfo/QuickInfo";

const Home = () => {
    const { id, toggleActivity } = useContext(ActivityContext);


    return (
        <div className="page">
            <Hero />
            {
                id === 'webDev' && 
                <>
                    <QuickInfo />
                    <Skills />
                    
                </>
                
            }
        </div>
    );
};

export default Home;
