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
                    Everspry 3D (Ever3D™) is an ultra high resolution three-dimensional shoeprint impression acquisition device. Prior to the physical casting of three-dimensional shoeprint impression, Ever3D™ scanner is placed above the shoeprint to capture a detailed three-dimensional image.
                    Analysis software designed for CSI and police experts can be used to examine and rotate the image for comparison purposes.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Forensics – Shoeprint
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <span className="text-lg text-gray-500">
                        >>Image Acquisition Equipment: 5 million pixels array CCD with signal-to-noise ratio is greater than 60 Db
                        <br /><br />
                        >>Lighting: LED lighting with lifetime of over 30,000 hours; DLP projection technology, 700 lumens
                        <br /><br />
                        >>Physical Precision: Data acquisition precision: depth of information accuracy reaches 0.04 mm
                        <br /><br />
                        >>Calculation Precision: Calculation and display measurement accuracy: 0.01 mm
                        <br /><br />
                        >>Dip Angle Measurement: Measurement range: horizontal inclined angle ±15 degrees
                        <br /><br />
                        >>Data Format: Vector data is used for acquisition of 3D shoeprints and stored in dat format; 2D image in bmp format
                        <br /><br />
                        >>Acquisition Area: (LW) 36*21.6 cm
                        <br /><br />
                        >>Port: USB 3.0
                        <br /><br />
                        >>Dimensions: (LWH) 180 x 170 x 170 mm
                        <br /><br />
                        >>Acquisition Time: 15 sec
                        <br /><br />
                        >>ABS Case: Internal dimensions: 590 x 393 x 190 mm, protection class: IP65, temperature range: 30°～70°
                        <br /><br />
                        >>Tripod: Rocker arm lifter, 2-way double stand
                        <br /><br />
                        >>DC Power Supply: AC voltage output: 19.5 v, current output: 4.62 A
                        <br /><br />
                        >>Battery: Lithium battery, voltage output: 14.4 V, power: 10 Ah
                        <br /><br />
                        >>Charger: Wide 12-20 V DC input charger; able to connect to vehicle power supply
                    </span>
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