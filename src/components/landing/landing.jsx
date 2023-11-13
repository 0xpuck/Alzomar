import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay, Navigation, EffectFade, Zoom, Keyboard } from "swiper";
import { gsap } from 'gsap';

import 'swiper/css/effect-fade'
import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/less/grid';
import 'swiper/css/zoom';
import 'swiper/css/keyboard';

import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

export default function Landing() {
    const [activeIndex, setActiveIndex] = useState(0);
    const firstPic = useRef();
    useEffect(() => {
        gsap.fromTo(firstPic.current,{scale: "1"}, {scale: "1.1", duration: "3"});
        setActiveIndex(activeIndex + 1);
    }, [])

    const slideImgs = ['./img/landing/slide2/4.jpg',
        './img/landing/slide2/5.jpg',
        './img/landing/slide2/6.jpg',
        './img/landing/slide2/7.jpg',
        './img/landing/slide2/8.jpg',
        './img/landing/slide2/9.jpg',
        './img/landing/slide2/10.jpg',
        './img/landing/slide2/3.png',
        './img/landing/slide2/1.png'
    ];
    const onLern = () => {
        alert("afjlkasfads");
    }
    return (
        <div className="w-full">
            <Swiper
                speed={600}
                parallax={true}
                loop={true}
                keyboard={{ enabled: true, onlyInViewport: true }}
                modules={[Parallax, Pagination, EffectFade, Zoom, Keyboard, Navigation, Autoplay]}
                slideToClickedSlide={true}
                className="relative bg-stone-400 items-content justify-center flex xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px]"
                onSlideChange={(e) => {
                    setActiveIndex(e.realIndex);
                }}
                style={{
                    '--swiper-pagination-color': 'white',
                    '--swiper-pagination-bullet-size': '8px',
                    '--swiper-pagination-right': 'auto',
                    '--swiper-pagination-left': '10px',
                    '--swiper-pagination-top': 'auto',
                    '--swiper-pagination-bottom': '0px',
                    '--swiper-pagination-bullet-inactive-opacity': '0.8',
                    '--swiper-pagination-bullet-opacity': '1',
                    '--swiper-pagination-bullet-horizontal-gap': '12px',
                    '--swiper-pagination-bullet-inactive-color': '#000',
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: '#nextbutton',
                    prevEl: '#prevbutton',
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                zoom={{ maxRatio: 1.5 }}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: true,
                }}
            >
                <div className='relative ml-40 lg:block hidden -mt-96 z-10 text-stone-50 float-left '>
                    <a className='text-xl'>
                        <FaFacebook className='my-4 z-20 hover:scale-125 hover:text-sky-300' />
                    </a>
                    <a className='text-xl my-4'>
                        <FaLinkedin className='my-4 z-20 hover:scale-125 hover:text-sky-300' />
                    </a>
                    <a className='text-xl my-4'>
                        <FaYoutube className='my-4 z-20 hover:scale-125 hover:text-sky-300' />
                    </a>
                    <a className='text-xl my-4'>
                        <FaTelegram className='my-4 z-20 hover:scale-125 hover:text-sky-300' />
                    </a>
                    <a className='text-xl my-4'>
                        <FaTwitter className='my-4 z-20 hover:scale-125 hover:text-sky-300' />
                    </a>
                </div>
                <SwiperSlide key={0} className='relative w-full xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px]' data-aos='fade-in'>
                    <div className='absolute w-full items-content justify-center flex'>
                        <img className={`relative ${activeIndex == 0 && "img_zoomUp"} w-full xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px]`} src="./img/landing/slide1/logo.jpg" />
                    </div>
                    <div className='relative w-full bg-black bg-opacity-60 text-center'>
                        <div className='w-full relative code-block code-block-52 items-content justify-center flex'>
                            <div className="xl:w-full w-4/5 xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px] items-center justify-center flex">
                                <div className="xl:w-4/5 w-full">
                                    <h1 className='mb-5 lg:text-7xl text-5xl font-extrabold text-stone-200 max-sm:text-xl max-sm:my-2'>Alzomar</h1>
                                    <div className="text-center items-content justify-center flex">
                                        <h1 className='w-4/5 text-[16px] text-center text-stone-50 max-sm:text-sm max-sm:my-2'>Alzomar is based in Doha, Qatar, from where it serves many government and private organizations with a comprehensive range of products and services since 2002</h1>
                                    </div>
                                    <div className="items-content justify-center flex mt-2">
                                        <h1 className='w-4/5 text-[16px] text-stone-50 max-sm:text-sm max-sm:my-2'>The success of the company is based on continuous introduction and delivery of the latest technologies and products in its specialist fields</h1>
                                    </div>
                                    <div className="items-content justify-center flex mt-2">
                                        <h1 className='w-4/5 text-[16px] text-stone-50 max-sm:text-sm max-sm:my-2'>We have partnered with leaders in the fields of security, communications, forensics, Biometrics as well as information and communication technology solutions that are focused on delivering amazing to the State of Qatar through delivery, dependency and excellence</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={1} className='relative w-full xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px]' data-aos='fade-in'>
                    <div className='absolute w-full'>
                        <img className={`relative ${activeIndex == 1 && "img_zoomUp"} w-full xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px]`} src="./img/landing/slide1/dfd-bg-com.jpg" />
                    </div>
                    <div className='relative w-full bg-black bg-opacity-60'>
                        <div className='w-full relative code-block code-block-52 items-content justify-center flex'>
                            <div className="xl:w-full w-4/5 xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px] items-center justify-center flex">
                                <div>
                                    <h1 className='lg:text-[20px] text-[30px] text-stone-200 my-6 max-sm:text-xl max-sm:my-2'>Micro Website</h1>
                                    <h1 className='mb-5 lg:text-7xl text-5xl font-extrabold text-stone-200 my-2 max-sm:text-xl max-sm:my-2'>Digital Forensics Qatar</h1>
                                    <button className='w-56 items-center justify-center flex transition duration-300 my-2 lg:mb-20 md:mb-20 mb-10 text-xl font-bold hover:bg-[#4061a8] bg-opacity-20 border-2' onClick={onLern}>
                                        <div className="w-3/4">
                                            <span className='text-stone-50'>Learn More</span>
                                        </div>
                                        <div className="w-1/4">
                                            <button className='bg-[#4061a8] transition duration-300 py-2 my-1'><div className='text-2xl px-2 text-stone-50'><GoArrowRight /></div></button>
                                        </div>
                                    </button>
                                    <h1 className='w-4/5 text-[16px] text-stone-50 max-sm:text-sm max-sm:my-2'>In a world that’s evolving rapidly, know the latest and the best digital forensic solutions that empower law enforcement, governments, and enterprises</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={2} className='relative w-full xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px]' data-aos='fade-in'>
                    <div className='absolute w-full'>
                        <img className={`relative ${activeIndex == 2 && "img_zoomUp"} w-full lg:h-screen md:h-[500px] sm:h-[500px] h-[300px]`} src="./img/landing/slide1/Digital-forensic-bg-scaled-com.jpg" />
                    </div>
                    <div className='relative w-full bg-black bg-opacity-60'>
                        <div className='w-full relative code-block code-block-52 items-content justify-center flex'>
                            <div className="xl:w-full w-4/5 xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px] items-center justify-center flex">
                                <div>
                                    <h1 className='lg:text-[20px] text-[30px] text-stone-200 my-6 max-sm:text-xl max-sm:my-2'>Micro Website</h1>
                                    <h1 className='mb-5 lg:text-7xl text-5xl font-extrabold text-stone-200 my-2 max-sm:text-xl max-sm:my-2'>Opensource Intelligence</h1>
                                    <button className='w-56 items-center justify-center flex transition duration-300 my-2 lg:mb-20 md:mb-20 mb-10 text-xl font-bold hover:bg-[#4061a8] bg-opacity-20 border-2' onClick={onLern}>
                                        <div className="w-3/4">
                                            <span className='text-stone-50'>Learn More</span>
                                        </div>
                                        <div className="w-1/4">
                                            <button className='bg-[#4061a8] transition duration-300 py-2 my-1'><div className='text-2xl px-2 text-stone-50'><GoArrowRight /></div></button>
                                        </div>
                                    </button>
                                    <h1 className='w-4/5 text-[16px] text-stone-50 max-sm:text-sm max-sm:my-2'>Solutions you can trust to be on top of your OSINT game! Explore the best tools for conducting in-depth investigations across social media, blockchains and Dark Web.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={3} className='relative w-full xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px]' data-aos='fade-in'>
                    <div className='absolute w-full'>
                        <img className={`relative ${activeIndex == 3 && "img_zoomUp"} w-full lg:h-screen md:h-[500px] sm:h-[500px] h-[300px]`} src="./img/landing/slide1/mh-service-2-com.jpg" />
                    </div>
                    <div className='relative w-full bg-black bg-opacity-60'>
                        <div className='w-full relative code-block code-block-52 items-content justify-center flex'>
                            <div className="xl:w-full w-4/5 xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px] items-center justify-center flex">
                                <div>
                                    <h1 className='lg:text-[20px] text-[30px] text-stone-200 my-6 max-sm:text-xl max-sm:my-2'>Micro Website</h1>
                                    <h1 className='mb-5 lg:text-7xl text-5xl font-extrabold text-stone-200 my-2 max-sm:text-xl max-sm:my-2'>Crimescene Investigation</h1>
                                    <button className='w-56 items-center justify-center flex transition duration-300 my-2 lg:mb-20 md:mb-20 mb-10 text-xl font-bold hover:bg-[#4061a8] bg-opacity-20 border-2' onClick={onLern}>
                                        <div className="w-3/4">
                                            <span className='text-stone-50'>Learn More</span>
                                        </div>
                                        <div className="w-1/4">
                                            <button className='bg-[#4061a8] transition duration-300 py-2 my-1'><div className='text-2xl px-2 text-stone-50'><GoArrowRight /></div></button>
                                        </div>
                                    </button>
                                    <h1 className='w-4/5 text-[16px] text-stone-50 max-sm:text-sm max-sm:my-2'>Discover the latest and the best technologies that provide you end to end solutions including biological, DNA and fingerprint identification, as well as 3D reconstruction and detection.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={4} className='relative w-full xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px]' data-aos='fade-in'>
                    <div className='absolute w-full'>
                        <img className={`relative ${activeIndex == 4 && "img_zoomUp"} w-full lg:h-screen md:h-[500px] sm:h-[500px] h-[300px]`} src="./img/landing/slide1/ADP-New-scaled-com.jpg" />
                    </div>
                    <div className='relative w-full bg-black bg-opacity-60'>
                        <div className='w-full relative code-block code-block-52 items-content justify-center flex'>
                            <div className="xl:w-full w-4/5 xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px] items-center justify-center flex">
                                <div>
                                    <h1 className='lg:text-[20px] text-[30px] text-stone-200 my-6 max-sm:text-xl max-sm:my-2'>Micro Website</h1>
                                    <h1 className='mb-5 lg:text-7xl text-5xl font-extrabold text-stone-200 my-2 max-sm:text-xl max-sm:my-2'>Additively Printed Products</h1>
                                    <button className='w-56 items-center justify-center flex transition duration-300 my-2 lg:mb-20 md:mb-20 mb-10 text-xl font-bold hover:bg-[#4061a8] bg-opacity-20 border-2' onClick={onLern}>
                                        <div className="w-3/4">
                                            <span className='text-stone-50'>Learn More</span>
                                        </div>
                                        <div className="w-1/4">
                                            <button className='bg-[#4061a8] transition duration-300 py-2 my-1'><div className='text-2xl px-2 text-stone-50'><GoArrowRight /></div></button>
                                        </div>
                                    </button>
                                    <h1 className='w-4/5 text-[16px] text-stone-50 max-sm:text-sm max-sm:my-2'>Get to know the pioneers of 3D printing of electronics and how they are revolutionizing the industry.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={5} className='relative w-full xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px]' data-aos='fade-in'>
                    <div className='absolute w-full'>
                        <img className={`relative ${activeIndex == 5 && "img_zoomUp"} w-full lg:h-screen md:h-[500px] sm:h-[500px] h-[300px]`} src="./img/landing/slide1/forensscope-com.jpg" />
                    </div>
                    <div className='relative w-full bg-black bg-opacity-60'>
                        <div className='w-full relative code-block code-block-52 items-content justify-center flex'>
                            <div className="xl:w-full w-4/5 xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px] items-center justify-center flex">
                                <div>
                                    <h1 className='lg:text-[20px] text-[30px] text-stone-200 my-6 max-sm:text-xl max-sm:my-2'>Micro Website</h1>
                                    <h1 className='mb-5 lg:text-7xl text-5xl font-extrabold text-stone-200 my-2 max-sm:text-xl max-sm:my-2'>Fingerprint Detection</h1>
                                    <button className='w-56 items-center justify-center flex transition duration-300 my-2 lg:mb-20 md:mb-20 mb-10 text-xl font-bold hover:bg-[#4061a8] bg-opacity-20 border-2' onClick={onLern}>
                                        <div className="w-3/4">
                                            <span className='text-stone-50'>Learn More</span>
                                        </div>
                                        <div className="w-1/4">
                                            <button className='bg-[#4061a8] transition duration-300 py-2 my-1'><div className='text-2xl px-2 text-stone-50'><GoArrowRight /></div></button>
                                        </div>
                                    </button>
                                    <h1 className='w-4/5 text-[16px] text-stone-50 max-sm:text-sm max-sm:my-2'>Fingerprint evidence can play a crucial role in criminal investigations. Discover the new innovations that will save valuable time and reveal connections that could otherwise go unnoticed.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={6} className='relative w-full xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px]' data-aos='fade-in'>
                    <div className='absolute w-full'>
                        <img className={`relative ${activeIndex == 6 && "img_zoomUp"} w-full lg:h-screen md:h-[500px] sm:h-[500px] h-[300px]`} src="./img/landing/slide1/faro-bg-com.jpg" />
                    </div>
                    <div className='relative w-full bg-black bg-opacity-60'>
                        <div className='w-full relative code-block code-block-52 items-content justify-center flex'>
                            <div className="xl:w-full w-4/5 xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px] items-center justify-center flex">
                                <div>
                                    <h1 className='lg:text-[20px] text-[30px] text-stone-200 my-6 max-sm:text-xl max-sm:my-2'>Micro Website</h1>
                                    <h1 className='mb-5 lg:text-7xl text-5xl font-extrabold text-stone-200 my-2 max-sm:text-xl max-sm:my-2'>Inspection & Detection</h1>
                                    <button className='w-56 items-center justify-center flex transition duration-300 my-2 lg:mb-20 md:mb-20 mb-10 text-xl font-bold hover:bg-[#4061a8] bg-opacity-20 border-2' onClick={onLern}>
                                        <div className="w-3/4">
                                            <span className='text-stone-50'>Learn More</span>
                                        </div>
                                        <div className="w-1/4">
                                            <button className='bg-[#4061a8] transition duration-300 py-2 my-1'><div className='text-2xl px-2 text-stone-50'><GoArrowRight /></div></button>
                                        </div>
                                    </button>
                                    <h1 className='w-4/5 text-[16px] text-stone-50 max-sm:text-sm max-sm:my-2'>It can be overwhelming to choose the right solution when it comes to inspection and detection. Let us guide you discover the right type of tools and training that are perfect fit.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={7} className='relative w-full xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px]' data-aos='fade-in'>
                    <div className='absolute w-full'>
                        <img className={`relative ${activeIndex == 7 && "img_zoomUp"} w-full lg:h-screen md:h-[500px] sm:h-[500px] h-[300px]`} src="./img/landing/slide1/projectina-1-com.jpg" />
                    </div>
                    <div className='relative w-full bg-black bg-opacity-60'>
                        <div className='w-full relative code-block code-block-52 items-content justify-center flex'>
                            <div className="xl:w-full w-4/5 xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px] items-center justify-center flex">
                                <div>
                                    <h1 className='lg:text-[20px] text-[30px] text-stone-200 my-6 max-sm:text-xl max-sm:my-2'>Micro Website</h1>
                                    <h1 className='mb-5 lg:text-7xl text-5xl font-extrabold text-stone-200 my-2 max-sm:text-xl max-sm:my-2'>Firearms & Toolmarks</h1>
                                    <button className='w-56 items-center justify-center flex transition duration-300 my-2 lg:mb-20 md:mb-20 mb-10 text-xl font-bold hover:bg-[#4061a8] bg-opacity-20 border-2' onClick={onLern}>
                                        <div className="w-3/4">
                                            <span className='text-stone-50'>Learn More</span>
                                        </div>
                                        <div className="w-1/4">
                                            <button className='bg-[#4061a8] transition duration-300 py-2 my-1'><div className='text-2xl px-2 text-stone-50'><GoArrowRight /></div></button>
                                        </div>
                                    </button>
                                    <h1 className='w-4/5 text-[16px] text-stone-50 max-sm:text-sm max-sm:my-2'>Firearm and toolmark identification can assist law enforcement agencies with linking evidence to a specific firearm or tool. Discover the top and new technologies within the field that are worth keeping an eye on.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={8} className='relative w-full xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px]' data-aos='fade-in'>
                    <div className='absolute w-full'>
                        <img className={`relative ${activeIndex == 8 && "img_zoomUp"} w-full lg:h-screen md:h-[500px] sm:h-[500px] h-[300px]`} src="./img/landing/slide1/road-safety-qatar-com.jpg" />
                    </div>
                    <div className='relative w-full bg-black bg-opacity-60'>
                        <div className='w-full relative code-block code-block-52 items-content justify-center flex'>
                            <div className="xl:w-full w-4/5 xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px] items-center justify-center flex">
                                <div>
                                    <h1 className='lg:text-[20px] text-[30px] text-stone-200 my-6 max-sm:text-xl max-sm:my-2'>Micro Website</h1>
                                    <h1 className='mb-5 lg:text-7xl text-5xl font-extrabold text-stone-200 my-2 max-sm:text-xl max-sm:my-2'>Road Safety Qatar</h1>
                                    <button className='w-56 items-center justify-center flex transition duration-300 my-2 lg:mb-20 md:mb-20 mb-10 text-xl font-bold hover:bg-[#4061a8] bg-opacity-20 border-2' onClick={onLern}>
                                        <div className="w-3/4">
                                            <span className='text-stone-50'>Learn More</span>
                                        </div>
                                        <div className="w-1/4">
                                            <button className='bg-[#4061a8] transition duration-300 py-2 my-1'><div className='text-2xl px-2 text-stone-50'><GoArrowRight /></div></button>
                                        </div>
                                    </button>
                                    <h1 className='w-4/5 text-[16px] text-stone-50 max-sm:text-sm max-sm:my-2'>Road safety is prevention and protection of people from roadside accidents and injuries. Get to know the latest products and solutions that can help us achieve that.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={9} className='relative w-full xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px]' data-aos='fade-in'>
                    <div className='absolute w-full'>
                        <img className={`relative ${activeIndex == 9 && "img_zoomUp"} w-full lg:h-screen md:h-[500px] sm:h-[500px] h-[300px]`} src="./img/landing/slide1/3d-laser-scanning-com.jpg" />
                    </div>
                    <div className='relative w-full bg-black bg-opacity-60'>
                        <div className='w-full relative code-block code-block-52 items-content justify-center flex'>
                            <div className="xl:w-full w-4/5 xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px] items-center justify-center flex">
                                <div>
                                    <h1 className='lg:text-[20px] text-[30px] text-stone-200 my-6 max-sm:text-xl max-sm:my-2'>Micro Website</h1>
                                    <h1 className='mb-5 lg:text-7xl text-5xl font-extrabold text-stone-200 my-2 max-sm:text-xl max-sm:my-2'>Laser Scanning Services</h1>
                                    <button className='w-56 items-center justify-center flex transition duration-300 my-2 lg:mb-20 md:mb-20 mb-10 text-xl font-bold hover:bg-[#4061a8] bg-opacity-20 border-2' onClick={onLern}>
                                        <div className="w-3/4">
                                            <span className='text-stone-50'>Learn More</span>
                                        </div>
                                        <div className="w-1/4">
                                            <button className='bg-[#4061a8] transition duration-300 py-2 my-1'><div className='text-2xl px-2 text-stone-50'><GoArrowRight /></div></button>
                                        </div>
                                    </button>
                                    <h1 className='w-4/5 text-[16px] text-stone-50 max-sm:text-sm max-sm:my-2'>Discover modern, high-tech 3D scanning solutions that are revolutionizing the surveying and measurement industry.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={10} className='relative w-full xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px]' data-aos='fade-in'>
                    <div className='absolute w-full'>
                        <img className={`relative ${activeIndex == 10 && "img_zoomUp"} w-full lg:h-screen md:h-[500px] sm:h-[500px] h-[300px]`} src="./img/landing/slide1/cyber-security-qatar-sat-com.jpg" />
                    </div>
                    <div className='relative w-full bg-black bg-opacity-60'>
                        <div className='w-full relative code-block code-block-52 items-content justify-center flex'>
                            <div className="xl:w-full w-4/5 xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px] items-center justify-center flex">
                                <div>
                                    <h1 className='lg:text-[20px] text-[30px] text-stone-200 my-6 max-sm:text-xl max-sm:my-2'>Micro Website</h1>
                                    <h1 className='mb-5 lg:text-7xl text-5xl font-extrabold text-stone-200 my-2 max-sm:text-xl max-sm:my-2'>Cyber Security</h1>
                                    <button className='w-56 items-center justify-center flex transition duration-300 my-2 lg:mb-20 md:mb-20 mb-10 text-xl font-bold hover:bg-[#4061a8] bg-opacity-20 border-2' onClick={onLern}>
                                        <div className="w-3/4">
                                            <span className='text-stone-50'>Learn More</span>
                                        </div>
                                        <div className="w-1/4">
                                            <button className='bg-[#4061a8] transition duration-300 py-2 my-1'><div className='text-2xl px-2 text-stone-50'><GoArrowRight /></div></button>
                                        </div>
                                    </button>
                                    <h1 className='w-4/5 text-[16px] text-stone-50 max-sm:text-sm max-sm:my-2'>Cybercrime is evolving but so is cybersecurity. Discover the latest cybersecurity trends and solutions that can minimize threat impact and protect your most valuable assets.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={11} className='relative w-full xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px]' data-aos='fade-in'>
                    <div className='absolute w-full'>
                        <img className={`relative ${activeIndex == 11 && "img_zoomUp"} w-full lg:h-screen md:h-[500px] sm:h-[500px] h-[300px]`} src="./img/landing/slide1/document-digitization-com.jpg" />
                    </div>
                    <div className='relative w-full bg-black bg-opacity-60'>
                        <div className='w-full relative code-block code-block-52 items-content justify-center flex'>
                            <div className="xl:w-full w-4/5 xl:h-screen lg:h-[800px] md:h-[500px] sm:h-[500px] h-[300px] items-center justify-center flex">
                                <div className="xl:w-3/4">
                                    <h1 className='lg:text-[20px] text-[30px] text-stone-200 my-6 max-sm:text-xl max-sm:my-2'>Micro Website</h1>
                                    <h1 className='mb-5 lg:text-7xl text-5xl font-extrabold text-stone-200 my-2 max-sm:text-xl max-sm:my-2'>Questioned Document Examination</h1>
                                    <button className='w-56 items-center justify-center flex transition duration-300 my-2 lg:mb-20 md:mb-20 mb-10 text-xl font-bold hover:bg-[#4061a8] bg-opacity-20 border-2' onClick={onLern}>
                                        <div className="w-3/4">
                                            <span className='text-stone-50'>Learn More</span>
                                        </div>
                                        <div className="w-1/4">
                                            <button className='bg-[#4061a8] transition duration-300 py-2 my-1'><div className='text-2xl px-2 text-stone-50'><GoArrowRight /></div></button>
                                        </div>
                                    </button>
                                    <h1 className='w-4/5 text-[16px] text-stone-50 max-sm:text-sm max-sm:my-2'>The increasing level of sophistication and quality of fraudulent documents, requires extensive and detailed examination of document security features. Discover the world’s leading technologies for authenticating identity documents, banknotes and securities.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='relative -mt-24 z-20 mr-20 flex'>
                <div className='w-11/12'>
                    <button className='h-12 w-12 float-right text-stone-50 border-2 mx-2 text-center text-2xl hover:bg-[#4061a8] hover:w-16 hover:duration-200 hover:text-3xl' id="prevbutton"><GoArrowLeft className='float-left' /></button>
                </div>
                <div className='w-1/12'>
                    <button className='h-12 w-12 border-2 mx-2 text-stone-50 text-center text-2xl hover:bg-[#4061a8] hover:w-16 hover:duration-200 hover:text-3xl' id="nextbutton"><GoArrowRight className='float-right' /></button>
                </div>
            </div>
            <div className="w-full items-content justify-center flex mb-36">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 items-center justify-center">
                    <div className=" w-full items-center justify-center flex border-b border-gray-300 pl-3 pb-3 mt-32 mb-16">
                        <div className="w-1/2">
                            <div>
                                <span className="italic text-sky-800 font-bold">UPDATE</span>
                            </div>
                            <div>
                                <span className="xl:text-5xl lg:text-5xl text-4xl font-bold">LATEST NEWS</span>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col items-end justify-end">
                            <a href="#" className="hover:scale-110 duration-300 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#4061a8] hover:bg-[#4061a8] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#4061a8] dark:focus:ring-[#4061a8]">
                                All Views
                            </a>
                        </div>
                    </div>
                    <div className="w-full items-center justify-center">
                        <div className="w-full mx-auto flex lg:grid-cols-3 lg:gap-x-3 md:grid-cols-2 sm:grid-cols-1">
                            <div className="w-full items-content justify-center flex">
                                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 text-sm leading-6">
                                    <li>
                                        <a href="/digital-twin-2023" className="w-full lg:pb-5 sm:pb-5 pt-2 bg-white">
                                            <img className="object-fill h-48 w-96 grayscale hover:grayscale-0 transition duration-300 relative" src="./img/news1.jpg" />
                                        </a>
                                        <div className="pl-10 pt-5">
                                            <h3 className="">
                                                <a href="#" className="font-bold text-sm"> DIGITAL TWIN 2023 </a>
                                            </h3>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="/ajman-police-exhibition-2023" className="w-full lg:pb-5 sm:pb-5 pt-2 bg-white">
                                            <img className="object-fill h-48 w-96 grayscale hover:grayscale-0 transition duration-300" src="./img/news2.jpg" />
                                        </a>
                                        <div className="pl-10 pt-5">
                                            <h3 className="">
                                                <a href="#" className="font-bold text-sm"> AJMAN POLICE EXHIBITION 2023 </a>
                                            </h3>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="/world-police-summit-2023" className="w-full lg:pb-5 sm:pb-5 pt-2 bg-white">
                                            <img className="object-fill h-48 w-96 grayscale hover:grayscale-0 transition duration-300" src="./img/news3.jpg" />
                                        </a>
                                        <div className="pl-10 pt-5">
                                            <h3 className="">
                                                <a href="#" className="font-bold text-sm"> WORLD POLICE SUMMIT 2023 </a>
                                            </h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full mt-10 flex flex-col items-center justify-center">
                            <a href="#" className="hover:scale-110 duration-300 inline-flex items-center px-7 py-2.5 text-sm font-medium text-center text-white bg-[#4061a8] hover:bg-[#4061a8] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#4061a8] dark:hover:bg-[#4061a8] dark:focus:ring-[#4061a8]">
                                Load More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className='text-5xl font-bold text-center my-12'>
                    <a href="#" className=" text-2xl border-gray-500 py-2 border-b-2">OUR PARTNERS</a>
                </div>
                <Swiper
                    speed={6000}
                    slidesPerView={7}
                    parallax={true}
                    loop={true}
                    keyboard={{ enabled: true, onlyInViewport: true }}
                    modules={[Parallax, Keyboard, Autoplay]}
                    slideToClickedSlide={true}
                    className="relative bg-white"
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: true,
                    }}
                >
                    <SwiperSlide key={0} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[0]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={1} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[1]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={2} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[2]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={3} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[3]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={4} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[4]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={5} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[5]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={6} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[6]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={7} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[7]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={8} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[8]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={9} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[8]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={10} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[0]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={11} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[1]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={12} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[2]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={13} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[3]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={14} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[4]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={15} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[5]} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="w-full">
                <div className='text-5xl font-bold text-center my-12'>
                    <a href="#" className=" text-2xl border-gray-500 py-2 border-b-2">OUR CLIENTS</a>
                </div>
                <Swiper
                    speed={6000}
                    slidesPerView={7}
                    parallax={true}
                    loop={true}
                    keyboard={{ enabled: true, onlyInViewport: true }}
                    modules={[Parallax, Keyboard, Autoplay]}
                    slideToClickedSlide={true}
                    className="relative bg-white cursor-auto"
                    autoplay={{
                        delay: 10,
                        disableOnInteraction: true,
                    }}
                >

                    <SwiperSlide key={0} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[0]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={1} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[1]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={2} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[2]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={3} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[3]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={4} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[4]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={5} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[5]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={6} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[6]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={7} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[7]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={8} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[8]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={9} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[8]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={10} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[0]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={11} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[1]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={12} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[2]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={13} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[3]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={14} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[4]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={15} className='relative' data-aos='fade-in'>
                        <div className='relative'>
                            <img className='relative' src={slideImgs[5]} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}