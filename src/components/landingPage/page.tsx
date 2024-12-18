'use client'

import { Typewriter } from 'react-simple-typewriter';

const LandingPage = () => {

  return (
    <main id="landingPage" className="flex flex-col md:flex-row min-w-full min-h-[100dvh] justify-center items-center py-0 m-0 bg-black ">
      <video className='absolute inset-0 object-cover w-full h-[100dvh] opacity-50' loop autoPlay muted controls={false}>
        <source src="/static/videos/Manfrota.mp4" type="video/mp4" />
      </video>
      <div className='flex z-40 flex-col w-full bg-transparent p-4 text-center items-center justify-center'>
        <span className='text-white font-bold text-4xl my-2'>
          <Typewriter
            words={[
              "MANFROTA",
              "GESTÃO DE HORAS TRABALHADAS",
              "GESTÃO DE MANUTENÇÃO PREVENTIVA E CORRETIVA",
              "GESTÃO DE COMBUSTÍVEIS E LUBRIFICANTES",
              "RASTREAMENTO",
              "PNEUS E MATERIAL RODANTE",
              "MOBILE NO CAMPO",
              "GESTÃO DE LOCAÇÃO DE MÁQUINAS",
              "CHECKLIST NO CAMPO",
              "GERENCIAMENTO TOTAL DE FROTAS",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={20}
            delaySpeed={3000}
          />
        </span>
        <div className='text-white mb-7 text-xl'>
          <span className='font-bold'>Tudo o que você precisa</span>, em um só lugar
        </div>
        <hr className="h-[3px] w-64 border-t-0 bg-white/15  mb-7" />
        <div className='flex space-x-10'>
          <a
            className='flex cursor-pointer flex-row w-full md:w-64 h-[50px] rounded-[100px] transition-all duration-500 ease-in-out bg-[#079272] hover:bg-opacity-80 drop-shadow-theme'
            onClick={() => {
              const element = document.getElementById("trackerSection");
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className='flex hover:text-white transition-all duration-500 ease-in-out items-center justify-center w-full font-bold text-white h-full'>
              Tracker
            </span>
          </a>

          <a target='_blank' href="https://api.whatsapp.com/send?phone=5511982568090&text=&source=&data=&app_absent=" className='flex flex-row w-full md:w-64 h-[50px] rounded-[100px] hover:bg-white transition-all duration-500 ease-in-out bg-white/35 drop-shadow-theme'>
            <span className='flex hover:text-gray-700 transition-all duration-500 ease-in-out items-center justify-center w-full font-bold text-white h-full'>
              Entre em contato
            </span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
