import React from "react";
import "./QuickInfo.css";
import locationIcon from "../../assets/img/icons/locationIcon.svg";
import educationIcon from "../../assets/img/icons/educationIcon.svg";
import linkedinIcon from "../../assets/img/icons/linkedinIcon.svg";
import githubIcon from "../../assets/img/icons/githubIcon.svg";


const QuickInfo = () => {
    return (
        <div className="section-general">
            <h2 className="section-title">Quick info</h2>
            <div className="section-title__border"></div>
            <div className="quickInfo__container">
                <div className="quickInfo__container__item">
                    <img className="quickInfo__container__item__icon" src={locationIcon} height={40} width={40}/>
                    <h3 className="quickInfo__container__item__title">Locatie</h3>
                    <p className="quickInfo__container__item__text">Gent, Oost-Vlaanderen</p>
                </div>
                <div className="quickInfo__container__item subtext">
                    <img className="quickInfo__container__item__icon" src={educationIcon} height={40} width={40}/>
                    <h3 className="quickInfo__container__item__title">Opleiding</h3>
                    <p className="quickInfo__container__item__text">Bachelor Toegepaste Informatica</p>
                    <p className="quickInfo__container__item__subtext">Hogeschool VIVES</p>
                </div>
                <div className="quickInfo__container__item">
                    <img className="quickInfo__container__item__icon" src={linkedinIcon} height={40} width={40}/>
                    <h3 className="quickInfo__container__item__title">Linkedin</h3>
                    <p className="quickInfo__container__item__text">Link <span className="link">hier</span> naar mijn profiel</p>
                </div>
                <div className="quickInfo__container__item">
                    <img className="quickInfo__container__item__icon" src={githubIcon} height={40} width={40}/>
                    <h3 className="quickInfo__container__item__title">Github</h3>
                    <p className="quickInfo__container__item__text">Link <span className="link">hier</span> naar mijn profiel</p>
                </div>
            </div>
        </div>
    );
}

export default QuickInfo;