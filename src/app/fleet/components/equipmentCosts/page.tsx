"use client"

import AnimatedText from "@/components/animation/page"

const EquipmentCosts = () => {
  return (
    <>
      <section className="bg-primary-dark py-4">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <AnimatedText
                once
                text="Composição Custo Hora"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-white text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-200">
                O <b className="text-primary-light">MANFROTA</b> auxilia você na elaboração e composição do custo hora de sua FROTA.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img src="/static/images/fleet/custohora.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-white">Tarifas que Compõem o Custo Hora /KM de sua Frota:</h2>
        </div>

        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8 text-white text-xl">
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h3 className="my-3 font-semibold text-center">Depreciação</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h3 className="my-3 font-semibold text-center">Custo Capital</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h3 className="my-3 font-semibold text-center">Material Operação</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h3 className="my-3 font-semibold text-center">Manutenção Rotina</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h3 className="my-3 font-semibold text-center">Pneus</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h3 className="my-3 font-semibold text-center">Material Rodante</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default EquipmentCosts