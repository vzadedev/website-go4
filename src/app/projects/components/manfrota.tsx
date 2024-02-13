'use client'

import AnimatedText from '@/components/animation/page';
import { NumberTransition } from '@/components/countUp';

export const Manfrota = () => (
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

                    <span className="relative">O </span>
                </span>
                que é o Manfrota
            </h2>
            <p className="text-base text-gray-700 md:text-lg mt-4">
                <b className='text-primary-light'>MANFROTA</b> é um <b>SOFTWARE</b> voltado para gestão de FROTAS (maquinas, caminhões e veículos em geral), 
                desenvolvido nas ferramentas mais modernas do mercado, possibilita ao gestor uma análise <b>EFICAZ </b> 
                dos indicadores para uma tomada de decisão mais assertiva, visando a redução dos custos e melhor 
                gerenciamento dos <b>ATIVOS</b>.
            </p>
            <p className="text-base text-gray-700 md:text-lg my-8">
                O <b>MANFROTA</b> é totalmente personalizável, pronto para ser adaptado às necessidades específicas de cada 
                cliente e parceiro. Como um gerenciador de frotas versátil, ele é capaz de atender a qualquer setor
                de atividade que envolva máquinas e equipamentos. Com o <b>MANFROTA</b>, você pode contar com um serviço 
                totalmente adaptado às suas exigências, garantindo eficiência e praticidade em sua gestão de frota.
            </p>

        </div>

        <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
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
                        text="Interface Intuitiva"
                        el="h1"
                        className="mb-2 font-semibold leading-5"
                    />
                    <p className="mb-3 text-sm text-gray-900 text-justify">
                        Nossa interface foi projetada para ser amigável e fácil de usar. Não importa
                        o nível de experiência do usuário, você poderá navegar pelo Manfrota sem dificuldades,
                        economizando tempo e minimizando a curva de aprendizado.
                    </p>
                    <ul className="mb-4 -ml-1 space-y-2 flex items-start flex-col">
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
                <div className="sm:mr-4 ">
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
                        Com recursos intuitivos e fluxos de trabalho simplificados, o Manfrota
                        torna a gestão de frotas e equipamentos uma tarefa simples e direta com apenas alguns cliques.
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
                        text="Relatórios e Planilhas Dinâmicas"
                        el="h1"
                        className="mb-2 font-semibold leading-5"
                    />
                    <p className="mb-3 text-sm text-gray-900 text-justify">
                        Gerencie o desempenho da sua frota e equipamentos
                        com nossos relatórios e planilhas dinâmicas.
                    </p>
                    <ul className="mb-4 -ml-1 space-y-2 flex items-start flex-col">
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg className="w-5 h-5 mt-px text-primary-light" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                                        fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </span>
                            Planilhas de todas tabelas
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg className="w-5 h-5 mt-px text-primary-light" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                                        fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </span>
                            Relatórios
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg className="w-5 h-5 mt-px text-primary-light" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                                        fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </span>
                            Mapas de controle
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg className="w-5 h-5 mt-px text-primary-light" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                                        fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </span>
                            Dashboards
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
);
