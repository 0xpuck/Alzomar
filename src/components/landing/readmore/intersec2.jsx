import React from "react";
import { Link } from "react-router-dom";
import Rightbar from "./right";

export default function IntersecReadmore() {
    const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];
    return (
        <div className="w-full xl:pt-28">
            <div className="w-full items-content justify-center flex bg-[#1845aa] py-7">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 flex">
                    <div className="w-1/2">
                        <span className="text-white text-xl">INTERSEC 2022</span>
                    </div>
                    <div className="w-1/2 flex flex-col items-end justify-center">
                        <div className="text-white text-xs">
                            <a href="/">Home</a><span> > </span><a href="/">News & Events</a><span> > </span><span className="text-white text-xs">Intersec 2022</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-content justify-center flex text-gray-500 mb-5">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 items-content justify-center lg:flex md:flex mr-16">
                    <div className="lg:w-4/5 w-full mx-5">
                        <div className="w-full px-3">
                            <div className="w-full mb-16">
                                <img src="./img/landing/readmore/intersec2/back.jpg" className="w-full mb-5" />
                                <p className="text-2xl text-gray-700 font-bold">INTERSEC 2022</p>
                                <p className="text-lg">We had the pleasure of exhibiting at the 23rd addition of <b>Intersec</b> that was held from 16-18 January 2022 with our good partner Cellebrite. The event was a great success!</p>
                                <br />
                                <img src="./img/landing/readmore/intersec2/1.jpg" className="w-full mb-5" />
                            </div>
                        </div>
                    </div>
                    <Rightbar />
                </div>
            </div>
        </div>
    )
}