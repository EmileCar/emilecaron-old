import React, { useContext, useEffect, useState } from "react";
import { ActivityContext } from "../contexts/ActivityContext";
import { useTranslation } from "react-i18next";
import WebDevProjects from "../components/projects/WebDevProjects";

const Projects = () => {
    const { id } = useContext(ActivityContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { t } = useTranslation("global");

    useEffect(() => {
        if(id === 'webDev'){
            setTitle(t('projects.webDev.title'));
            setDescription(t('projects.webDev.description'));
        } else if(id === 'piano'){
            setTitle(t('projects.pianist.title'));
            setDescription(t('projects.pianist.description'));
        } else {
            setTitle('');
            setDescription('');
        }
    }, [id, t]);

    return (
        <div className="page">
            <div className="section-general">
                <h2 className="section-title">{title}</h2>
                <div className="section-title__border"></div>
                <div className="section__content">
                    <p>{description}</p>
                    <div className="projects__container">
                        { id === 'webDev' &&
                            <WebDevProjects />
                        }
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Projects;