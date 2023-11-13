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
                    MOBILE FORENSIC IMAGER
                    <br /><br />The CellCube ® enables the worldwide technologically most advanced extraction, decoding, analysis and reporting of data for the most mobile phones, smartphones and tablets, as well as devices with Chinese chipsets.
                    <br /><br />The CellCube can perform physical and logical imaging as well as the capturing of system data and passwords for all files (even deleted). Imaging usual drives is possible as well threw the built-in write blocker from Tableau.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>With Touchscreen and intuitive interface
                        >>Built for an effective workflow and fast results
                        <br /><br />
                        MAXIMUM DEVICE SUPPORT:
                        <br />BlackBerry, iOS, Android, Nokia, Symbian, Microsoft Mobile, Palm, devices with Chinese chipsets (add-on) and much more.
                        <br /><br />
                        PHYSICAL EXTRACTION, DECODING AND ANALYSIS INCLUDING:
                        <br />Call history, SMS, contacts, calendar, email, chat, media data, geo-tags, passwords, location information (WIFI, radio cell) GPS location, etc.
                        <br /><br />
                        FORENSIC IMAGING:
                        <br />Hard drives, flash drives and other media which are usable in front of the court threw the integrated write blocker.
                        <br /><br />
                        >>Control: 8“ Touchpad LCD
                        <br />>>Processor: Intel i7 newest generation
                        <br />>>RAM: 16 GB
                        <br />>>System: 256 GB SSD
                        <br />>>Destination drive: 2 to 10 TB (3,5”) hot-swap screw less frame
                        <br />TRANSPORT:
                        <br />Hard plastic transport case (Trolley) for system & equipment
                        <br /><br />
                        FORENSIC:
                        <br />T356789iu Forensic PCI-e/SATA/IDE/SAS/USB/FireWire Combo Bridge
                        <br />ICE Bay cooler for external cooling of suspect hard drives
                        <br /><br />
                        Wireless Keyboard, Mouse, all cables and adapters are included
                        <br /><br />
                        SOFTWARE:
                        <br />Windows 64 bit (8.1/10)
                        <br />UFED 4 PC Ultimate incl. 1 year updates & Support
                        <br /><br />
                        36 Months Warranty &  Made in Germany
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Information Security
                        <br />>>Digital Investigation
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