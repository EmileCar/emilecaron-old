import React, { useEffect, useState } from "react";
import "./QuickInfo.css";
import locationIcon from "../../assets/img/icons/locationIcon.svg";
import educationIcon from "../../assets/img/icons/educationIcon.svg";
import linkedinIcon from "../../assets/img/icons/linkedinIcon.svg";
import githubIcon from "../../assets/img/icons/githubIcon.svg";
import { useTranslation } from "react-i18next";


const QuickInfo = () => {
    const { t } = useTranslation("global");
    const [linkTextParts, setLinkTextParts] = useState([]);

    useEffect(() => {
        const linkText = t("quickInfo.link");
        const parts = linkText.split("$$");
        setLinkTextParts(parts);
    }, [t]);

    return (
        <div className="section-general">
            <h2 className="section-title">{t("quickInfo.title")}</h2>
            <div className="section-title__border"></div>
            <div className="quickInfo__container">
                <div className="quickInfo__container__item">
                    <img className="quickInfo__container__item__icon" src={locationIcon} height={40} width={40}/>
                    <h3 className="quickInfo__container__item__title">{t("quickInfo.location")}</h3>
                    <p className="quickInfo__container__item__text">Gent, Oost-Vlaanderen</p>
                </div>
                <div className="quickInfo__container__item subtext">
                    <img className="quickInfo__container__item__icon" src={educationIcon} height={40} width={40}/>
                    <h3 className="quickInfo__container__item__title">{t("quickInfo.education")}</h3>
                    <p className="quickInfo__container__item__text">{t("quickInfo.educationDetail")}</p>
                    <p className="quickInfo__container__item__subtext">{t("quickInfo.educationSchool")}</p>
                </div>
                <div className="quickInfo__container__item">
                    <img className="quickInfo__container__item__icon" src={linkedinIcon} height={40} width={40}/>
                    <h3 className="quickInfo__container__item__title">Linkedin</h3>
                    <p className="quickInfo__container__item__text">{linkTextParts[0]}<a target="_blank" href="https://www.linkedin.com/in/emile-caron-455730293/" className="link">{linkTextParts[1]}</a>{linkTextParts[2]}</p>                </div>
                <div className="quickInfo__container__item">
                    <img className="quickInfo__container__item__icon" src={githubIcon} height={40} width={40}/>
                    <h3 className="quickInfo__container__item__title">Github</h3>
                    <p className="quickInfo__container__item__text">{linkTextParts[0]}<a target="_blank" href="https://github.com/EmileCar" className="link">{linkTextParts[1]}</a>{linkTextParts[2]}</p>                </div>
            </div>
        </div>
    );
}

export default QuickInfo;