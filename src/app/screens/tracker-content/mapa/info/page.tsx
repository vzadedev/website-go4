"use client"

import AnimatedText from "@/components/animation/page"
import { PhotoModal } from "@/components/photoModal/photoModal";

import { useState } from "react";

const page = () => {

  const [modal, setModal] = useState(false)

  return (
    <>
      <div className="p-16">
        <div className="flex felx-col items-center justify-center">
          <span
            className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm"
          >
            Como funciona?
          </span>
        </div>
        <AnimatedText
          once
          text="Rastreamento"
          el="h1"
          className="text-3xl text-center mt-6 font-bold text-gray-700"
        />
        <p className="text-center mt-6 text-lg font-light text-gray-600">
          Nossa PLATAFORMA de rastreamento oferece monitoramento em tempo real da localização
          de sua FROTA, garantindo segurança e eficiência. Com alertas instantâneos e relatórios detalhados,
          você pode otimizar a gestão da sua frota. Acesso os históricos de viagens que permite análises detalhadas.
          A interface intuitiva facilita o uso em qualquer dispositivo, inclusive na palma de sua mão. Proteja seu PATRIMONIO com
          tecnologia de ponta.
        </p>
      </div>

      <section className="bg-white">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <AnimatedText
                once
                text="Veja o equipamento em tempo real"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-gray-700 text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-600 text-center sm:text-left">
                DE: Veja o equipamento em tempo real <br />
                PARA: Monitore seus ATIVOS em tempo real
                Rastreamento em Tempo Real, Alertas Instantâneos, Relatórios Detalhados, Controle de Localização e Monitoramento 24/7.
              </p>

            </div>
            <div aria-hidden="false" className="mt-10 lg:mt-0">
              <img onClick={() => setModal(true)} src="/static/images/trackerPage/mapa_veiculos.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>

      {modal && (
        <PhotoModal
          open={modal}
          setOpen={(value) => setModal(value)}
          url="/static/images/trackerPage/mapa_veiculos.png"
        />
      )}
    </>
  );
}

export default page