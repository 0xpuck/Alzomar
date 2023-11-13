import React from "react";
import { Link } from "react-router-dom";
import Rightbar from "./right";

export default function World2Readmore() {
    const imgs = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg",
    "21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","30.jpg","31.jpg","32.jpg","33.jpg","34.jpg","35.jpg","36.jpg","37.jpg"];
    return (
        <div className="w-full xl:pt-28">
            <div className="w-full items-content justify-center flex bg-[#1845aa] py-7">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 flex">
                    <div className="w-1/2">
                        <span className="text-white text-xl">WORLD POLICE SUMMIT – S.A.T</span>
                    </div>
                    <div className="w-1/2 flex flex-col items-end justify-center">
                        <div className="text-white text-xs">
                            <a href="/">Home</a><span> > </span><a href="/">News & Events</a><span> > </span><span className="text-white text-xs">World Police Summit – S.A.T</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-content justify-center flex text-gray-500 mb-5">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 items-content justify-center lg:flex md:flex mr-16">
                    <div className="lg:w-4/5 w-full mx-5">
                        <div className="w-full px-3">
                            <div className="w-full mb-16">
                                <img src="./img/landing/readmore/world2/1.jpg" className="w-full mb-5" />
                                <p className="text-2xl text-gray-700 font-bold">WORLD POLICE SUMMIT 2023</p>
                                <p className="text-lg">We’re thrilled to announce that Scientific Analytical Tools is participating in the ongoing World Police Summit 2023 in Qatar from March 7-9.</p>
                                <br />
                                <p className="text-lg">At the World Police Summit, we’ll be demonstrating latest technologies, which are designed to aid law enforcement in their fight against crime. This is an incredible opportunity for us to connect with colleagues from around the world and to share our expertise and insights with others in the field.</p>
                                <br />
                                <p className="text-lg">We can’t wait to see you there! Join us at the Qatar World Trade Center for this groundbreaking event.</p>
                            </div>
                        </div>
                    </div>
                    <Rightbar />
                </div>
            </div>
        </div>
    )
}