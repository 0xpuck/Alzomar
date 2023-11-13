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
                    The Read Only UltraBlock eSATA IDE-SATA is used to acquire data from an IDE or SATA hard drive in a forensically sound write-protected environment. The eSATA Forensic Bridge supports four different host connection options for SATA and IDE device acquisitions:
                    <br />>>One eSATA Port
                    <br />>>Two FireWire800 Ports
                    <br />>>One FireWire400 Port
                    <br />>>One USB 2.0/1.1 Port
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Interface Options
                        <br />With four different host interface options, the UltraBlock eSATA IDE-SATA establishes a new standard in write-blocker performance and host interface connectivity. No other write-blocker can match the combination of product quality, host connection flexibility, imaging performance, and overall value.
                        <br /><br />>>An eSATA/FireWire/USB to Parallel IDE / SATA Bridge Board with Forensic Write Protection
                        <br />The UltraBlock eSATA IDE-SATA is an eSATA/FireWire/USB to Parallel IDE / SATA Bridge Board with Forensic Write Protection. The UltraBlock eSATA IDE-SATA can be connected to your laptop or desktop using the FireWire-A (400 Mb/s), the FireWire-B (800 Mb/s), or the USB 1.X/2.0 interface. The UltraBlock IDE-SATA is provided with write protection enabled by default. By connecting a suspect drive to the UltraBlock IDE-SATA, you can be certain that no writes, modifications, or alterations can occur to the attached drive.
                        <br /><br />>>Device Configuration
                        <br />If desired, the user can configure the device for either Read-Only or Read-Write operation through the use of internal dip switches. (An LED is provided on the case to confirm when the unit is configured in Read-Only Mode).
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Interface Options
                        <br />With four different host interface options, the UltraBlock eSATA IDE-SATA establishes a new standard in write-blocker performance and host interface connectivity. No other write-blocker can match the combination of product quality, host connection flexibility, imaging performance, and overall value.
                        <br /><br />
                        >>An eSATA/FireWire/USB to Parallel IDE / SATA Bridge Board with Forensic Write Protection
                        <br />The UltraBlock eSATA IDE-SATA is an eSATA/FireWire/USB to Parallel IDE / SATA Bridge Board with Forensic Write Protection. The UltraBlock eSATA IDE-SATA can be connected to your laptop or desktop using the FireWire-A (400 Mb/s), the FireWire-B (800 Mb/s), or the USB 1.X/2.0 interface. The UltraBlock IDE-SATA is provided with write protection enabled by default. By connecting a suspect drive to the UltraBlock IDE-SATA, you can be certain that no writes, modifications, or alterations can occur to the attached drive.
                        <br /><br />
                        >>Device Configuration
                        <br />If desired, the user can configure the device for either Read-Only or Read-Write operation through the use of internal dip switches. (An LED is provided on the case to confirm when the unit is configured in Read-Only Mode).
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