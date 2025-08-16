import PropTypes from 'prop-types';
import IconContainer from '../iconsContainer/iconsContainer';
import PrimaryButton from '@/components/atoms/buttons/primary/primaryButton';
import Typography from '@/components/atoms/typography/typography';
import Link from 'next/link';

const GradientSection = ({ heading, subHeading, description, buttonText, imageUrl, showIconContainer }) => {
  return (
    <div className="container flex justify-center items-center ">
      <div className="gradientSection h-[561px] w-full md:h-[572px] xl:h-[490px] 2xl:h-[559px] 3xl:h-[685px] grid relative grid-cols-12 gap-[10px] md:gap-[20px] rounded-[15px] xl:rounded-[25px] 3xl:rounded-[30px] justify-center items-center">   
      <div className="z-[2] col-start-2 col-span-10 xl:col-start-2 md:col-start-3 md:col-span-8 xl:col-span-6 text-white flex flex-col mt-[50px] xl:mt-[101px] mb-[200px] xl:mb-[146.8px]">
  <div className="heading">
    {heading && <Typography tag="h5" className="text-black text-center xl:text-start mb-[15px]">{heading}</Typography>}
  </div>
  <div className="subHeading-container">
  <div className="grid grid-cols-12">
    <div className="col-span-12 xl:col-span-12 md:mb-1 xl:mb-2">
      {!subHeading ? (
        <Typography tag="h1" className="text-black text-center xl:text-start md:mb-[2px]">
          YOUR GATEWAY <br/> TO MODERN LIVING
        </Typography>
      ) : (
        <Typography tag="h1" className="text-black text-center xl:text-start mt-[0px] md:mt-[-50px] xl:mt-[-60px] 2xl:mt-[-65px] 3xl:mt-[-90px] xl-[0px] mb-[8px] md:mb-[5px] xl:mb-[13px]">
          {subHeading}
        </Typography>
      )}
    </div>
  </div>
</div>

  <div className="description-container">
    {description && (
      <div className="grid grid-cols-12">
        <div className="col-start-2 md:col-start-3 col-span-10 md:col-span-8 xl:col-span-10">
          <Typography tag="p" className="text-black body text-center xl:pl-0 xl:pr-0 xl:text-start mb-[15px] md:mb-[2px] 2xl:mb-[15px] 3xl:mb-[35px]">
            {description}
          </Typography>
        </div>
      </div>
    )}
  </div>
  {buttonText && (
    <div className="buttonContainer mt-2 mb-[20px] sm:mb-[200px] md:mb-[300px] mx-auto xl:ml-0 xl:justify-start">
      <Link href='/aboutus'>
      <PrimaryButton text="Explore More"/>
      </Link>
    </div>
  )}
</div>
        <div className="absolute rounded-none md:rounded-none xl:rounded-br-[25px] 2xl:rounded-br-[30px] col-span-6 bottom-0 right-14 md:right-[170px] xl:right-0 flex items-center justify-center overflow-hidden">
          {imageUrl && <img src={imageUrl} alt="Building" className="w-full h-[200px] md:h-[300px] xl:h-[472px] 2xl:h-[530px] 3xl:h-[685px]"/>}
        </div>
        {showIconContainer && (
          <div className="iconContainer-wrapper mt-[-50px] md:mt-[-490px] xl:mt-[-690px] 2xl:mt-[-620px] 3xl:mt-[-520px] col-span-12">
            <IconContainer />
          </div>
        )}
      </div>
    </div>
  );
};

GradientSection.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  imageUrl: PropTypes.string,
  showIconContainer: PropTypes.bool,
};

export default GradientSection;
