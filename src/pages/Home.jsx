import React, { useContext } from "react";
import "./Home.css";
import { ActivityContext } from "../contexts/ActivityContext";
import Hero from "../components/hero/Hero";

const Home = () => {
    const { toggleActivity } = useContext(ActivityContext);


    return (
        <div className="page">
            <Hero />
            <h1>Home Page</h1>
            <button onClick={() => toggleActivity()}>click</button>

        </div>
    );
};

export default Home;
