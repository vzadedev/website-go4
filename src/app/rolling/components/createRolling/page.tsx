"use client"

import AnimatedText from "@/components/animation/page"
import { PhotoModal } from "@/components/photoModal/photoModal";
import { useState } from "react";

const FuelSupply = () => {

  const [modal, setModal] = useState(false)

  return (
    <>
      <section className="bg-primary-dark py-4">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center">
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img onClick={() => setModal(true)} src="/static/images/material/cadMaterial.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
            <div>
              <AnimatedText
                once
                text="Cadastro de Material Rodante"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-white text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-200 text-center sm:text-left">
                Gerencie componentes e checklists do material rodante de forma prática. Organize itens, adicione
                descrições e configure limites e vida útil, otimizando a manutenção dos equipamentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {modal && (
        <PhotoModal
          open={modal}
          setOpen={(value) => setModal(value)}
          url="/static/images/material/cadMaterial.png"
        />
      )}
    </>
  );
}

export default FuelSupply