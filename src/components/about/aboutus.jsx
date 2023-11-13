import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="w-full xl:pt-28">
            <div className="w-full items-content justify-center flex bg-[#1845aa] py-7">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 flex">
                    <div className="w-1/2">
                        <span className="text-white text-xl">ABOUT US</span>
                    </div>
                    <div className="w-1/2 flex flex-col items-end justify-center">
                        <div className="text-white text-xs">
                            <a href="/">Home</a><span> > </span><span className="text-white text-xs">About us</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-content justify-center flex text-gray-500 mb-5">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 py-10 items-content justify-center lg:flex md:block">
                    <div className="lg:w-1/2 w-full xl:mx-4 lg:mx-4 md:mx-4 mx-0">
                        <div className="w-full">
                            <div>
                                <img src="../img/about/about-1.jpg" />
                            </div>
                            <div className="text-lg">
                                <br /><br />
                                <p>SAT is proud to be serving a vast range of fields in both the government and the private sectors. A few fields worth mentioning are:</p>
                                <p className="my-2">>>Law Enforcement</p>
                                <p className="my-2">>>Health & Medical Authorities</p>
                                <p className="my-2">>>Finance</p>
                                <p className="my-2">>>Quality Control</p>
                                <p className="my-2">>>Defense/Military</p>
                                <p className="my-2">>>Border Security</p>
                                <p className="my-2">>>Transportation (Air, Land & Sea)</p>
                                <p className="my-2">>>Academia</p>
                                <p className="my-2">>>Forensics &</p>
                                <p className="my-2">>>Life Sciences</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full xl:mx-4 lg:mx-4 md:mx-4 mx-0">
                        <div className="w-full">
                            <div className="text-lg">
                                <p>SAT’s scope of services has broadened greatly over the years. In addition to supplying, servicing and maintaining scientific tools, SAT also designs and constructs labs for a variety of organizations and institutions. In addition to that, we have recently launched a Training Program for students that involves Certified Trainings in different fields of Forensic Science.</p>
                                <br />
                                <p>SAT’s main focus is in the Forensic Science Field, although, it also deals with general scientific lab equipment for various other fields.</p>
                                <br />
                            </div>
                            <div>
                                <img src="../img/about/about-2.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}