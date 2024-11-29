import LandingPage from "@/app/screens/tracker-content/locacao/landingPage/page";
import Info from "@/app/screens/tracker-content/locacao/info/page";
import Rastreio from "@/app/screens/tracker-content/locacao/rastreador/page";

export default function Page() {
    return (
        <div>
            <LandingPage />
            <Info />
            <Rastreio />
        </div>
    )
}