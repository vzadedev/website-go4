import MaintenancePage from "@/app/maintenance/components/landingPage/page";
import MaintenanceMap from "@/app/maintenance/components/maintenanceMap/page";
import MaintenanceStart from "@/app/maintenance/components/maintenanceStart/page";

export default function Maintenance() {
  return (
    <>
      <MaintenancePage />
      <MaintenanceStart />
      <MaintenanceMap />
    </>
  );
}
