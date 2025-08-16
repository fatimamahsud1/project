import Typography from '../../../../atoms/typography/typography';
import PropTypes from 'prop-types';

const UnFeaturedBlog = ({ title, authorName, authorImage, date, blogImage }) => {
  return (
    <div className="unfeature-blog-card grid grid-cols-12 relative rounded-[15px] md:rounded-[20px] 2xl:rounded-[25px]">
      <div className="col-span-5">
        <div className="unfeature-image-placeholder rounded-[15px] md:rounded-[20px] 2xl:rounded-[25px] w-[25%]">
          <img src={blogImage} alt={authorName}/>
        </div>
      </div>
      <div className="col-span-7">
        <div>
          <Typography tag="p" className="body-small mt-[10px] xl:mt-[15px] 2xl:mt-[20px] 3xl:mt-[30px] pl-3 h-10 3xl:h-16">
            {title}
          </Typography>
        </div>
        <div className="unfeature-author flex items-center mt-2 mb-6 2xl:mt-4 2xl:mb-4 3xl:mb-5 pl-[14px] 2xl:pl-[22px]">
          <img src={authorImage} alt={authorName} className="w-[40px] h-[40px] rounded-[15px] md:rounded-[20px] 2xl:rounded-[25px] object-cover"/>
          <div className="unfeature-author-details flex flex-col">
            <Typography tag="p" className="body-small author-name pl-[2px]">
              {authorName}
            </Typography>
            <Typography tag="p" className="body-small date body-small text-white">
              {date}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

UnFeaturedBlog.propTypes = {
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  blogImage: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default UnFeaturedBlog;
