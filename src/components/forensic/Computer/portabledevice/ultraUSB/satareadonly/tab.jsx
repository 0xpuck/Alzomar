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
                    The Read Only UltraBlock USB 3.0 IDE-SATA (USB 2.0 compatible) is used to acquire data from an IDE or SATA hard drive in a forensically sound write-protected environment. The USB 3.0 family of portable forensic bridges offer faster imaging speeds, reliable performance, and an easy to use USB 3.0 host computer connection.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Ease of use, Reliability, and Imaging speed
                        <br />The UltraBlock USB 3.0 Forensic IDE/SATA Bridge supports write-blocked, forensic acquisitions of both SATA and IDE storage devices through a fast USB 3.0 host connection. It offers forensic examiners the ease of use, reliability, and imaging speed necessary to image today’s larger and faster hard-disk drives – in both lab or field environments.
                        <br /><br />>>Single Super Speed USB 3.0 port
                        <br />With the advent of USB 3.0, the clutter of multiple host connections has been replaced by a single Super Speed USB 3.0 port. You’ll have the robust write-blocking technology that is the standard by which all other SATA and IDE write blockers are measured, now powered by the performance potential of USB 3.0. Still just as easy to use as ever; simply connect, power up, and image.
                        <br /><br />>>Added Security
                        <br />For added security, the UltraBlock USB 3.0 device introduces the new ‘Firmware Update’ button, which places the unit in a special mode for updating its firmware through the Tableau Firmware Update (TFU) utility. TFU has been rewritten for updates via USB, making it easier than ever to maintain the correct version of firmware on new Tableau products.
                        <br /><br />>>Easy Device Configuration
                        <br />If desired, the user can configure the device for either Read-Only or Read-Write operation through the use of internal dip switches. (An LED is provided on the case to confirm when the unit is configured in Read-Only Mode).
                        <br /><br />>>Versatile Operation
                        <br />In Write Protect mode, the UltraBlock will prevent ANY and ALL writes from reaching the attached device. It is compatible with all Windows 98se, Windows ME, Windows 2K/XP, Windows 7 and any O/S that supports IEEE 1394 and has a compliant card and drivers.</p>
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