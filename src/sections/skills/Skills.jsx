import React from "react";
import "./Skills.css";
import jsIcon from "../../assets/img/icons/progLangs/javascript.svg";
import reactIcon from "../../assets/img/icons/progLangs/react.svg";
import angularIcon from "../../assets/img/icons/progLangs/angular.svg";
import kotlinIcon from "../../assets/img/icons/progLangs/kotlin.svg";
import swiftIcon from "../../assets/img/icons/progLangs/swift.svg";
import javaIcon from "../../assets/img/icons/progLangs/java.svg";
import nodeIcon from "../../assets/img/icons/progLangs/node.svg";
import phpIcon from "../../assets/img/icons/progLangs/php.svg";
import csharpIcon from "../../assets/img/icons/progLangs/csharp.svg";
import dockerIcon from "../../assets/img/icons/progLangs/docker.svg";
import gitIcon from "../../assets/img/icons/progLangs/git.svg";
import Section from "../../components/section/Section";
import Card from "../../components/card/Card";

const Skills = () => {
    const iconHeight = 35;

    return (
        <Section title="Skills">
            <div className="skills__container">
                <Card title="Front-end" icons={[
                    { src: jsIcon, alt: "JavaScript", height: iconHeight },
                    { src: reactIcon, alt: "React", height: iconHeight },
                    { src: angularIcon, alt: "Angular", height: iconHeight }
                ]}>
                    <ul className="skills__container__item__list">
                        <li className="skills__container__item__list__item">HTML & CSS</li>
                        <li className="skills__container__item__list__item">JavaScript</li>
                        <li className="skills__container__item__list__item">React</li>
                        <li className="skills__container__item__list__item">Angular</li>
                    </ul>
                </Card>
                <Card title="Back-end" icons={[
                    { src: javaIcon, alt: "Java", height: iconHeight },
                    { src: phpIcon, alt: "PHP", height: iconHeight },
                    { src: nodeIcon, alt: "Node.js", height: iconHeight },
                    { src: csharpIcon, alt: "C#", height: iconHeight }
                ]}>                        
                    <ul className="skills__container__item__list">
                        <li className="skills__container__item__list__item">Java Spring Boot</li>
                        <li className="skills__container__item__list__item">Node.js</li>
                        <li className="skills__container__item__list__item">PHP Laravel (+ Full-Stack)</li>
                        <li className="skills__container__item__list__item">ASP.Net (+ Full-Stack)</li>
                    </ul>
                </Card>
                <Card title="Mobile" icons={[
                    { src: kotlinIcon, alt: "Kotlin", height: iconHeight },
                    { src: swiftIcon, alt: "Swift", height: iconHeight },
                    { src: reactIcon, alt: "React", height: iconHeight }
                ]}>
                    <ul className="skills__container__item__list">
                        <li className="skills__container__item__list__item">Android: Kotlin</li>
                        <li className="skills__container__item__list__item">iOS: Swift</li>
                        <li className="skills__container__item__list__item">React Native</li>
                    </ul>
                </Card>
                <Card title="IT Infrastructure" icons={[
                    { src: gitIcon, alt: "Git", height: iconHeight },
                    { src: dockerIcon, alt: "Docker", height: iconHeight }
                ]}>
                    <ul className="skills__container__item__list">
                        <li className="skills__container__item__list__item">Azure Portal / Devops</li>
                        <li className="skills__container__item__list__item">Git</li>
                        <li className="skills__container__item__list__item">Docker</li>
                        <li className="skills__container__item__list__item">Agile / SCRUM methode</li>
                    </ul>
                </Card>
            </div>
        </Section>
    );
}

export default Skills;