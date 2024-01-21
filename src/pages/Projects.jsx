import React, { useContext, useEffect, useState } from "react";
import { ActivityContext } from "../contexts/ActivityContext";

const Projects = () => {
    const { id } = useContext(ActivityContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if(id === 'webDev'){
            setTitle('My projects');
            setDescription('I have been programming for 3 years now. I started with C# and Unity, but I quickly switched to web development. I have been programming websites for 2 years now, and I am currently working on my first React Native app.');
        } else if(id === 'piano'){
            setTitle('My personal playlist');
            setDescription('I have been playing the piano for 13 years now')
        } else {
            setTitle('');
            setDescription('');
        }
    }, [id]);

    return (
        <div className="page">
            <div className="section-general">
                <h2 className="section-title">{title}</h2>
                <div className="section-title__border"></div>
                <div className="section__content">
                    <p>{description}</p>
                    <div className="projects__container">
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