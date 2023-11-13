import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="w-full xl:pt-28">
            <div className="w-full">
                <div className="w-full items-content justify-center flex bg-[#1845aa] py-7">
                    <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 flex">
                        <div className="w-1/2">
                            <span className="text-white text-xl">CONTACT US</span>
                        </div>
                        <div className="w-1/2 flex flex-col items-end justify-center">
                            <div className="text-white text-xs">
                                <a href="/">Home</a><span> > </span><span className="text-white text-xs">Contact us</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full items-content justify-center flex py-7">
                    <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
                        <div className="w-full lg:flex block">
                            <div className="lg:w-1/3 mr-5 w-full">
                                <p className="text-3xl text-gray-500 my-3">Make an Inquiry</p>
                                <form className="text-sm text-blue-900 pr-2">
                                    <div className="my-4 w-full">
                                        <span>Your Name</span><span className="text-red-500">*</span>
                                        <input type="text" className="my-1 px-3 bg-gray-100 w-full h-10 border border-gray-300 focus:border-blue-500 rounded" />
                                    </div>
                                    <div className="my-4">
                                        <span>Your Email</span><span className="text-red-500">*</span>
                                        <input type="text" className="my-1 px-3 bg-gray-100 w-full h-10 border border-gray-300 focus:border-blue-500 rounded" />
                                    </div>
                                    <div className="my-4">
                                        <span>Contact number</span>
                                        <input type="text" className="my-1 px-3 bg-gray-100 w-full h-10 border border-gray-300 focus:border-blue-500 rounded" />
                                    </div>
                                    <div className="my-4">
                                        <span>Organization Name</span><span className="text-red-500">*</span>
                                        <input type="text" className="my-1 px-3 bg-gray-100 w-full h-10 border border-gray-300 focus:border-blue-500 rounded" />
                                    </div>
                                    <div className="my-4">
                                        <span>Message</span>
                                        <textarea id="message" rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2"></textarea>
                                    </div>
                                    <button type="submit" style={{ backgroundColor: "rgb(25, 104, 179)" }} className="my-5 text-white bg-opacity-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#1845aa] dark:focus:ring-blue-800">Submit</button>

                                </form>
                            </div>
                            <div className="lg:w-2/3 w-full">
                                <div className="w-full lg:flex md:flex sm:block">
                                    <div className="lg:w-1/2 w-full pr-5">
                                        <p className="text-3xl text-gray-500 my-3">Head Office</p>
                                        <img src="../img/contact/qatar.jpg" />
                                        <div className="my-3 text-gray-500">
                                            <p>Scientific Analytical Tools</p>
                                            <p>(S.A.T. Trading L.L.C)</p>
                                            <p>P.O.Box: 182174, Qatar-U.A.E</p>
                                            <p>Office No: 2307/2308/2309</p>
                                            <p>Prime Tower, Burj Khalifa Street</p>
                                            <p>Business Bay, Qatar</p>
                                            <p>Tel: +974 4432 1121</p>
                                            <p>Fax: +974 4432 2028</p>
                                        </div>
                                        <div className="relative h-[300px] shadow-lg dark:shadow-black/20 mt-5 border-gray-100 border-4">
                                            <iframe
                                                src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                className="absolute left-0 top-0 h-full w-full"
                                                frameBorder="0"
                                                allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 w-full pr-5 ml-2">
                                        <p className="text-3xl text-gray-500 my-3">Georgia Office</p>
                                        <img src="../img/contact/georgia.jpg" />
                                        <div className="my-3 text-gray-500">
                                            <p>Scientific Analytical Tools</p>
                                            <p># 47/57 KostavaStreet, Suite # 3</p>
                                            <p>Tbilisi 0179, Republic of Georgia.</p>
                                            <p>Tel:  +995 32 2 240222</p>
                                            <p>Fax: +995 32 2 240222</p>
                                            <span>Email: </span><a href="#" className="text-black text-lg">info@sat.ae</a>
                                        </div>
                                        <div className="relative h-[300px] shadow-lg dark:shadow-black/20 mt-16 border-gray-100 border-4">
                                            <iframe
                                                src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                className="absolute left-0 top-0 h-full w-full"
                                                frameBorder="0"
                                                allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}