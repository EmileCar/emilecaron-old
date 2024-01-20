import React from "react";
import "./Projects.css";
import ProjectsDataWebDev from "../../assets/data/projects-webDev";

const Projects = () => {
    const projects = ProjectsDataWebDev();

    return (
        <div className="section-general">
            <h2 className="section-title">My projects</h2>
            <div className="section-title__border"></div>
            <div className="section__content">
                <div className="projects__container">
                    {projects.map((project) => {
                        return (
                            <a id={project.title} href={project.liveDemoLink} className="project__item elevation-strong" key={project.id}>
                                <div className="project-img"></div>
                                <h3 className="project__title">{project.title}</h3>
                                <p className="project__description">{project.description}</p>
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
    );
}

export default Projects;