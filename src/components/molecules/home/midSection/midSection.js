import Typography from '../../../atoms/typography/typography';
import SecondaryButton from '../../../atoms/buttons/secondary/secondaryButton';
import Link from 'next/link';

const MidSection = () => {
  return (
    <div className='container'>
      <div className="grid grid-cols-12 gap-5 items-center justify-center text-center">
        <div className="col-span-12 flex justify-center items-center">
          <div className="title-container xl:mb-3">
           <Typography tag="h1" className="lantro-color">
  AHMAD ONLINE <br />
  <span className="highlight">CADET ACADEMY</span>
</Typography>

          </div>
        </div>
        <div className="col-span-2 hidden xl:block"></div>
        <div className="flex flex-col items-center justify-center col-span-12 xl:col-span-8 mt-[-10px]">
          <Typography tag="p" className="body description">
            Ahmad Online Cadet Academy offers top-tier online preparation for Cadet Colleges, Military, PAF, Army, and Navy Schools, all from the comfort of home. With live Zoom classes 5 days a week, expert subject specialists, weekly & monthly tests, and complete preparation for written exams, intelligence tests, and interviews, we ensure your child is fully ready to achieve their dream. Affordable fees, quality teaching, and a proven system, start your child’s journey to success today!"
          </Typography>
          <div className="mt-6 flex justify-center">
          <Link href="https://docs.google.com/forms/d/1R107AN_22_oW7_aYCBjalr-sTwjJE8efN1qZBjIp8h0/viewform" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block">
            <SecondaryButton text="Register Now"/>
          </Link>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default MidSection;