"use client"

import AnimatedText from "@/components/animation/page"
import { PhotoModal } from "@/components/photoModal/photoModal";

import { useState } from "react";


const page = () => {
  const [modal, setModal] = useState(false)
  const [url, setUrl] = useState("")

  return (
    <>

      <section className="bg-primary-dark">
        <div className="container max-w-xl p-6  mx-auto space-y-24 lg:px-8 lg:max-w-7xl ">
          <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center">
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                onClick={() => {
                  setModal(true);
                  setUrl("/static/images/trackerPage/dashIndividualVelo2.png");
                }}
                src="/static/images/trackerPage/dashIndividualVelo2.png" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
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
      <section className="bg-white">
        <div className="container max-w-xl p-28 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <AnimatedText
                once
                text="Mapa de Jornada"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-gray-700 text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-600 text-center sm:text-left">
                O Mapa de Jornada oferece uma visão clara e detalhada dos trajetos
                percorridos pelos veículos. Com ele, é possível acompanhar cada etapa do percurso,
                identificar paradas, desvios e avaliar o desempenho das rotas. Essa funcionalidade
                é essencial para otimizar operações logísticas, garantir maior precisão no planejamento
                e melhorar a eficiência da frota.
              </p>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                onClick={() => {
                  setModal(true);
                  setUrl("/static/images/trackerPage/relatorio/teste3.png");
                }}
                src="/static/images/trackerPage/relatorio/teste3.png" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-dark">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="flex flex-col-reverse lg:gap-10 lg:items-center mt-4 mb-6">
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                onClick={() => {
                  setModal(true);
                  setUrl("/static/images/trackerPage/dashMapaJornada.png");
                }}
                src="/static/images/trackerPage/dashMapaJornada.png" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
            <div>
              <AnimatedText
                once
                text="Detalhes do mapa de jornada"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-white text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-200 text-center sm:text-left">
                Visualize e Analise Cada Etapa do Percurso com Precisão
              </p>
            </div>
          </div>
        </div>
      </section>


      {modal && url && (
        <PhotoModal
          open={modal}
          setOpen={(value) => setModal(value)}
          url={url}
        />
      )}
    </>
  );
}
export default page;