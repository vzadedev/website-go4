'use client'

import AnimatedText from '@/components/animation/page';
import { NumberTransition } from '@/components/countUp';

export const Tracker = () => (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

        <div className="max-w-full mb-10 md:mx-auto text-center md:mb-12">
            <p
                className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary-light text-white">
                Projetos
            </p>
            <h2
                className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">

                    <svg viewBox="0 0 52 24" fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-slate-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                        <defs>
                            <pattern id="fdca20a0-aeb4-4caf-ba1b-4351eee42363" x="0" y="0" width=".135"
                                height=".30">
                                <circle cx="1" cy="1" r=".7"></circle>
                            </pattern>
                        </defs>
                        <rect fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)" width="52" height="24"></rect>
                    </svg>

                </span>
                <span className="relative">O </span>
                Tracker Chegou
            </h2>
            <p className="text-base text-gray-700 md:text-lg mt-4">
                O <b>TRACKER</b> é um <b>SOFTWARE</b> inovador destinado à gestão eficiente de frotas, proporcionando uma visão clara e detalhada do desempenho dos veículos e equipamentos.
                Utilizando tecnologia de ponta, o Tracker permite ao gestor realizar análises <b>PRECISAS </b>
                dos dados operacionais, facilitando a tomada de decisões que visam a otimização
                de recursos, a redução de custos e o aumento da produtividade da frota.
            </p>
            <p className="text-base text-gray-700 md:text-lg my-8">
                Com um design intuitivo e funcionalidades personalizáveis, o <b>TRACKER </b>
                se adapta facilmente às demandas específicas de cada negócio, independentemente do setor de atuação.
                Este sistema é ideal para empresas que desejam melhorar o controle e a eficiência de suas operações,
                garantindo que cada ativo seja gerenciado de forma inteligente e eficaz.
            </p>


        </div>

        <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
            <div className="flex flex-col items-center text-center ">
                <div className="sm:mr-4">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-light/10">
                        <svg className="w-12 h-12 text-primary-light" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                    </div>
                </div>
                <div>
                    <AnimatedText
                        once
                        text="Interface Intuitiva"
                        el="h1"
                        className="mb-2 font-semibold leading-5"
                    />
                    <p className="mb-3 text-sm text-gray-900 text-justify">
                        A interface do <b>TRACKER</b> foi projetada para ser amigável e acessível a todos os usuários. Com uma navegação simplificada, você poderá utilizar todas as funcionalidades do software sem complicações.
                    </p>
                    <ul className="mb-4 -ml-1 space-y-2 flex items-start flex-col ">
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg className="w-5 h-5 mt-px text-primary-light" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </span>
                            Menu lateral e superior
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg className="w-5 h-5 mt-px text-primary-light" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </span>
                            Interface dinâmica
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="sm:mr-4">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-light/10">
                        <svg className="w-12 h-12 text-primary-light" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                    </div>
                </div>
                <div>
                    <AnimatedText
                        once
                        text="Facilidade de Uso"
                        el="h1"
                        className="mb-2 font-semibold leading-5"
                    />
                    <p className="mb-3 text-sm text-gray-900 text-justify">
                        O <b>TRACKER</b> oferece uma experiência de uso fluida e eficiente, permitindo que os usuários gerenciem suas frotas com facilidade e rapidez.
                    </p>
                    <ul className="mb-4 -ml-1 space-y-2 flex items-start flex-col">
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg className="w-5 h-5 mt-px text-primary-light" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                                        fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </span>
                            Facilidade de navegação
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg className="w-5 h-5 mt-px text-primary-light" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                                        fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </span>
                            Gestão centralizada
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="sm:mr-4">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-light/10">
                        <svg className="w-12 h-12 text-primary-light" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                    </div>
                </div>
                <div>
                    <AnimatedText
                        once
                        text="Relatórios e Análises Aprofundadas"
                        el="h1"
                        className="mb-2 font-semibold leading-5"
                    />
                    <p className="mb-3 text-sm text-gray-900 text-justify">
                        Com o <b>TRACKER</b>, você tem acesso a relatórios detalhados e análises em tempo real que ajudam a monitorar e otimizar o desempenho da sua frota.
                    </p>
                    <ul className="mb-4 -ml-1 space-y-2 flex items-start flex-col">
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg className="w-5 h-5 mt-px text-primary-light" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                                        fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </span>
                            Planilhas de desempenho
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg className="w-5 h-5 mt-px text-primary-light" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                                        fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </span>
                            Relatórios de eficiência
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg className="w-5 h-5 mt-px text-primary-light" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                                        fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </span>
                            Mapas de operação
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg className="w-5 h-5 mt-px text-primary-light" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                                        fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </span>
                            Dashboards personalizados
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    </div>
);
