import EquipmentCosts from "@/app/fleet/components/equipmentCosts/page";
import EquipmentDocs from "@/app/fleet/components/equipmentDocs/page";
import EquipmentPanel from "@/app/fleet/components/equipmentPanel/page";
import EquipmentRegister from "@/app/fleet/components/equipmentRegister/page";
import EquipmentsPage from "@/app/fleet/components/landingPage/page";

export default function Fleet() {
  return (
    <>
      <EquipmentsPage />
      <EquipmentRegister />
      <EquipmentCosts />
      <EquipmentDocs />
      <EquipmentPanel />
    </>
  );
}
