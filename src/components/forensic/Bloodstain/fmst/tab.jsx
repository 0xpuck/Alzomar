import React from 'react'
import { TabGroup } from '@statikly/funk'

export default function MyTabs() {
    return (
        <div className="w-full flex flex-col">
            <TabGroup numTabs={5} direction={TabGroup.direction.HORIZONTAL}>
                <TabGroup.TabList className="text-sm font-bold">
                    <TabGroup.Tab
                        index={0}
                        className="h-10 px-3 transition-colors duration-300"
                        activeClassName="border-gray-300 border-2 border-b-stone-50 border-b-2 hover:text-blue-800"
                        inactiveClassName="text-gray-400 hover:text-blue-800 border-b"
                    >
                        ABOUT
                    </TabGroup.Tab>
                    <TabGroup.Tab
                        style={{ backgournd: "#000" }}
                        index={1}
                        className="h-10 px-3 transition-colors duration-300"
                        activeClassName="border-gray-300 border-2 border-b-stone-50 border-b-2 hover:text-blue-800"
                        inactiveClassName="text-gray-400 hover:text-blue-800 border-b"
                    >
                        FEATURES
                    </TabGroup.Tab>
                    <TabGroup.Tab
                        index={2}
                        className="h-10 px-3 transition-colors duration-300"
                        activeClassName="border-gray-300 border-2 border-b-white hover:text-blue-800"
                        inactiveClassName="text-gray-400 hover:text-blue-800 border-b"
                    >
                        APPLICATION
                    </TabGroup.Tab>
                    <TabGroup.Tab
                        index={3}
                        className="h-10 px-3 transition-colors duration-300"
                        activeClassName="border-gray-300 border-2 border-b-white hover:text-blue-800"
                        inactiveClassName="text-gray-400 hover:text-blue-800 border-b"
                    >
                        DOWNLOADS
                    </TabGroup.Tab>
                    <TabGroup.Tab
                        index={4}
                        className="h-10 px-3 transition-colors duration-300"
                        activeClassName="border-gray-300 border-2 border-b-white hover:text-blue-800"
                        inactiveClassName="text-gray-400 hover:text-blue-800 border-b"
                    >
                        VIDEOS
                    </TabGroup.Tab>

                </TabGroup.TabList>
                <TabGroup.TabPanel
                    index={0}
                    className="pt-10 transition-all transform h-64 text-gray-500 text-lg h-auto"
                    activeClassName="opacity-100 duration-500"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    The ForenScope Mobile Multispectral Imaging System adopts independent operating system software and is equipped with a HD professional handheld terminal which is simple and  easy to use.
                    <br /><br />The ForenScope Mobile Multispectral Imaging System adopts global advanced spectroscopic techniques, equipped with a specially developed professional PAD tablet (with special built-in infrared camera, a visible light color camera, and profession spectra color fitters), a variety of high purity spectra and diversified control software.
                    <br /><br />The device is lightweight and portable, easy to operate and highly integrated, dedicatedly carries out non-destructive search for latent bloodstains on difficult check samples and especially performs on-site search and discovery against latent bloodstains on a dark, black or complex background that are difficult to detect or invisible latent bloodstains.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Blood stain detection<br /><br />
                        >>Body fluids detection (saliva, urine, semen, sweat etc.)<br /><br />
                        >>Gunshot residue detection<br /><br />
                        >>Fingerprint Documentation<br /><br />
                        >>Document Examination
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>The software system may compare pictures In terms of black and white contrast to enhance effect display.
                        <br /><br />>>It can Immediately generate and send reports and pictures on site.
                        <br /><br />>>It can achieve image editing, processing and archiving.
                        <br /><br />>>The device has the functions and capability for parallel and overlapping contrast for Latent blood stains and may mark the size of latent blood stains with a scale.
                        <br /><br />>>The device comes with a built-in high-capacity lithium battery ensuring long continued work on site.
                        <br /><br />>>It performs live network transmission.
                        <br /><br />>>With its built in high-pixel professional specialty spectral camera capable of finding latent blood stains on a dark or complex background fabric invisible to the bare eye and zoom smaller latent bloodstains on check samples: It is able to zoom ¡n or out adjusting the focus in real time and can support direct search and detection in a farther distance.
                        <br /><br />>>The Super Spectra Difficult Btoodstains Finder uses a variety of professional groups of special filters and the device is equipped with a multiple sets of multi-function integrated multi-spectral Light tens which can adapt to different occasion and background applications.
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={3}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">Please contact us and request for additional information.</p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={4}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">Please contact us and request for additional information.</p>
                </TabGroup.TabPanel>
            </TabGroup>
        </div>
    )
}