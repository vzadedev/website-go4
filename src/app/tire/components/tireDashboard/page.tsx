"use client"

import AnimatedText from "@/components/animation/page";
import { PhotoModal } from "@/components/photoModal/photoModal";
import { useState } from "react";

const TireDashboard = () => {

  const [modal, setModal] = useState(false)
  const [url, setUrl] = useState("")

  return (
    <>
      <section className="bg-white">
        <div className="container max-w-xl p-6 mx-auto lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl text-gray-700 text-center sm:text-left">Dashboard</h3>
              <p className="mt-3 text-lg text-gray-600 text-center sm:text-left">
                Possuimos um dashboard voltado á gestão de pneus, com diversos gráficos e interatividades, como visualização destes em tabela e planilhas.
              </p>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img 
                onClick={() => {
                  setModal(true);
                  setUrl("/static/images/tires/dashboard.png");
                }}
                src="/static/images/tires/dashboard.png" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-dark">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center py-4">
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img 
                onClick={() => {
                  setModal(true);
                  setUrl("/static/images/tires/tabela.png");
                }}
                src="/static/images/tires/tabela.png" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
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
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <AnimatedText
                once
                text="Visualização de Pneus por Status"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-gray-700 text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-600 text-center sm:text-left">
                Além das visualização em tabela, no gráfico de pneus por status possuimos uma visualização subsequente de gráficos dos pneus ordenados por medida, bem como o <b>Custo Real</b> e o <b>Custo Estimado</b> por Medida.
              </p>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img 
                onClick={() => {
                  setModal(true);
                  setUrl("/static/images/tires/visualizacaostatu.png");
                }}
                src="/static/images/tires/visualizacaostatu.png" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-dark">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center">
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img 
              onClick={() => {
                setModal(true);
                setUrl("/static/images/tires/Relatorio.png");
              }}
              src="/static/images/tires/Relatorio.png" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
            <div>
              <AnimatedText
                once
                text="Relatórios"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-white text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-200 text-center sm:text-left">
                Com nossos relatórios interativos e com possibilidade de aplicação de diferentes analise via utilização
                de filtros, o gestor consegue identificar de forma rápida e simples, quais pneus precisam ser desinstalados
                para envio a recapadora, evitando o sucateamento dos pneus por desgaste excessivo da banda de rodagem.
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

export default TireDashboard