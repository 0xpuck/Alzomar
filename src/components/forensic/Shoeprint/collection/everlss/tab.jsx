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
                    EverLSS 360 is a new image capturing device designed to meet strict requirements for surface application, image quality, data management, and many more. It uses high resolution camera to capture shoeprints and can be operated remotely.
                    <br />EverLSS 360 will satisfy even the most demanding CSI.
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
                        >>Imaging Method
                        <br />Photographic
                        <br /><br />
                        >>Optical Distortion
                        <br />No distortion
                        <br /><br />
                        >>Lighting Type
                        <br />LED lighting: 8-sided flat light, 8-sided diffuse light
                        <br /><br />
                        >>Lighting Properties
                        <br />32 bulbs with color temperature 6,500 K, 200~240 LM
                        <br /><br />
                        >>Device Operation Method
                        <br />Wireless
                        <br /><br />
                        >>LED Operation Method
                        <br />Bluetooth 4.0
                        <br /><br />
                        >>Total Weight
                        <br />Device: 4 kg, battery charger: 0.6 kg, pad: 0.8 kg, packaging: 1 kg
                        <br /><br />
                        >>Imaging Area
                        <br />(LW) 38 x 16 cm
                        <br /><br />
                        >>Power Supply
                        <br />Adapter: 100-240 V ~ 50/60 HZ 1.6 A (input); DC 12 V 3 A (output)
                        <br />Charger: 8.4 V 2 A (output)
                        <br /><br />
                        >>Charge Time
                        <br />6 h
                        <br /><br />
                        >>Operation Time
                        <br />3 h
                        <br /><br />
                        >>Battery
                        <br />Lithium battery 18650, 3,400 mAh
                        <br /><br />
                        >>Overall Dimensions
                        <br />Open: (LWH) 57 x 57 x 43 cm
                        <br />Closed: (LWH) 30 x 30 x 52 cm
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