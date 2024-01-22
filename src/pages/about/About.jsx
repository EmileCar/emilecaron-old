import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation("global")

    return (
        <div className="page">
            <div className="section-general">
                <h2 className="section-title">{t("about.title")}</h2>
                <div className="section-title__border"></div>
                <div className="section__content">
                    <div className="about__container">
                        <div className="about__item">
                            <div className="about__item--content">
                                <h3 className="about__container--title">{t("about.musicschool.title")}</h3>
                                <p className="about__container--text">{t("about.musicschool.description")}</p>
                            </div>
                            <div className="about__item--img">
                                <img src="test" alt="test" />
                            </div>
                        </div>
                        <div className="about__item">
                            <div className="about__item--content">
                                <h3 className="about__container--title">{t("about.ksa.title")}</h3>
                                <p className="about__container--text">{t("about.ksa.description")}</p>
                            </div>
                            <div className="about__item--img">
                                <img src="test" alt="test" />
                            </div>
                        </div>
                        <div className="about__item">
                            <div className="about__item--content">
                                <h3 className="about__container--title">{t("about.highschool.title")}</h3>
                                <p className="about__container--text">{t("about.highschool.description")}</p>
                            </div>
                            <div className="about__item--img">
                                <img src="test" alt="test" />
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="timeline-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;