import React, { createContext, useEffect, useState } from 'react';
import emileCaronImage from '../assets/img/emilecaron_picture.jpg';
import emileCaronPiano from '../assets/img/emilecaron_piano.jpg';
import { useTranslation } from 'react-i18next';
import PianoIcon from '../components/custom_icons/pianoIcon';
import WebDevIcon from '../components/custom_icons/webDevIcon';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
    const { t } = useTranslation("global");

    const webDevData = {
        id: 'webDev',
        img: emileCaronImage,
        icon: WebDevIcon,
        title: "hero.webDev.title",
        description: "hero.webDev.description",
        buttons: [
            {
                text: "Download CV",
                type: "primary",
                action: {
                    type: "download",
                    link: "/assets/files/CV_Emile_Caron.pdf"
                }
            },
            {
                text: "Contact",
                link: "/contact",
                type: "secondary"
            }
        ],
        components: [
            {
                name: Skills
            },
            {
                name: Projects
            }
        ]
    };
    
    const pianoData = {
        id: 'piano',
        img: emileCaronPiano,
        icon: PianoIcon,
        title: "hero.pianist.title",
        description:"hero.pianist.description",
        buttons: [
            {
                text: "Download CV",
                link: "/contact",
                type: "primary",

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
    const [icon, setIcon] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [buttons, setButtons] = useState(null);
    const [activityState, setActivityState] = useState("fadeIn");

    useEffect(() => {
        if(activityState === "fadeOut"){
            setTimeout(() => {
                console.log(activity)
                setImg(activity.img);
                setIcon(activity.icon);
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
        setIcon(activity.icon);
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
        <ActivityContext.Provider value={{ toggleActivity, id: activity.id,img, icon, title, description, buttons, activityState }}>
            {children}
        </ActivityContext.Provider>
    );
};
