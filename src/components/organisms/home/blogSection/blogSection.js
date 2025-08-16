import Typography from '../../../atoms/typography/typography';
import FeaturedBlog from '../../../molecules/home/cards/featuredBlog/featuredBlog';
import images from '@/constants/imageConstants';
import UnFeaturedBlog from '@/components/molecules/home/cards/unfeaturedBlog/unFeaturedBlog';

const BlogSection = () => {
  return (
    <>
      <div className='container'>
        <Typography tag="h2" className="section-title text-center mb-5 md:mb-8 ">
          BLOGS
        </Typography>
        <div className="blog-section grid-cols-12 gap-5 hidden md:grid">
          <div className="featured-blog col-span-12 xl:col-start-2 xl:col-span-6 ">
            <FeaturedBlog />
          </div>
          <div className="unfeatured-blogs col-span-12 xl:col-span-4 flex flex-col md:flex-row xl:flex-col gap-4 justify-between">
            <div className="unfeatured-blog md:flex-1">
              <UnFeaturedBlog
                title="The Future of Urban Living"
                authorName="Sarah Brown"
                authorImage={images.svg.unFeaturedAuthorImage1.src}
                date="July 1, 2024"
                blogImage={images.png.urbanLivingBlog.src}
              />
            </div>
            <div className="unfeatured-blog md:flex-1">
              <UnFeaturedBlog
                title="Tech-Enabled Living: Smart Home Features"
                authorName="Jessica White"
                authorImage={images.svg.jessicabrown.src}
                date="June 30, 2024"
                blogImage={images.png.smartHomeBlog.src}
              />
            </div>
          </div>
          <div className='col-span-1'></div>
        </div>
        <div className="feature-blog-card rounded-[15px] bg-secondary-dark-brown text-white p-5 relative md:hidden">
          <div className="content flex flex-col justify-between h-full">
            <div className="image-placeholder w-full h-0 pt-[56.25%] relative rounded-[15px] bg-gray-300 mb-4">
              <img src={images.png.featuredBlogImage.src} alt="blog image" className="absolute top-0 left-0 w-full h-full object-cover"/>
            </div>
            <div className="absolute top-10 right-[19px] flex items-center">
              <img src={images.svg.reverseFeaturedTag.src} className='w-[100px] h-auto xxl:w-[140px]' />
            </div>
          </div>
          <Typography tag="h3" className="mt-4">
            Investing in Real Estate: Why Lantro Heights is a Smart Choice
          </Typography>
          <div className="flex items-center mt-4">
            <img src={images.svg.featuredAuthorImage.src} alt="John Smith" className="w-[40px] h-[40px] rounded-full object-cover"/>
            <div className="ml-3 flex flex-col">
              <Typography tag="p" className="body author-name font-bold">John Smith</Typography>
              <Typography tag="p" className="body-small text-white">June 20, 2024</Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;