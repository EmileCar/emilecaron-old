import React, { useContext, useEffect, useState } from "react";
import "./Hero.css";
import { ActivityContext } from "../../contexts/ActivityContext";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import CV from "../../assets/EmileCaronCV.pdf";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { img, title, description, buttons, activityState } = useContext(ActivityContext);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useTranslation("global");

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`hero`}>
      <div className={`hero-wrapper`}>
        <div className={`hero-wrapper__image`} style={{ display: imageLoaded ? "grid" : "none" }}>
          <img
            src={img}
            alt={"Emile Caron " + title}
            className={`fade-img ${activityState ? activityState : ""}`}
            onLoad={handleImageLoad}
          />
        </div>
        <div className={`hero-wrapper__content`}>
          <h2 className={`hero-wrapper__content--title ${activityState ? activityState : ""}`}>{title}</h2>
          <h2 className="hero-wrapper__content--name">Emile Caron</h2>
          <p className={`hero-wrapper__content--description ${activityState ? activityState : ""}`}>{description}</p>
          <div className="hero-wrapper__buttons">
            {buttons &&
              buttons.map((button, index) => {
                if(button.action && button.action.type === "download"){
                  return <a key={index} href={CV} download="Emile Caron CV 2023">
                    <Button type={button.type}>{button.text}</Button>
                  </a>
                } else {
                  return <Link key={index} to={button.link} className={"btn btn--" + button.type}>
                    <Button type={button.type}>{button.text}</Button>
                  </Link>
                }
              }
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
