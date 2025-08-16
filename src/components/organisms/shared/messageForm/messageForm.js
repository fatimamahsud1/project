import Typography from '../../../atoms/typography/typography';
import SecondaryButton from '../../../atoms/buttons/secondary/secondaryButton';

const MessageForm = ({ infoText }) => {
  return (
    <>
      <div className="container">
         <Typography tag="h2" align="center" gutterBottom className='residences-title mb-[3px] md:mb-[-1px] xl:mb-[40px] 2xl:mb-[50px]'>
          Register Youself!
        </Typography>
        <div className="grid-cols-12 justify-center hidden md:grid">
          <div className="md:col-span-1"></div>

          <div className="footer-container grid col-span-12 xl:col-span-10 grid-cols-12 pl-6 pr-6 xl:pl-20 xl:pr-20 3xl:pl-0 3xl:pr-0 py-16 xl:py-24 bg-primary-brown md:rounded-[20px] xl:rounded-[25px] 3xl:rounded-[30px] text-white">
            
            {/* Main Section Content */}
            <div className="col-span-12 flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-8">
              
              {/* Section Heading */}
              <Typography tag="h2" className="text-3xl xl:text-4xl font-bold leading-snug">
                Start Your Journey to Cadet College
              </Typography>

              {/* Subtext */}
              <Typography tag="p" className="body footer-text text-lg leading-relaxed">
                {infoText}
              </Typography>

              {/* Button */}
              <a 
                href="https://docs.google.com/forms/d/1R107AN_22_oW7_aYCBjalr-sTwjJE8efN1qZBjIp8h0/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <SecondaryButton text="Fill Registration Form" showIcon={false} />
              </a>
            </div>
          </div>

          <div className="md:col-span-1 2xl:hidden 3xl:grid"></div>
        </div>
      </div>
    </>
  );
};

export default MessageForm;
