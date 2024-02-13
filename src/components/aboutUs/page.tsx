'use client'

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { AnimatedText } from '@/components/animation/page';

const AboutUs = () => {

  return (
    <>
      <main id="aboutUs" className="h-fit items-center m-0 py-20 bg-primary-dark min-w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className='flex flex-col items-center'>
          <AnimatedText
            once
            text="Quem Somos"
            el="h1"
            className="text-3xl font-bold text-white"
          />
          <div className='flex w-[40%] justify-center text-center items-center text-lg font-medium text-[#d9d8db] mt-8'>
            <p>
              A <span className='font-bold text-white'>Go4 Digital</span> é uma empresa especializada em soluções digitais para
              <span className='font-bold text-white'> Gestão de Ativos, </span>formada por <span className='font-bold text-white'>profissionais experientes </span>
              no setor de gestão de frotas.Com metodologia inovadora e tecnologia de ponta, oferece soluções modernas para
              <span className='font-bold text-white'> Manutenção e Gerenciamento de Frotas</span>.
            </p>
          </div>

          <div className="grid xl:grid-cols-3 max-w-screen-xl mx-2 gap-10 my-20">
              <div className="flex bg-primary-dark hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer drop-shadow-theme p-8 rounded-xl gap-4 items-center text-center flex-col ">
                  <span className="text-white bg-white/10 p-3 rounded-full">
                    <RocketLaunchIcon />
                  </span>
                  <h3 className="font-semibold text-xl text-white"> Missão</h3>
                  <p className="mt-1 text-gray-300"> 
                    Capacitar organizações por meio da excelência em soluções de software
                    para <b>administração de frotas.</b> Comprometemo-nos a fornecer plataformas
                    <b> inovadoras</b> e <b>personalizadas</b> que otimizam a <b>eficiência operacional, </b>
                    promovem a <b>sustentabilidade</b> e impulsionam o <b>sucesso</b> de nossos clientes.
                    Ao integrar tecnologia de ponta com uma abordagem centrada no cliente,
                    buscamos simplificar complexidades, melhorar a tomada de decisões e
                    transformar a gestão de frotas em um facilitador estratégico para o
                    crescimento sustentável das empresas.
                  </p>
              </div>

              <div className="flex bg-white hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer p-8 rounded-xl gap-4 items-center text-center flex-col ">
                  <span className="text-primary-light bg-primary-light/10 p-3 rounded-full">
                    <RemoveRedEyeIcon />
                  </span>
                  <h3 className="font-semibold text-xl">Visão</h3>
                  <p className="mt-1 text-gray-600"> 
                    Ser reconhecida como a principal <b>referência</b> no mercado de <b>desenvolvimento de software </b>
                    para <b>gestão de frotas, </b> tanto em aspectos operacionais quanto gerenciais. Almejamos não
                    apenas liderar o setor, mas também moldar seu futuro, redefinindo constantemente os padrões
                    de excelência e inovação.
                  </p>
              </div>


              <div className="flex bg-primary-dark hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer drop-shadow-theme p-8 rounded-xl gap-4 items-center text-center flex-col ">
                  <span className="text-white bg-white/10 p-3 rounded-full">
                    <FavoriteIcon />
                  </span>
                  <div>
                      <h3 className="font-semibold text-xl text-white">Valores </h3>
                      <p className="mt-1 text-gray-300"> 
                        1- Inovação Constante, <br/> 
                        2 - Sustentabilidade Ambiental,  <br/> 
                        3 - Foco no Cliente,  <br/> 
                        4 - Transparência e Integridade, <br/> 
                        5 - Eficiência Operacional, <br/> 
                        6 - Colaboração e Parcerias,   <br/> 
                        7 - Desenvolvimento Profissional, <br/> 
                        8 - Responsabilidade Social.   <br/> 
                      </p>
                  </div>
              </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
