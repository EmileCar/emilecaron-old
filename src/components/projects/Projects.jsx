import React, { useContext, useEffect, useState } from "react";
import "./Projects.css";
import { useTranslation } from "react-i18next";
import { ActivityContext } from "../../contexts/ActivityContext";
import projectsData from '../../assets/data/projects-webDev.json';


const Projects = () => {
    const { t } = useTranslation("projects");
    const { id } = useContext(ActivityContext);
    const [projects, setProjects] = useState(projectsData);

    //load json
    useEffect(() => {
        const getProjects = async () => {
            // load json from file in assets
            console.log(projects);
        };

        getProjects();
    }, []);

    return (
        <div className="page">
            <div className="section-general">
                <h2 className="section-title">My projects</h2>
                <div className="section-title__border"></div>
                <div className="section__content">
                    <div className="projects__container">
                        {projects.projects.map((project) => {
                            console.log(project.name);
                            console.log(t(project.name));
                            return (
                                <a id={project.title} href={project.liveDemoLink} className="project__item elevation-strong" key={project.id}>
                                    <div className="project-img"></div>
                                    <h3 className="project__title">{t(project.name)}</h3>
                                    <p className="project__description">{t(project.description)}</p>
                                </a>
                            );
                        })}
                        <a href="https://www.ksaoosterzele.be" className="project__item elevation-strong">
                            <div className="project-img"></div>
                            <h3 className="project__title">KSA Oosterzele website</h3>
                            <p className="project__description">Vrijwillig gemaakt voor mijn jeugdbeweging. Heeft ook een verborgen adminpagina om inschrijvingen en activiteiten op te volgen en al die dingen</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Projects;