import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div style={{backgroundColor: "rgb(24,69,170)"}} className="bg-[#1845aa] w-full justify-center items-center flex">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 items-content justify-center pt-20 pb-32 flex sm:mx-10">
                    <div className="w-4/12">
                        <span className="font-cr text-white font-serif text-lg">QUICK LINKS</span>
                        <div className=" text-blue-400 mt-6">
                            <ul >
                                <li><a href="/about" className="transition duration-300 hover:text-white">About Us</a></li>
                                <li><a href="/about/awards" className="transition duration-300 hover:text-white">Awards</a></li>
                                <li><a href="/mission-vision" className="transition duration-300 hover:text-white">Mission &amp; Vision</a></li>
                                <li><a href="/clients" className="transition duration-300 hover:text-white">Clients</a></li>
                                <li><a href="/partners" className="transition duration-300 hover:text-white">Partners</a></li>
                                <li><a href="/contact-us" className="transition duration-300 hover:text-white">Contact</a></li>
                            </ul>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className="w-4/12">
                        <span className="font-cr text-white font-serif text-lg">NEWS & EVENTS</span>
                        <div className=" text-blue-400 mt-6">
                            <ul>
                                <li className="mb-4">
                                    <a className="transition duration-300 hover:text-white" href="/digital-twin-2023">Digital Twin 2023</a><br />
                                    <span>March 14, 2023</span>
                                </li>
                                <li className="mb-4">
                                    <a className="transition duration-300 hover:text-white" href="/ajman-police-exhibition-2023">Ajman Police Exhibition 2023 </a><br />
                                    <span>March 13, 2023</span>
                                </li>
                                <li className="mb-4">
                                    <a className="transition duration-300 hover:text-white" href="/world-police-summit-2023">World Police Summit 2023</a><br />
                                    <span>March 7, 2023</span>
                                </li>
                                <li>
                                    <a className="transition duration-300 hover:text-white" href="/">view all</a>
                                </li>
                            </ul>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className="w-4/12">
                        <span className="font-cr text-white font-serif text-lg">CONTACT INFO</span>
                        <div className=" text-blue-400 mt-6">
                            <ul>
                                <li>Head Office</li>
                                <li>Scientific Analytical Tools</li>
                                <li>(S.A.T. Trading L.L.C)</li>
                                <li>P.O.Box:182174, Qatar-U.A.E</li>
                                <li>Office No: 2307/2308/2309</li>
                                <li>Prime Tower, Burj Khalifa Street</li>
                                <li>Business Bay, Qatar</li>
                                <li>Tel: +971 4 2443833</li>
                                <li>Fax: +971 4 244 3832</li>
                                <li>Email: info@sat.ae</li>
                            </ul>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-200 p-3 text-center dark:bg-neutral-600">
                <span className='text-xs'>© Copyright 2023 ALZOMAR. All rights reserved.</span>
            </div>
        </footer>
    )
}