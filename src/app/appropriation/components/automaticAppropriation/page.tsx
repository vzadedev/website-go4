"use client"

import AnimatedText from "@/components/animation/page";

const AutomaticAppropriation = () => {
  return (
    <>

      <section className="bg-primary-dark py-4">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center">            
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="/static/images/appropriation/automaticAppropriation.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
            <div>
              <AnimatedText
                once
                text="Apropriação Automática"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-white text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-200 text-center sm:text-left">
                Capturas de <b>Horas</b> ou <b>KM</b> Trabalhados, através de dispositivos de telemetria, instalados em sua FROTA.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default AutomaticAppropriation