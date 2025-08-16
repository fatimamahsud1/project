'use client'

import images from '../../../../constants/imageConstants';
import Typography from '../../../atoms/typography/typography';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content flex justify-around items-start justify-items-center align-center">
        <div className="footer-section flex-1 min-w-[100px] mb-5 logo-container pr-[35px] md:pr-[70px] xl:pr-[35px] pl-[20px] md:pl-[0px] xl:pl-[30px] xl:mr-[80px] pb-[20px] md:pb-[20px] pt-[20px] 2xl:pl-[70px]">
          <div>
            <img src={images.webp.logo.src} alt="Lantro Heights Logo" className="footer-logo logo mb-[10px] md:mb-[5px]"/>
          </div>
          <div className="footer-social-icons flex gap-2.5 mt-5 justify-center items-center ml-4 md:ml-[-3px] xl:ml-1 2xl:ml-7 3xl:ml-11">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={images.svg.brownFbLogo.src} alt="Facebook" className="social-icon  xl:mr-1 2xl:mr-3 3xl:mr-4 w-[14px] h-[14px] xl:w-[25px] xl:h-[25px] 2xl:w-[28px] 2xl:h-[28px] 3xl:w-[40px] 3xl:h-[40px]"/>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={images.svg.brownLinkedinLogo.src} alt="LinkedIn" className="social-icon  xl:mr-1 2xl:mr-3 3xl:mr-4 w-[14px] h-[14px] xl:w-[25px] xl:h-[25px] 2xl:w-[28px] 2xl:h-[28px] 3xl:w-[40px] 3xl:h-[40px]"/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={images.svg.brownInstaLogo.src} alt="Instagram" className="social-icon  xl:mr-1 2xl:mr-3 3xl:mr-4 w-[14px] h-[14px] xl:w-[25px] xl:h-[25px] 2xl:w-[28px] 2xl:h-[28px] 3xl:w-[40px] 3xl:h-[40px]"/>
            </a>
          </div>
        </div>
        <div className="container footer-section md:mt-[45px] xl:mt-[45px] 2xl:mt-[50px] 3xl:mt-[80px] justify-items-center align-center">
          <Typography tag="h4" className='mb-2 md:mb-4'>Quick Links</Typography>
          <ul className='list-none p-0'>
            <li>
              <Link className="link mb-[3px] xl:mb-[12px]" href="./aboutus">
                About Us
              </Link>
            </li>

            <li>
              <Link className="link mb-[3px] xl:mb-[12px]" href="/aboutus/#our-team">
                Our Team
              </Link>
            </li>
          </ul>
        </div>
        <div className="container footer-section md:mt-[45px] xl:mt-[45px] 2xl:mt-[50px] 3xl:mt-[80px]">
          <Typography tag="h4" className='mb-2 md:mb-4'>Explore</Typography>

          <ul className='list-none p-0'>
            <li>
              <Link className="link mb-[3px] xl:mb-[12px]" href="/residences-and-amenities/#all-amenities">
                Amenities
              </Link>
            </li>
            <li>
              <Link  className="link mb-[3px] xl:mb-[12px]" href="/residences-and-amenities/#all-apartments">
                Residences
              </Link>
            </li>
          </ul>
        </div>
        <div className="container md:mt-[45px] footer-section xl:mt-[45px] 2xl:mt-[50px] 3xl:mt-[80px]">
          <Typography tag="h4" className='mb-2 md:mb-4'> Location</Typography>
          <ul className='list-none p-0'>
            <li>
              <Link  className="link mb-[2px] xl:mb-[12px] " href="/contactus">
                Contact Us
              </Link>
            </li>
            <li>
              <Link  className="link mb-10 3xl:mb-[12px]" href="/contactus/#map">
                Get Directions
                <span>
                  <img src={images.svg.getDirections.src} className="directionLogo w-[18px] h-[18px] md:w-[15px] md:h-[15px] xl:w-[35px] xl:h-[35px] 2xl:w-[25px] 2xl:h-[25px] 3xl:w-[30px] 3xl:h-[30px]" alt="Get Directions"/>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
