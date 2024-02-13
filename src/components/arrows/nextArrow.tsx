import React from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const NextArrow = ({ onClick }: any) => {
  return (
    <div className="absolute right-[30px] -top-[80px]" onClick={onClick}>
      <div className="bg-white/60 hover:bg-white transition-all duration-500 ease-in-out h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <NavigateNextIcon />
      </div>
    </div>
  )
}

export default NextArrow