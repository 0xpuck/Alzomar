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
                    Scanna’s CR35+ is the latest generation portable CR x-ray imaging system. The system incorporates the latest in digital technology with full 16 bit performance at 200-50 micron resolution and is capable of scanning imaging plates up to 130 cm long.
                    <br /><br />CR35+ is primarily used by  Military and Police EOD, IEDD and Search Teams, prisons and building security managers for security checking unattended bags and suspicious packages. It also has a multitude of other uses such as forensic work, weapons exploitation and the inspection of museum artifacts, artwork and for  industrial testing.
                    <br /><br />The Scanna CR35+ is mains or battery operated and is easily set up and deployed in less than 2 minutes by one person.
                    <br /><br />CR35 Image plates are thin and flexible, are compatible  with any of the Golden pulsed x-ray generators and our ScanView Imaging software.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Portable and easy to set up and use in less than 2 minutes
                        <br /><br />>>Thin Flexible Image plates in a range of sizes from 18 x 24 cm up to 43 x 35 cm
                        <br /><br />>>Image Resolution from 100 – 50 microns and 10 line pairs minimum
                        <br /><br />>>Scan and erase the reusable plates in a single pass
                        <br /><br />>>Robust low maintenance plate scanner with no carousel or clips required during scanning
                        <br /><br />Works with most portable x-ray sources including the Golden XR150, golden XR200, Golden XRS-3 and also recommended continuous x-ray sources
                        <br /><br />>>Image processing features
                        <br />CR35  uses our powerful ScanView software to give you a range of image manipulation options to get all the detail out of your x-ray image. Features include Zoom, inverse Image, b/w, pseudo colour, pseudo 3D, contrast enhancement, clean image, rotation, distance, measure and show gradients.
                        <br /><br />A range of annotation tools allow you to insert text, notes and highlight suspect areas.
                        <br /><br />>>Database features
                        <br />ScanView’s  database software allows you to store and manage images using searchable fields. Raw and Stored images can be immediately exported by email or across a network.
                        <br /><br />>>Scanview image processing features
                        <br />>>Zoom, inverse Image, b/w, pseudo colour, pseudo 3D, contrast enhancement, clean image, rotation, distance, measure and show gradients.
                        <br />>>A range of annotation tools: Insert text, notes and highlight suspect areas.
                        <br />>>Image Database and Incident Management Tools.
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <span className="text-lg text-gray-500">
                        >>Defence / Military Police and First Responders
                        <br /><br />>>Facilities Protection
                        <br /><br />>>Postrooms
                        <br /><br />>>Border Security
                        <br /><br />>>Transport Security
                        <br /><br />>>Prisons
                        <br /><br />>>Events and Venues
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