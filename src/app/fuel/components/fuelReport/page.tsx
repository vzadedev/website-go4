"use client"

import AnimatedText from "@/components/animation/page"

const FuelReport = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <AnimatedText
                once
                text="Dashboard"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-gray-700 text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-600 text-center sm:text-left">
                Possuimos um dashboard voltado á gestão de combustível, com diversos gráficos e interatividades, como visualização destes em tabela e planilhas de seus dados.
              </p>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="/static/images/fuel/combustivelDash.png" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-dark">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="/static/images/fuel/dashboardTabela.png" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
            <div>
              <AnimatedText
                once
                text="Visualização em Tabela"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-white text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-200 text-center sm:text-left">
                Como é a visualização do dashboard em tabela.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default FuelReport