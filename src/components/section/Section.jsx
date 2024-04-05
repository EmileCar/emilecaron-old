import React from "react";
import "./Section.css";
import SectionTitle from "./sectionTitle/SectionTitle";

const Section  = ({title, children}) => {
    return (
        <section className="section-general">
            {title && <SectionTitle title={title} />}
            <div className="section__content">
                {children}
            </div>
        </section>
    );
}

export default Section;