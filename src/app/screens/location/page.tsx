import LocationPage from "@/app/location/components/landingPage.tsx/page";
import Locator from "@/app/location/components/locator/page";
import Renter from "@/app/location/components/renter/page";

export default function Location() {
  return (
    <>
      <LocationPage  />
      <Locator />
      <Renter />
    </>
  );
}
