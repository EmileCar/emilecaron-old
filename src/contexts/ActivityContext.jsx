import React, { createContext, useEffect, useState } from 'react';
import emileCaronImage from '../assets/img/emilecaron_picture.jpg';
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
        img: emileCaronImage,
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

    useEffect(() => {
        setImg(activity.img);
        setTitle(t(activity.title));
        setDescription(t(activity.description));
        setButtons(activity.buttons);
    }, [activity]);

    useEffect(() => {
        setImg(activity.img);
        setTitle(t(activity.title));
        setDescription(t(activity.description));
        setButtons(activity.buttons);
    }, [t]);

    const toggleActivity = () => {
        if (activity.id === webDevData.id) {
            setActivity(pianoData);
        } else {
            setActivity(webDevData);
        }
    }

    return (
        <ActivityContext.Provider value={{ toggleActivity, img, title, description, buttons }}>
            {children}
        </ActivityContext.Provider>
    );
};
