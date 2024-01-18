import React, { useContext } from "react";
import "./Home.css";
import { ActivityContext } from "../contexts/ActivityContext";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";

const Home = () => {
    const { toggleActivity } = useContext(ActivityContext);


    return (
        <div className="page">
            <Hero />
            <Projects />
            <button onClick={() => toggleActivity()}>click</button>

        </div>
    );
};

export default Home;
