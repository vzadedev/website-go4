import React, { useState, useEffect } from "react";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-scroll";

const Footer = () => {

  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 bg-primary-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-row text-left lg:text-left">
          <div className="w-full px-4">
            <h4 className="text-3xl font-bold text-white">Junte-se a nós</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-200">
              Acompanhe-nos por nossas redes sociais ou entre em contato para saber mais
            </h5>
            
          </div>
          <div className="flex flex-row my-4">
              <a href="https://www.instagram.com/go4_digital/" target="_blank" className="flex justify-center bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/company/go4-digital/" target="_blank" className="flex bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <LinkedInIcon />
              </a>
            </div>
        </div>
        <hr className="h-[0.2px] w-[85vw] border-t-0 bg-[#a0a3a7]  my-4" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full px-4 mx-auto text-center">
            <div className="text-sm text-gray-200 font-semibold py-1">
             <span>
                Go4 Digital - Todos os direitos reservados - {" "}
                {new Date().getFullYear()} 
                <a target="_blank" href="https://www.google.com/maps/place/Digital+Automação/@-20.2091282,-50.929647,17z/data=!4m6!3m5!1s0x9499c152ca678535:0x7d7eabcf9594a02!8m2!3d-20.2091495!4d-50.9296278!16s%2Fg%2F11h42p_fl4?entry=ttu">
                  <LocationOnIcon sx={{ width: 36, height: 36, color: "primary.light", "&:hover": { cursor: "pointer" }  }}/>   
                </a> 
                <b>Núcleo Tecnológico  </b> |
                Santa fé do Sul - SP
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;