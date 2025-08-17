"use client"

import { useState } from 'react';
import images from '../../../../constants/imageConstants';
import PrimaryButton from '../../../atoms/buttons/primary/primaryButton';
import Typography from '@/components/atoms/typography/typography';
import Navbar from '@/components/molecules/shared/navbar/navbar';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='container'>
      <div className="grid grid-cols-12 gap-5 justify-center items-center align-center">
        <img src={images.webp.logo.src} alt="logo" className="logo col-span-4 sm:col-span-2 justify-start" />
        <div className="navbar rounded-[15px] xl:rounded-[20px] 2xl:rounded-[25px] 3xl:rounded-[30px] col-span-8 hidden xl:block justify-center">
          <Navbar />
        </div>
        <div className="col-span-2 justify-end hidden xl:flex sm:hidden">
          <Link  href="https://docs.google.com/forms/d/1R107AN_22_oW7_aYCBjalr-sTwjJE8efN1qZBjIp8h0/viewform" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block">
            <PrimaryButton text="Contact Us" />
          </Link>
        </div>
        <div className="col-span-6 sm:col-span-9  xxl:hidden"></div>
        <div className="col-span-2 sm:col-span-1  justify-end block xl:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={images.svg.subCategory.src} alt="Menu" />
          </button>
        </div>
        {isMenuOpen && (
          <div className={`side-drawer fixed top-0 right-[-100%] w-[50%] h-[100%] flex flex-col z-[100] transition-right duration-300 ease items-start  justify-start ${isMenuOpen ? 'open' : ''}`}>
            <div className="w-[50%] flex justify-between p-4">
              <button onClick={() => setIsMenuOpen(false)} className="bg-none border-none text-white cursor-pointer">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="w-[100%] flex flex-col items-start justify-between p-4 h-[80%]">
              <ul className="list-none p-0 m-0 flex flex-col items-start w-full text-left pl-6">
                <Link href='#about'>
                <li className='my-4 cursor-pointer hover:underline'><Typography tag="h4">About Us</Typography></li>
                </Link>
                <Link href='#admissions'>
                <li className='my-4 cursor-pointer hover:underline'><Typography tag="h4">Admissions</Typography></li>
                </Link>
                <Link href='#services'>
                <li className='my-4 cursor-pointer hover:underline'><Typography tag="h4">Services</Typography></li>
                </Link>
                <Link href='#register'>
                <li className='my-4 cursor-pointer hover:underline'><Typography tag="h4">Register</Typography></li>
                </Link>
              </ul>
              <div className="w-full flex justify-center">
              <Link  href="https://docs.google.com/forms/d/1R107AN_22_oW7_aYCBjalr-sTwjJE8efN1qZBjIp8h0/viewform" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block">
                <PrimaryButton text="Contact Us" />
                </Link>
              </div>
            </div>
          </div>
        )}
        {isMenuOpen && <div className="fixed top-0 left-0 w-[50%] h-full bg-none z-[50]" onClick={() => setIsMenuOpen(false)} />}
      </div>
    </div>
  );
};

export default Header;
