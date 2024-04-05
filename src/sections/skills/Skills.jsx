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


const Skills = () => {
    const iconHeight = 35;

    return (
        <Section title="Skills">
            <div className="skills__container">
                <div className="skills__container__item">
                    <h3 className="skills__container__item__title">Front-end</h3>
                    <ul className="skills__container__item__list">
                        <li className="skills__container__item__list__item">HTML & CSS</li>
                        <li className="skills__container__item__list__item">JavaScript</li>
                        <li className="skills__container__item__list__item">React</li>
                        <li className="skills__container__item__list__item">Angular</li>
                    </ul>
                    <ul className="skills__icons">
                        <img src={jsIcon} height={iconHeight}/>
                        <img src={reactIcon} height={iconHeight}/>
                        <img src={angularIcon} height={iconHeight}/>
                    </ul>
                </div>
                <div className="skills__container__item ">
                    <h3 className="skills__container__item__title">Back-end</h3>
                    <ul className="skills__container__item__list">
                        <li className="skills__container__item__list__item">Java Spring Boot</li>
                        <li className="skills__container__item__list__item">Node.js</li>
                        <li className="skills__container__item__list__item">PHP Laravel (+ Full-Stack)</li>
                        <li className="skills__container__item__list__item">ASP.Net (+ Full-Stack)</li>
                    </ul>
                    <ul className="skills__icons">
                        <img src={javaIcon} height={iconHeight}/>
                        <img src={phpIcon} height={iconHeight}/>
                        <img src={nodeIcon} height={iconHeight}/>
                        <img src={csharpIcon} height={iconHeight}/>
                    </ul>
                </div>
                <div className="skills__container__item ">
                    <h3 className="skills__container__item__title">Mobile</h3>
                    <ul className="skills__container__item__list">
                        <li className="skills__container__item__list__item">Android: Kotlin</li>
                        <li className="skills__container__item__list__item">iOS: Swift</li>
                        <li className="skills__container__item__list__item">React Native</li>
                    </ul>
                    <ul className="skills__icons">
                        <img src={kotlinIcon} height={iconHeight}/>
                        <img src={swiftIcon} height={iconHeight}/>
                        <img src={reactIcon} height={iconHeight}/>
                    </ul>
                </div>
                <div className="skills__container__item ">
                    <h3 className="skills__container__item__title">IT Infrastructure</h3>
                    <ul className="skills__container__item__list">
                        <li className="skills__container__item__list__item">Azure Portal / Devops</li>
                        <li className="skills__container__item__list__item">Git</li>
                        <li className="skills__container__item__list__item">Docker</li>
                        <li className="skills__container__item__list__item">Agile / SCRUM methode</li>
                    </ul>
                    <ul className="skills__icons">
                        <img src={gitIcon} height={iconHeight}/>
                        <img src={dockerIcon} height={iconHeight}/>
                    </ul>
                </div>
            </div>
        </Section>
    );
}

export default Skills;