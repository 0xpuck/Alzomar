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
                    Automatically pre-register point cloud data in the field to quickly conduct quality control checks, improve productivity and make better-informed decisions on site.
                    <br /><br />
                    The Leica RTC360 3D reality capture solution empowers users to document and capture their environments in 3D, improving efficiency and productivity in the field and in the office through fast, simple-to-use, accurate, and portable hardware and software. The RTC360 3D laser scanner is the solution for professionals to manage project complexities with accurate and reliable 3D representations and discover the possibilities of any site.
                    <br /><br />
                    Fast
                    <br />
                    The new Leica RTC360 laser scanner makes 3D reality capture faster than ever before. With a measuring rate of up to 2 million points per second and advanced HDR imaging system, the creation of coloured 3D point clouds can be completed in under two minutes. Plus, automated targetless field registration (based on VIS technology) and the seamless, automated transfer of data from site to office reduce time spent in the field and further maximise productivity.
                    <br /><br />
                    Agile
                    <br />
                    Small and lightweight, the Leica RTC360 scanner’s portable design and collapsible tripod mean it’s compact enough to fit into most backpacks, ready to be taken anywhere. Once on-site, easy-to-use, one-button operation makes for fast, hassle-free scanning.
                    <br /><br />
                    Precise
                    <br />
                    Low noise data allows for better images, resulting in crisp, high-quality scans that are rich in detail and ready for use in a range of applications. Combined with Cyclone FIELD 360 software for automated registration in the field, the Leica RTC360 scanner offers outstanding precision that can be checked on-site.
                    <br /><br />
                    Pre-registration in the field
                    <br />
                    As part of the RTC360 solution, the Cyclone FIELD 360 app links the 3D data acquisition in the field with the laser scanner and data registration in the office with Cyclone REGISTER 360 PLUS. On-site the user can automatically capture, register and examine scan and image data. The user interface combines easy handling of complex calculations with a graphical user guidance that offers a remarkable user experience, also for novice users.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Law Enforcement
                        <br /><br />
                        >>Accident Reconstruction
                        <br /><br />
                        >>Forensics
                        <br /><br />
                        >>Fire
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
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