import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import CaroneHero from "../sections/hero/CaroneHero";
import Alinea from "../components/alinea/Alinea";
import Diensten from "../sections/diensten/Diensten";

const Home = () => {
    return (
        <DefaultLayout>
            <CaroneHero />
            <div className="alineas">
                <Alinea >
                    <p className="alinea-header">
                        Tegenwoordig heeft vrijwel elk bedrijf een website nodig.
                        Het zorgt voor professionaliteit, vindbaarheid en een sterke eerste indruk.
                        Maar hoe begin je aan zo'n online project? Daar ben ik om u te helpen.
                    </p>
                </Alinea>
                <Alinea>
                    <h2 className="alinea-subtitle">
                        Wat ik voor u kan betekenen
                    </h2>
                    <Diensten />
                </Alinea>
            </div>
        </DefaultLayout>
    );
}

export default Home;