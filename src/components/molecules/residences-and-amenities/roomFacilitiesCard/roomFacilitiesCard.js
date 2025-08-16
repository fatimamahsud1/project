import Typography from '../../../atoms/typography/typography';
import images from '../../../../constants/imageConstants';

const RoomFacilitiesCard = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-12'>
        <div className='col-span-1 3xl:col-span-1 2xl:col-span-1 xl:col-span-1 md:col-span-0'></div>
        <div className="room-facilities-card flex items-center justify-center  rounded-[15px] md:rounded-[20px] 2xl:rounded-[25px] 3xl:rounded-[30px] pt-10 pb-10 3xl:pt-16 3xl:pb-16 bg-tertiary text-white 3xl:col-span-10 2xl:col-span-10 xl:col-span-10 col-span-12">
          <div className="text-center">
            <Typography tag="h3" className="title text-center mb-[34px] md:mb-[26px] xl:mb-[44px] 2xl:mb-[51px] 3xl:mb-[67px]">In-Room Facilities</Typography>
            <div className='grid gap-y-[20px] gap-x-24 md:gap-x-[114px] xl:gap-x-[210px]  2xl:gap-x-[256px] 3xl:gap-x-[400px] md:grid-cols-2 grid-cols-1'>
              <div className="facility-item flex items-center justify-start">
                <img src={images.svg.integratedAreas.src} alt="Integrated Areas" className="h-[30px] w-[30px] md:h-[30px] md:w-[30px] xl:h-[40px] xl:w-[40px] 2xl:h-[45px] 2xl:w-[45px] 3xl:h-[50px] 3xl:w-[50px] mr-6"/>
                <Typography tag="p" className="body facility-text text-left">Integrated Areas</Typography>
              </div>
              <div className="facility-item flex items-center justify-start">
                <img src={images.svg.naturalLight.src} alt="Natural Light" className="h-[30px] w-[30px] md:h-[30px] md:w-[30px] xl:h-[40px] xl:w-[40px] 2xl:h-[45px] 2xl:w-[45px] 3xl:h-[50px] 3xl:w-[50px] mr-6"/>
                <Typography tag="p" className="body facility-text text-left">Natural Light</Typography>
              </div>
              <div className="facility-item flex items-center justify-start">
                <img src={images.svg.adjustableFixtures.src} alt="Adjustable Fixtures" className="h-[30px] w-[30px] md:h-[30px] md:w-[30px] xl:h-[40px] xl:w-[40px] 2xl:h-[45px] 2xl:w-[45px] 3xl:h-[50px] 3xl:w-[50px] mr-6"/>
                <Typography tag="p" className="body facility-text text-left">Adjustable Fixtures</Typography>
              </div>
              <div className="facility-item flex items-center justify-start">
                <img src={images.svg.emergencyAlerts.src} alt="Emergency Alerts" className="h-[30px] w-[30px] md:h-[30px] md:w-[30px] xl:h-[40px] xl:w-[40px] 2xl:h-[45px] 2xl:w-[45px] 3xl:h-[50px] 3xl:w-[50px] mr-6"/>
                <Typography tag="p" className="body facility-text text-left">Emergency Alerts</Typography>
              </div>
              <div className="facility-item flex items-center justify-start">
                <img src={images.svg.modernKitchenette.src} alt="Modern Kitchenette" className="h-[30px] w-[30px] md:h-[30px] md:w-[30px] xl:h-[40px] xl:w-[40px] 2xl:h-[45px] 2xl:w-[45px] 3xl:h-[50px] 3xl:w-[50px] mr-6"/>
                <Typography tag="p" className="body facility-text text-left">Modern Kitchenette</Typography>
              </div>
              <div className="facility-item flex items-center justify-start">
                <img src={images.svg.parkingSpaces.src} alt="Parking Spaces" className="h-[30px] w-[30px] md:h-[30px] md:w-[30px] xl:h-[40px] xl:w-[40px] 2xl:h-[45px] 2xl:w-[45px] 3xl:h-[50px] 3xl:w-[50px] mr-6"/>
                <Typography tag="p" className="body facility-text text-left">Parking Spaces</Typography>
              </div>
              <div className="facility-item flex items-center justify-start">
                <img src={images.svg.barrierFree.src} alt="Barrier-Free" className="h-[30px] w-[30px] md:h-[30px] md:w-[30px] xl:h-[40px] xl:w-[40px] 2xl:h-[45px] 2xl:w-[45px] 3xl:h-[50px] 3xl:w-[50px] mr-6"/>
                <Typography tag="p" className="body facility-text text-left">Barrier-Free</Typography>
              </div>
              <div className="facility-item flex items-center justify-start">
                <img src={images.svg.sleekBathroom.src} alt="Sleek Bathroom" className="h-[30px] w-[30px] md:h-[30px] md:w-[30px] xl:h-[40px] xl:w-[40px] 2xl:h-[45px] 2xl:w-[45px] 3xl:h-[50px] 3xl:w-[50px] mr-6"/>
                <Typography tag="p" className="body facility-text text-left">Sleek Bathroom</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 3xl:col-span-1 2xl:col-span-1 xl:col-span-1 md:col-span-0'></div>
      </div>
    </div>
  );
};

export default RoomFacilitiesCard;