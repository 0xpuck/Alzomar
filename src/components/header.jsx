import React, { useEffect, useState } from 'react';
import Menu from './menu';
import FullscreenModal from './modal';
import { FaBars } from 'react-icons/fa';
import MyAccordion from './myaccodion';

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [dropdown, setDropdown] = useState(0);
    const [isFix, setFix] = useState(0);
    const [open, setOpen] = useState(false);
    const [dropdownNabbar, setDropdownNabvar] = useState(0);

    window.onscroll = () => {
        const nav = document.querySelector('#navbar');
        if (window.scrollY <= 10) {
            nav.className = 'h-20';
            setFix(0);
        }
        else {
            nav.className = 'h-16';
            setFix(1);
        }
    };
    const onDropdown = (e) => {
        setDropdown(e);
    }
    return (
        <div className='relative'>
            <nav className={`bg-white border-gray-200 dark:bg-gray-900 w-full xl:fixed z-40 ${dropdown == 0 || dropdown == 1 || dropdown == 3 ? "border-b-2" : ""}`} >
                <div className="w-3/4 lg:w-7/12 md:w-2/3 sm:w-5/6 mx-auto">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                        <button className="xl:hidden py-7 text-gray-400" onClick={() => setDropdownNabvar(1 - dropdownNabbar)}><FaBars /></button>

                        <a href="/" className="flex items-center">
                            <img src="http://185.189.151.181/img/logo.png" className="h-20 mr-3" alt="Alzomar Logo" id="navbar" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white xl:flex hidden">Alzomar</span>
                        </a>
                        <div className="w-full md:w-auto xl:flex hidden">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li className={`${window.scrollY <= 10 ? "py-10" : "py-5"}`}>
                                    <a href="/" className="text-gray-400 transition duration-300 hover:text-orange-700 block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">HOME</a>
                                </li>
                                <li className={`${window.scrollY <= 10 ? "py-10" : "py-5"}`} onMouseOver={() => { onDropdown(1) }} onMouseLeave={() => { onDropdown('') }}>
                                    <div onMouseLeave={() => setOpen(false)} className="relative">
                                        <button className="text-gray-400 transition duration-300 hover:text-orange-700 block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">ABOUT</button>
                                        <ul className={`absolute right-0 w-40 py-2 ${window.scrollY <= 10 ? "mt-11" : "mt-6"} bg-[#0e3354] ${dropdown == 1 ? "block" : "hidden"}`}>
                                            <li className="flex w-full items-center px-3 py-2 text-sm text-gray-300 hover:text-[#264a6a] transition duration-200">
                                                <a href="/about">ABOUT US</a>
                                            </li>
                                            <li className="flex w-full items-center px-3 py-2 text-sm text-gray-300 hover:text-[#264a6a] transition duration-200">
                                                <a href="/about/mission-vision">MISSION & VISION</a>
                                            </li>
                                            <li className="flex w-full items-center px-3 py-2 text-sm text-gray-300 hover:text-[#264a6a] transition duration-200">
                                                <a href="/about/awards">AWARDS</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={`${window.scrollY <= 10 ? "py-10" : "py-5"}`} onMouseOver={() => { onDropdown('2') }} onMouseLeave={() => { onDropdown('') }}>
                                    <button className="text-gray-400 transition duration-300 hover:text-orange-700 flex items-center justify-between w-full py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-orange-700 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">FORENSIC SOLUTIONS
                                    </button>
                                </li>
                                <li className={`${window.scrollY <= 10 ? "py-10" : "py-5"}`}>
                                    <a href="/digital-forensics" className="text-gray-400 transition duration-300 hover:text-orange-700 block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">DIGITAL FORENSICS</a>
                                </li>
                                <li className={`${window.scrollY <= 10 ? "py-10" : "py-5"}`} onMouseOver={() => { onDropdown('3') }} onMouseLeave={() => { onDropdown('') }}>
                                    <div onMouseLeave={() => setOpen(false)} className="relative">
                                        <button className="text-gray-400 transition duration-300 hover:text-orange-700 block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">PROJECTS</button>
                                        <ul className={`text-[#264a6a] absolute right-0 w-56 py-2 ${window.scrollY <= 10 ? "mt-11" : "mt-6"} bg-[#0e3354] ${dropdown == 3 ? "block" : "hidden"}`}>
                                            <li className="flex w-full items-center px-3 py-1 text-sm text-gray-300 hover:text-[#264a6a] transition duration-200">
                                                <a href="/projects/abu-dhabi-ballastic">ABU DHABI BALLISTIC LAB</a>
                                            </li>
                                            <li className="flex w-full items-center px-3 py-1 text-sm text-gray-300 hover:text-[#264a6a] transition duration-200">
                                                <a href="/projects/shabiya-police-station">SHAPIYA POLICE STATION</a>
                                            </li>
                                            <li className="flex w-full items-center px-3 py-1 text-sm text-gray-300 hover:text-[#264a6a] transition duration-200">
                                                <a href="/projects/alian-forensic-lab">AL AIN FORENSIC LAB</a>
                                            </li>
                                            <li className="flex w-full items-center px-3 py-1 text-sm text-gray-300 hover:text-[#264a6a] transition duration-200">
                                                <a href="/projects/rop-ballistic-lab">ROP BALLISTIC LAB</a>
                                            </li>
                                            <li className="flex w-full items-center px-3 py-1 text-sm text-gray-300 hover:text-[#264a6a] transition duration-200">
                                                <a href="/projects/qatar-hospital">QATAR HOSPITAL</a>
                                            </li>
                                            <li className="flex w-full items-center px-3 py-1 text-sm text-gray-300 hover:text-[#264a6a] transition duration-200">
                                                <a href="/projects/qatar-university">QATAR UNIVERSITY</a>
                                            </li>
                                            <li className="flex w-full items-center px-3 py-1 text-sm text-gray-300 hover:text-[#264a6a] transition duration-200">
                                                <a href="/projects/mobile-cip-labs">MOBILE CIP LAB</a>
                                            </li>
                                            <li className="flex w-full items-center px-3 py-1 text-sm text-gray-300 hover:text-[#264a6a] transition duration-200">
                                                <a href="/projects/mobile-ballistic-laboratory">MOBILE BALLISTIC LABORATORY</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={`${window.scrollY <= 10 ? "py-10" : "py-5"}`} onMouseOver={() => { onDropdown('4') }} onMouseLeave={() => { onDropdown('') }}>
                                    <a href="#" className="text-gray-400 transition duration-300 hover:text-orange-700 block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">SERVICES</a>
                                </li>
                                <li className={`${window.scrollY <= 10 ? "py-10" : "py-5"}`}>
                                    <a href="/contact-us" className="text-gray-400 transition duration-300 hover:text-orange-700 block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">CONTACT US</a>
                                </li>
                                <li className={`${window.scrollY <= 10 ? "py-10" : "py-5"} xl:flex hidden`}>
                                    <FullscreenModal />
                                </li>
                            </ul>
                        </div>
                        <div className="xl:hidden flex">
                            <FullscreenModal />
                        </div>
                    </div>
                    <div className={`w-full xl:hidden lg:hidden md:hidden sm:hidden ${dropdownNabbar ? "block" : "hidden"}`}>
                        <MyAccordion />
                    </div>
                </div>
                {dropdown == '2' && <div className='text-gray-300 w-full pt-8 pb-10 bg-[#0e3354] z-30' onMouseOver={() => { onDropdown('2') }} onMouseLeave={() => { onDropdown('') }}>
                    <div className='max-w-7xl mx-auto flex py-6'>
                        <div className='w-1/3 px-8 text-[12px]'>
                            <div>
                                <div className='text-[13px]'>FINGERPRINT</div>
                                <hr className="my-2" />
                                <div>><a href="/fingerprint/latent-fingerprint-detection" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Latent Fingerprint Detection</a></div>
                                <div>><a href="/fingerprint/authenticationverification-2" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Authentication/Verification</a></div>
                                <div>><a href="/fingerprint/livescan" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Fingerprint Acquisition</a></div>
                                <div>><a href="/fingerprint/mobile-identification" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Mobile Identification</a></div>
                                {/* <div>><a href="/fingerprint/oem-integration" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">OEM Integration</a></div> */}
                                <div>><a href="/forensic-light" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Forensic Light</a></div>
                                {/* <div>><a href="/fingerprint/afis" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">APFIS</a></div> */}
                                <div>><a href="#" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Crime Scene Reconstruction</a></div>
                                <div>><a href="/crime-scene-reconstruction/leica-geosystems/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">3D Reconstruction</a></div>
                                <div>><a href="/crime-scene-reconstruction/photography/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Photography</a></div>
                                <div>><a href="#" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">BLOODSTAIN PATTERN ANALYSIS</a></div>
                                <div>><a href="/blood-stain-spatter/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Blood Stain & Spatter Viewer</a></div>
                                <div>><a href="/bloodstain-pattern-analysis/forenscope-2/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">ForenScope FMST</a></div>
                                <div>><a href="/blood-spatter/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Blood Spatter</a></div>
                            </div>
                        </div>
                        <div className='w-1/3 px-8 text-[12px]'>
                            <div>
                                <div className='text-[13px]'>COMPUTER FORENSICS & MOBILE FORENSICS</div>
                                <hr className="my-2" />
                                <div>><a href="/computer-forensics/digital-forensics-laboratory/mobile-lab-paladin-2" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Digital Forensic Laboratory</a></div>
                                <div>><a href="/computer-forensics/portable-devicesultrablocks" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Forensic Portable Device</a></div>
                                <div>><a href="/computer-forensics/forensic-dvr-recovery" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Forensic DVR Recovery</a></div>
                                <div>><a href="/computer-forensics/workstations" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Forensic Workstation</a></div>
                                <div>><a href="/computer-forensics/software" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Forensic Software</a></div>
                                <div>><a href="/computer-forensics/server" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Forensic Server</a></div>
                                <div>><a href="#" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">NETWORK FORENSICS</a></div>
                                <div>><a href="/network-forensics/network-forensics/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Network Forensic Toolkit</a></div>
                                <div>><a href="/network-forensics/wireless-detective/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Wireless-Detective</a></div>
                                <div>><a href="/network-forensics/voip-detective/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">VoIP-Detective</a></div>
                                <div>><a href="/mobile-forensics/decoding-and-review/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Decoding and Review</a></div>
                                <div>><a href="/mobile-forensics/cell-site-analysis/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Cell site analysis</a></div>
                                <div>><a href="/mobile-forensics/extraction/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Extraction</a></div>
                                <div>><a href="/mobile-forensics/analytics/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Analytics</a></div>
                            </div>
                        </div>
                        <div className='w-1/3 px-8 text-[12px]'>
                            <div>
                                <div className='text-[13px]'>DOCUMENT EXAMINATION</div>
                                <hr className="my-2" />
                                <div>><a href="/document-examination-verification-systems/advanced-document-verification" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Advanced Document Verification</a></div>
                                <div>><a href="/document-examination-verification-systems/information-reference-systems" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Information Reference Systems</a></div>
                                <div>><a href="/document-examination-verification-systems/express-document-verification" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Express Document Verification</a></div>
                                <div>><a href="/document-examination-verification-systems/machine-assisted-document-verification" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Passport Reader</a></div>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-7xl mx-auto flex py-2'>
                        <div className='w-1/3 px-8 text-[12px]'>
                            <div>
                                <div className='text-[13px]'>BIOLOGY & DNA</div>
                                <hr className="my-2" />
                                <div>><a href="/biology-dna/dna-swab-management-system" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">DNA Swab Management System</a></div>
                                <div>><a href="/biology-dna/forensic-anthropology" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Forensic Anthropology</a></div>
                                <div>><a href="/biology-dna/dna-collection-device" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">DNA Collection Device</a></div>
                                <div>><a href="/biology-dna/dna-processing-kit" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">DNA Processing Kit</a></div>
                                <div>><a href="/biology-dna/dna-collection-kit" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">DNA Collection Kit</a></div>
                                <div>><a href="/biology-dna/sperm-tracker" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Sperm Tracker</a></div>
                            </div>
                        </div>
                        <div className='w-1/3 px-8 text-[12px]'>
                            <div>
                                <div className='text-[13px]'>VIDEO & PHOTO FORENSICS</div>
                                <hr className="my-2" />
                                <div>><a href="/video-and-photo-forensics/forensic-video-enhancement-software/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">VideoEnhancement Software</a></div>
                                <div>><a href="/video-and-photo-forensics/forensic-image-authentication/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Image Authentication</a></div>
                                <div>><a href="/video-and-photo-forensics/video-synopsis/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Video Synopsis</a></div>
                                <div>><a href="#" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">INSPECTION</a></div>
                                <div>><a href="/inspection/portable-x-ray-systems/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Portable X-ray Systems</a></div>
                                <div>><a href="/inspection/cell-phone-detection/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Cell Phone Detectino</a></div>
                                <div>><a href="/terahertz-imaging-cameras/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Imagining Cameras</a></div>
                                <div>><a href="/inspection/terahertz-imaging-scanner/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Imaging Scanners</a></div>
                            </div>
                        </div>
                        <div className='w-1/3 px-8 text-[12px]'>
                            <div>
                                <div className=' text-[13px]'>TOOLMARKS</div>
                                <hr className="my-2" />
                                <div>><a href="/toolmarks/vehicle-identification-number-vin" className="hover:cursor-pointerhover:cursor-pointer hover:text-[#264a6a] transition duration-200">Vehicle Identification Number(VIN)</a></div>
                                <div>><a href="/toolmarks/weapon-number-verification/" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Weapon Number Verification</a></div>
                                <div>><a href="/toolmarks/toolmarks-impression" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Toolmarks Impression</a></div>
                                <div>><a href="/toolmarks/crash-data-retrieval" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Crash Data Retrieval</a></div>
                                <div>><a href="#" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">SHOEPRINT COLLECTION</a></div>
                                <div>><a href="/shoeprint-collection/footprints-tyre-impression" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Footprints & Tyre Impression</a></div>
                                <div>><a href="/shoeprint-collection/3d-shoeprint-acquisition" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">3D Shoeprint Acquisition</a></div>
                                <div>><a href="/shoeprint-collection/shoeprint-database" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Shoeprint Database</a></div>
                                <div>><a href="/shoeprint-collection/shoeprint-collection" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Shoeprint Collection</a></div>
                                <div>><a href="/shoeprint-collection/gait-analysis" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">GAIT Analysis</a></div>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-7xl mx-auto flex py-2'>
                        <div className='w-1/3 px-8 text-[12px]'>
                            <div>
                                <div className='text-[13px]'>FIREARMS</div>
                                <hr className="my-2" />
                                <div>><a href="/firearms/ballistic-identification-comparison" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Ballistic Identification & Comparison</a></div>
                                <div>><a href="/firearms/gun-crime-tracking-software" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Gun Crime Tracking Software</a></div>
                                <div>><a href="/firearms/high-speeding-imaging" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">High-Speeding Imaging</a></div>
                                <div>><a href="/firearms/bullet-recovery-system" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Bullet Recovery System</a></div>
                                <div>><a href="/firearms/gsr-collection" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">GSR Collection</a></div>
                            </div>
                        </div>
                        <div className='w-1/3 px-8 text-[12px]'>
                            <div>
                                <div className='text-[13px]'>AUDIO FORENSICS</div>
                                <hr className="my-2" />
                                <div>><a href="/audio-forensics/speaker-recognition-for-commercial-application" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Voice recognition-Commercial</a></div>
                                <div>><a href="/audio-forensics/noise-cancellation-systems" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Noise Cancellation Systems</a></div>
                                <div>><a href="/audio-forensics/forensic-analysis-tools" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Forensic Analysis Tools</a></div>
                                <div>><a href="/audio-forensics/language-solution" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Language Solution</a></div>
                                <div>><a href="/audio-forensics/voice-biometric" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Voice Biometric</a></div>
                            </div>
                        </div>
                        <div className='w-1/3 px-8 text-[12px]'>
                            <div>
                                <div className='text-[13px]'>LABORATORY MANAGEMENT SYSTEM</div>
                                <hr className="my-2" />
                                <div>><a href="/laboratory-management-system-2" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Laboratory Management System</a></div>
                                <div>><a href="/laboratory-management-system/narcotic-profiling-matching" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Narcotic Profiling & Matching</a></div>
                                <div>><a href="/laboratory-management-system/dna-profiling-and-matching-2" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">DNA Profiling and Matching</a></div>
                                <div>><a href="/laboratory-management-system/crime-scene-management-2" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Crime Scene Management</a></div>
                                <div>><a href="/laboratory-management-system/ballistic-cloning-system-2" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Ballistic Cloning System</a></div>
                                <div>><a href="/laboratory-management-system/kinship-paternity-2" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Kinship & Paternity</a></div>
                            </div>
                        </div>
                    </div>
                </div>}
                {dropdown == '4' && <div className='text-gray-300 w-full pt-8 pb-20 bg-[#0e3354] z-30' onMouseOver={() => { onDropdown('4') }} onMouseLeave={() => { onDropdown('') }}>
                    <div className='max-w-7xl mx-auto flex py-6'>
                        <div className='w-3/12 px-8 text-[12px]'>
                            <div>
                                <div className=' text-[13px]'>FORENSIC IT SERVICES</div>
                                <hr className="my-2" />
                                <div>><a href="/computer-forensics/digital-forensics-laboratory" className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Digital Forensics Laboratory</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Mobile Data Extraction</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Data Recovery</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Password Recovery</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Data Acquisition</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Malware Detection</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Networking</a></div>
                            </div>
                        </div>
                        <div className='w-3/12 px-8 text-[12px]'>
                            <div>
                                <div className='text-[13px]'>SECURITY SYSTEM SOLUTION</div>
                                <hr className="my-2" />
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">CCTV Surveillance Systems</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Access Control Systems</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Fingerprint Reader</a></div>
                            </div>
                        </div>
                        <div className='w-3/12 px-8 text-[12px]'>
                            <div>
                                <div className='text-[13px]'>3D LASER SCANNING</div>
                                <hr className="my-2" />
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Non-Contact Inspection</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">A-Built Documentation</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Forensic Analysis and Investigation</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Fire Investigation</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">360 Degree Live Streaming</a></div>
                            </div>
                        </div>
                        <div className='w-3/12 px-8 text-[12px]'>
                            <div>
                                <div className='text-[13px]'>HIGH SPEED IMAGING</div>
                                <hr className="my-2" />
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Materials Testing</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Fluid Dynamics</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Ballistics, Impact Physics & Detonics</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Combustion</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Automotive Crash Testing</a></div>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-7xl mx-auto flex py-2'>
                        <div className='w-3/12 px-8 text-[12px]'>
                            <div>
                                <div className='text-[13px]'>LABORATORY DESIGN</div>
                                <hr className="my-2" />
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Laboratory Design & Construction</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Supply and install Laboratory Furniture</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Laboratory Maintenance</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Laboratory Renovation</a></div>
                            </div>
                        </div>
                        <div className='w-3/12 px-8 text-[12px]'>
                            <div>
                                <div className='text-[13px]'>ID CARD & PASSPORT SCANNING</div>
                                <hr className="my-2" />
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Supplying and maintaining passport scanning</a></div>
                                <div>><a className="hover:cursor-pointer hover:text-[#264a6a] transition duration-200">Passport reading for Hotels, Airlines, Car Rental, Clubs and etc.</a></div>
                            </div>
                        </div>
                    </div>

                </div>}

            </nav>
        </div >
    );
}