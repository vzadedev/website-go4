"use client"

import React, { useEffect, useState } from "react";

import { Link } from 'react-scroll';

import ParkIcon from '@mui/icons-material/Park';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsightsIcon from '@mui/icons-material/Insights';
import InstagramIcon from '@mui/icons-material/Instagram';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PlaceIcon from '@mui/icons-material/Place';

import Sidebar from "../sidebar/sidebar";
import { useMediaQuery, useTheme } from "@mui/material";

const menus = [
  {
    icon: <HomeIcon />,
    label: 'Home',
    to: 'landingPage',
  },
  {
    icon: <PlaceIcon />,
    label: 'Tracker',
    to: 'trackerSection'
  },
  {
    icon: <ProductionQuantityLimitsIcon />,
    label: 'Produtos',
    to: 'projects'
  },
  {
    icon: <InsightsIcon />,
    label: 'Vantagens',
    to: 'advantages'
  },
  {
    icon: <PeopleIcon />,
    label: 'Quem Somos',
    to: 'aboutUs'
  },
  {
    icon: <Diversity3Icon />,
    label: 'Time',
    to: 'team'
  },
  {
    icon: <ParkIcon />,
    label: 'Áreas',
    to: 'areas'
  },
  {
    icon: <HelpIcon />,
    label: 'Porque nós',
    to: 'whyUs'
  },
  {
    icon: <HandshakeIcon />,
    label: 'Parceiros',
    to: 'clients'
  },
  // {
  //   icon: <MessageIcon />,
  //   label: 'Depoimentos',
  //   to: 'brief'
  // },
]

const NavBar = () => {

  const isMobileSmall = useMediaQuery(useTheme().breakpoints.down("lg"));

  let [navbar, setNavbar] = useState(false);

  let [booleans, setBooleans] = useState({
    open: false,
    navbar: false,
    mobile: false,
  })

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div className={`fixed ${!navbar ? `bg-transparent` : `bg-white`} w-full h-14 z-50 justify-between transition-all duration-500 ease-in-out`}>
      <div className={`flex ${!isMobileSmall ? 'justify-around' : 'justify-between'} ${!isMobileSmall ? 'p-0' : 'p-8'} mb-8 items-center bg-transparent h-full`}>
        <img className="max-w-full w-16 h-w-14 rounded-lg mb-2" src={navbar ? "/static/images/go4-icon-azul.png" : "/static/images/logotipo-go4-bg-white.png"} alt="image description" />

        {!isMobileSmall ? (
          <>
            <div className="flex flex-row items-center gap-10">
              {menus.map((e, index) => (
                <div
                  key={index}
                  className={`${!navbar ? 'text-white' : 'text-gray-700'} font-medium hover:underline ${!navbar ? 'hover:text-shadow: 0 0 5px #f00, 0 0 10px #f00, 0 0 15px #f00, 0 0 20px #f00, 0 0 35px #f00, 0 0 40px #f00, 0 0 50px #f00, inset 1px 1px 2px #fff, inset -1px -1px 2px #fff' : 'hover:text-primary-light/80'} transition-all duration-300 ease-in-out cursor-pointer`}
                >
                  <Link
                    activeClass="active"
                    to={e.to}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                  >
                    {e.label}
                  </Link>
                </div>

              ))}
            </div>
            <div className="grid grid-cols-2 divide-x">
              <a href="https://www.instagram.com/go4_digital/" target="_blank">
                <InstagramIcon className={`hover:text-[#fb6e02] ${!navbar ? `text-white` : `text-gray-700`} transition-all duration-1000 ease-in-out mr-2`} sx={{ width: 28, height: 28 }} />
              </a>
              <a href="https://www.linkedin.com/company/go4-digital/" target="_blank">
                <LinkedInIcon className={`hover:text-[#0a66c2] ${!navbar ? `text-white` : `text-gray-700`} transition-all duration-1000 ease-in-out ml-2`} sx={{ width: 28, height: 28 }} />
              </a>
            </div>
          </>
        ) : (
          <>
            <button onClick={() => setBooleans((booleans) => ({ ...booleans, open: !booleans.open }))} className={`flex items-center mb-2 ${!navbar ? "text-white" : "text-primary-light"}`}>
              <MenuIcon sx={{ width: 28, height: 28 }} />
            </button>
            <Sidebar
              isOpen={booleans.open}
              menus={menus}
              screen={false}
              setOpen={(value) => setBooleans((booleans) => ({ ...booleans, open: value }))} />
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;