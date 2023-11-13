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
                    Papilon MT-01 in-the-field express ID check system enables to make ID checks by fingerprints in seconds via an Android tablet PC and 3G/4G network connection. It provides ease of use, quickness and efficiency for the law enforcement units, especially for critical incidents.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Defense
                        <br />>>Finance
                        <br />>>Government
                        <br />>>Law Enforcement
                        <br />>>Hospitality and Retail
                        <br />>>Enterprise
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Thanks to the advanced optical technology of the Papilon LS-01 single fingerprint scanner, ability to take fingerprint images without any quality loss even from extremely wet or dry finger skins

                        <br /><br />>>1 to N Personal Identification: Papilon MT-01 enables to make express ID verifications (to determine whether the fingerprinted person is the wanted person or not, and also detect identity falsifications) from the saved blacklist on the memory card, and express ID searches (to answer the question “who is this individual”) by connecting to the remote APFIS database.
                        <br /><br />>>A tablet PC with Android 4.xx or 5.xx operating system

                        <br /><br />>>FBI certified Papilon LS-01 single fingerprint scanner

                        <br /><br />>>A 3G/4G SIM card to establish connection between the tablet PC and remote ID check server

                        <br /><br />>>An OTG converter cable to connect the fingerprint scanner and the tablet PC.
                        <br />Size
                        <br /><br />>>Tablet PC: Depends on the chosen tablet PC.
                        <br /><br />>>LS-01 Fingerprint Scanner (WxDxH): 53x110x30 mm
                        <br /><br />
                        Weight
                        <br /><br />>>Tablet PC: Depends on the chosen tablet PC.
                        <br /><br />>>LS-01 Fingerprint Scanner: 0,17 Kg
                        <br /><br />>>Fingerprint Image Resolution: 500dpi
                        <br /><br />>>Dynamical Range: 8bpp
                        <br /><br />>>Signal-Noise Ratio: Minimum 40 db
                        <br /><br />>>Time for Scanning a Fingerprint: Max. 2,5 seconds
                        <br /><br />>>Image Quality: Complies with FBI’s “Image Quality
                        <br /><br />>>Specification for Single Finger Capture Devices”, CJIS-Division, v. 71006, 10 July 2006
                        <br /><br />>>Connection Interface: USB 2.0 by OTG converter cable
                        <br /><br />>>Image Compression Algorithm: WSQ Compression (Max. 1:15)
                        <br /><br />>>Operating System: Android 4.xx or 5.xx (6.xx is not test
                    </p>
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