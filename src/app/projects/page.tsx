'use client'

import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FireTruckOutlinedIcon from '@mui/icons-material/FireTruckOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Manfrota } from './components/manfrota';

const Projects = () => (
    <main id="projects" className="min-h-fit w-full m-0">
      <div className='bg-primary-dark h-fit flex justify-center text-white text-left text-3xl font-bold py-20'>
        <div className='w-[50%] flex flex-col gap-4 text-center'>
          <span>Nossos produtos</span>
          <span className='text-lg w-full font-normal'>
            Explore abaixo uma visão geral de alguns dos produtos-chave desenvolvidos pela nossa equipe.
          </span>
          <div className='flex flex-row gap-4 items-center justify-center'>
            <div className='flex flex-col items-center text-sm col text-primary-light cursor-pointer gap-4'>
              <FireTruckOutlinedIcon sx={{ color: "#0065af", width: 48, height: 48 }} />
              Manfrota (Web e Desktop)
            </div>
            <div className='flex flex-col items-center text-sm col text-[#b0bbcc] cursor-pointer gap-4'>
              <LockOutlinedIcon sx={{ color: "#b0bbcc", width: 48, height: 48 }} />
              Em breve
            </div>
            <div className='flex flex-col items-center text-sm col text-[#b0bbcc] cursor-pointer gap-4'>
              <LockOutlinedIcon sx={{ color: "#b0bbcc", width: 48, height: 48 }} />
              Em breve
            </div>
          </div>
        </div>
    </div>
    <Manfrota />
  </main>
);

export default Projects;
