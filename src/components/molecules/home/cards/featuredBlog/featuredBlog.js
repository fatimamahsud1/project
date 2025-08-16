import Typography from '../../../../atoms/typography/typography';
import images from '../../../../../constants/imageConstants';

const FeaturedBlog = () => {
  return (
    <div className="feature-blog-card grid grid-cols-12 gap-4 p-5 rounded-[15px] md:rounded-[20px] 2xl:rounded-[25px] 3xl:rounded-[30px] bg-secondary-dark-brown">
      <div className="image-placeholder relative w-[100%] h-0 pt-[100%] md:rounded-[20px] xl:rounded-[25px] 3xl:rounded-[30px] col-span-6">
        <img src={images.png.featuredBlogImage.src} alt="blog image" className="absolute top-0 left-0 w-full h-full object-cover md:rounded-[20px] xl:rounded-[25px] 3xl:rounded-[30px]"/>
      </div>
      <div className="flex col-span-6 flex-col relative">
        <div className="absolute top-7 left-[-18px] md:left-[-17px] flex items-center">
          <img src={images.svg.featuredTag.src} className='w-[80px] h-auto md:w-[92px] xl:w-[91px] 2xl:w-[120px] 3xl:w-[160px]'/>
        </div>
        <div className="mt-8">
          <Typography tag="h4" className="mt-14 2xl:mt-14 3xl:mt-16">
            Investing in Real Estate: Why Lantro Heights is a Smart Choice
          </Typography>
        </div>
        <div className="author flex items-center mt-20 xl:mt-8 ">
          <img src={images.svg.featuredAuthorImage.src} alt="John Smith" className="author-image w-[40px] h-[40px] rounded-full object-cover"/>
          <div className="ml-3 flex flex-col">
            <Typography tag="p" className="body-small ">John Smith</Typography>
            <Typography tag="p" className="body-small ">June 20, 2024</Typography>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FeaturedBlog;