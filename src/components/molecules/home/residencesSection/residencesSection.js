"use client";

import images from '../../../../constants/imageConstants';
import Typography from '../../../atoms/typography/typography';
import  { useState } from 'react';

const ResidencesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
const texts = [
  {
    title: 'Step 1 – Contact Us',
    description: (
      <>
        Call or WhatsApp at <strong>0343-0807494</strong> to get details about classes, fees, and schedules, or join our{' '}
        <a
          href="https://chat.whatsapp.com/E5nd0dijx1g5RF1EKgfmO6?mode=ac_t"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#25D366', fontWeight: 'bold' }}
        >
          WhatsApp group
        </a>.
      </>
    ),
    image: images.webp.call.src
  },
  {
    title: 'Step 2 – Complete Registration',
    description: 'Fill in the registration form and pay the one-time registration fee of Rs. 500.',
    image: images.webp.register.src
  },
  {
    title: 'Step 3 – Start Learning',
    description: 'Pay the monthly fee, join our Zoom classes, and begin your Cadet College preparation journey.',
    image: images.webp.learn.src
  },
];


  return (
    <div className='container'>
      <div className="flex flex-col items-center residences-section ">
        <Typography tag="h2" className="residences-title mb-[3px] md:mb-[-1px] xl:mb-[40px] 2xl:mb-[50px]">Start Your Journey!</Typography>
         <div className="md:grid md:grid-cols-12 md:gap-5 items-center w-full">
          <div className="col-span-12 xl:col-span-6 flex flex-col items-center residences-text">
            {texts.map((text, index) => (
              <div
                key={index}
                className={`w-full residence-item ${index !== texts.length - 1 ? 'mb-[20px] 2xl:mb-[5px] 3xl:mb-[25px]' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                style={{ opacity: hoveredIndex === index ? 1 : 0.5 }}
              >         
                <div className="border-l-[3.3px] xl:border-l-[4px]  3xl:border-l-[5px] border-[#C99146] h-[100px] md:h-[80px] xl:h-[80px] 2xl:h-[100px] 3xl:h-[110px] mt-1 md:mt-5 mb-[20px] md:mb-[10px] pl-[15px] ml-[3px] md:pl-[20px] xl:pl-[60px] 3xl:pl-[90px] md:ml-[20px] flex justify-between items-center rounded-sm">
                  <div>
                    <Typography tag="h3" className="mb-1 title-color">{text.title}</Typography>
                    <Typography tag="p" className="body-small mb-2 xl:mb-2  2xl:mb-3 3xl:mb-4">{text.description}</Typography>
                  </div>
                </div>

                <div className="residences-image mt-[20px] sm:block xl:hidden">
                  <img
                    src={text.image}
                    alt={text.title}
                    className="rounded-[15px] md:rounded-[20px] xl:rounded-[25px] 3xl:rounded-[30px]  transition-transform duration-300 h-[202px] md:h-[285px]  w-full object-cover"
                  />
                </div>
                <div className='col-span-1'></div>
              </div>
            ))}
          </div>
          <div className="col-span-12 md:col-span-5 flex justify-center residences-image mt-[20px] 3xl:mt-0 hidden xl:block">
            <img
              src={texts[hoveredIndex].image}
              alt={texts[hoveredIndex].title}
              className="rounded-[15px] md:rounded-[20px] xl:rounded-[25px] 3xl:rounded-[30px] transition-transform duration-300 h-full w-full 3xl:h-[60%] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidencesSection;