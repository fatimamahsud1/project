import Typography from '../../../atoms/typography/typography';
import images from '@/constants/imageConstants';
import ServicesCard from '@/components/molecules/aboutus/cards/servicesCard/servicesCard';
import ServicesReverseCard from '@/components/molecules/aboutus/cards/servicesReverseCard/servicesReverseCard';

const AmenitiesSection = () => {
  return (
    <div id="all-amenities" className='container'>
      <Typography tag="h2" className="h2 text-center mb-[27px] md:mb-[40px] xl:mb-[51px] 2xl:mb-[48px] 3xl:mb-[75px]">
        AMENITIES
      </Typography>
      <div className='grid grid-cols-12'>
        <div className=' col-span-12 xl:col-start-2 xl:col-span-10'>
          <div id="offices" className='mb-[50px] xl:mb-[80px] 3xl:mb-[80px]'>
            <ServicesCard
              imageSrc={images.png.officeImage.src}
              heading="Offices"
              text="Elevate your work-life balance with our professional office spaces, designed to foster productivity and creativity. Whether you're running a business or working remotely, our state-of-the-art offices provide the perfect environment for success."
            />
          </div>
          <div id="parking" className='mb-[50px] xl:mb-[80px] 3xl:mb-[80px]'>
            <ServicesReverseCard
              imageSrc={images.png.parkingImage.src}
              heading="Parking"
              text="Enjoy the convenience of ample parking spaces at Lantro Heights. Our secure, easily accessible parking facilities ensure that you and your guests always have a hassle-free experience."
            />
          </div>
          <div  id="cafe" className='mb-[50px] xl:mb-[80px] 3xl:mb-[80px]'>
            <ServicesCard
              imageSrc={images.png.cafeImage.src}
              heading="Cafe"
              text="Get ready to savor delightful moments at our upcoming café. Soon, you’ll be able to enjoy your favorite brews and delicious treats right within the comfort of Lantro Heights. Stay tuned for a cozy spot to relax, socialize, and recharge."
            />
          </div>
          <div id="nursing-room" className='mb-[50px] xl:mb-[80px] 3xl:mb-[80px]'>
            <ServicesReverseCard
              imageSrc={images.png.nursingRoomImage.src}
              heading="Medical Room"
              text="At Lantro Heights, we prioritize the health and safety of our residents. Our dedicated medical room, staffed with professional nurses, provides immediate assistance and care in any medical emergency, ensuring a safe and supportive environment for all, including individuals with disabilities."
            />
          </div>
          <div id="shops" className='mb-[50px] xl:mb-[80px] 3xl:mb-[80px]'>
            <ServicesCard
              imageSrc={images.png.shopsImage.src}
              heading="Shops"
              text="Exciting additions are on the horizon with our planned on-site shop. Soon, you'll have convenient access to a variety of essentials and unique finds right within Lantro Heights, making everyday living even easier and more enjoyable."
            />
          </div>
        </div>
        <div className='col-span-1'></div>
      </div>
    </div>
  );
};

export default AmenitiesSection;