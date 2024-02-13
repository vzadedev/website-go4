import NavBar from '@/components/navbar/navbar';
import Projects from './projects/page';
import OurTeam from './team/page';
import WhyUs from './whyUs/page';
import RocketButton from '@/components/rocketButton/rocketButton';
import LandingPage from '@/components/landingPage/page';
import OurModules from '@/components/modules/page';
import Advantages from '@/components/advantages/page';
import AboutUs from '@/components/aboutUs/page';
import Areas from '@/components/areas/page';
import Clients from '@/components/clients/page';
import Brief from '@/components/brief/page';
import Footer from '@/components/footer/page';

export default function App() {

  return (
    <>
      <NavBar />
      <LandingPage />
      <Projects />
      <OurModules />
      <Advantages />
      <AboutUs />
      <OurTeam />
      <Areas />
      <WhyUs />
      <Clients />
      {/* <Brief /> */}
      <Footer />
      <RocketButton />
    </>
  );
}
