"use client"
export default function Page() {

    return (
        <div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div className="grid ">
                        <div className="flex justify-center text-5xl uppercase">
                            <h1>Data Inicio e fim</h1>
                        </div>
                        <div className="mt-10">

                            <img src="/static/images/trackerpage/relaData.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
                        </div>
                        <p className="mt-3 text-lg  text-center sm:text-left">
                            O módulo permite gerar relatórios personalizados das rotas, com a opção de selecionar o período desejado, incluindo dias, horas e minutos específicos. Essa funcionalidade facilita análises detalhadas para otimizar operações e melhorar a gestão dos trajetos.
                        </p>

                    </div>
                </div>
            </section>
        </div>
    )
}

