import React, { useContext, useEffect, useState } from "react";
import "./Projects.css";
import { useTranslation } from "react-i18next";
import { ActivityContext } from "../../contexts/ActivityContext";
import projectsData from '../../assets/data/projects-webDev.json';
import gitHubIcon from '../../assets/img/icons/githubIcon.svg';

const WebDevProjects = () => {
    const { t } = useTranslation("projects");
    const { id } = useContext(ActivityContext);
    const [projects, setProjects] = useState(projectsData);

    return (
        <>
            {projects.projects.map((project, index) => {
                return (
                    <div className="project__item" key={index}>
                        <img className="project-img" src={project.image} alt={t(project.name)} />
                        <h3 className="project__title">{t(project.name)}</h3>
                        <div className="project__technologies">
                            {project.technologies.map((technology, index) => {
                                return (
                                    <span className="chip" key={index}>{technology}</span>
                                );
                            })}
                        </div>
                        <p className="project__assignee">{project.assignee}</p>
                        <div className="project__links">
                            {project.links && project.links.map((link, index) => {
                                return (
                                    <a className="link" href={link.url} key={index}>
                                        {link.name} link
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                );
            }, [])}
        </>        
    );
}

export default WebDevProjects;