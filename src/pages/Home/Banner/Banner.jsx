import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import {  } from "react-icons/fa";

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  
    return (
        <Carousel autoPlay interval={3000} infiniteLoop>
            <div>
            <div className="relative">
                    <img src='https://i.ibb.co/BcF8hLJ/frame-3518725-1280.webp' />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        <h2 data-aos="fade-right" className="text-6xl font-bold mb-5"><span className='text-purple-700'> Best <span className='text-blue-400'>Summer</span><span className='text-orange-600'> Camping</span></span> </h2>
                         <h2  data-aos="fade-left" className="text-6xl font-bold mb-5">
                    <span className='text-green-600'>for <span className='text-yellow-500'>your</span><span className='text-pink-600'> kid</span></span></h2>
                    <h4 data-aos="zoom-in" className='text-5xl text-blue-900 font-bold mb-5'>Exclusive <span className='text-rose-700'>Art</span> <span className='text-amber-600'>Classes</span></h4>
                    <ul className="text-lg text-violet-700 font-semibold">
                            <li data-aos="fade-up" className="mb-2 flex items-center">
                                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-current text-green-500" d="M4 11H2V7H4V11ZM5 5H1V13H5V17L9 12L5 7V11H7V5H5Z" />
                                    <path className="fill-current text-gray-400" d="M22 12L18 17V13H16V19H20L22 12Z" />
                                </svg>
                                Attractive Classes
                            </li>
                            <li data-aos="fade-up" className="mb-2 flex items-center">
                                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-current text-green-500" d="M4 11H2V7H4V11ZM5 5H1V13H5V17L9 12L5 7V11H7V5H5Z" />
                                    <path className="fill-current text-gray-400" d="M22 12L18 17V13H16V19H20L22 12Z" />
                                </svg>
                                Best Facilities & Infrastructure
                            </li>
                            <li data-aos="fade-up" className="mb-2 flex items-center">
                                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-current text-green-500" d="M4 11H2V7H4V11ZM5 5H1V13H5V17L9 12L5 7V11H7V5H5Z" />
                                    <path className="fill-current text-gray-400" d="M22 12L18 17V13H16V19H20L22 12Z" />
                                </svg>
                                Best Teachers
                            </li>
                            <li data-aos="fade-up" className="mb-2 flex items-center">
                                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-current text-green-500" d="M4 11H2V7H4V11ZM5 5H1V13H5V17L9 12L5 7V11H7V5H5Z" />
                                    <path className="fill-current text-gray-400" d="M22 12L18 17V13H16V19H20L22 12Z" />
                                </svg>
                                Learn & Play School
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <img src='https://i.ibb.co/mRMM8m2/school-7355057-1280.webp' />
            </div>
            <div>
                <img src='https://i.ibb.co/5TRwDmZ/school-4527712-1280.jpg' />
            </div>
            <div>
                <img src='https://i.ibb.co/J7Gmjdg/back-to-school-2629361-1280.webp' />
            </div>
            <div>
                <img src='https://i.ibb.co/ZVHPWB0/students-3518726-1280.webp' />
            </div>
            <div>
                <img src='https://i.ibb.co/PQw3VgN/kids-2030260-1280.webp' />
            </div>
        </Carousel>
    );
};

export default Banner;