import React from "react";
import { Link } from "react-router-dom";

export default function Mission() {
    return (
        <div className="w-full xl:pt-28">
            <div className="w-full items-content justify-center flex bg-[#1845aa] py-7">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 flex">
                    <div className="w-1/2">
                        <span className="text-white text-xl">MISSION & VISION</span>
                    </div>
                    <div className="w-1/2 flex flex-col items-end justify-center">
                        <div className="text-white text-xs">
                            <a href="/">Home</a><span> > </span><a href="/about">About Us</a><span> > </span><span className="text-white text-xs">Mission & Vision</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-content justify-center flex">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 py-20 items-content justify-center flex">
                    <div className="w-full lg:flex block">
                        <div className="lg:w-1/2 w-full px-4">
                            <img src="../../img/about/vmg.jpg" />
                        </div>
                        <div className="lg:w-1/2 w-full text-gray-500 px-4">
                            <span className="text-3xl">Mission</span><br />
                            <span>Our Mission is to engage ourselves in the continuous enhancement of our client’s technological advancement in the field of forensic science and technology and provide products and services that consistently exceed our client’s expectation by sourcing and implementing the latest technologies in the field.</span>
                            <br /><br />
                            <span className="text-3xl">Vision</span><br />
                            <span>Our Vision is to be a market leader in the region by providing innovative and cutting edge products, trainings and services.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}