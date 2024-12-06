import FuelSupply from "@/app/rolling/components/createRolling/page";
import CreateRolling from "@/app/rolling/components/createRolling/page";
import ViewRolling from "@/app/rolling/components/viewRolling/page";
import EditRolling from "@/app/rolling/components/editRolling/page";
import LandingPage from "@/app/rolling/components/landingPage/page";

export default function Fuel() {
  return (
    <>
      <LandingPage />
      <ViewRolling />
      <CreateRolling />
      {/* <EditRolling /> */}
    </>
  );
}
