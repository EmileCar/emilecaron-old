import React from "react";
import "./AboutMe.css";
import { useTranslation } from "react-i18next";
import AboutItem from "../../components/aboutItem/AboutItem";
import Section from "../../components/section/Section";

const AboutMe = () => {
    const { t } = useTranslation("global")

    return (
        <Section title={t("about.title")}>
            <div className="about__container">
                <AboutItem title={t("about.musicschool.title")} description={t("about.musicschool.description")} img={"assets/images/muziekschool.jpg"}/>
                <AboutItem title={t("about.ksa.title")} description={t("about.ksa.description")} img={"assets/images/ksa.jpg"}/>
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
                        <h3 className="about__container--title">{t("about.exchange.title")}</h3>
                        <p className="about__container--text">{t("about.exchange.description")}</p>
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
        </Section>
    );
}

export default AboutMe;