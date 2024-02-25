import React, { useState } from "react";

const Contact = () => {
    const [title, setTitle] = useState('Contact');

    return (
        <div className="page">
            <div className="section-general">
                <h2 className="section-title">{title}</h2>
                <div className="section-title__border"></div>
                <div className="section__content">
                    <p><strong>Email: </strong>caron.emile@telenet.be</p>
                    <p><strong>Phone: </strong>+32 495 66 76 93</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;