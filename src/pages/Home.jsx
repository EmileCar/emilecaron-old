import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import CaroneHero from "../sections/hero/CaroneHero";
import Alinea from "../components/alinea/Alinea";

const Home = () => {
    return (
        <DefaultLayout>
            <CaroneHero />
            <Alinea >
                <p className="alinea-header">Tegenwoordig heeft vrijwel elk bedrijf een website nodig. Het zorgt voor professionaliteit, vindbaarheid en een sterke eerste indruk. Maar hoe begin je aan zo'n online project?  Daarom ben ik er om je te helpen.
                </p>
            </Alinea>
        </DefaultLayout>
    );
}

export default Home;