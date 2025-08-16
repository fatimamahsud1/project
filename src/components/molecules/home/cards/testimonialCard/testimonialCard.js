import Typography from '../../../../atoms/typography/typography'; 
import TertiaryButton from '../../../../atoms/buttons/tertiary/tertiaryButton';
import images from '../../../../../constants/imageConstants';

const TestimonialCard = ({ text, author, rating, image, onNext, onPrev }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img key={i} src={images.svg.reviewStar.src} alt="Star" className="w-4 h-4" />
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-col col-span-2 items-start rounded-lg bg-white">
      <div className="min-h-[140px] md:min-h-[150px] xl:min-h-[130px] 2xl:min-h-[140px] 3xl:min-h-[170px]">
        <Typography tag="p" align="left" className="text-black body-small mt-2">
          {`“${text}”`}
        </Typography>
      </div>

      <div className="flex items-center justify-between xl:mt-7 w-full">
        <div className="flex items-center">
          <div className="flex flex-col">
            <div className="flex">
              {renderStars()}
            </div>
            <Typography tag="p" className="mt-1">
              {author}
            </Typography>
          </div>
        </div>
        <div className="flex gap-2">
          <TertiaryButton onClick={onPrev} className='rotate-180'>
            &#9664;
          </TertiaryButton>
          <TertiaryButton onClick={onNext}>
            &#9654;
          </TertiaryButton>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;