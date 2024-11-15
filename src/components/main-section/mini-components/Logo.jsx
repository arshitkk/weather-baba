import React from 'react'
import foto from '../../../../public/foto2.png';
function 
img() {
  return (
    <div className="w-full flex justify-center translate-y-3 ">
      <a href='/' className=" w-fit rounded-full overflow-visible shadow-2xl blur-[0.2px] h-fit object-cover ">
        <img className=" h-14 sm:h-20 opacity-85 rounded-full" src={foto} />
      </a>
    </div>
  );
}

export default img