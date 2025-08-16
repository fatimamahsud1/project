"use client";

import Typography from '@/components/atoms/typography/typography';
import images from '@/constants/imageConstants';
import RotatoryButton from '@/components/atoms/buttons/rotatoryButton/rotatoryButton';
import { useState } from 'react';

const OurStorySection = () => {
  const [showMore, setShowMore] = useState(false);
  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='container'>
      <div className="contact-us-section text-center grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-start-5 md:col-span-4">
          <Typography tag='h2' className="contact-title">
            OUR <span className="highlight">STORY</span>
          </Typography>
        </div>
        <div className="hidden col-span-1 md:grid md:col-span-4"></div>
        <div className="col-span-12 xl:col-start-3 xl:col-span-8 xxl:col-start-3 xxl:col-span-8">
          <Typography tag='p' className="contact-description body-medium mb-[20px] md:mb-[25px] xl:mb-[30px] 2xl:mb-[30px] 3xl:mb-[40px]">
            Back ago, with a bold vision to redefine urban living, we set out on a mission for Lantro Heights to create more than just homes, but vibrant communities where sustainability and innovation harmonize seamlessly. In the heart of our journey lies a commitment to crafting living spaces that inspire. From the very foundations of Lantro Heights, our goal has been clear: to elevate the standards of modern living by blending forward-thinking design with sustainable practices.
            {showMore && (
              <span>
                Fuelled by a passion for excellence, we&apos;ve woven our mission into every aspect of Lantro Heights&apos; identity. Our dedication to creating accessible environments, where every detail is meticulously curated, ensures that each resident experiences not just a home, but a lifestyle enriched by community and connection.
                As we continue to grow, our vision remains steadfast: to lead the way in urban development, pioneering new standards of living that prioritize environmental stewardship and resident well-being. Join us at Lantro Heights and be part of a story where every chapter is defined by innovation, sustainability, and the pursuit of a better tomorrow.
              </span>
            )}
          </Typography>
          <div className="flex justify-center mt-4">
            <RotatoryButton
              icon={images.svg.plusIcon.src}
              initialIconRotationAngle={0}
              onClick={handleToggle}
            />
          </div>
        </div>
        <div className="xl:col-span-1"></div>
      </div>
    </div>
  );
};

export default OurStorySection;
