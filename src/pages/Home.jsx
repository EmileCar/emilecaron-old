import React, { useContext } from "react";
import { ActivityContext } from "../contexts/ActivityContext";
import Hero from "../sections/hero/Hero";
import Skills from "../sections/skills/Skills";
import QuickInfo from "../sections/quickinfo/QuickInfo";
import DefaultLayout from "../layout/DefaultLayout";

const Home = () => {
    const { id } = useContext(ActivityContext);

    return (
        <DefaultLayout>
            <Hero />
            {
                id === 'webDev' && 
                <>
                    <QuickInfo />
                    <Skills />
                </>
            }
        </DefaultLayout>
    );
};

export default Home;
