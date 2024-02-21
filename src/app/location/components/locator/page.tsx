"use client"

import AnimatedText from "@/components/animation/page"
import { PhotoModal } from "@/components/photoModal/photoModal";

import { useState } from "react";

const Locator = () => {

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
          text="GESTÃO DE LOCAÇÃO DE FROTA"
          el="h1"
          className="text-3xl text-center mt-6 font-bold text-gray-700"
        />
        <p className="text-center mt-6 text-lg font-light text-gray-600">
          Introdução ao processo de <b>Locação</b> dos equipamentos na plataforma.
        </p>
      </div>

      <section className="bg-white">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <AnimatedText
                once
                text="Locador"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-gray-700 text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-600 text-center sm:text-left">
              Com o modulo de <b>GESTÃO DE LOCAÇÃO DE FROTAS</b> do <b>MANFROTA</b> o Locador e Locatário tem durante o período de locação a gestão de todos os itens necessários para um fechamento de medição no final do mês com apenas um click.
              <br/> 
              <br/> 
              Com o gestor de locação é possível identificar as horas ou km trabalhado dos equipamentos dia a dia, o consumo de diesel e lubrificante utilizado na operação e ordens de manutenção preventivas e corretivas executadas dentro do período.

              </p>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img onClick={() => setModal(true)} src="/static/images/locator/locator1.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>
      
      {modal && (
        <PhotoModal 
          open={modal} 
          setOpen={(value) => setModal(value)} 
          url="/static/images/locator/locator1.jpg"
        />
      )}
    </>
  );
}

export default Locator