"use client";

import Typography from '../../atoms/typography/typography';
import GoogleMapComponent from '@/components/atoms/googleMap/googleMap';

const ContactUsSection = () => {
  return (
    <div className='container'>
      <div className="contact-us-section text-center grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-start-4 md:col-span-6">
          <Typography tag="h2" className="contact-title">
            CONNECT WITH OUR <br />
            <span className="highlight">DEDICATED TEAM</span>
          </Typography>
        </div>
        <div className="col-span-12 xl:col-start-3 xl:col-span-8 ">
          <Typography tag='p' className="contact-description mb-[30px]  md:mb-[86px] xl:mb-[67px]  2xl:mb-[58px] 3xl:mb-[108px] body">
            At Lantro Heights, we prioritize your comfort and satisfaction, ensuring an accessible environment for all our residents. Whether you have questions about our luxurious apartments designed with accessibility in mind, need assistance with our top-notch amenities that cater to diverse needs, or want to learn more about our vibrant co-working spaces, we are here to help.       
          </Typography>
        </div>
        <div className=" hidden xl:col-span-1 xxl:col-span-2 xxxl:col-span-1"></div>
        <div className="col-span-12 xl:col-start-2 md:col-span-6 xl:col-span-4 flex flex-col justify-center">
          <div className="contact-details">
            <div className="address mb-[36px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[48px]">
              <Typography tag='h4' className='h3 mb-2' >Address</Typography>
              <Typography tag='p' className='body'>462 Seventh Avenue, New York, NY 10018, USA</Typography>
            </div>
            <div className="contact-info ">
              <Typography tag='h4' className='mb-2'>Contact</Typography>
              <Typography tag='p' className='body contact'>We&apos;re open for your convenience from 9 AM to 6 PM, Monday to Friday. Call (020 7946 0958) for prompt assistance!</Typography>
            </div>
          </div>
        </div>
        <div className='hidden xl:grid col-span-1 mb-[25px] mt-[-285px]'></div>
        <div id='map' className="col-span-12  md:col-span-6 xl:col-span-5">
          <div className="map-container w-full">
            <GoogleMapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
