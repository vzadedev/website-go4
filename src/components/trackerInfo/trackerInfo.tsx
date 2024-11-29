'use client'

import MapIcon from '@mui/icons-material/Map';

import { AnimatedText } from '@/components/animation/page';
import { useState } from 'react';
import { PhotoModal } from '@/components/photoModal/photoModal';

const TrackerInfo = () => {

  const [modal, setModal] = useState(false)
  const [url, setUrl] = useState("")

  return (
    <>
      <main className="min-h-screen flex flex-col items-center m-0 bg-primary-screens py-4">
        <div className='grid lg:grid-cols-2 max-w-screen-xl mx-auto gap-10 my-20 px-5'>
          <div>
            <div className=' h-[70%]'>
              <img 
                onClick={() => {
                  setModal(true);
                  setUrl("/static/images/system/tracker/map.png");
                }}
                className='h-full filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out' src="/static/images/system/tracker/map.png" />
            </div>
            <div className='grid grid-cols-3 items-center justify-center max-w-screen-lg mt-6 gap-10'>
              <div>
                <img 
                  onClick={() => {
                    setModal(true);
                    setUrl("/static/images/system/tracker/mapTruck.png");
                  }}
                  className='h-full filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out' src="/static/images/system/tracker/mapTruck.png" />
              </div>
              <div>
                <img 
                  onClick={() => {
                    setModal(true);
                    setUrl("/static/images/system/tracker/mapCar.png");
                  }}
                  className='h-full filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out' src="/static/images/system/tracker/mapCar.png" />
              </div>
              <div>
                <img 
                  onClick={() => {
                    setModal(true);
                    setUrl("/static/images/system/tracker/cluster.png");
                  }}
                  className='h-full filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out' src="/static/images/system/tracker/cluster.png" />
              </div>
            </div>
          </div>
          <div className='bg-white p-14 gap-6 flex flex-col justify-center items-center text-center rounded-lg'>
            <div className='bg-primary-light/10 p-6 rounded-full'>
              <MapIcon sx={{ height: 32, width: 32, color: "#0065af" }} />
            </div>
            <AnimatedText
              once
              text="O que é"
              el="h1"
              className="text-3xl font-bold"
            />
            <div>
              Com o modulo de RASTREAMENTO e TELEMETRIA do MANFROTA, você consegue ter na palma de sua mão
              a gestão de utilização dos equipamentos como: controle de horas e km trabalhadas ou percorridos,
              velocidade, ignição ON e OFF, trajeto percorrido.
              <br />
              <br />
              Com o modulo de telemetria instalado, capturamos as horas e km trabalhados e gerenciamos
              as manutenções preventivas dos equipamentos de forma individual, além disso entregamos
              roteiros de manutenções preventivas levando em consideração as premissas dos fabricantes.
            </div>
          </div>
        </div>
      </main>     

      {modal && url && (
        <PhotoModal
          open={modal}
          setOpen={(value) => setModal(value)}
          url={url}
        />
      )}
    </>
  );
};

export default TrackerInfo;
