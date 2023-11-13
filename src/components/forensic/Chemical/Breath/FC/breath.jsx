import React from "react";
import { Link } from "react-router-dom";

export default function Breath() {
    return (
        <div className="w-full xl:pt-28">
            <div className="w-full items-content justify-center flex bg-[#1845aa] py-7">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 flex">
                    <div className="w-1/2">
                        <span className="text-white text-xl">BREATH</span>
                    </div>
                    <div className="w-1/2 flex flex-col items-end justify-center">
                        <div className="text-white text-xs">
                            <a href="/">Home</a><span> > </span><a href="/"> Chemical, Explosive & Narcotic Detection</a><span> > </span><span className="text-white text-xs">Explosive Detection</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-content justify-center flex mb-5">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 py-12 items-content justify-center">
                    <div className="w-full lg:flex md:block">
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../img/forensic/chemical/breath/1.jpg" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">FC Series</span><br /><br />
                                    <a href="/chemical-detection/breath-alcohol-testing/fc-series/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../img/forensic/chemical/breath/2.jpg" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">Workplace Series</span><br /><br />
                                    <a href="/chemical-detection/breath-alcohol-testing/workplace-series-2/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:flex md:block">
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../img/forensic/chemical/breath/3.jpg" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">Personal Breathalyzer</span><br /><br />
                                    <a href="/chemical-detection/breath-alcohol-testing/personal-breathalyzer/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../../img/forensic/chemical/breath/4.jpg" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">Automatic Calibration</span><br /><br />
                                    <a href="/chemical-detection/breath-alcohol-testing/automatic-caliberation/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}