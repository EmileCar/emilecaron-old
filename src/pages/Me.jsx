import React, { useContext } from "react";
import { ActivityContext } from "../contexts/ActivityContext";
import Hero from "../sections/hero/Hero";
import Skills from "../sections/skills/Skills";
import QuickInfo from "../sections/quickinfo/QuickInfo";
import DefaultLayout from "../layout/DefaultLayout";
import AboutMe from "../sections/aboutMe/AboutMe";

const Me = () => {
    const { id } = useContext(ActivityContext);

    return (
        <DefaultLayout>
            <Hero />
            {
                id === 'webDev' && 
                <>
                    <QuickInfo />
                    <Skills />
                    <AboutMe />
                </>
            }
        </DefaultLayout>
    );
};

export default Me;
