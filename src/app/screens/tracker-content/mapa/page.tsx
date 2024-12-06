import LandingPage from "@/app/screens/tracker-content/mapa/landingPage/page";
import Info from "@/app/screens/tracker-content/mapa/info/page";
import Rastreio from "@/app/screens/tracker-content/mapa/rastreador/page";

export default function Page() {
    return (
        <div>
            <LandingPage />
            <Info />
            <Rastreio />
        </div>
    )
}