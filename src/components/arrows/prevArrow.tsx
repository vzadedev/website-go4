import React from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const PrevArrow = ({ onClick }: any) => {
  return (
    <div className="absolute right-[90px] -top-[80px]" onClick={onClick}>
      <div className="bg-white/60 hover:bg-white transition-all duration-500 ease-in-out h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <NavigateBeforeIcon />
      </div>
    </div>
  )
}

export default PrevArrow