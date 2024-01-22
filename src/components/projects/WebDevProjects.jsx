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

    const renderItemLink = (links) => {
        if (links) {
            const liveLink = links.find(link => link.name === 'Live');
            const gitHubLink = links.find(link => link.name === 'GitHub');
            if (liveLink && liveLink.url !== "private") {
                return liveLink.url;
            } else if (gitHubLink && gitHubLink.url !== "private") {
                return gitHubLink.url;
            }
        }
        return '';
    }

    return (
        <>
            {projects && projects.projects.map((project, index) => {
                return (
                    <a
                        {...(project.links && project.links.length > 0 && !project.links.some((link) => link.url === "private") ? { href: renderItemLink(project.links), target: "_blank" } : {})}
                        className="project__item" key={index}
                    >
                        <img className="project-img" src={project.image} alt={t(project.name)} />
                        <h3 className="project__title">{t(project.name)}</h3>
                        <div className="project__technologies">
                            {project.technologies.map((technology, index) => {
                                return (
                                    <span className="chip" key={index}>{technology}</span>
                                );
                            })}
                        </div>
                        <p className="project__description">{t(project.description)}</p>
                        <div className="project__links">
                            {project.links && project.links.map((link, index) => {
                                return (
                                    <a 
                                        className={`link ${link.url === "private" ? "private" : ""}`} 
                                        href={link.url} 
                                        key={index}
                                    >
                                        {link.name} link
                                    </a>
                                );
                            })}
                        </div>
                    </a>
                );
            })}
        </>
    );
}

export default WebDevProjects;
