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
                    FORENSIC PROTECTION OF MOBILE DEVICES
                    <br />The OxyCube ® technology allows for advanced data decoding and reporting on a variety of devices such as mobile phones, smartphones and tablets, including Chinese chipsets.
                    <br /><br />
                    The OxyCube ® can perform physical and logical file backups as well as the reading of system data and passwords from all files. Thanks to the built-in write protection from Tableau, hard disks and other media can also be secured for court use.
                    <br /><br />
                    Optimized for mobile forensics:
                    <br />With touch screen and intuitive interface
                    <br />Designed for efficient workflows and fast results
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        Apple, Android, Nokia and Vertu classic, Sony Ericsson classic, Symbian S60, UIQ2, UIQ3, Windows Mobile 5/6, Blackberry, Samsung, Motorola, Chinese phones.
                        <br /><br />
                        Forensic Acquisition:
                        <br />Hard disks, flash disks, and other media that are usable by the built-in write protection.
                        <br /><br />
                        Technical specifications:
                        <br />Control: 8 “touchpad LCD
                        <br />Processor: Intel i7 of the latest generation
                        <br />Memory: 16 GB
                        <br />System: 256 GB SSD
                        <br />Target hard disk: 2 to 10TB (3.5 “) hot-swap in removable frame
                        <br />ICE Bay external fan to cool the data carriers to be backed up
                        <br />DVD burner Slim Line external
                        <br /><br />
                        Transport:
                        <br />Trolley case for system & accessories
                        <br /><br />
                        Forensic science:
                        <br />T356789iu Forensic PCI-e / SATA / IDE / SAS / USB / FireWire Combo Bridge
                        <br />Wireless keyboard and mouse, all necessary cables and adapters are included.
                        <br /><br />
                        Software:
                        <br />Windows 64 bit (8.1 / 10)
                        <br />Oxygen Forensic Suite Analyst
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