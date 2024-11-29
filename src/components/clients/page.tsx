"use client"

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedText from "@/components/animation/page";
import './index.css';
import Image from "next/image";
import NextArrow from "@/components/arrows/nextArrow";
import PrevArrow from "@/components/arrows/prevArrow";

const clients = [
  {
    occupation: 'Construtora',
    logo: '/static/images/clients/logoandrade.png'
  },
  {
    occupation: 'Construtora',
    logo: '/static/images/clients/mgmlogo5.png'
  },
  {
    occupation: 'Transportadora',
    logo: '/static/images/clients/carpelo.png'
  },
  {
    occupation: 'Construtora',
    logo: '/static/images/clients/elevacaoLogo.png'
  },
  {
    occupation: 'Construtora',
    logo: '/static/images/clients/ecbLogo.png'
  },
  {
    occupation: 'Construtora',
    logo: '/static/images/clients/eratecnica.png'
  },
  {
    occupation: 'Construtora',
    logo: '/static/images/clients/fsgLogo.png'
  },
  {
    occupation: 'Construtora',
    logo: '/static/images/clients/brazabeLogo.png'
  },
  {
    occupation: 'Construtora',
    logo: '/static/images/clients/egf.png'
  },
  {
    occupation: 'Construtora',
    logo: '/static/images/clients/hidroplanLogo.png'
  },
  {
    occupation: 'Construtora',
    logo: '/static/images/clients/logoLopes.png'
  },
  {
    occupation: 'Construtora',
    logo: '/static/images/clients/logoValot.png'
  },
]

export default class SimpleSlider extends Component {

  render() {


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      centerMode: true,
      centerPadding: "60px",
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
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
      <div id="clients" className=" flex flex-col items-center justify-center py-24 bg-gray-100">
        <div className="w-[90vw] md:w-[96vw]"> {/* Limitar a largura do contêiner do Slider */}
          <Slider {...settings} className="flex items-center justify-center">
            {clients.map((c, index) => (
              <div key={index} className="flex hover:scale-105 py-4 transition-all duration-500 ease-in-out cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <Image
                    src={c.logo}
                    alt=""
                    width={500}
                    height={100}
                    style={{
                      margin: 'auto',
                      maxWidth: "80%",
                      height: '200px'
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between text-center bg-white p-6">
                  <AnimatedText
                    once
                    text={c.occupation}
                    el="h1"
                    className="text-sm lg:text-lg font-semibold text-gray-900"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
