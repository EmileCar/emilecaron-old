import React from "react";

const SectionTitle = ({title}) => {
    return (
        <>
            <h2 className="section-title">{title}</h2>
            <div className="section-title__border"></div>
        </>

    );
}

export default SectionTitle;