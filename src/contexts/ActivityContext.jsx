import React, { createContext, useEffect, useState } from 'react';
import emileCaronImage from '../assets/img/emilecaron_picture.jpg';
import emileCaronPiano from '../assets/img/emilecaron_piano.jpg';
import { useTranslation } from 'react-i18next';

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
    const { t } = useTranslation("global");

    const webDevData = {
        id: 'webDev',
        img: emileCaronImage,
        title: "hero.webDev.title",
        description: "hero.webDev.description",
        buttons: [
            {
                text: "Download CV",
                link: "/contact",
                type: "primary"
            },
            {
                text: "Contact",
                link: "/contact",
                type: "secondary"
            }
        ]
    };
    
    const pianoData = {
        id: 'piano',
        img: emileCaronPiano,
        title: "hero.pianist.title",
        description:"hero.pianist.description",
        buttons: [
            {
                text: "Download CV",
                link: "/contact",
                type: "primary"
            },
            {
                text: "Contact",
                link: "/contact",
                type: "secondary"
            }
        ]
    };

    const [activity, setActivity] = useState(webDevData);
    
    const [img, setImg] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [buttons, setButtons] = useState(null);
    const [activityState, setActivityState] = useState("idle");

    useEffect(() => {
        if(activityState === "fadeOut"){
            setTimeout(() => {
                console.log(activity)
                setImg(activity.img);
                setTitle(t(activity.title));
                // replace $$AGE$$ with age
                const description = t(activity.description);
                const age = new Date().getFullYear() - 2002;
                const ageRegex = /\$\$AGE\$\$/g;
                setDescription(description.replace(ageRegex, age));
                setButtons(activity.buttons);
                setActivityState("fadeIn");
            } , 510);
        }
    }, [activityState]);

    useEffect(() => {
        setImg(activity.img);
        setTitle(t(activity.title));
        // replace $$AGE$$ with age
        const description = t(activity.description);
        const age = new Date().getFullYear() - 2002;
        const ageRegex = /\$\$AGE\$\$/g;
        setDescription(description.replace(ageRegex, age));
        setButtons(activity.buttons);
    }, [t]);

    const toggleActivity = () => {
        if (activity.id === webDevData.id) {
            setActivity(pianoData);
            setActivityState("fadeOut");
        } else {
            setActivity(webDevData);
            setActivityState("fadeOut");
        }
    }

    return (
        <ActivityContext.Provider value={{ toggleActivity, img, title, description, buttons, activityState }}>
            {children}
        </ActivityContext.Provider>
    );
};
