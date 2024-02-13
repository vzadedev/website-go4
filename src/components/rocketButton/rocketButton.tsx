"use client"

import { useState } from "react";
import RocketIcon from '@mui/icons-material/Rocket';

const RocketButton = () => {
  const [rocketClicked, setRocketClicked] = useState(false);

  const handleRocketClick = () => {
    setRocketClicked(true);
    setTimeout(() => {
      setRocketClicked(false);
      const element = document.getElementById('landingPage');
      if (element) {
        const offsetTop = element.offsetTop;
        const scrollInterval = setInterval(() => {
          const currentScroll = window.scrollY;
          const scrollStep = (offsetTop - currentScroll) / 10;
          if (Math.abs(currentScroll - offsetTop) > Math.abs(scrollStep)) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
            window.location.href = "#landingPage"; 
          }
        }, 16.7);
      }
    }, 1000); 
  };

  return (
    <button
      className={` bg-primary-light z-50 rounded-full w-16 h-16 fixed bottom-5 right-5`}
      onClick={handleRocketClick}
      style={{
        color: '#fff', 
        transform: rocketClicked ? 'translateY(15px)' : 'translateY(0)', 
        transition: 'transform 0.5s ease', 
      }}
    >
      <RocketIcon className={`${rocketClicked ? 'animate-shake' : null}`} />
    </button>
  );
}

export default RocketButton