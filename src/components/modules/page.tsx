'use client'

import AnimatedText from '@/components/animation/page';

import { useRouter } from 'next/navigation'

const OurModules = () => {
  
  const router = useRouter()
  
  return (
    <>
      <main className="min-h-screen w-full h-fit-content flex flex-col items-center justify-center m-0 py-4 bg-white">
        <div className="flex flex-wrap justify-center w-100% md:w-[70%] gap-4">
          {/* PRIMEIRA DIV  */}
          <div className="flex flex-col gap-4 w-[100%] lg:w-[42%] text-center rounded-lg h-[300px] text-slate-900 p-10 mt-10">
            {/* Conteúdo da primeira div */}
            <span className="font-bold text-3xl">Conheça nossos módulos</span>
              Tenha uma breve introdução sobre algumas ferramentas e funcionalidades de cada módulo
          </div>
          {/* PRIMEIRA DIV */}
          {/* PRIMEIRO MODULO */}
          <div className="md:shadow-2xl w-[100%] lg:w-[42%] rounded-lg h-fit p-10">
            <div className='flex justify-between items-center'>
              <div className="flex flex-col">
                <AnimatedText
                  once
                  text="01"
                  el="h1"
                  className="text-gray-700 text-xl font-bold"
                />
                <AnimatedText
                  once
                  text="Frota"
                  el="h1"
                  className="text-blue-700 text-xl font-bold"
                />
              </div>
              {/* <IconButton onClick={() => router.push("/screens/tracker")}>
                <MapIcon sx={{ color: "#1d4ed8" }} />
              </IconButton> */}
            </div>
            <div className="text-gray-500 mt-6 text-center md:text-left md:w-[50%]">
              Como funciona o cadastro de frota, composição do custo hora destes e entre outras funcionalidades
            </div>
            <div className="mt-10">
              <div className="text-gray-600">
                <span className="text-blue-700 text-lg font-bold">01</span>
                <button onClick={() => router.push("/screens/fleet")} className="ml-4 hover:underline hover:cursor-pointer">
                  Cadastro de Equipamentos
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-blue-700 text-lg font-bold">02</span>
                <button onClick={() => router.push("/screens/fleet")} className="ml-4 hover:underline hover:cursor-pointer">
                  Composição Custo Hora
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600 flex flex-row">
                <span className="text-blue-700 text-lg font-bold">03</span>
                <button onClick={() => router.push("/screens/fleet")} className="ml-4 text-left hover:underline hover:cursor-pointer">
                  Gestão de Documentos ( Tacógrafo )
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="flex justify-between text-gray-600">
                <div>
                  <span className="text-blue-700 text-lg font-bold">04</span>
                  <button onClick={() => router.push("/screens/fleet")} className="ml-4 hover:underline hover:cursor-pointerhover:underline hover:cursor-pointer">
                    Painel de Equipamentos
                  </button>
                </div>
              </div>
            </div>
            {/* Conteúdo da segunda div */}
          </div>
          {/* PRIMEIRO MODULO */}

          {/* SEGUNDO MODULO */}
          <div className="md:shadow-2xl lg:mt-[-200px] rounded-lg w-[100%] lg:w-[42%] h-fit p-10">
            <div className="flex flex-col">
              <AnimatedText
                once
                text="02"
                el="h1"
                className="text-gray-700 text-xl font-bold"
              />
              <AnimatedText
                once
                text="Controle de Horas"
                el="h1"
                className="text-green-700 text-xl font-bold"
              />
            </div>
            <div className="text-gray-500 mt-6 text-center md:text-left md:w-[50%]">
              Entenda como funciona o controle de horas rodadas pelos equipamentos e como administra-las.
            </div>
            <div className="mt-10">
              <div className="text-gray-600 flex flex-row">
                <span className="text-green-700 text-lg font-bold">01</span>
                <button onClick={() => router.push("/screens/appropriation")} className="ml-4 text-left hover:underline hover:cursor-pointerhover:underline hover:cursor-pointer">
                  Apropriação ( Horas Produtivas e Improdutivas )
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600 flex flex-row">
                <span className="text-green-700 text-lg font-bold">02</span>
                <button onClick={() => router.push("/screens/appropriation")} className="ml-4 text-left hover:underline hover:cursor-pointerhover:underline hover:cursor-pointer">
                  Apropriação/Captura de Horas Automáticas
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600 flex flex-row">
                <span className="text-green-700 text-lg font-bold">03</span>
                <button onClick={() => router.push("/screens/appropriation")} className="ml-4 text-left hover:underline hover:cursor-pointerhover:underline hover:cursor-pointer">
                  Mapa de Apropriações
                </button>
              </div>
            </div>
            {/* Conteúdo da segunda div */}
          </div>
          {/* SEGUNDO MODULO */}

          {/* TERCEIRO MODULO */}
          <div className="md:shadow-2xl w-[100%] lg:w-[42%] rounded-lg h-fit p-10">
            <div className="flex flex-col">
              <AnimatedText
                once
                text="03"
                el="h1"
                className="text-gray-700 text-xl font-bold"
              />
              <AnimatedText
                once
                text="Manutenção"
                el="h1"
                className="text-purple-700 text-xl font-bold"
              />
            </div>
            <div className="text-gray-500 mt-6 text-center md:text-left md:w-[50%]">
              Obtenha informações iniciais sobre a funcionalidade do módulo de manutenções.
            </div>
            <div className="mt-10">
              <div className="text-gray-600 flex flex-row">
                <span className="text-purple-700 text-lg font-bold">01</span>
                <button onClick={() => router.push("/screens/maintenance")} className="ml-4 text-left hover:underline hover:cursor-pointer">
                  Start Automática de Manutenções Preventivas e Corretivas
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              {/* <div className="text-gray-600">
                <span className="text-purple-700 text-lg font-bold">02</span>
                <span className="ml-4 hover:underline hover:cursor-pointer">
                  Indicador de Custo Manutenção Real x Manutenção Padrão
                </span>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" /> */}

              <div className="text-gray-600 flex flex-row">
                <span className="text-purple-700 text-lg font-bold">02</span>
                <button onClick={() => router.push("/screens/maintenance")} className="ml-4 text-left hover:underline hover:cursor-pointer">
                  Mapa de Previsão de Manutenções Preventivas
                </button>
              </div>
            </div>
          </div>
          {/* TERCEIRO MODULO */}

          {/* QUARTO MODULO */}
          <div className="md:shadow-2xl lg:mt-[-90px] rounded-lg w-[100%] lg:w-[42%] h-fit p-10">
            <div className="flex flex-col">
              <AnimatedText
                once
                text="04"
                el="h1"
                className="text-gray-700 text-xl font-bold"
              />
              <AnimatedText
                once
                text="Combustíveis e Lubrificantes"
                el="h1"
                className="text-orange-700 text-xl font-bold"
              />
            </div>
            <div className="text-gray-500 mt-6 text-center md:text-left md:w-[50%]">
              Explore como funciona nosso controle de combustivel e lubrificante e o consumo destes pela sua frota.
            </div>
            <div className="mt-10">
              <div className="text-gray-600">
                <span className="text-orange-700 text-lg font-bold">01</span>
                <button onClick={() => router.push("/screens/fuel")} className="ml-4 text-left hover:underline hover:cursor-pointer">
                  Gestão de Estoque Físico
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-orange-700 text-lg font-bold">02</span>
                <button onClick={() => router.push("/screens/fuel")} className="ml-4 hover:underline hover:cursor-pointer">
                  Abastecimentos
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-orange-700 text-lg font-bold">03</span>
                <button onClick={() => router.push("/screens/fuel")} className="ml-4 hover:underline hover:cursor-pointer">
                  Dashboards
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="flex justify-between text-gray-600">
                <div>
                  <span className="text-orange-700 text-lg font-bold">04</span>
                  <button onClick={() => router.push("/screens/fuel")} className="ml-4 hover:underline hover:cursor-pointer">
                    Relatórios
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* QUARTO MODULO */}

          {/* QUINTO MODULO */}
          <div className="md:shadow-2xl w-[100%] lg:w-[42%] rounded-lg h-fit p-10">
            <div className="flex flex-col">
              <AnimatedText
                once
                text="05"
                el="h1"
                className="text-gray-700 text-xl font-bold"
              />
              <AnimatedText
                once
                text="Pneus e Material Rodante"
                el="h1"
                className="text-red-700 text-xl font-bold"
              />
            </div>
            <div className="text-gray-500 mt-6 text-center md:text-left md:w-[50%]">
              Veja como funciona a gestão de pneus de nosso sistema.
            </div>
            <div className="mt-10">
              <div className="text-gray-600">
                <span className="text-red-700 text-lg font-bold">01</span>
                <button onClick={() => router.push("/screens/tire")} className="ml-4 hover:underline hover:cursor-pointer">
                  Cadastro de Pneus
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-red-700 text-lg font-bold">02</span>
                <button onClick={() => router.push("/screens/tire")} className="ml-4 hover:underline hover:cursor-pointer">
                  Gestão de Movimentação
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600 flex flex-row">
                <span className="text-red-700 text-lg font-bold">03</span>
                <button onClick={() => router.push("/screens/tire")} className="ml-4 hover:underline hover:cursor-pointer">
                  Rodizio de Pneus
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-red-700 text-lg font-bold">04</span>
                <button onClick={() => router.push("/screens/tire")} className="ml-4 hover:underline hover:cursor-pointer">
                  Dashboard
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-red-700 text-lg font-bold">05</span>
                <button onClick={() => router.push("/screens/tire")} className="ml-4 hover:underline hover:cursor-pointer">
                  Visualização em Tabela
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600 flex flex-row">
                <span className="text-red-700 text-lg font-bold">06</span>
                <button onClick={() => router.push("/screens/tire")} className="ml-4 text-left hover:underline hover:cursor-pointer">
                  Visualização Amplicada / Gestão de Custos
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600">
                <span className="text-red-700 text-lg font-bold">07</span>
                <button onClick={() => router.push("/screens/tire")} className="ml-4 hover:underline hover:cursor-pointer">
                  Relatórios
                </button>
              </div>
            </div>
          </div>
          {/* QUINTO MODULO */}

          {/* SEXTO MODULO */}
          <div className="md:shadow-2xl lg:mt-[-200px] rounded-lg w-[100%] lg:w-[42%] h-fit p-10">
            <div className="flex flex-col">
              <AnimatedText
                once
                text="06"
                el="h1"
                className="text-gray-700 text-xl font-bold"
              />
              <AnimatedText
                once
                text="Gestão de Locação de Frota - Desktop"
                el="h1"
                className="text-yellow-400 text-xl font-bold"
              />
            </div>
            <div className="text-gray-500 mt-6 text-center md:text-left md:w-[50%]">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Vestibulum vitae diam neque.
              Phasellus ac augue porttitor
              diam bibendum fringilla.
            </div>
            <div className="mt-10">
              <div className="text-gray-600 flex flex-row">
                <span className="text-yellow-400 text-lg font-bold">01</span>
                <button onClick={() => router.push("/screens/location")} className="ml-4 hover:underline hover:cursor-pointer">
                  Gestão de Locação Locador
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600 flex flex-row">
                <span className="text-yellow-400 text-lg font-bold">02</span>
                <button onClick={() => router.push("/screens/location")} className="ml-4 hover:underline hover:cursor-pointer">
                  Gestão de Locação Locatário
                </button>
              </div>
            </div>
          </div>
          {/* SEXTO MODULO */}

          {/* SETIMO MODULO */}
          <div className="md:shadow-2xl w-[100%] lg:w-[42%] rounded-lg h-fit p-10">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <AnimatedText
                  once
                  text="07"
                  el="h1"
                  className="text-gray-700 text-xl font-bold"
                />
                <AnimatedText
                  once
                  text="Rastreamento"
                  el="h1"
                  className="text-pink-700 text-xl font-bold"
                />
              </div>
            </div>
            <div className="text-gray-500 mt-6 text-center md:text-left md:w-[50%]">
              Entenda como administramos a localização dos equipamentos de sua frota pela latitude e longitude emitida pelos seus rastreadores.
            </div>
            <div className="mt-10">
              <div className="text-gray-600 flex flex-row">
                <span className="text-pink-700 text-lg font-bold">01</span>
                <button onClick={() => router.push("/screens/tracker")} className="ml-4 text-left hover:underline hover:cursor-pointer">
                  Mapa de Localização da Frota
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600 flex flex-row">
                <span className="text-pink-700 text-lg font-bold">02</span>
                <button onClick={() => router.push("/screens/tracker")} className="ml-4 text-left hover:underline hover:cursor-pointer">
                  Rastreamento Híbrido ( GPRS E SAT )
                </button>
              </div>
              <hr className="border-b border-dashed border-gray-300 my-2" />

              <div className="text-gray-600 flex flex-row">
                <span className="text-pink-700 text-lg font-bold">03</span>
                <button onClick={() => router.push("/screens/tracker")} className="ml-4 text-left hover:underline hover:cursor-pointer">
                  Captura de Horas/KM Automática
                </button>
              </div>
            </div>
          </div>
          {/* SETIMO MODULO */}
        </div>
      </main>
    </>
  )
}

export default OurModules;
