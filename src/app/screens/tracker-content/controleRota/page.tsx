"use client"

import LandingPage from "@/app/screens/tracker-content/controleRota/landingPage/page";
import InfoCars from "@/app/screens/tracker-content/controleRota/infoCars/page";
import Visualizacaocar from "@/app/screens/tracker-content/controleRota/visualizacaoCar/page";

export default function Page() {
    return (
        <div>
            <LandingPage />
            <InfoCars />
            <Visualizacaocar />
        </div>
    )
}