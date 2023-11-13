import React from "react";
import { Link } from "react-router-dom";
import MyTabs from './tab'

export default function BioReadmore() {
    return (
        <div className="w-full xl:pt-28">
            <div className="w-full items-content justify-center flex bg-[#1845aa] py-7">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 flex">
                    <div className="w-1/2">
                        <span className="text-white text-xl">CROSSMATCH</span>
                    </div>
                    <div className="w-1/2 flex flex-col items-end justify-center">
                        <div className="text-white text-xs">
                            <a href="/">Home</a><span> > </span><a href="/">Fingerprint</a><span> > </span><a href="/">  Authentication/Verification </a><span> > </span><span className="text-white text-xs">CROSSMATCH</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-content justify-center flex mb-5">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 py-10 items-content justify-center">
                    <div className="w-full lg:flex md:block">
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3 items-content justify-center flex">
                                <img src="../../../img/forensic/fingerprint/authentication/bio/1.png" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">BioLink U-Match 7.5</span><br /><br />
                                <a href="/fingerprint/authenticationverification-2/bio-link/biolink-u-match-7-5/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3 items-content justify-center flex">
                                <img src="../../../img/forensic/fingerprint/authentication/bio/2.png" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">BioLink FS25 USB2.0</span><br /><br />
                                <a href="/authenticationverification-2/bio-link/biolink-fs25-usb2-0/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:flex md:block">
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3 items-content justify-center flex">
                                <img src="../../../img/forensic/fingerprint/authentication/bio/3.png" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">BioLink IDenium</span><br /><br />
                                <a href="/fingerprint/authenticationverification-2/bio-link/biolink-idenium/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}