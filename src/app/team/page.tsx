'use client'

import AnimatedText from '@/components/animation/page';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const OurTeam = () => {
  const languages = [
    {
      icon: '/static/images/languages/React.png',
      label: 'React JS',
      text: 'O React JS foi o framework escolhido para criação e adequação do Manfrota Web. Ele tem como foco  a criação de interfaces de usuário em páginas web.'
    },
    {
      icon: '/static/images/languages/NextJS.png',
      label: 'Next JS',
      text: 'Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.'
    },
    {
      icon: '/static/images/languages/Typescript.png',
      label: 'Typescript',
      text: 'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.'
    },
    {
      icon: '/static/images/languages/NodeJS.png',
      label: 'NodeJS',
      text: 'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.'
    },
    {
      icon: '/static/images/languages/JavascriptLogo.png',
      label: 'JavaScript',
      text: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web'
    },
    {
      icon: '/static/images/languages/NestJS.png',
      label: 'NestJS',
      text: 'O NestJS é um framework back-end que auxilia o desenvolvimento de aplicações eficientes. escaláveis e confiáveis em cima do Node. js. O NestJS utiliza como padrão TypeScript e possui uma sintaxe parecida com Angular.'
    },
    {
      icon: '/static/images/languages/windev-mobile.png',
      label: 'Windev',
      text: 'Utilizado para nosso sistema desktop, o Windev é um sistema completo e bastante útil que permite com que as pessoas desenvolvam outros sistemas. Este tipo de ambiente oferece uma série de vantagens para os programadores o fato de oferecer a possibilidade de desenvolver outros sistemas de baixo custo, com uma maior velocidade de desenvolvimento.'
    },
    {
      icon: '/static/images/languages/Digitalocean.png',
      label: 'DigitalOcean',
      text: 'A DigitalOcean um provedor de hospedagem em nuvem exclusivo, que oferece serviços de computação em nuvem para entidades de negócios para que possam se escalar implantando aplicativos DigitalOcean que funcionam paralelamente em vários servidores em nuvem sem comprometer o desempenho'
    },
    {
      icon: '/static/images/languages/awsLogo.png',
      label: 'Amazon AWS',
      text: 'Amazon Web Services, também conhecido como AWS, é uma plataforma de serviços de computação em nuvem, que formam uma plataforma de computação na nuvem oferecida pela Amazon. Os serviços são oferecidos em várias áreas geográficas distribuídas pelo mundo.'
    },
    {
      icon: '/static/images/languages/Kafka.png',
      label: 'Kafka',
      text: 'Apache Kafka é uma plataforma open-source de processamento de streams desenvolvida pela Apache Software Foundation, escrita em Scala e Java. O projeto tem como objetivo fornecer uma plataforma unificada, de alta capacidade e baixa latência para tratamento de dados em tempo real.'
    },
  ]


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3 ,
    // centerMode: true,
    // centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <main id="team" className="-z-10 flex flex-row justify-center min-h-screen items-center w-full bg-white ">
      <div className="flex flex-col text-center justify-between w-[85%] p-4 gap-2 my-24">

        <div className='flex flex-col text-center w-full pt-0 gap-8'>
          <AnimatedText
            once
            text="Nosso time"
            el="h1"
            className="text-3xl font-bold text-gray-700"
          />
          <p>Contamos com um time multidisciplinar de <b>especialistas</b> com vasta
            experiência no segmento da Manutenção,oferecendo serviços de <b>assessoria,</b>
            <b> consultoria,</b> <b> treinamento,</b>
            <b> desenvolvimento</b> e <b>implantação</b> de sistemas
            de gerenciamento para empresas como <b>Construtoras,</b> <b>Mineradoras,</b> <b>Transportadoras,</b> <b>Agroindústrias</b> e <b>Frotistas em geral.</b></p>
          <p>Contamos com um time de desenvolvedores voltado exclusivamente para a <b>criação</b> e <b>elaboração</b> de nossos
            sistemas, tais como o <span className='font-bold text-primary-light text-xl hover:underline cursor-pointer'>Manfrota</span>.
          </p>
        </div>

        <div className=' flex flex-col h-fit p-6 gap-4'>
          <span className='font-bold'>
            Ferramentas e Linguagens utilizadas para o desenvolvimento de nossos softwares
          </span>
          <Slider {...settings} className="flex items-center justify-center">

            {languages.map((l, index) => (
              <div key={index} className="flex min-h-[100px] my-4 border-primary-dark/10 border-2 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col rounded-lg py-4">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={l.icon}
                    alt=""
                    width={80}
                    height={80}
                    style={{
                      marginTop: '2rem',
                      maxWidth: "80px",
                      height: '80px'
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <AnimatedText
                    once
                    text={l.label}
                    el="h1"
                    className="text-xl font-semibold text-gray-900"
                  />
                </div>
              </div>
            ))}

          </Slider>
        </div>

      </div>
    </main>
  );
};

export default OurTeam;
