import TiresPage from "@/app/tire/components/landingPage/page";
import TireDashboard from "@/app/tire/components/tireDashboard/page";
import TireLife from "@/app/tire/components/tireLife/page";
import TireMovement from "@/app/tire/components/tireMovement/page";
import TireRotation from "@/app/tire/components/tireRotation/page";

export default function Tire() {
  return (
    <>
      <TiresPage />
      <TireLife />
      <TireMovement />
      <TireRotation />
      <TireDashboard />
    </>
  );
}
