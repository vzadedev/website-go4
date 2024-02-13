"use client"

import AnimatedText from "@/components/animation/page"

const FuelSupply = () => {
  return (
    <>
      <section className="bg-primary-dark py-4">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center">
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="/static/images/fuel/abastec.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
            <div>
              <AnimatedText
                once
                text="Abastecimentos"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-white text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-200 text-center sm:text-left">
                No MANFROTA, você gerencia todas as movimentações, entradas, transferências entre postos,
                abastecimentos, tudo isso com registros fotográficos e observações, que podem ser efetuadas
                via comando de voz, facilitando a operação em campo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FuelSupply