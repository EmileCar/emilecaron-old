import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Section from "../components/section/Section";

const NotFound = () => {
    return (
        <DefaultLayout>
            <Section title="Deze pagina bestaat niet">
                <p>Deze pagina bestaat niet. Probeer een andere pagina.</p>
            </Section>
        </DefaultLayout>
    );
}

export default NotFound;