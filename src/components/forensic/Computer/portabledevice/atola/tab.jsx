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
                    Atola TaskForce
                    <br />Atola TaskForce is the most capable forensic data acquisition tool in the world.
                    <br />Its combination of unrivalled multitasking capabilities with top imaging speeds enables users to run many tasks simultaneously and achieve overall imaging speed of 15 Tb/hour.
                    <br />The system works with both good and damaged media, provides drive diagnostics, wiping, hashing and other forensic features. TaskForce’s simple user interface, case management system, multi-user access, task queues and standalone mode make it super convenient and efficient for every forensic unit.
                    <br /><br />
                    Atola Insight Forensic
                    <br />Atola Insight Forensic is a high-speed forensic evidence acquisition tool capable of imaging both good and damaged media.
                    <br />Its vast functionality includes in-depth drive diagnostics, firmware recovery, ATA password removal, file recovery, scripting, HPA & DCO recovery, hashing, multitasking (imaging + wiping + hashing etc.), on-the-fly artifact search and many other great features.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        ATOLA TASKFORCE
                        <br />12+ SIMULTANEOUS IMAGING SESSIONS
                        <br />Atola TaskForce combines vast multi-tasking capabilities with the fastest imaging engine in the forensic market.
                        <br />Its server-class hardware enables launching and managing 12 or even more parallel image acquisition processes.
                        <br />>>15 TB/hour cumulative speed of imaging
                        <br />>>Imaging up to 5 targets
                        <br />>>Source/target switch on all ports
                        <br />>>Write protection in Source mode on all ports
                        <br />>>2 x 10Gb Ethernet ports
                        <br />>>Forensic imaging to E01 and RAW files
                        <br />DAMAGED DRIVE SUPPORT
                        <br />Hard drives with physical damage and problematic solid-state drives require a quite complex imaging approach. Atola TaskForce’s imaging engine is designed to achieve the best results getting as much data as possible. It includes the following features:
                        <br />>>Imaging data from good heads only
                        <br />>>Imaging freezing drives
                        <br />>>Imaging drives with surface scratches and firmware issues
                        <br />>>In-depth drive diagnostics
                        <br />>>Current sensor on all SATA, SAS/SATA, IDE ports
                        <br />>>Automatic overcurrent and short-circuit protection
                        <br />>>TaskForce hardware comes equipped with full circuit protection that prevents a malfunctioning storage device attached to the unit causing damage to the system or to the storage device itself.
                        <br />MULTI-USER ACCESS FROM ANY DEVICE
                        <br />User interface is highly intuitive, task-oriented and is designed to facilitate work with evidence for investigators with different levels of technical proficiency.
                        <br />UI features are:
                        <br />>>Manage via Chrome browser
                        <br />>>Simultaneous work of multiple users
                        <br />>>Launch of any operation within 2-5 clicks
                        <br />>>Highly intuitive task-oriented user interface
                        <br /><br />ATOLA INSIGHT FORENSIC
                        <br />FORENSIC AND E-DISCOVERY SOLUTION
                        <br />All features of the system are designed to support damaged media. Where other Forensic data acquisition products stall or abort on media errors, Atola Insight Forensic can acquire a usable image.When dealing with good (non-damaged) media, Atola Insight Forensic acquires data faster than any other data acquisition equipment commercially available.
                        <br />The system has several key features for data capture in forensic and e-discovery cases:
                        <br />>>Fastest in industry imaging speed up to 520 MB/s
                        <br />>>High performance multi-pass imaging for damaged drives
                        <br />>>In-depth Automatic HDD diagnostics
                        <br />>>Extraction of unknown ATA Passwords
                        <br />>>Case management system prepares acquisition reports automatically
                        <br />>>Hash calculation: MD5, SHA1, SHA224, SHA256, SHA384, SHA512
                        <br />>>Forensic data erasure methods including DoD 5220.22-M, Security Erase, NIST 800-88, Pattern Erase
                        <br />>>File recovery for NTFS, APFS (with encrypted volumes), Ext 2/3/4, HFS, HFS+, ExFAT, FAT16, FAT32
                        <br />>>Support for SATA, IDE, SAS, USB media
                        <br />>>Support for Apple PCIe (2013 – recent models) and M.2 PCIe SSDs via Atola extension modules
                        <br />>>Built-in write blocker
                        <br />>>Optional 10Gb Ethernet via extension modules
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        Atola TaskForce
                        <br />Atola TaskForce is a high-speed evidence acquisition tool capable of working with both good and damaged media, developed specifically for forensic use.
                        <br />It supports SAS, SATA, USB and IDE drives via 18 ports, and other storage devices via Thunderbolt, Apple PCIe, and M.2 SSD extension modules.
                        <br />TaskForce can be operated either in standalone mode or by multiple users from any number of devices within the same local network.
                        <br />The system consists of TaskForce hardware unit and software accessible in Google Chrome browser.
                        <br /><br />Atola Insight Forensic
                        <br />All features of the system are designed to support damaged media. Where other Forensic data acquisition products stall or abort on media errors, Atola Insight Forensic can acquire a usable image.
                        <br />When dealing with good (non-damaged) media, Atola Insight Forensic acquires data faster than any other data acquisition equipment commercially available.
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