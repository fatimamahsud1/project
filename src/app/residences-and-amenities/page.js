import React from 'react';
import Header from '@/components/organisms/shared/header/header';
import Footer from '@/components/organisms/shared/footer/footer';
import images from '../../constants/imageConstants';
import ApartmentsSection from '@/components/organisms/residences-and-amenities/apartmentsSection/apartmentsSection';
import RoomFacilitiesCard from '@/components/molecules/residences-and-amenities/roomFacilitiesCard/roomFacilitiesCard';
import AmenitiesSection from '@/components/organisms/residences-and-amenities/amenitiesSection/amenitiesSection';
import AmenitiesFeaturesCard from '@/components/molecules/residences-and-amenities/amenitiesFeaturesCard/amenitiesFeaturesCard';
import ResidencesHeroSection from '@/components/molecules/residences-and-amenities/residencesHeroSection/residencesHeroSection';


const contactus = () => {
  return (
    <div>
    <div className='mb-[10px] xl:mb-[0px]'>
    <Header/>
    </div>
    <div className='mb-[70px] 3xl:mb-[125px]'>
    <ResidencesHeroSection
        description="From sleek interiors to expansive views, find your ideal home at Lantro Heights, where luxury meets accessibility."
        imageUrl={images.webp.contactUsImage.src}
        showIconContainer={false}
      />
    </div>
    <div>
    <ApartmentsSection className='mb-[40px] md:mb-[50px] xl:mb-[50px] 2xl:mb-[55px] 3xl:mb-[90px]'/>
    </div>
    <div  className='mb-[65px] md:mb-[68px] xl:mb-[100px] 2xl:mb-[135px] 3xl:mb-[150px]'>
    <RoomFacilitiesCard/>
    </div>
    <div >
    <AmenitiesSection/>
    </div>
    <div  className='mb-[50px] md:mb-[40px] xl:mb-[80px] 2xl:mb-[100px] 3xl:mb-[125px]'>
    <AmenitiesFeaturesCard/>
    </div>
    <div >
    <Footer/>
    </div>
    </div>
  );
};

export default contactus;

