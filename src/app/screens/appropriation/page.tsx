import AppropriationMap from "@/app/appropriation/components/appropriationMap/page";
import AutomaticAppropriation from "@/app/appropriation/components/automaticAppropriation/page";
import AppropriationPage from "@/app/appropriation/components/landingPage/page";
import ManualAppropriation from "@/app/appropriation/components/manualAppropriation/page";

export default function Appropriation() {
  return (
    <>
      <AppropriationPage />
      <ManualAppropriation />
      <AutomaticAppropriation />
      <AppropriationMap />
    </>
  );
}
