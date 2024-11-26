"use client"

import AnimatedText from "@/components/animation/page"
import { PhotoModal } from "@/components/photoModal/photoModal";
import { useState } from "react";

const EditRolling = () => {
  const [modal, setModal] = useState(false)
  return (
    <>
      <section className="bg-white">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <AnimatedText
                once
                text="Edição de Material Rodante"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-gray-700 text-center sm:text-left"
              />
              <p className="mt-3 text-lg text-gray-600 text-center sm:text-left">
                Personalize os detalhes do material rodante, ajustando limites, valores padrão
                e vida útil dos componentes. Com essa funcionalidade, mantenha um controle preciso
                para otimizar a manutenção e desempenho dos equipamentos
              </p>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img onClick={() => setModal(true)} src="/static/images/material/editMaterial.png" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-gray-500 filter grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>

      {modal && (
        <PhotoModal
          open={modal}
          setOpen={(value) => setModal(value)}
          url="/static/images/material/editMaterial.png"
        />
      )}
    </>
  );
}

export default EditRolling