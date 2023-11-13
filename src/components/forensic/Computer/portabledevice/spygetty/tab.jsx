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
                    SPYGETTY – PORTABLE NETWORK ANALYZER
                    <br /><br />The SpyGetty – Network Portable Analyser is a powerful solution for network data capture in the field.
                    <br />Scalable portable PC solution with 17″ display (1280×1024), Intel Xeon Power (single or dual CPU), up to 96GB of RAM, Gigabit and 10 Gigabit Network Adapter* and up 18TB SATA/SAS or SDD Storage*.
                    <br />Additionally the SpyGetty can be equipped with 1 x T35689iu for digital evidence aquisition from suspected hard drives.
                    <br /><br />The SpyGetty is able to capture full duplex gigabit traffic with minimal packets loss ( 1 %).
                    <br /><br />Optional TAP Portable Network Chassis – Solution for Breakout, Aggregating, Filtering and Regenerating of network traffic
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>X58 Intel Workstation board, 6x PCI-E (16x – 4 x) in 16x PCI-E form factor.
                        <br />>>Intel Core i7 EXTREME EDITION 6.40GT/S 12MB CACHE.
                        <br />>>24 GB RAM of DDR3 1333MHz.
                        <br />>>HD Graphic 1080p for loss free video playback.
                        <br />>>Debian Linux (stable Edition), Windows 7 Professional 64-bit or Windows 8.1 Professional 64-bit.
                        <br /><br />
                        Storage Components:
                        <br />>>Hardware RAID Controller PCI-Ex for SAS/SATA, Raid Level 0,1,5,6,10 and JBOD.
                        <br />>>up to 6 SAS/SATA Hard Drives with capacity up to 3 TB each. Configuration with SSD drives is possible.
                        <br />>>2 x SSD drives (2 x 120GB)m for operating system.
                        <br />>>Slim Line DVD Combo drive.
                        <br /><br />
                        Network Components:
                        <br />>>2 x Gigabit NICs on board.
                        <br />>>Quad port Intel Server Network Adapter*.
                        <br />>>Single or Dual 10 Gigabit Intel Server Adapter Cooper or Fibre.
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