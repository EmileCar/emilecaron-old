import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";
import AboutItem from "../../components/aboutItem/AboutItem";

const About = () => {
    const { t } = useTranslation("global")

    return (
        <div className="page">
            <div className="section-general">
                <h2 className="section-title">{t("about.title")}</h2>
                <div className="section-title__border"></div>
                <div className="section__content">
                    <div className="about__container">
                        <AboutItem title={t("about.musicschool.title")} description={t("about.musicschool.description")} img={"assets/images/muziekschool.jpg"}/>
                        <AboutItem title={t("about.ksa.title")} description={t("about.ksa.description")} img={"assets/images/ksa.jpg"}/>
                        <AboutItem title={t("about.exchange.title")} description={t("about.exchange.description")} img={"assets/images/brazil.jpg"}/>
                        <AboutItem title={t("about.highschool.title")} description={t("about.highschool.description")} img={"assets/images/school.jpg"}/>
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