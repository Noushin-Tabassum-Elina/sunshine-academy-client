import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedTextWord from '../../../components/animation/AnimatedTextWord';
import AnimatedTextCharacter from '../../../components/animation/AnimatedTextCharacter';

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/BcF8hLJ/frame-3518725-1280.webp" className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full">
          <div className=' space-y-7 md:pl-28 md:ms-16 '>
            
            <AnimatedTextWord text="Summer Camping Drawing School"></AnimatedTextWord>
            <AnimatedTextCharacter text="SunShine Academy"></AnimatedTextCharacter>
          </div>
        </div>
        
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/mRMM8m2/school-7355057-1280.webp" className="w-full rounded-xl" />
        
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/CVJBSTC/kids-160168-1280.webp" className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/1zXYpKg/school-4527713-1280.jpg" className="w-full rounded-xl" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
