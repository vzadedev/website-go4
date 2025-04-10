"use client"

import { WhatsApp } from "@mui/icons-material";


const RocketButton = () => {
  const whatsappNumber = "5517996069784"; 
  const message = encodeURIComponent("Olá! Vim pelo site e gostaria de saber mais a respeito sobre os sistemas.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  const handleRocketClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <button
      className="bg-green-700 z-50 rounded-full w-16 h-16 fixed bottom-5 right-5"
      onClick={handleRocketClick}
      style={{
        color: '#fff',
        transition: 'transform 0.3s ease',
      }}
    >
      <WhatsApp />
    </button>
  );
}

export default RocketButton;
