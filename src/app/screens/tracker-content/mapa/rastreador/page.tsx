"use client";

import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import CloseIcon from '@mui/icons-material/Close';

// Componente principal
export default function Page() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });
    const [isMobile, setIsMobile] = React.useState(false);

    // Estado para controlar a visibilidade da modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const scaleDimensions = () => {
        return isMobile ? [0.7, 0.9] : [1.05, 1];
    };

    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const imageZoom = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 2xl:text-2xl">
            <div className="flex items-center justify-center ">
                <div className="flex flex-wrap m-8">
                    <p>
                        DE: O Tracker permite acompanhar seus veículos diretamente em um mapa atualizado em tempo real. Você visualiza a localização exata, direção e status de cada veículo, garantindo controle total da frota.
                    </p>
                    <br />
                    <p>
                        PARA: Nossa PLATAFORMA permite acompanhar os ATIVOS no MAPA em tempo real. Com visualização e localização, garantindo total gestão de sua FROTA.
                    </p>
                </div>
            </div>
            <div
                className="h-[60rem] md:h-[70rem] flex items-center justify-center relative p-2 md:p-20"
                ref={containerRef}
            >
                <div
                    className="py-10 md:py-40 w-full relative"
                    style={{
                        perspective: "700px",
                    }}
                >
                    <Header translate={translate} titleComponent="" />

                    <Card rotate={rotate} scale={scale}>
                        <motion.div style={{ scale: imageZoom }} className="h-full w-full overflow-hidden">
                            {/* Imagem com evento de clique */}
                            <Image
                                src="/static/images/trackerPage/mapa_veiculos2.png"
                                alt="Imagem do mapa"
                                width={100}
                                height={100}
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={openModal} // Abre a modal ao clicar
                            />
                        </motion.div>
                    </Card>

                </div>

                {/* Modal */}
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black  bg-opacity-50 flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeModal} // Fecha ao clicar no fundo
                    >
                        <motion.div
                            className="relative inset-0 bg-white flex items-center justify-center z-50"
                            onClick={(e) => e.stopPropagation()} // Impede que o clique dentro da modal feche
                            initial={{ scale: 5 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="absolute top-0 right-0 p-4 text-white cursor-pointer" onClick={closeModal}>
                                <CloseIcon />
                            </div>
                            <Image
                                src="/static/images/trackerPage/mapa_veiculos2.png"
                                alt="Imagem em tamanho maior"
                                width={800}
                                height={800}
                                className="object-contain max-h-screen w-full "
                            />
                        </motion.div>
                    </motion.div>
                )}

            </div>
        </div>
    );
}

// Componente Header
export const Header = ({ translate, titleComponent }: { translate: MotionValue<number>, titleComponent: string }) => {
    return (
        <motion.div
            style={{
                translateY: translate,
            }}
            className="div max-w-5xl mx-auto text-center"
        >
            {titleComponent}
        </motion.div>
    );
};

// Componente Card
export const Card = ({
    rotate,
    scale,
    children,
}: {
    rotate: MotionValue<number>;
    scale: MotionValue<number>;
    children: React.ReactNode;
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,
                boxShadow:
                    "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
        >
            <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
                {children}
            </div>
        </motion.div>
    );
};
