import React from 'react';

const PolicesPage = () => {
    return (
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10 bg-gray-100 rounded-lg shadow-lg mt-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                Política de Privacidade
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                A sua privacidade é importante para nós. É política do Manfrota Web respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site{' '}
                <a href="https://www.go4digital.com.br" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Manfrota Web
                </a>, e outros sites que possuímos e operamos.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
                Também informamos por que estamos coletando e como será usado.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis
                para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas{' '}
                <a href="https://politicaprivacidade.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    políticas de privacidade
                </a>.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
            </p>
            <p className="text-gray-700 mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
            </p>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                Compromisso do Usuário
            </h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Manfrota Web oferece no site e com caráter enunciativo, mas não limitativo:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 text-sm sm:text-base lg:text-lg leading-relaxed">
                <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</li>
                <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Manfrota Web, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas que possam causar danos.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                Mais informações
            </h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                Esperamos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base italic text-center mt-8">
                Esta política é efetiva a partir de 31 de julho de 2024 12:16
            </p>
        </div>
    );
};

export default PolicesPage;
