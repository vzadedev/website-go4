"use client"

import AnimatedText from "@/components/animation/page";

const TireRotation = () => {
  return (
    <>
      <section className="bg-primary-dark py-4">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <AnimatedText
                once
                text="Rodizio de Pneus"
                el="h1"
                className="text-2xl font-bold sm:text-3xl text-white"
              />
              <p className="mt-3 text-lg text-gray-200">
                <b>Aloque</b> os pneus em sua frota, <b>sucateie-os</b> ou <b>jogue-os</b> para recape por meio do método interativo Kanban.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img src="/static/images/tires/rodizio.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TireRotation