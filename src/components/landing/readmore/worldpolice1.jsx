import React from "react";
import { Link } from "react-router-dom";
import Rightbar from "./right";

export default function World1Readmore() {
    const imgs = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
    return (
        <div className="w-full xl:pt-28">
            <div className="w-full items-content justify-center flex bg-[#1845aa] py-7">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 flex">
                    <div className="w-1/2">
                        <span className="text-white text-xl">WORLD POLICE SUMMIT 2023</span>
                    </div>
                    <div className="w-1/2 flex flex-col items-end justify-center">
                        <div className="text-white text-xs">
                            <a href="/">Home</a><span> > </span><a href="/">News & Events</a><span> > </span><span className="text-white text-xs">World Police Summit 2023</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-content justify-center flex text-gray-500 mb-5">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 items-content justify-center lg:flex md:flex">
                    <div className="lg:w-4/5 w-full xl:mx-10 lg:mx-10">
                        <div className="w-full items-center justify-center">
                            <div className="w-full mb-16">
                                <img src="./img/news3.jpg" className="w-full mb-5" />
                                <p className="text-2xl text-gray-700 font-bold">WORLD POLICE SUMMIT 2023</p>
                                <p className="text-lg">We are delighted to share with you that the SAT family had the honor of attending the 2nd edition of the World Police Summit, where we had an exceptional experience. Over the course of the three-day event, we had the privilege to explore the latest trends and advancements in policing technology. We express our sincere gratitude to all attendees who visited and engaged with our innovative solutions.</p>
                            </div>
                            <div className="w-full items-content justify-center flex my-5">
                                <div className="w-full">
                                    <ul className="grid grid-cols-4 gap-4 text-sm leading-6">
                                        {
                                            imgs.map(img =>
                                                <li>
                                                    <div className="w-full lg:pb-10 sm:pb-0 lg:h-48 bg-white px-3">
                                                        <img src={`./img/landing/readmore/world1/${img}`} className="h-full border-2 hover:cursor-pointer transition duration-500 w-full" />
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