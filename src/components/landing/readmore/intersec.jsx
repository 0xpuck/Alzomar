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
                        <span className="text-white text-xl">DIGITAL TWIN 2023</span>
                    </div>
                    <div className="w-1/2 flex flex-col items-end justify-center">
                        <div className="text-white text-xs">
                            <a href="/">Home</a><span> > </span><a href="/">News & Events</a><span> > </span><span className="text-white text-xs">Digital Twin 2023</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-content justify-center flex text-gray-500 mb-5">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 items-content justify-center lg:flex md:flex mr-16">
                    <div className="lg:w-4/5 w-full mx-5">
                        <div className="w-full px-3">
                            <div className="w-full mb-16">
                                <img src="./img/landing/readmore/intersec/back.jpg" className="w-full mb-5" />
                                <p className="text-2xl text-gray-700 font-bold">INTERSEC 2023</p>
                                <p className="text-lg">The 24th edition of Intersec was celebrated as its most successful show to date! We had the pleasure of participating and showcasing our innovation technology from 17-19 January. The response was overwhelmingly positive and SAT was listed as one of the leading homeland security solution providers by the event organizers!</p>
                            </div>
                            <div className="w-full items-content justify-center flex my-5">
                                <div className="w-full">
                                    <ul className="p-4 grid grid-cols-3 gap-4 text-sm leading-6">
                                        {
                                            imgs.map(img =>
                                                <li>
                                                    <div className="w-full lg:pb-10 sm:pb-0 lg:h-48 bg-white px-3">
                                                        <img src={`./img/landing/readmore/intersec/${img}`} className="border-2 hover:cursor-pointer transition duration-500 w-full" />
                                                    </div>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Rightbar />
                </div>
            </div>
        </div>
    )
}