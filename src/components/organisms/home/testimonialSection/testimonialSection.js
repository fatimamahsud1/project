"use client"

import Typography from '../../../atoms/typography/typography';
import TestimonialCard from '../../../molecules/home/cards/testimonialCard/testimonialCard';
import  { useState } from 'react';

const testimonials = [
  {
    text: "I'm currently enrolled with Ahmad Online Cadet Academy! Their regular Zoom classes, great teaching methods, the weekly and monthly tests help me stay on track. The teachers are highly qualified and supportive. I'm preparing for cadet college entrance exams and feel confident with their guidance. Highly recommended!",
    author: "Fatima Khan",
    rating: 4,
  },

  {
    text: "In today's era, Ahmed Online Academy is the best investment for the future of children. Because all children can prepare sitting at home under the supervision of their parents.",
    author: "Aziz Mehsud",
    rating: 4,
  },
  {
    text: "Ahmed Cadet online academy is the best academy for prepration of Military ,PAF and Cadet collages. Every week there is a test. I do not think that there is any academy in Pakistan like Ahmed Online Cadet Academy",
    author: "Muhammad Babar",
    rating: 4,
  },
  {
    text: "Well experienced teachers, good effort, a great opportunity for students to prepare themselves. Highly recommended",
    author: "Saima khalid",
    rating: 4,
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-section container relative bg-white">
      <div className="flex justify-center items-center">
        <Typography tag="h2" align="center" gutterBottom className='residences-title mb-[3px] md:mb-[-1px] xl:mb-[40px] 2xl:mb-[50px]'>
          TESTIMONIALS
        </Typography>
      </div>
      <div className="grid grid-cols-12 gap-5 justify-center items-center xl:mt-4 content-grid">
        <div className="col-span-12 hidden xl:flex xl:col-span-5 flex-col justify-center xl:mt-5 xl:mb-14 xl:ml-[80px] items-center">
          <Typography tag="h3" align="center" className="text-secondary mb-[-20px] xl:mb-[0px]" gutterBottom>
            Hear from Our Happy <br /> Students
          </Typography>
        </div>
        <div className="col-span-12 xl:hidden xl:col-span-5 flex flex-col justify-center xl:mt-5 mb-6 md:mb-[-2px] xl:mb-5 items-center">
          <Typography tag="h3" align="center" className="text-secondary mb-[-20px] md:mb-[-30px] xl:mb-[0px]" gutterBottom>
            Hear from Our Happy Students
          </Typography>
        </div>
        <div className="col-span-1 hidden xl:block"></div>

        <div className="col-span-1 hidden xl:flex vertical-separator justify-end w-[5px] h-full rounded-[10px]">
          <div className="vertical-separator w-[15px] rounded-[10px] h-full"></div>
        </div>
        <div className="col-span-12 md:col-start-4 md:col-span-6 xl:col-span-4 md:mt-3 xl:mt-5 xl:mb-5">
          <TestimonialCard
            text={testimonials[currentIndex].text}
            author={testimonials[currentIndex].author}
            rating={testimonials[currentIndex].rating}
            onNext={nextSlide}
            onPrev={prevSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;