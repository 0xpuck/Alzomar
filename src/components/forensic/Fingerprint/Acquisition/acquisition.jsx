import React from "react";
import { Link } from "react-router-dom";

export default function FingerprintAcquisition() {
    return (
        <div className="w-full xl:pt-28">
            <div className="w-full items-content justify-center flex bg-[#1845aa] py-7">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 flex">
                    <div className="w-1/2">
                        <span className="text-white text-xl">FINGERPRINT ACQUISITION</span>
                    </div>
                    <div className="w-1/2 flex flex-col items-end justify-center">
                        <div className="text-white text-xs">
                            <a href="/">Home</a><span> > </span><span>Fingerprint > Fingerprint Acquisition</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-content justify-center flex mb-5">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 py-12 items-content justify-center">
                    <div className="w-full lg:flex md:block">
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../img/forensic/fingerprint/acquisition/1.png" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">Guardian 300</span><br /><br />
                                <a href="/fingerprint/livescan/guardian-300/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../img/forensic/fingerprint/acquisition/2.png" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">Guardian 200</span><br /><br />
                                <a href="/laboratory-management-system/ballistic-cloning-system/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:flex md:block">
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../img/forensic/fingerprint/acquisition/3.jpg" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">Guardian Module</span><br /><br />
                                <a href="/fingerprint/livescan/guardian-module/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../img/forensic/fingerprint/acquisition/4.jpg" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">GUARDIAN R2</span><br /><br />
                                <a href="/fingerprint/livescan/guardian-r2/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:flex md:block">
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../img/forensic/fingerprint/acquisition/5.jpg" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">Guardian USB</span><br /><br />
                                <a href="/fingerprint/livescan/guardian-usb/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../img/forensic/fingerprint/acquisition/6.jpg" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">PATROL ID</span><br /><br />
                                <a href="/fingerprint/livescan/patrol-id/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:flex md:block">
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../img/forensic/fingerprint/acquisition/7.png" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">L SCAN</span><br /><br />
                                <a href="/fingerprint/livescan/l-scan/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../img/forensic/fingerprint/acquisition/8.png" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">LS-01</span><br /><br />
                                <a href="/fingerprint/livescan/ls-01/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:flex md:block">
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../img/forensic/fingerprint/acquisition/9.png" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">LS-1102</span><br /><br />
                                <a href="/fingerprint/livescan/ls-1102/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../img/forensic/fingerprint/acquisition/10.png" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">LS-4421</span><br /><br />
                                <a href="/fingerprint/livescan/ls-4421/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:flex md:block">
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../img/forensic/fingerprint/acquisition/11.png" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">LS-4422</span><br /><br />
                                <a href="/fingerprint/livescan/ls-4422/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full border border-gray-300 flex pl-4 lg:pb-14 hover:shadow-lg transition duration-500">
                            <div className="w-1/3">
                                <img src="../../img/forensic/fingerprint/acquisition/12.png" className="scale-75" />
                            </div>
                            <div className="w-2/3 mt-5 pt-2">
                                <span className="text-xl">LS-11</span><br /><br />
                                <a href="/fingerprint/livescan/ls-11/" className="text-white bg-blue-800 font-medium rounded text-sm px-7 py-2.5 mr-2 mb-2 hover:border-2 border-blue-800">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}