import React, { useContext, useEffect, useState } from "react";
import "./Projects.css";
import { useTranslation } from "react-i18next";
import Section from "../../components/section/Section";
import { ActivityContext } from "../../contexts/ActivityContext";
import WebDevProjects from "../../components/projectsList/WebDevProjects";

const ProjectsSection = () => {
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
        <Section title={title}>
            <p>{description}</p>
            <div className="projects__container">
                { id === 'webDev' &&
                    <WebDevProjects />
                }
            </div>
        </Section>
    );
}

export default ProjectsSection;