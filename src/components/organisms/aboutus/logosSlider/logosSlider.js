import React from 'react';
import images from '@/constants/imageConstants';

const logos = [
  { src: images.png.EMTG.src, alt: "emtg", sizeClass: "h-14 md:h-16 2xl:h-28 3xl:h-32" },
  { src: images.png.IMC.src, alt: "imc", sizeClass: "h-14 md:h-16 2xl:h-28 3xl:h-32" },
  { src: images.png.coreConsultants.src, alt: "coreconsultants", sizeClass: "h-10 md:h-16 2xl:h-24 3xl:h-28" },
  { src: images.png.citySpace.src, alt: "cityspace", sizeClass: "h-14 md:h-16 2xl:h-28 3xl:h-32" },
  { src: images.png.EMTG.src, alt: "emtg", sizeClass: "h-14 md:h-16 2xl:h-28 3xl:h-32" },
  { src: images.png.IMC.src, alt: "imc", sizeClass: "h-14 md:h-16 2xl:h-28 3xl:h-32" },
  { src: images.png.coreConsultants.src, alt: "coreconsultants", sizeClass: "h-10 md:h-16 2xl:h-24 3xl:h-28" },
  { src: images.png.citySpace.src, alt: "cityspace", sizeClass: "h-14 md:h-16 2xl:h-28 3xl:h-32" },
];

const LogosSlider = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-custom h-[116px] xl:h-[216px] 3xl:h-[286px] flex justify-center items-center">
      <div className="flex animate-scroll">
        <div className="space-x-11 3xl:space-x-20 flex justify-center items-center">
          {logos.map((logo, index) => (
            <React.Fragment key={index}>
              <img src={logo.src} alt={logo.alt} className={logo.sizeClass}/>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogosSlider;