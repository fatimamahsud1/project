import React from 'react';
import images from '@/constants/imageConstants';
import Header from '@/components/organisms/shared/header/header';
import Footer from '@/components/organisms/shared/footer/footer';
import ServicesSection from '@/components/organisms/aboutus/servicesSection/servicesSection';
import MetricsSection from '@/components/organisms/aboutus/metricsSection/metricsSection';
import MembersSection from '@/components/organisms/aboutus/membersSection/membersSection';
import LogosSlider from '@/components/organisms/aboutus/logosSlider/logosSlider';
import OurStorySection from '@/components/organisms/aboutus/ourStorySection/ourStorySection';
import ContactUsHeroSection from '@/components/molecules/shared/contactUsHeroSection/contactUsHeroSection';
import ExploreNeighborhood from '@/components/organisms/aboutus/exploreNeighborhood/exploreNeighborhood';
import NeighborhoodFeaturesCard from '@/components/molecules/aboutus/neighborhoodFeaturesCard/neighborhoodFeaturesCard';


const aboutus = () => {
  return (
    <><div>
      <Header />
    </div><div className='mb-[70px] 3xl:mb-[125px]'>
        <ContactUsHeroSection
          subHeading="LEARN ABOUT US"
          description="Step into a world where modern elegance and sustainable living effortlessly converge seamlessly at Lantro Heights."
          imageUrl={images.webp.contactUsImage.src}
          showIconContainer={false} />
      </div><div className=' mb-[70px] md:mb-[70px] xl:mb-[95px] 2xl:mb-[105px] 3xl:mb-[115px]'>
        <OurStorySection/>
      </div><div className=' mb-[47px] md:mb-[70px] xl:mb-[84px] 2xl:mb-[105px] 3xl:mb-[115px]'>
        <ServicesSection/>
      </div><div className='mb-[47px] md:mb-[70px] xl:mb-[84px] 2xl:mb-[134px] 3xl:mb-[195px]'>
        <MetricsSection/>
      </div>
      <div>
        <ExploreNeighborhood/>
      </div>
      <div className='mb-[47px] md:mb-[70px] xl:mb-[84px] 2xl:mb-[105px] 3xl:mb-[115px]'>
        <NeighborhoodFeaturesCard />
      </div><div className='mb-[47px] md:mb-[70px] xl:mb-[84px] 2xl:mb-[105px] 3xl:mb-[159px]'>
        <MembersSection/>
      </div><div className='mb-[47px] md:mb-[70px] xl:mb-[84px] 2xl:mb-[105px] 3xl:mb-[159px]'>
        <LogosSlider/>
      </div><div>
        <Footer/>
      </div></>

  );
};

export default aboutus;

