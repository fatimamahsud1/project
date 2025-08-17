import Typography from '../../../atoms/typography/typography';
import SecondaryButton from '../../../atoms/buttons/secondary/secondaryButton';

const MessageForm = ({ infoText }) => {
  return (
    <div className="container">
      {/* Main Heading */}
      <Typography
        tag="h2"
        align="center"
        gutterBottom
        className="residences-title mb-[20px] md:mb-[40px] xl:mb-[50px]"
      >
        Register Yourself!
      </Typography>

      {/* Registration Section */}
      <div className="grid grid-cols-12 justify-center">
        <div className="md:col-span-1"></div>

        <div className="footer-container grid col-span-12 xl:col-span-10 grid-cols-12 px-4 md:px-6 xl:px-20 3xl:px-0 py-10 md:py-16 xl:py-24 bg-primary-brown rounded-[15px] md:rounded-[20px] xl:rounded-[25px] 3xl:rounded-[30px] text-white">
          {/* Main Section Content */}
          <div className="col-span-12 flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-6 md:space-y-8">
            {/* Section Heading */}
            <Typography
              tag="h2"
              className="text-2xl md:text-3xl xl:text-4xl font-bold leading-snug"
            >
              Start Your Journey to Cadet College
            </Typography>

            {/* Subtext */}
            <Typography
              tag="p"
              className="body footer-text text-base md:text-lg leading-relaxed"
            >
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

      {/* Monthly Fee Section */}
      <div className="grid grid-cols-12 justify-center mt-10 md:mt-16">
        <div className="md:col-span-1"></div>
        <div className="footer-container grid col-span-12 xl:col-span-10 grid-cols-12 px-4 md:px-6 xl:px-20 3xl:px-0 py-10 md:py-16 xl:py-24 bg-primary-brown rounded-[15px] md:rounded-[20px] xl:rounded-[25px] 3xl:rounded-[30px] text-white">
          {/* Main Section Content */}
          <div className="col-span-12 flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-6 md:space-y-8">
            {/* Section Heading */}
            <Typography
              tag="h2"
              className="text-2xl md:text-3xl xl:text-4xl font-bold leading-snug"
            >
              Submit Your Monthly Fee
            </Typography>

            {/* Subtext */}
            <Typography
              tag="p"
              className="body footer-text text-base md:text-lg leading-relaxed"
            >
              For your convenience, you can now submit your monthly academy fee online. 
              Click the button below to fill out the payment submission form.
            </Typography>

            {/* Fee Button */}
            <a
              href="https://docs.google.com/forms/d/1R107AN_22_oW7_aYCBjalr-sTwjJE8efN1qZBjIp8h0/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <SecondaryButton text="Submit Monthly Fee" showIcon={false} />
            </a>
          </div>
        </div>

        <div className="md:col-span-1 2xl:hidden 3xl:grid"></div>
      </div>
    </div>
  );
};

export default MessageForm;
