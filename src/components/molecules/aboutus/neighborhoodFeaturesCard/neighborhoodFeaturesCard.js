import React from 'react';
import Typography from '../../../atoms/typography/typography';

const NeighborhoodFeaturesCard = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-12'>
        <div className='col-span-1 3xl:col-span-1 2xl:col-span-1 xl:col-span-1 md:col-span-0'></div>
        <div className="room-facilities-card rounded-[15px] md:rounded-[20px] 2xl:rounded-[25px] 3xl:rounded-[30px]  pt-16 pb-16 3xl:pt-24 3xl:pb-24   bg-tertiary text-white  3xl:col-span-10  2xl:col-span-10 xl:col-span-10 col-span-12">
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-1'></div>
            <div className="col-span-10 grid  gap-4 items-center">
                <Typography tag="p" className="body-medium  facility-text text-center">Lantro Heights is surrounded by a wealth of amenities that cater to your active and spiritual lifestyle. Stay fit and healthy with a well-equipped gym and scenic walking track just a short stroll away. For moments of reflection and community, the nearby mosque offers a peaceful sanctuary. Embrace a balanced lifestyle with everything you need right at your doorstep.</Typography>    
            </div>
            <div className='col-span-1'></div>
          </div>
        </div>
        <div className='col-span-1 3xl:col-span-1 2xl:col-span-1 xl:col-span-1 md:col-span-0'></div>
      </div>
    </div>
  );
};

export default NeighborhoodFeaturesCard;