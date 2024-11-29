"use client"

import AnimatedText from "@/components/animation/page"
import { PhotoModal } from "@/components/photoModal/photoModal";

import { useState } from "react";

const Cars = () => {

  const [modal, setModal] = useState(false)
  const [modalImage, setModalImage] = useState(""); // Estado para armazenar a URL da imagem clicada

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setModal(true);
  };
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
          text="CONTROLE DE ROTA"
          el="h1"
          className="text-3xl text-center mt-6 font-bold text-gray-700"
        />
        <p className="text-center mt-6 text-lg font-light text-gray-600">
          Introdução ao processo de monitoramento e <b>GESTÃO DE ROTAS</b> na plataforma
        </p>
      </div>

      <section className="bg-white">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <AnimatedText
                once
                text="Rota"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-gray-700 text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-600 text-center sm:text-left">
                Com o módulo de <b>CONTROLE DE ROTA</b> do <b>TRACKER</b>, você tem acesso a ferramentas completas para monitorar e gerenciar os trajetos de sua frota em tempo real. Esse módulo foi desenvolvido para garantir maior eficiência operacional, segurança e uma visão detalhada de todos os deslocamentos realizados pelos veículos durante as operações.
                <br />
                <br />
                Através do gestor de rotas, é possível acompanhar em tempo real o deslocamento de cada veículo, identificar desvios de rota e visualizar paradas não programadas, tudo em uma interface intuitiva. Além disso, o sistema registra o histórico completo dos trajetos realizados, permitindo análises detalhadas para otimizar os processos logísticos.
                <br />
                <br />
                Com essas funcionalidades, o <b>CONTROLE DE ROTA</b> auxilia na redução de custos, melhoria da produtividade e maior transparência nas operações, garantindo que sua frota siga os caminhos mais eficientes e seguros para alcançar os melhores resultados.
              </p>

            </div>
            <div className="flex flex-wrap justify-center">
              <div aria-hidden="true" className="m-4 w-full max-w-screen-md">
                <img
                  onClick={() => openModal("/static/images/trackerPage/rela.png")} src="/static/images/trackerPage/rela.png"
                  alt="Relatório"
                  className="w-full h-auto rounded-lg shadow-lg dark:bg-gray-500 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>
              <div aria-hidden="true" className="m-4 w-full max-w-screen-md">
                <img
                  onClick={() => openModal("/static/images/trackerPage/relaHori.png")} src="/static/images/trackerPage/relaHori.png"
                  alt="Relatório Horizontal"
                  className="w-full h-auto rounded-lg shadow-lg dark:bg-gray-500 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>
              <div aria-hidden="true" className="m-4 w-full max-w-screen-md">
                <img
                  onClick={() => openModal("/static/images/trackerPage/relaOdo.png")}
                  src="/static/images/trackerPage/relaOdo.png"
                  alt="Relatório Odômetro"
                  className="w-full h-auto rounded-lg shadow-lg dark:bg-gray-500 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>


          </div>
        </div>
      </section>

      {modal && (
        <PhotoModal
          open={modal}
          setOpen={(value) => setModal(value)}
          url={modalImage}
          size="large"
        />
      )}
    </>
  );
}

export default Cars