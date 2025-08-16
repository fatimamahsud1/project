import MemberCard from '@/components/molecules/aboutus/cards/memberCard/memberCard';
import images from '@/constants/imageConstants';
import Typography from '@/components/atoms/typography/typography';

const MembersSection = () => {
  const members = [
    {
      name: 'John Smith',
      title: 'CEO',
      imageUrl: images.png.ceoImage.src,
    },
    {
      name: 'Sarah Thompson',
      title: 'Chief Architect',
      imageUrl: images.png.architectImage.src,
    },
    {
      name: 'Mike Tyson',
      title: 'Customer Experience Manager',
      imageUrl: images.png.managerImage.src,
    },
  ];
  return (
    <div id='our-team' className='container'>
      <Typography tag="h2" className="section-title text-center mb-5 xl:mb-8 2xl:mb-11">
        OUR MEMBERS
      </Typography>
      <div className='grid grid-cols-12 items-center justify-center mb-8 md:mb-14 3xl:mb-20'>
        <div className='col-span-12 flex justify-center'>
          <div className="w-full col-span-12 flex justify-center">
            <MemberCard
              name={members[0].name}
              title={members[0].title}
              imageUrl={members[0].imageUrl}
            />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-12 md:mb-28 xl:mb-[189px]'>
        <div className="w-full flex col-span-12 xl:col-start-2 xl:col-span-10 flex-col sm:flex-row justify-between items-center sm:space-x-8 xl:space-x-0">
          <div className='mb-8 md:mb-0 '>
            <MemberCard
              name={members[1].name}
              title={members[1].title}
              imageUrl={members[1].imageUrl}
            />
          </div>
          <div className='mb-8 md:mb-0'>
            <MemberCard
              name={members[2].name}
              title={members[2].title}
              imageUrl={members[2].imageUrl}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default MembersSection;