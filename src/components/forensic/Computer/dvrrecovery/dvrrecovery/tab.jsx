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
                    DVR Examiner is a software solution for acquiring video and metadata from CCTV DVRs in a forensically sound manner. Whether in the field or in the lab, DVR Examiner allows law enforcement and other forensic professionals to bypass DVR passwords and archaic menus to quickly extract evidence from the DVR hard drive directly.
                    <br /><br />Traditional computer forensic techniques can fall short with CCTV DVR systems due to the proprietary filesystems and data used. As the leading experts of CCTV DVR Forensics, DME Forensics has developed a process to reverse engineer these proprietary filesystems and integrate them into our software application called DVR Examiner.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        Why Use DVR Examiner?
                        >>Bypass DVR Passwords: By working from the DVR hard drive directly, DVR Examiner eliminates the need for any passwords or menus.
                        <br />>>If the hard drive works, DVR Examiner can recover the data.
                        <br />>>Using the DVR to export video can take upwards of 3 weeks on some systems. With only a few clicks, DVR Examiner allows you to retrieve video from the DVR hard drive directly. This forensically sound workflow saves you and your agency the headache of manually exporting video to flash drives or CDs!
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Highly portable, highly automated, intuitive and designed for maximum productivity, the RTC360 solution efficiently combines the RTC360 a high-performance 3D laser scanner, Leica Cyclone FIELD 360 mobile-device app for edge computing for automatically registering scans in real time, and Leica Cyclone REGISTER 360 PLUS office software to integrate your 3D model seamlessly into your workflow.
                        <br /><br />
                        >>Capture scans, including enriching High-Dynamic Range (HDR) imagery, in less than two minutes.
                        <br /><br />
                        >>Automatically record your moves from station to station to pre-register your scans in the field without manual intervention.
                        <br /><br />
                        >>Augment your data capture with information tags illustrating the opportunities for better planning, reflect site reality, and boost your teams’ situational awareness.
                        <br /><br />
                        >>Directly publish your captured data from Cyclone FIELD 360 to Leica TruView Cloud to quickly exchange project information prior to import and registration
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