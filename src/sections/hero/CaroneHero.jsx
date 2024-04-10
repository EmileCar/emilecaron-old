import React, { useEffect, useState } from "react";
import "./Hero.css";

const CaroneHero = () => {
    const highlightOptions = ["professionele", "snelle", "goedkope"];
    const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextOptionIndex = (currentOptionIndex + 1) % highlightOptions.length;
            setCurrentOptionIndex(nextOptionIndex);
        }, 2500);

        return () => clearInterval(interval);
    }, [currentOptionIndex, highlightOptions.length]);

    const renderHighlight = () => {
        return (
            <span className={`highlight`}>
                {highlightOptions.map((option, index) => (
                    <span 
                        key={index}
                        className={`${index === currentOptionIndex ? "highlighted" : ""} ${index === currentOptionIndex ? "fadeInVertical" : "fadeOutVertical"} ${firstRender && "firstRender"}`}
                    >
                        {option}
                    </span>
                ))}
            </span>
        );
    };

    useEffect(() => {
        setTimeout(() => {
            setFirstRender(false);
        }, 2000);
    }, []);

    return (
        <section className="hero carone">
            <div className="caronehero__wrapper">
                <h2 className="caronehero__wrapper--title">
                    <span className="code">{"<"}</span>Carone<span className="code">{"/>"}</span>
                </h2>
                <p className="caronehero__wrapper--text">
                    In nood van een{" "}
                    {renderHighlight()}
                    website?
                </p>
            </div>
        </section>
    );
}

export default CaroneHero;
