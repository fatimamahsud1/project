import Typography from '../../../atoms/typography/typography';
import images from '@/constants/imageConstants';
import ServicesCard from '@/components/molecules/aboutus/cards/servicesCard/servicesCard';
import ServicesReverseCard from '@/components/molecules/aboutus/cards/servicesReverseCard/servicesReverseCard';

const ServicesSection = () => {
  return (
    <div className='container'>
      <Typography tag="h2" className="section-title text-center mb-[27px] md:mb-[40px] xl:mb-[51px] 2xl:mb-[48px] 3xl:mb-[75px]">
        WHAT MAKES US DIFFERENT
      </Typography>
      <div className='grid grid-cols-12'>
        <div className=' col-span-12 xl:col-start-2 xl:col-span-10'>
          <div className='mb-[50px] xl:mb-[80px] 3xl:mb-[80px]'>
            <ServicesCard
              imageSrc={images.png.livingExperience.src}
              heading="Elevate Your Lifestyle"
              text="At Lantro Heights, our amenities enhance daily life and promote accessibility for all residents. Enjoy our dedicated medical room for families, modern office spaces for professional needs, and clear signage for easy navigation. With secure bike storage and thoughtfully planned features, Lantro Heights offers unmatched convenience and comfort for everyone."
            />
          </div>

          <div className='mb-[50px] xl:mb-[80px] 3xl:mb-[80px]'>
            <ServicesReverseCard
              imageSrc={images.webp.inclusiveDesign.src}
              heading="Inclusive Design Solution"
              text="Explore inclusive design solutions at Lantro Heights, where every detail is crafted to accommodate diverse lifestyles and needs. From accessible amenities to thoughtful layouts, our designs prioritize inclusivity, ensuring everyone feels welcome and empowered in their living environment."
            />
          </div>
          <div>
            <ServicesCard
              imageSrc={images.webp.installmentPlab.src}
              heading="Flexible Installment Plan"
              text="Experience the convenience of flexible installment plans at Lantro Heights, tailored to meet your financial needs. Our customizable options allow you to manage payments effortlessly, ensuring your dream of owning a home becomes a reality without financial strain."
            />
          </div>
        </div>
        <div className='col-span-1'></div>
      </div>
    </div>
  );
};

export default ServicesSection;