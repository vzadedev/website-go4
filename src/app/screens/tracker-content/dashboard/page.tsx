import LandingPage from "@/app/screens/tracker-content/dashboard/landingPage/page";
import AboutDash from "@/app/screens/tracker-content/dashboard/aboutDash/page"
import InfoDash from "@/app/screens/tracker-content/dashboard/infoDash/page"

export default function Page() {
    return (
        <div>
            <LandingPage />
            <AboutDash />
            <InfoDash />
        </div>
    )
}