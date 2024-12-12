"use client";
import { Close } from "@mui/icons-material";
import { Card, CardFooter } from "@nextui-org/card";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useMemo } from "react";
import { GlobeDemo } from "../globo/page";
import { CoverDemo } from "@/components/titleEffectTracker/titleEffectTracker";

const TrackerPage = () => {
  const router = useRouter();
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const images = [
    { id: 1, src: '/static/images/trackerPage/mapa.png', btn: 'Ver completo', title: 'Mapa', description: 'Monitoramento de frota', description_1: 'Com o sistema de Monitoramento de Frotas GO4 TRACKER, você gerencia todos os seus ATIVOS, com praticidade e precisão, tudo isso na palma da sua mão. Acesse informações em tempo real, acompanhamento de rotas, velocidade. Garanta a segurança do seu patrimônio. Nossa solução oferece uma interface intuitiva e simples, com indicadores e dashboard que facilita na tomada de decisão rápida e com dados confiáveis..', route: "/screens/tracker-content/mapa", details: 'Informações detalhadas sobre a locação de veículos.' },
    { id: 2, src: '/static/images/trackerPage/controle.png', btn: 'Ver completo', title: 'Controle de Rota', description: 'Controle de horas e quilômetro  trabalhados', description_1: 'O GO4 Tracker oferece uma solução robusta para o controle de rotas dos ATIVOS. Com acesso em tempo real, você pode monitorar cada movimento de sua FROTA, garantindo segurança e eficiência nas operações. Além disso, nossa PLATAFORMA permite ajustes de rotas conforme necessário, otimizando o desempenho e economizando tempo e recursos.', route: "/screens/tracker-content/controleRota", details: 'Veja as rotas e detalhes completos do trajeto.' },
    { id: 3, src: '/static/images/trackerPage/dashboard.png', btn: 'Ver completo', title: 'Dashbord', description: 'Gráficos de acompanhamento de velocidade', description_1: 'Com o Dashboard da GO4 Tracker, visualize informações completas da sua frota em um único lugar. Monitore indicadores de desempenho, identifique oportunidades de melhoria e acompanhe métricas importantes em tempo real. Nossa interface moderna e intuitiva facilita a gestão estratégica, proporcionando controle e eficiência para o seu negócio, reduza seus custos com nossas soluções (combustível, pneus, manutenção, checklist e outros).', route: "/screens/tracker-content/dashboard", details: 'Dashboards Personalizados.' },
    { id: 4, src: '/static/images/trackerPage/relatorio.png', btn: 'Ver completo', title: 'Relatório', description: 'Movimento por ponto, controle de velocidade', description_1: 'Com o módulo de Relatório da GO4 Tracker, obtenha dados detalhados sobre o desempenho da sua frota. Gere relatórios personalizados, analise histórico de rotas, consumo de combustível e muito mais. Nossa ferramenta permite identificar padrões, reduzir custos e tomar decisões baseadas em dados com praticidade e precisão', route: "/screens/tracker-content/relatorios", details: 'Ferramentas para gerenciar e monitorar toda a frota.' },
  ];

  const handleExpand = (id: any) => {
    setExpandedCard(id === expandedCard ? null : id);
  };

  const handleClose = () => {
    setExpandedCard(null);
  };

  // Renderiza memoizado para evitar recarga do globo
  const renderGlobeDemo = useMemo(() => <GlobeDemo />, []);

  return (
    <main onClick={handleClose} id="trackerSection" className=" flex-col min-h-[100vh] py-5 gap-4 bg-[#001a2f] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="md:flex-row">
        <div className="flex flex-col sm:flex-auto md:grid md:grid-cols-2 text-center ">
          <div className="text-white flex flex-col text-center text-5xl md:text-4xl md:justify-center  lg:justify-center ">
            <div className="flex justify-center items-center">
              <CoverDemo />
            </div>
            <div className="flex text-sm flex-row justify-center items-center  ">
              <div className="p-1 text-sm mr-8">
                <h1 className="font-bold text-xl text-start">Gerenciamento</h1>
                <p className="text-start ml-5">Cadastro de Rota</p>
                <p className="text-start ml-5">Cadastro de Veículo</p>
                <p className="text-start ml-5">Monitoramento de Frota</p>
                <p className="text-start ml-5 mb-5">Gestão de Clientes</p>
                
                <h1 className="font-bold text-2xl text-start">Dashboard</h1>
                <p className="text-start ml-5">Velocidade Máxima</p>
                <p className="text-start ml-5">Velocidade Mínima</p>
                <p className="text-start ml-5">Histórico de Viagens</p>
                <p className="text-start ml-5 mb-5">Alertas Ativos</p>
                
                <h1 className="font-bold text-2xl text-start">Relatórios</h1>
                <p className="text-start ml-5">Monitoramento</p>
                <p className="text-start ml-5">Velocidade</p>
                <p className="text-start ml-5">Trajeto</p>
                <p className="text-start ml-5 mb-5">Outros</p>
              </div>
              <div className="text-sm">
                <h1 className="font-bold text-xl text-start">Otimização Operacional</h1>
                <p className="text-start ml-5">Análise de Desempenho</p>
                <p className="text-start ml-5">Planejamento de Rotas</p>
                <p className="text-start ml-5">Previsão de Manutenção</p>
                <p className="text-start ml-5 mb-5">Redução de Custos Operacionais</p>

                <h1 className="font-bold text-2xl text-start">Segurança</h1>
                <p className="text-start ml-5">Alertas Personalizados</p>
                <p className="text-start ml-5">Cercas Eletrônicas</p>
                <p className="text-start ml-5">Gestão Operacional</p>
                <p className="text-start ml-5 mb-5">Comportamento</p>

                <h1 className="font-bold text-2xl text-start">Indicadores</h1>
                <p className="text-start ml-5">Custos</p>
                <p className="text-start ml-5">Operacional</p>
                <p className="text-start ml-5">Utilização</p>
                <p className="text-start ml-5 mb-5">Jornada</p>

              </div>

            </div>
          </div>
          <div className=" ">
            <div>{renderGlobeDemo}</div>
          </div>
        </div>
      </div>
      <div className="relative grid grid-cols-12 gap-4 p-5 md:relative max-[768px]:grid-cols-12 max-[1024px]:grid-cols-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="col-span-12 md:col-span-6 lg:col-span-3 relative "
            onMouseLeave={() => setHoveredCard(null)}
            onClick={(e) => {
              e.stopPropagation();
              handleExpand(img.id);
            }}
          >
            <Card
              radius="lg"
              className={`border-none border-2 ${expandedCard === img.id || hoveredCard === img.id ? "border-green-600 transform scale-110" : "border-green-600"} `}
            >
              <Image
                className="rounded-md w-full cursor-pointer "
                src={img.src}
                width={500}
                height={100}
                style={{ maxWidth: "full", height: "500px" }}
                alt={img.title}
              />
              <CardFooter className="absolute flex-col flex bg-transparent bottom-0 z-10 border-default-600 mb-10 ">
                <p className="text-white font-medium uppercase text-large">{img.title}</p>
                <p className="text-white/60 text-sm mb-2">{img.description}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleExpand(img.id);
                  }}
                  className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 ease-in-out mt-2"
                >
                  Saber Mais
                </button>
              </CardFooter>
            </Card>

            <AnimatePresence>
              {expandedCard === img.id && (
                <motion.div
                  initial={{ opacity: 0, x: img.id === 4 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: img.id === 4 ? -20 : 20 }}
                  transition={{ duration: 0.3 }}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`absolute top-0 ${img.id === 4 || img.id === 2 ? "sm:right-full sm:mr-4" : "sm:left-full sm:ml-4"} w-full h-full bg-white  p-4 shadow-lg rounded-md text-black z-20 `}
                >
                  <button
                    onClick={() => setExpandedCard(null)}
                    className="absolute top-2 right-2 text-gray-500"
                  >
                    <Close className="hover:text-red-500 transition-colors duration-300" />
                  </button>
                  <div className="flex flex-col p-4 rounded-md ">
                    <h3 className="text-lg font-bold text-gray-800">{img.title}</h3>
                    <div className="mt-10 text-large ">
                      <h1 className="text-xl font-bold mt-1 text-gray-600">
                        {img.details}
                      </h1>
                    </div>
                    <div className="mt-15">
                      <p className="text-sm mt-2 text-gray-600">{img.description_1}</p>
                    </div>
                    <button
                      onClick={() => router.push(img.route)}
                      className="animate-bounce mt-10 bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 ease-in-out"
                    >
                      {img.btn}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TrackerPage;
