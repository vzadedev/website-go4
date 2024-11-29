'use client'

import { motion } from "framer-motion"
import Image from 'next/image'
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FireTruckOutlinedIcon from '@mui/icons-material/FireTruckOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import image from 'next'
import { LocationOn } from '@mui/icons-material';
import { Manfrota } from './components/manfrota';
import { Tracker } from './components/tracker';
import React, { useRef, useState } from 'react';


const Projects = () => {

  const [activeComponent, setActiveComponent] = useState('Manfrota');
  const [fade, setFade] = useState(true);
  const info = useRef(null);

  const scrollToComponent = (component: any) => {
    setActiveComponent(component);
    setFade(false)

    setTimeout(() => setFade(true), 10);

    component === 'Manfrota' || 'Tracker' && info.current ?
      info.current.scrollIntoView({ behavior: 'smooth' })
      : null;

  };

  return (
    <main id="projects" className="min-h-fit w-full m-0">
      <div className='bg-primary-dark h-fit flex justify-center text-white text-left text-3xl font-bold py-20 '>
        <div className='w-[50%] flex flex-col gap-4 text-center '>
          <span>Nossos produtos</span>
          <span className='text-lg w-full font-normal'>
            Explore abaixo uma visão geral de alguns dos produtos-chave desenvolvidos pela nossa equipe.
          </span>
          <div className='flex flex-row gap-3 items-center justify-center mt-4 p-2'>
            <div
              className='flex flex-col items-center text-sm col text-primary-light cursor-pointer gap-4'
              onClick={() => scrollToComponent('Manfrota')}
            >
              <motion.div
                className="p-2 justify-center items-center flex flex-col"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 5 }}
              >
                <Image
                  src="/static/images/Projects/manfrota.svg"
                  alt=""
                  width={60}
                  height={0}
                />
                <div className="mt-2">Manfrota <br />(Web e Desktop)</div>
              </motion.div>
            </div>
            <div
              className='p-2 text-sm col cursor-pointer gap-4 text-[#079272] '
              onClick={() => scrollToComponent('Tracker')}
            >
              <motion.div
                className="justify-center items-center flex flex-col"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 5 }}
              >
                <Image
                  src="/static/images/Projects/go4.svg"
                  alt=""
                  width={80}
                  height={0}
                />
                <div className="mt-2">Tracker <br />(Lançamento)</div>
              </motion.div>
            </div>
            <div className=' p-2 flex flex-col items-center text-sm col text-[#b0bbcc] cursor-pointer gap-4'>
              <LockOutlinedIcon sx={{ color: "#b0bbcc", width: 48, height: 48 }} />
              Em breve
            </div>
          </div>
        </div>
      </div>
      <div ref={info} >
        {fade && (
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {activeComponent === 'Manfrota' && <Manfrota />}
            {activeComponent === 'Tracker' && <Tracker />}
          </motion.div>
        )}
      </div>
    </main>
  )
};

export default Projects;
