"use client"

import AnimatedText from "@/components/animation/page";
import { PhotoModal } from "@/components/photoModal/photoModal";
import { useState } from "react";

const TireLife = () => {

  const [modal, setModal] = useState(false)
  const [url, setUrl] = useState("")

  return (
    <>
      <div className="p-16">
        <div className="flex felx-col items-center justify-center">
          <span
            className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm"
          >
            Descubra
          </span>
        </div>
        <AnimatedText
          once
          text="Módulo de Pneus"
          el="h1"
          className="text-3xl text-center mt-6 font-bold text-gray-700"
        />
        <p className="text-center mt-6 text-lg font-light text-gray-600">
          Introdução ao modulo de Pneus da plataforma.
        </p>
      </div>

      <section className="bg-primary-dark">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:items-center py-4">
            <div>
              <AnimatedText
                once
                text="Gerenciamento dos Pneus"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-white text-center"
              />
              <p className="mt-3 text-lg text-gray-200 text-center">
                Com o gerenciamento de PNEUS do MANFROTA, o responsável consegue ter de forma rápida e simples,
                a situação deste item tão importante na FROTA como: Vida estimada x Real, Custo por Hora ou km x Custo real,
                desgaste por mm e km rodado, Sintomas e Causas de Sucateamento. 
              </p>
            </div>
            <div aria-hidden="true" className="grid grid-cols-3 mt-10 lg:mt-0 gap-3">
              <img 
                onClick={() => {
                  setModal(true);
                  setUrl("/static/images/tires/compra.png");
                }}
                src="/static/images/tires/compra.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
              <img 
                onClick={() => {
                  setModal(true);
                  setUrl("/static/images/tires/importacao.png");
                }}
                src="/static/images/tires/importacao.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
              <img 
                onClick={() => {
                  setModal(true);
                  setUrl("/static/images/tires/mobilizacao.png");
                }}
                src="/static/images/tires/mobilizacao.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
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

export default TireLife