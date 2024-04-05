import React, { useEffect, useState } from "react";

const CaroneHero = () => {
    const highlightOptions = ["professionele", "snelleja", "goeie"];
    const [currentOption, setCurrentOption] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentOption((currentOption + 1) % highlightOptions.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentOption, highlightOptions.length]);

    return (
        <section className="hero carone">
            <div className="caronehero__wrapper">
                <h2 className="caronehero__wrapper--title">
                    <span className="code">{"<"}</span>Carone<span className="code">{"/>"}</span>
                </h2>
                <p className="caronehero__wrapper--text">
                    In nood van een{" "}
                    <span className={`highlight ${currentOption !== 0 ? "fadeOutVertical" : ""}`}>
                        {highlightOptions[currentOption]}
                    </span>{" "}
                    website?
                </p>
            </div>
        </section>
    );
}

export default CaroneHero;
