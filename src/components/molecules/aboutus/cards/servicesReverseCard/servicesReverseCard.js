import PropTypes from 'prop-types';
import Typography from '@/components/atoms/typography/typography';
import SecondaryButton from '@/components/atoms/buttons/secondary/secondaryButton';
import Link from 'next/link';

const ServicesReverseCard = ({ imageSrc, heading, text, buttonLabel }) => {
  return (
    <div className="grid grid-cols-10 gap-5 bg-white items-center">
      <div className="flex flex-col justify-center col-span-12 xl:col-span-4">
        <Typography tag="h3" className=" text-black mb-2 text-left">{heading}</Typography>
        <Typography tag="p" className="body-medium text-black leading-relaxed text-left mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]">{text}</Typography>
        {buttonLabel && (
          <Link href='/contactus'>
          <SecondaryButton text={buttonLabel} />
          </Link>        )}
      </div>
      <div className='hidden xl:grid xl:col-span-1 '></div>
      <div className="flex justify-center col-span-12 xl:col-span-5">
        <img src={imageSrc} alt="Electrical and IT Estimations" className="w-full h-auto md:h-[308px] xl:h-auto rounded-[15px] md:rounded-[20px] xl:rounded-[25px] 3xl:rounded-[30px] shadow-md"/>
      </div>
    </div>
  );
};

ServicesReverseCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
};

export default ServicesReverseCard;