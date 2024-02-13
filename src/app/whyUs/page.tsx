'use client'

import Image from 'next/image'
import AnimatedText from '@/components/animation/page';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const WhyUs = () => {

  return (
    <div id="whyUs" className="relative min-h-screen bg-gray-50 px-6 pt-24 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">

        <div className="text-center">
          <AnimatedText
            once
            text="Porque nós?"
            el="h1"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          />
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Diferencias e características de nós.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/whyUs/inovacao.jpg" 
                alt="" 
                width={500}
                height={100}
                style={{
                  maxWidth: "100%",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <a href="#" className="mt-2 block">
                  <AnimatedText
                    once
                    text="Inovação constante"
                    el="h1"
                    className="text-xl font-semibold text-gray-900"
                  />
                  <p className="mt-3 text-base text-gray-500">Buscamos constantemente aprimorar nossas soluções, 
                    incorporando as mais recentes tecnologias e práticas inovadoras para oferecer 
                    sistemas de gestão de frotas sempre atualizados e eficientes.
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/whyUs/ambiental.jpg" 
                alt="" 
                width={500}
                height={100}
                style={{
                  maxWidth: "100%",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <AnimatedText
                  once
                  text="Sustentabilidade Ambiental"
                  el="h1"
                  className="text-xl font-semibold text-gray-900"
                />
                <p className="mt-3 text-base text-gray-500">Comprometemo-nos a desenvolver soluções que 
                promovam a sustentabilidade, reduzindo o impacto ambiental das operações de frota por meio 
                de otimização de rotas, eficiência energética e minimização de emissões.
                </p>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/whyUs/cliente.jpg" 
                alt="" 
                width={500}
                height={100}
                style={{
                  maxWidth: "100%",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <AnimatedText
                  once
                  text="Foco no Cliente"
                  el="h1"
                  className="text-xl font-semibold text-gray-900"
                />
                <p className="mt-3 text-base text-gray-500">Colocamos nossos clientes no centro
                  de tudo o que fazemos. Buscamos compreender profundamente suas necessidades e oferecer
                  soluções personalizadas que agreguem valor real aos seus negócios.
                </p>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/whyUs/transparencia.jpg" 
                alt="" 
                width={500}
                height={100}
                style={{
                  maxWidth: "100%",
                  height: '300px'
                }}  
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <AnimatedText
                  once
                  text="Transparência e Integridade"
                  el="h1"
                  className="text-xl font-semibold text-gray-900"
                />
                <p className="mt-3 text-base text-gray-500">Operamos com total transparência e
                  integridade em todas as interações, promovendo a confiança mútua com clientes, colaboradores e parceiros.
                </p>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/whyUs/eficiencia.jpg" 
                alt="" 
                width={500}
                height={100}
                style={{
                  maxWidth: "100%",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <AnimatedText
                  once
                  text="Eficiência Operacional"
                  el="h1"
                  className="text-xl font-semibold text-gray-900"
                />
                <p className="mt-3 text-base text-gray-500">Nosso compromisso é otimizar a eficiência operacional
                  para nossos clientes, ajudando-os a reduzir custos, aumentar a produtividade e melhorar a gestão de recursos.
                </p>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/whyUs/parceria.jpg" 
                alt="" 
                width={500}
                height={100}
                style={{
                  maxWidth: "100%",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <AnimatedText
                  once
                  text="Colaboração e Parcerias"
                  el="h1"
                  className="text-xl font-semibold text-gray-900"
                />
                <p className="mt-3 text-base text-gray-500">Valorizamos parcerias estratégicas e colaborações efetivas,
                 reconhecendo que o sucesso é potencializado quando trabalhamos em conjunto com nossos clientes e outros stakeholders.
                </p>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/whyUs/desenvolvimento.jpg" 
                alt="" 
                width={500}
                height={100}
                style={{
                  maxWidth: "100%",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <AnimatedText
                  once
                  text="Desenvolvimento Profissional"
                  el="h1"
                  className="text-xl font-semibold text-gray-900"
                />
                <p className="mt-3 text-base text-gray-500">Investimos no desenvolvimento contínuo de nossos colaboradores, 
                  incentivando o aprendizado, a criatividade e a inovação para garantir que nossa equipe esteja sempre na 
                  vanguarda da tecnologia e das melhores práticas.
                </p>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/whyUs/mar.jpg" 
                alt="" 
                width={500}
                height={100}
                style={{
                  maxWidth: "100%",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <AnimatedText
                  once
                  text="Responsabilidade Social"
                  el="h1"
                  className="text-xl font-semibold text-gray-900"
                />
                <p className="mt-3 text-base text-gray-500">Contribuímos para a comunidade e sociedade em geral,
                  promovendo iniciativas sociais e participando ativamente de causas que tenham impacto positivo.
                </p>
              </div>
            </div>
          </div>

          <div className="flex hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <Image 
                src="/static/images/whyUs/tech.jpg" 
                alt="" 
                width={500}
                height={100}
                style={{
                  maxWidth: "100%",
                  height: '300px'
                }}   
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <AnimatedText
                  once
                  text="Tecnologias de Ponta"
                  el="h1"
                  className="text-xl font-semibold text-gray-900"
                />
                <p className="mt-3 text-base text-gray-500"> Na vanguarda da excelência tecnológica, nossa empresa
                 investe continuamente em tecnologias de ponta para oferecer soluções de última geração aos nossos
                  clientes. Nós nos comprometemos em permanecer na vanguarda do setor, adotando e implementando as
                   mais recentes e atuais tecnologias disponíveis.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyUs;
