import Typography from '../../../atoms/typography/typography';
import images from '@/constants/imageConstants';
import ServicesCard from '@/components/molecules/aboutus/cards/servicesCard/servicesCard';
import ServicesReverseCard from '@/components/molecules/aboutus/cards/servicesReverseCard/servicesReverseCard';

const ApartmentsSection = () => {
  return (
    <div  id="all-apartments" className='container'>
      <Typography tag="h2" className=" h2 text-center mb-[25px] md:mb-[40px] xl:mb-[51px] 3xl:mb-[75px]">
        APARTMENTS
      </Typography>
      <div className='grid grid-cols-12'>
        <div className=' col-span-12 xl:col-start-2 xl:col-span-10'>
          <div className='mb-[50px] xl:mb-[80px] 3xl:mb-[80px]'>
            <ServicesCard
              imageSrc={images.png.bedImage.src}
              heading="One Bedroom Apartments"
              text="Experience urban sophistication in our spacious 1-bedroom apartments at Lantro Heights. Each meticulously designed space offers modern comfort and style, with panoramic views of Central park. Perfect for professionals and couples seeking a vibrant city lifestyle."
              buttonLabel="Book Now"
            />
          </div>
          <div className='mb-[50px] xl:mb-[80px] 3xl:mb-[80px]'>
            <ServicesReverseCard
              imageSrc={images.png.studioImage.src}
              heading="Studio Apartments"
              text="Embrace minimalistic luxury in our thoughtfully crafted studio apartments at Lantro Heights. Ideal for the discerning individual, each studio features efficient use of space, sleek finishes, and access to all the amenities you need. Live smart, live stylish."
              buttonLabel="Book Now"
            />
          </div>
          <div className='mb-[50px] xl:mb-[80px] 3xl:mb-[80px]'>
            <ServicesCard
              imageSrc={images.png.inclusiveImage.src}
              heading="Accessible Living Spaces"
              text="At Lantro Heights, we prioritize accessible living. Our thoughtfully designed apartments meet diverse needs, ensuring comfort for all residents. Experience a community that supports and embraces everyone."
              buttonLabel="Book Now"
            />
          </div>
        </div>
        <div className='col-span-1'></div>
      </div>
    </div>

  );
};

export default ApartmentsSection;