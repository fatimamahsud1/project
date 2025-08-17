import Header from '../components/organisms/shared/header/header';
import GradientSection from '../components/molecules/shared/heroSection/heroSection';
import ResidencesSection from '../components/molecules/home/residencesSection/residencesSection';
import MidSection from '../components/molecules/home/midSection/midSection';
import BlogSection from '@/components/organisms/home/blogSection/blogSection';
import GallerySection from '@/components/molecules/home/gallerySection/gallerySection';
import TestimonialSection from '@/components/organisms/home/testimonialSection/testimonialSection';
import MessageForm from '@/components/organisms/shared/messageForm/messageForm';
import Footer from '@/components/organisms/shared/footer/footer';
import images from '../constants/imageConstants';

const App = () => {
  return (
    <div>   
    <Header/>
    {/* <div className='mb-[480px] md:mb-[120px] xl:mb-[150px] 3xl:mb-[180px]' >
    <GradientSection
        heading="WELCOME TO LANTRO HEIGHTS"
        description="Discover accessible spaces where comfort and convenience blend seamlessly. Experience a community designed to elevate your lifestyle every day."
        buttonText="Explore More"
        imageUrl={images.webp.building.src}
        showIconContainer={true}
      />
    </div> */}
      <div className='mb-[60px] xl:mb-[70px]'>
  <section id="about">
    <MidSection />
  </section>
</div>
    <div className='mb-[62px] xl:mb-[120px]'>
        <section id="admissions">
    <ResidencesSection/>
      </section>
    </div>
                  <section id="services">

    <div className='mb-[62px] md:mb-[0px] xl:mb-[100px]'>

    <GallerySection/>

    </div>
              </section>

    <div className='mb-[71px] md:mb-[64px] xl:mb-[120px]'>
    <section id="testimonials">
    <TestimonialSection/>
              </section>
    </div>
    <div >
    <div className='md:mb-[60px] '>
          <section id="register">

    <MessageForm 
infoText="Ready to register? Fill out the form below to complete your registration, and our team will guide you through the next steps."
/>   
              </section>

    </div>
    </div>
    </div>
  );
};

export default App;

