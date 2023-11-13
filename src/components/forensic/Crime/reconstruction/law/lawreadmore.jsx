import React from "react";
import { Link } from "react-router-dom";

export default function LawReadmore() {
    return (
        <div className="w-full xl:pt-28">
            <div className="w-full items-content justify-center flex bg-[#1845aa] py-7">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 flex">
                    <div className="w-1/2">
                        <span className="text-white text-xl">LAW ENFORCEMENT</span>
                    </div>
                    <div className="w-1/2 flex flex-col items-end justify-center">
                        <div className="text-white text-xs">
                            <a href="/">Home</a><span> > </span><a href="/"> Crime Scene Reconstruction</a><span> > </span><span className="text-white text-xs">3D RECONSTRUCTION > Law Enforcement</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-content justify-center flex mb-5">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 py-12 items-content justify-center">
                    <div className="w-full lg:flex md:block">
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../../img/forensic/crime/3d/1.png" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">Leica BLK360 Imaging Laser Scanner</span><br /><br />
                                <a href="/crime-scene-reconstruction/leica-geosystems/law-enforcement-2/leica-blk360-imaging-laser-scanner/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../../img/forensic/crime/3d/5.png" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">Leica RTC360 3D Laser Scanner</span><br /><br />
                                <a href="/crime-scene-reconstruction/leica-geosystems/law-enforcement-2/leica-rtc360-3d-laser-scanner/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:flex md:block">
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../../img/forensic/crime/3d/6.png" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">Leica BLK ARC Autonomous Laser Scanning Module</span><br /><br />
                                <a href="/crime-scene-reconstruction/leica-geosystems/law-enforcement-2/leica-blk-arc" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}