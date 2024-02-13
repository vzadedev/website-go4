import FuelDashboard from "@/app/fuel/components/fuelDashboard/page";
import FuelSupply from "@/app/fuel/components/fuelSupply/page";
import FuelTank from "@/app/fuel/components/fuelTank/page";
import FuelPage from "@/app/fuel/components/landingPage/page";

export default function Fuel() {
  return (
    <>
      <FuelPage />
      <FuelTank />
      <FuelSupply />
      <FuelDashboard />
    </>
  );
}
