import React from "react";
import "./Alinea.css";

const Alinea = ({children}) => {
    return (
        <div className="alinea">
            {children}
        </div>
    );
}

export default Alinea;