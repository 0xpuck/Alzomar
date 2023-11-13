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
                    <p className="text-2xl font-bold">THE READER 1000 IS A KEY ELEMENT OF THE INTELLIGENT FINGERPRINTING DRUG SCREENING SYSTEM.</p>
                    <br />
                    <p>It is used to analyse the Intelligent Fingerprinting Drug Screening Cartridge after a sample has been collected and it provides an on-screen positive or negative drug screening result for each drug in the test.</p>
                    <div className="text-gray-500 text-lg">
                        <p>>>Portable</p>
                        <p>>>Battery or mains powered</p>
                        <p>>>Simple touchscreen operation</p>
                        <p>>>Clear on-screen results in minutes</p>
                        <p>The Reader 1000 provides a preliminary screening result.</p>
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        <p>>>Healthcare</p>
                        <p>>>Manufacturing</p>
                        <p>>>Aluminium</p>
                        <p>>>Quality Control</p>
                        <p>>>Industrial</p>
                        <p>>>Environment</p>
                        <p>>>Oil & Gas</p>

                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        <p>>>HandyRam™ includes a point-and-shoot capability in which the user can simply point the HandyRam™ at a material  to identify it.</p>
                        <br />
                        <p>>>This new generation Raman handheld analyzer identifies illicit narcotics, controlled drugs, explosives  materials, pharmaceutical ingredients and a wide range of unknownsubstances.</p>
                        <br />
                        <p>>>HandyRam™ also includes a vial-measurement receptacle in which the HandyRam™ quickly and safely analyzes the contents of a vial.</p>
                        <br />
                        <p>>>HandyRam™ is the smallest such system on the market today and yet is powerful and has features that larger systems do not have, including Rapid Laser Spin (RLS™), which dramatically improves safety when analyzingsensitive materials. The RLS™ feature rapidly scans the laser across the sample surface, thus eliminating intense hot-spots and reducing possible burning of sample materials.</p>
                        <br />
                        <p>>>HandyRam™ easily fits in a pocket and can operate for up to 11 hours with only two AA batteries.</p>
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