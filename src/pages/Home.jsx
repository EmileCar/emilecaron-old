import React, { useContext } from "react";
import "./Home.css";
import { ActivityContext, ActivityProvider } from "../contexts/ActivityContext";

const Home = () => {
    const { activity } = useContext(ActivityContext);

    return (
        <div className="page">
            <h1>Home Page - {activity}</h1>
        </div>
    );
};

export default Home;