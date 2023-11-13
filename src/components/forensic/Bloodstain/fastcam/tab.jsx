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
                    The FASTCAM Series of high-speed cameras and the rest of Photron’s varied product line makes us the first choice by designers, manufacturers, R&D and test engineers because our high-speed video cameras can record at up to two million frames per second (fps) with unmatched light sensitivity.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Forensic – Firearms<br /><br />
                        >>Liquid Velocity
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Slow-motion replay of drop impact.<br /><br />
                        >>Deformation, velocity, and acceleration can be analyzed in 3-D.<br /><br />
                        >>High-speed revolution of cutting tool, with visible metal debris scattering.<br /><br />
                        >>Vibration during machining can be remotely analyzed.<br /><br />
                        >>High-intensity melting process is visible while the welding arc is suppressed.<br /><br />
                        >>Synchronization between the movie images and voltage waves is attained.<br /><br />
                        >>Combustion scene within a narrow engine cylinder.<br /><br />
                        >>Temporal analysis of flame temperature distribution is now possible.<br /><br />
                        >>Visualize flow movements.<br /><br />
                        >>Analyze vector distribution in a flow field.<br /><br />
                        >>Visualize the moment of material fructure.<br /><br />
                        >>Quantify shape deformation using a non-contact 3-D method.<br /><br />
                        >>Cutting-edge FASTCAM technology offers a system configuration best suited for your application<br /><br />
                        >>The FASTCAM series offers various camera models each having a unique set of specifications which are best suited to your application.<br /><br />
                        >>Flagship model.<br /><br />
                        >>High-end model with SD card slot.<br /><br />
                        >>High Performance.<br /><br />
                        >>High Definition Slow Motion Analysis.<br /><br />
                        >>Lightweight and rugged – tested to 100G.<br /><br />
                        >>Superior performance at an attractive price point.<br /><br />
                        >>High-speed camera with multiple camera head configuration.<br /><br />
                        >>Additional Tethered Head Series Cameras.<br /><br />
                        >>FASTCAM Software Packages enable seamless operation from framing to analysis.
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