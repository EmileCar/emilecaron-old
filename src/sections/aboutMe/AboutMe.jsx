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
                <AboutItem title={t("about.exchange.title")} description={t("about.exchange.description")} img={"assets/images/brazil.jpg"}/>
                <AboutItem title={t("about.highschool.title")} description={t("about.highschool.description")} img={"assets/images/school.jpg"}/>
                <div className="timeline">
                    <div className="timeline-line"></div>
                </div>
            </div>
        </Section>
    );
}

export default AboutMe;