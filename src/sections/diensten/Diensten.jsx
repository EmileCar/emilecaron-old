import React from "react";
import Card from "../../components/card/Card";
import "./Diensten.css";

const Diensten = () => {
    return (
        <div className="diensten__container">
            <Card title="Web Development">
                <p>Als ervaren webdesigner en webdeveloper kan ik uw persoonlijke of zakelijke website maken, rekening houdend met uw vereisten.</p>
            </Card>
            <Card title="Onderhoud">
                <p>Heeft u al een website maar geen tijd om deze te onderhouden? Ik kan u helpen met het updaten van uw website.</p>
            </Card>
            <Card title="IT Consultancy">
                <p>Problemen met het kiezen van uw domeinnaam, hosting of andere IT-gerelateerde zaken? Ik help u graag verder.</p>
            </Card>
        </div>
    );
}

export default Diensten;