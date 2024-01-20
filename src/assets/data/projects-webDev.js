import React from "react";
import { useTranslation } from "react-i18next";

const ProjectsDataWebDev = () => {
    const { t } = useTranslation('projects');

    // PROJECTS DATA
    // Each project should have the following properties:
    // id: unique number
    // title: string
    // description: string
    // technologies: array of strings
    // githubLink: string
    // liveLink: string

    return [
        {
            id: 1,
            title: "KSA Oosterzele Website",
            description: t('project1.description'),
            technologies: ["HTML", "CSS", "JavaScript"],
            githubLink: "https://github.com/your-username/project1",
            liveLink: "https://your-username.github.io/project1"
        },
        {
            id: 2,
            title: "Project 2",
            description: "This is the second project",
            technologies: ["React", "Node.js", "MongoDB"],
            githubLink: "https://github.com/your-username/project2",
            liveLink: "https://your-username.github.io/project2"
        },
    ];
}

export default ProjectsDataWebDev;


