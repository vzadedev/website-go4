'use client'

import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import AnimatedText from '@/components/animation/page';
import PrintIcon from '@mui/icons-material/Print';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import AgricultureIcon from '@mui/icons-material/Agriculture';

const Advantages = () => {
  return (
    <main id="advantages" className="-z-10 flex flex-col p-16 justify-center min-h-fit items-center w-full border-b-2 border-[#f6f6f6] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <AnimatedText
        once
        text="Vantagens"
        el="h1"
        className="text-3xl font-bold text-gray-700"
      />

      <div className='grid md:grid-cols-4 text-gray-700 gap-20 mt-12'>
        <div className='flex flex-col items-center gap-2 text-center '>
          <div className='relative bg-primary-light/10 rounded-full p-2 text-primary-light animate-bounce'>
            <LocalGasStationIcon sx={{ height: 48, width: 48 }} />
          </div>
          <span>Redução do <b>Consumo</b> de <br/> <b>Combustível</b> e <b>Lubrificantes</b></span>
        </div>

        <div className='flex flex-col items-center gap-2 text-center'>
          <div className='relative bg-primary-light/10 rounded-full p-2 text-primary-light animate-bounce'>
            <TireRepairIcon sx={{ height: 48, width: 48 }} />
          </div>
          <span>Redução de <b>Custo</b> com <br/> <b>Sucateamento</b> de Pneus.</span>
        </div>

        <div className='flex flex-col items-center gap-2 text-center'>
          <div className='relative bg-primary-light/10 rounded-full p-2 text-primary-light animate-bounce'>
            <QueryBuilderIcon sx={{ height: 48, width: 48 }} />
          </div>
          <span>Redução de <b>Custo</b> com <br/> <b>Horas Trabalhadas</b> em <b>Marcha lenta</b></span>
        </div>

        <div className='flex flex-col items-center gap-2 text-center'>
          <div className='relative bg-primary-light/10 rounded-full p-2 text-primary-light animate-bounce'>
            <CarCrashIcon sx={{ height: 48, width: 48 }} />
          </div>
          <span>Redução de <b>Custos</b> com <br/> <b>Manutenção Corretiva</b></span>
        </div>

        <div className='flex flex-col items-center gap-2 text-center'>
          <div className='relative bg-primary-light/10 rounded-full p-2 text-primary-light animate-bounce'>
            <AgricultureIcon sx={{ height: 48, width: 48 }} />
          </div>
          <span>Gestão <b>Centralizada</b> de <br/> <b>Sua Frota</b></span>
        </div>

        <div className='flex flex-col items-center gap-2 text-center'>
          <div className='relative bg-primary-light/10 rounded-full p-2 text-primary-light animate-bounce'>
            <QueryBuilderIcon sx={{ height: 48, width: 48 }} />
          </div>
          <span>Controle de <b>Horas</b> e <b>KM</b> dos <br/> <b>Equipamentos</b></span>
        </div>

        <div className='flex flex-col items-center gap-2 text-center'>
          <div className='relative bg-primary-light/10 rounded-full p-2 text-primary-light animate-bounce'>
            <LocalGasStationIcon sx={{ height: 48, width: 48 }} />
          </div>
          <span><b>Gestão de Consumo</b> Individual dos <b>Equipamentos</b></span>
        </div>

        <div className='flex flex-col items-center gap-2 text-center'>
          <div className='relative bg-primary-light/10 rounded-full p-2 text-primary-light animate-bounce'>
            <PrintIcon sx={{ height: 48, width: 48 }} />
          </div>
          <span>Controle dos <b>Dados</b> Em <br/> <b>Planilhas</b> e <b>PDFs</b></span>
        </div>

      </div>
    </main>
  );
};

export default Advantages;
