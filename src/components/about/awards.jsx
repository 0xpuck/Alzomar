import React from "react";
import { Link } from "react-router-dom";

export default function Awards() {
    const imgs = ["1.jpg", "2.jpg", "3.jpg", "1.jpg", "3.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg"]
    return (
        <div className="w-full xl:pt-28">
            <div className="w-full items-content justify-center flex bg-[#1845aa] py-7">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 flex">
                    <div className="w-1/2">
                        <span className="text-white text-xl">AWARDS</span>
                    </div>
                    <div className="w-1/2 flex flex-col items-end justify-center">
                        <div className="text-white text-xs">
                            <a href="/">Home</a><span> > </span><a href="/about">About Us</a><span> > </span><span className="text-white text-xs">Awards</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-content justify-center flex text-gray-500 mb-5">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 py-10 items-content justify-center lg:flex md:block mr-16">
                    <div className="w-full items-content justify-center flex">
                        <div className="w-8/12">
                            <ul className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 text-sm leading-6">
                                {
                                    imgs.map(img => 
                                        <li>
                                            <div className="w-full lg:border lg:pb-16 sm:pb-0 scale-90 border-gray-300 lg:h-60 pt-2 bg-white">
                                                <img src={`../../img/about/${img}`} className="scale-90 hover:scale-95 hover:cursor-pointer transition duration-500"/>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}