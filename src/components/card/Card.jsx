import React from "react";
import "./Card.css";

const Card = ({ title, children, icons }) => {
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            {children}
            <ul className="card-icons">
                {icons && icons.map((icon, index) => (
                    <img key={index} src={icon.src} alt={icon.alt} height={icon.height} />
                ))}
            </ul>
        </div>
    );
}

export default Card;