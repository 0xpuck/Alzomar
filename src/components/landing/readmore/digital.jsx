import React from "react";
import { Link } from "react-router-dom";
import Rightbar from "./right";

export default function DigitalReadmore() {
    const imgs = ["./img/landing/readmore/digital/1.jpg",
        "./img/landing/readmore/digital/2.jpg",
        "./img/landing/readmore/digital/3.jpg",
        "./img/landing/readmore/digital/4.jpg",
        "./img/landing/readmore/digital/5.jpg",
        "./img/landing/readmore/digital/6.jpg",
        "./img/landing/readmore/digital/7.jpg", "./img/landing/readmore/digital/8.jpg"
    ];
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
                                <img src="./img/news1.jpg" className="w-full mb-5" />
                                <p className="text-2xl text-gray-700 font-bold">DIGITAL TWIN 2023</p>
                                <p className="text-lg">Revolutionizing Smart City Design and Management in the Middle East: we’re thrilled to have participated in the 2nd annual Digital Twin 2023 with our good partner Leica Geosystems part of Hexagon.</p>
                                <br />
                                <p className="text-lg">The event brought together global thought leaders, tech professionals and regional stakeholders to discuss new solutions, technologies and applications that result in successful project implementation and delivery of infrastructure and smart city initiatives in the Middle East. It was truly an honor to take part at this prestigious event. We look forward to more collaboration with our partners to drive innovation and growth in the region. Stay tuned for more updates on our collaborations in the coming months.</p>
                            </div>
                            <div className="w-full items-content justify-center flex my-5">
                                <div className="w-full">
                                    <ul className="p-4 grid grid-cols-4 gap-4 text-sm leading-6">
                                        {
                                            imgs.map(img =>
                                                <li>
                                                    <div className="w-full lg:pb-10 sm:pb-0 lg:h-48 bg-white px-3">
                                                        <img src={img} className="h-full border-2 hover:cursor-pointer transition duration-500 w-full" />
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