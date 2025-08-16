"use client";

import images from '../../../../constants/imageConstants';
import TertiaryButton from '../../../atoms/buttons/tertiary/tertiaryButton';
import Typography from '../../../atoms/typography/typography';
import { useState, useEffect } from 'react';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 450, height: 600 });
  const [screenWidth, setScreenWidth] = useState(0);  
  const [blur, setBlur] = useState('0px');
  const Images = [
    images.webp.image1.src,
    images.webp.image2.src,
    images.webp.image3.src,
    images.webp.image4.src,
    images.webp.image5.src,
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const width = window.innerWidth;
        setScreenWidth(width);

        let newDimensions = { width: 540, height: 676 };
        let newBlur = '5px';
        if (width < 640) {
          newDimensions = { width: 213, height: 369 };
          newBlur = '0.3px';
        } else if (width >= 640 && width < 769) {
          newDimensions = { width: 328, height: 528 };
          newBlur = '3px';
        } else if (width >= 769 && width < 1280) {
          newDimensions = { width: 360, height: 520 };
          newBlur = '4px';
        } else {
          newDimensions = { width: 540, height: 676 };
          newBlur = '5px';
        }
        setDimensions(newDimensions);
        setBlur(newBlur);
      };

      window.addEventListener('resize', handleResize);
      handleResize(); // Call the function on initial mount

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length);
  };

  const getTransformStyle = (index) => {
    const diff = currentIndex - index;
    const baseZIndex = 15;
    const zIndex = baseZIndex - Math.abs(diff);
    const blur = diff === 0 ? '0px' : '5px';
    let transform;

    if (diff === 0) {
      transform = 'scale(1) translateX(0) translateY(0)';
    } else if (diff === 1 || diff === -Images.length + 1) {
      transform = screenWidth < 640 ? 'scale(0.9) translateX(-30%) translateY(0%)' :
        screenWidth > 640 && screenWidth < 769 ? 'scale(0.9) translateX(-30%) translateY(0%)' :
          screenWidth > 769 && screenWidth < 1281 ? 'scale(0.9) translateX(-30%) translateY(0%)' :
            screenWidth > 1281 && screenWidth < 1441 ? 'scale(0.9) translateX(-30%) translateY(0%)' :
              'scale(0.9) translateX(-60%) translateY(0%)';
    } else if (diff === -1 || diff === Images.length - 1) {
      transform = screenWidth < 640 ? 'scale(0.9) translateX(30%) translateY(0%)' :
        screenWidth > 640 && screenWidth < 769 ? 'scale(0.9) translateX(30%) translateY(0%)' :
          screenWidth > 769 && screenWidth < 1281 ? 'scale(0.9) translateX(30%) translateY(0%)' :
            screenWidth > 1281 && screenWidth < 1441 ? 'scale(0.9) translateX(30%) translateY(0%)' :
              'scale(0.9) translateX(60%) translateY(0%)';
    } else if (diff === 2 || diff === -Images.length + 2) {
      transform = screenWidth < 640 ? 'scale(0.8) translateX(-30%) translateY(0%)' :
        screenWidth > 640 && screenWidth < 769 ? 'scale(0.8) translateX(-50%) translateY(0%)' :
          screenWidth > 769 && screenWidth < 1281 ? 'scale(0.8) translateX(-50%) translateY(0%)' :
            screenWidth > 1281 && screenWidth < 1441 ? 'scale(0.8) translateX(-60%) translateY(0%)' :
              'scale(0.8) translateX(-100%) translateY(0%)';
    } else if (diff === -2 || diff === Images.length - 2) {
      transform = screenWidth < 640 ? 'scale(0.8) translateX(30%) translateY(0%)' :
        screenWidth > 640 && screenWidth < 769 ? 'scale(0.8) translateX(50%) translateY(0%)' :
          screenWidth > 769 && screenWidth < 1281 ? 'scale(0.8) translateX(50%) translateY(0%)' :
            screenWidth > 1281 && screenWidth < 1441 ? 'scale(0.8) translateX(60%) translateY(0%)' :
              'scale(0.8) translateX(100%) translateY(0%)';
    } else {
      transform = 'scale(0.7) translateX(0) translateY(20%)';
    }
    return { zIndex, transform, filter: `blur(${blur})` };
  };

  return (
    <div className="container">
      <div className="relative bg-white">
        <Typography tag="h2" align="center" gutterBottom className="residences-title mb-[3px] md:mb-[-1px] xl:mb-[40px] 2xl:mb-[50px]">
          OUR GALLERY
        </Typography>
        <div className="grid grid-cols-12 gap-5 justify-center items-center">
          <div className="col-span-12 sm:col-start-2 sm:col-span-10 relative flex justify-center items-center h-[400px] sm:h-[700px] overflow-hidden">
            {Images.map((Image, index) => (
              <div
                key={index}
                className="absolute transition-transform duration-500 ease-in-out"
                style={{
                  ...getTransformStyle(index),
                  width: `${dimensions.width}px`,
                  height: `${dimensions.height}px`,
                  borderRadius: '30px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <img
                  src={Image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover w-[50%]"
                  style={{
                    opacity: getTransformStyle(index).opacity,
                    borderRadius: '30px',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            ))}
          </div>
          <div className="absolute left-[-40px] z-20 hidden md:flex ml-9 xl:ml-18  3xl:ml-24 justify-center items-center h-full">
            <TertiaryButton onClick={prevSlide} className="rotate-180" />
          </div>
          <div className="absolute right-[-40px] z-20 hidden md:flex mr-9 xl:mr-18 3xl:mr-24  justify-center items-center h-full">
            <TertiaryButton onClick={nextSlide} />
          </div>
          <div className="absolute bottom-[-20px] left-0 md:hidden">
            <TertiaryButton onClick={prevSlide} className="rotate-180" />
          </div>
          <div className="absolute bottom-[-20px] right-0 md:hidden">
            <TertiaryButton onClick={nextSlide} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
