import Typography from '@/components/atoms/typography/typography';

const MemberCard = ({ name, title, imageUrl }) => {
  return (
    <div className="rounded-[15px] md:rounded-[20px] xl:rounded-[25px] 3xl:rounded-[30px] bg:none flex flex-col items-center">
      <div className="relative w-[315px] h-[270px]  md:w-[270] md:h-[250px] xl:w-[360px] xl:h-[334px] 2xl:w-[431px] 2xl:h-[400px] 3xl:w-[540px] 3xl:h-[498px]">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover rounded-[15px] md:rounded-[20px] xl:rounded-[25px] 3xl:rounded-[30px]"
        />
      </div>
      <div className="mt-4 text-center">
        <Typography tag='h3' className='h3'> {name}</Typography>
        <Typography tag='h4' className='h4 xl:w-[340px] 2xl:w-[440px]'> {title}</Typography>
      </div>
    </div>
  );
};

export default MemberCard;
