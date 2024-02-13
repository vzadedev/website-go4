'use client'


import AnimatedText from '@/components/animation/page';
import NextArrow from '@/components/arrows/nextArrow';
import PrevArrow from '@/components/arrows/prevArrow';

import Image from 'next/image';

import Slider from 'react-slick';

const Areas = () => {
  const areas = [
    {
      icon: '/static/images/areas/agroIndustria.jpg',
      label: 'Agroindustrias',
      text: 'O React JS foi o framework escolhido para criação e adequação do Manfrota Web. Ele tem como foco  a criação de interfaces de usuário em páginas web.'
    },
    {
      icon: '/static/images/areas/construtora.jpg',
      label: 'Construtoras',
      text: 'O React JS foi o framework escolhido para criação e adequação do Manfrota Web. Ele tem como foco  a criação de interfaces de usuário em páginas web.'
    },
    {
      icon: '/static/images/areas/mineradora.jpg',
      label: 'Mineradoras',
      text: 'O React JS foi o framework escolhido para criação e adequação do Manfrota Web. Ele tem como foco  a criação de interfaces de usuário em páginas web.'
    },
    {
      icon: '/static/images/areas/transportadora.jpg',
      label: 'Transportadoras',
      text: 'O React JS foi o framework escolhido para criação e adequação do Manfrota Web. Ele tem como foco  a criação de interfaces de usuário em páginas web.'
    },
    {
      icon: '/static/images/areas/frotistas.jpg',
      label: 'Frotistas',
      text: 'O React JS foi o framework escolhido para criação e adequação do Manfrota Web. Ele tem como foco  a criação de interfaces de usuário em páginas web.'
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <main id="areas" className="-z-10 flex flex-col min-h-fit items-center w-full bg-primary-dark">
      <div className="w-[70%] my-16">
        <div className='flex mt-8 font-bold items-center justify-center flex-col sm:flex-row text-center w-full text-gray-700 '>
          <AnimatedText
            once
            text="Áreas de atuação"
            el="h1"
            className="text-3xl text-white w-80"
          />
        </div>

        <div className='h-fit gap-4'>
          <Slider {...settings} className="flex items-center justify-center">
            {areas.map((l, index) => (
              <div key={index} className="flex my-6 border-white/10 bg-white/10 5 hover:drop-shadow-theme border-2 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer flex-col rounded-lg p-4">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={l.icon}
                    alt=""
                    className='rounded-2xl shadow-2xl'
                    width={400}
                    height={200}
                    style={{
                      maxWidth: "320",
                      height: '240px'
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 text-center">
                  <AnimatedText
                    once
                    text={l.label}
                    el="h1"
                    className="font-semibold text-white"
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

export default Areas;
