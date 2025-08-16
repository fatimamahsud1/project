"use client"

import Link from 'next/link';
import images from '../../../../constants/imageConstants';
import Typography from '../../../atoms/typography/typography';

const IconContainer = () => {
  return (
      <div className='grid grid-cols-12'>
        <div className='col-span-2 md:col-span-1'></div>
        <div className='col-span-8 md:col-span-10'>
          <div className="bg-white shadow-xl p-3 rounded-[15px] xl:rounded-[25px] 3xl:rounded-[30px]">
            <div className="grid grid-cols-2 p-[20px] sm:p-[0]  md:grid-cols-6 gap-5 pt-10 pb-12 h-[448px] md:h-[84px]  xl:h-[108px]  2xl:h-[129px] 3xl:h-[162px] justify-items-center items-center">
              <div className="flex flex-col items-center m-[5px] sm:m-[30px]  md:m-[0] ">
                <img src={images.svg.allCategory.src} alt="Icon 6" className='max-w-[33px] md:max-w-[25px] xl:max-w-[37px] xxl:max-w-[45px] xxxl:max-w-[59px] mb-[10px] ' />
                <Link href="/residences-and-amenities/#all-amenities">
                <Typography tag="h4" className='text-center icon-text-color'>All</Typography>
                </Link>
              </div>
              <div className="flex flex-col items-center m-[5px] sm:m-[30px] md:m-[0] ">
                <img src={images.svg.officesCategory.src} alt="Icon 4" className='max-w-[33px] md:max-w-[25px] xl:max-w-[37px] xxl:max-w-[45px] xxxl:max-w-[59px] mb-[10px] mb-[10px] ' />
                <Link href="/residences-and-amenities/#offices">
                <Typography tag="h4" className='text-center  icon-text-color'>Offices</Typography>
                </Link>
              </div>
              <div className="flex flex-col items-center m-[5px] sm:m-[30px] md:m-[0]">
                <img src={images.svg.parkingCategory.src} alt="Icon 5" className='max-w-[33px] md:max-w-[25px] xl:max-w-[37px] xxl:max-w-[45px] xxxl:max-w-[59px] mb-[10px] mb-[10px] ' />
                <Link href="/residences-and-amenities/#parking">
                <Typography tag="h4" className='text-center  icon-text-color'>Parking</Typography>
                </Link>
              </div>
              <div className="flex flex-col items-center m-[5px] sm:m-[30px] md:m-[0] ">
                <img src={images.svg.cafeCategory.src} alt="Icon 2" className='max-w-[33px] md:max-w-[25px] xl:max-w-[37px] xxl:max-w-[45px] xxxl:max-w-[59px] mb-[10px] mb-[10px] ' />
                <Link href="/residences-and-amenities/#cafe">
                <Typography tag="h4" className='text-center  icon-text-color'>Cafe</Typography>
                </Link>
              </div>
              <div className="flex flex-col items-center m-[5px] sm:m-[30px] md:m-[0] ">
                <img src={images.svg.nurseryCategory.src} alt="Icon 2" className='max-w-[33px] md:max-w-[25px] xl:max-w-[37px] xxl:max-w-[45px] xxxl:max-w-[59px] mb-[10px] mb-[10px] ' />
                <Link href="/residences-and-amenities/#nursing-room">
                <Typography tag="h4" className='text-center  icon-text-color'>Medical</Typography>
                </Link>
              </div>
              <div className="flex flex-col items-center m-[5px] sm:m-[30px] md:m-[0]">
                <img src={images.svg.shopsCategory.src} alt="Icon 6" className='max-w-[33px] md:max-w-[25px] xl:max-w-[37px] xxl:max-w-[45px] xxxl:max-w-[59px] mb-[10px] mb-[10px] ' />
                <Link href="/residences-and-amenities/#shops">
                <Typography tag="h4" className='text-center  icon-text-color'>Shops</Typography>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-2 md:col-span-1'></div>
      </div>
  );
};


export default IconContainer;
