import React from 'react';
import Header from '@/components/organisms/shared/header/header';
import MessageForm from '@/components/organisms/shared/messageForm/messageForm';
import Footer from '@/components/organisms/shared/footer/footer';
import images from '../../constants/imageConstants';
import ContactUsSection from '@/components/organisms/contactus/contactUsSection';
import ContactUsHeroSection from '@/components/molecules/shared/contactUsHeroSection/contactUsHeroSection';


const contactus = () => {
  return (
    <div>
      <div className='mb-[10px] md:mb-[-5px]'>
        <Header/>
      </div>
      <div className='mb-[50px] md:mb-[50px] xl:mb-[60px] 2xl:mb-[70px] 3xl:mb-[90px]'>
        <ContactUsHeroSection
          subHeading="REACH US OUT"
          description="We're here to connect with you. Reach out to us for any questions, comments, or assistance you may need."
          imageUrl={images.webp.contactUsImage.src}
          showIconContainer={false}
        />
      </div>
      <div className='mb-[25px] md:mb-[67px] xl:mb-[115px] 2xl:mb-[82px] 3xl:mb-[108px]'>
        <ContactUsSection/>
      </div>
      <div className='md:mb-[44px] xl:mb-[73px] 2xl:mb-[83px] 3xl:mb-[100px]'>
        <MessageForm
          infoText="Have something to say? Enter your details and comments, and we’ll reach out to you promptly. We're here to help you!"
        />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default contactus;

