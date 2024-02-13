"use client"

import AnimatedText from "@/components/animation/page"

const EquipmentDocs = () => {
  return (
    <>
      <section className="m-4 md:m-8 bg-white text-gray-700 flex flex-col md:flex-row items-center">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <AnimatedText
            once
            text="Gestão de Documentos e Licenças de sua Frota"
            el="h1"
            className="text-3xl font-bold"
          />
          <p className="dark:text-gray-600">Gestão de Documentos e Licenças Automatizadas</p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2">
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-primary-light">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-center">Tacografo</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-primary-light">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-center">CIV</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-primary-light">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-center">CIPP</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-primary-light">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-center">LICENÇAS (Federais, estaduais e etc.)</h3>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default EquipmentDocs