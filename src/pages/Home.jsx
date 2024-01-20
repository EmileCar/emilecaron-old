import React, { useContext } from "react";
import "./Home.css";
import { ActivityContext } from "../contexts/ActivityContext";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

const Home = () => {
    const { id, toggleActivity } = useContext(ActivityContext);


    return (
        <div className="page">
            <Hero />
            {
                id === 'webDev' ? 
                <Skills /> :
                null
            }
        </div>
    );
};

export default Home;
