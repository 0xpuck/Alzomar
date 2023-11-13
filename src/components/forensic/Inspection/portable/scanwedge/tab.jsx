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
                    Scanwedge is designed specifically for portable x-ray screening in tough law enforcement and EOD environments.
                    <br /><br />Scanwedge has a unique flat panel imager that is lightweight and backpackable, producing high quality x-ray images time after time.
                    <br /><br />Lightweight, battery powered, robust and easy to use Scanwedge contains no moving parts nor fragile components and has a weather-protective milspec cover for use in tough field environments.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Unique rugged and lightweight flat panel imager (imaging area less than 1” thick )
                        <br /><br />>>3 component operation (generator, imager, laptop) – no additional interface box needed
                        <br /><br />>>Direct X-ray Image Viewing with Fast rescans – take multiple x-ray exposures without reapproach to retrieve the plate
                        <br /><br />>>Ethernet cable or wireless operation
                        <br /><br />>>Database features
                        <br />ScanView’s database software allows you to store and manage over 32,000 images using searchable fields. Option to export both Raw and Stored images by email or across a network.
                        <br /><br />>>Standard System Configuration
                        <br />>>Scanwedge 2520 flat panel ccd x-ray imager
                        <br />>>XR200 X-ray generator
                        <br />>>Spare generator battery
                        <br />>>High specification laptop
                        <br />>>Scanview security imaging software
                        <br />>>50m cable on reel
                        <br />>>Integrated System Chargers
                        <br />>>Wheeled Pelistyle Transit Case
                        <br /><br />>>X-ray Generators
                        <br />Works with most portable x-ray sources including the Golden XR150, golden XR200, golden XRS-3 and also recommended continuous x-ray source
                        <br /><br />>>Image processing features
                        <br />Scanwedge uses powerful ScanView software to give you a range of image manipulation options to get all the detail out of your x-ray image. Features include Zoom, inverse Image, b/w, pseudo colour, pseudo 3D, contrast enhancement, clean image, rotation, distance, measure and show gradients.
                        <br /><br />>>A range of annotation tools allow you to insert text, notes and highlight suspect areas.
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