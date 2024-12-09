'use client'

import MapIcon from '@mui/icons-material/Map';

import { AnimatedText } from '@/components/animation/page';
import { useState } from 'react';
import { PhotoModal } from '@/components/photoModal/photoModal';

const Page = () => {

  const [modal, setModal] = useState(false)
  const [url, setUrl] = useState("")

  return (
    <>
      <main className="min-h-screen flex flex-col items-center m-0 bg-primary-screens py-4">
        <div className='grid lg:grid-cols-2 max-w-screen-xl mx-auto gap-10 my-20 px-5'>
          <div className='bg-white p-14 gap-6 flex flex-col justify-center items-center text-center rounded-lg'>
            <div className='bg-primary-light/10 p-6 rounded-full'>
              <MapIcon sx={{ height: 32, width: 32, color: "#0065af" }} />
            </div>
            <AnimatedText
              once
              text="Relatórios Detalhados para uma Gestão Completa"
              el="h1"
              className="text-3xl font-bold"
            />
            Oferecemos uma variedade de relatórios para atender às
            necessidades específicas da sua frota. Entre eles, estão:
            Posições e Últimas Posições, que mostram em detalhes a localização
            e o histórico recente dos veículos
            <br />
            <br />
            Movimento/Ponto, ideal para acompanhar trajetos e paradas; Horímetro e Odômetro,
            que ajudam no controle de horas trabalhadas e distância percorrida; e o Relatório
            Coletivo de Horímetro, que fornece uma visão consolidada das operações. Essas ferramentas
            garantem precisão e agilidade na tomada de decisões.
          </div>
          <div className='flex items-center justify-center'>
            <div className=''>
              <img
                onClick={() => {
                  setModal(true);
                  setUrl("/static/images/trackerPage/rela_grafico.png");
                }}
                className='h-full mb-10 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out' src="/static/images/trackerPage/rela_grafico.png" />
              <img
                onClick={() => {
                  setModal(true);
                  setUrl("/static/images/trackerPage/dashMapaJornada.png");
                }}
                className='h-full filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out' src="/static/images/trackerPage/dashMapaJornada.png" />
            </div>
          </div>
        </div>
      </main>

      {modal && url && (
        <PhotoModal
          open={modal}
          setOpen={(value) => setModal(value)}
          url={url}
        />
      )}
    </>
  );
};

export default Page;
