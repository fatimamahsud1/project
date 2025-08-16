import Typography from '../../../atoms/typography/typography';
import images from '@/constants/imageConstants';
import ServicesCard from '@/components/molecules/aboutus/cards/servicesCard/servicesCard';
import ServicesReverseCard from '@/components/molecules/aboutus/cards/servicesReverseCard/servicesReverseCard';

const ExploreNeighborhood = () => {
  return (
    <div className='container'>
      <Typography tag="h2" className="section-title text-center mb-[27px] md:mb-[40px] xl:mb-[51px] 2xl:mb-[48px] 3xl:mb-[75px] ">
        EXPLORE THE NEIGHBORHOOD
      </Typography>
      <div className='grid grid-cols-12'>
        <div className=' col-span-12 xl:col-start-2 xl:col-span-10'>
          <div className='mb-[50px] xl:mb-[80px] 3xl:mb-[80px]'>
            <ServicesCard
              imageSrc={images.png.airportImage.src}
              heading="Airport"
              text="Enjoy the luxury of effortless travel with the airport just minutes away from Lantro Heights. Whether you're jetting off for a business trip or a spontaneous getaway, seamless connections make your travel experience smooth and stress-free."
            />
          </div>
          <div className='mb-[50px] xl:mb-[80px] 3xl:mb-[80px]'>
            <ServicesReverseCard
              imageSrc={images.png.subwayImage.src}
              heading="Subway Station"
              text="Effortless commuting is at your fingertips with the subway station just a short walk from Lantro Heights. Enjoy quick and easy access to the city, making your daily travel smooth and convenient, whether you're heading to work, meeting friends, or exploring new destinations."
            />
          </div>
          <div className='mb-[50px] xl:mb-[80px] 3xl:mb-[80px]'>
            <ServicesCard
              imageSrc={images.png.hospitalImage.src}
              heading="Hospital"
              text="Peace of mind comes standard with a top-tier hospital just minutes from Lantro Heights. Access to quality healthcare is always within reach, ensuring you and your loved ones are well taken care of in any situation."
            />
          </div>
        </div>
        <div className='col-span-1'></div>
      </div>
    </div>
  );
};

export default ExploreNeighborhood;
