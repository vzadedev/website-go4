"use client"

import { Typewriter } from "react-simple-typewriter";

const TrackerPage = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row min-w-full min-h-[75vh] justify-center items-center py-0 m-0 bg-black">
        <video className='absolute inset-0 object-cover w-full h-[75vh] opacity-50' loop autoPlay muted controls={false}>
          <source src="/static/videos/tracker.mp4" type="video/mp4" />
        </video>
        <div className='flex z-40 flex-col w-full bg-transparent p-4 text-center items-center justify-center'>
          <span className='text-white font-bold text-3xl my-2'>
            <Typewriter
              words={[
                "MAPA DE LOCALIZAÇÕES DA FROTA",
                "RASTREAMENTO HÍBRIDO (GPRS E SAT)",
                "CAPTURA DE HORAS/KM AUTOMÁTICA",
              ]}
              loop={Infinity}
              typeSpeed={40}
              deleteSpeed={20}
              delaySpeed={3000}
            />
          </span>
          <div className='text-white mb-7 text-xl'>
            Um pouco sobre o módulo de <span className='font-bold'>Rastreamento</span>
          </div>
          <hr className="h-[3px] w-64 border-t-0 bg-white/15  mb-7" />
          <a target='_blank' href="https://api.whatsapp.com/send?phone=5511982568090&text=&source=&data=&app_absent=" className='flex flex-row w-full md:w-64 h-[50px] rounded-[100px] hover:bg-white transition-all duration-500 ease-in-out bg-white/35 drop-shadow-theme'>
            <span className='flex hover:text-gray-700 transition-all duration-500 ease-in-out items-center justify-center w-full font-bold text-white h-full'>
              Entre em contato
            </span>
          </a>
        </div>
      </main>
      
    </>
  );
}

export default TrackerPage