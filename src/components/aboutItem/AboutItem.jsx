import React from "react";

const AboutItem = ({ title, description, img }) => {
    return (
        <div className="about__item">
            <div className="about__item--content">
                <h3 className="about__container--title">{title}</h3>
                <p className="about__container--text">{description}</p>
            </div>
            <div className="about__item--img">
                <img src={img} alt={title} />
            </div>
        </div>
    );
}

export default AboutItem;
