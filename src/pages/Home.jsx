import React, { useContext } from "react";
import "./Home.css";
import { ActivityContext } from "../contexts/ActivityContext";
import Hero from "../components/hero/Hero";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { i18n } = useTranslation("global");
    const { toggleActivity } = useContext(ActivityContext);

    const handleChangeLanguage = (language) => {
        console.log(language);
        i18n.changeLanguage(language);
    };

    return (
        <div className="page">
            <Hero />
            <h1>Home Page</h1>
            <button onClick={() => toggleActivity()}>click</button>
            <button onClick={() => handleChangeLanguage("ned")}>Ned</button>
            <button onClick={() => handleChangeLanguage("eng")}>Eng</button>
        </div>
    );
};

export default Home;
