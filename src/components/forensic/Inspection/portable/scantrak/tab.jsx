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
                    Scantrak is a multiple application portable digital x-ray unit used by police, military, EOD, customs, law enforcement agencies, prisons and building security managers for security checking unattended bags and suspicious packages.
                    <br /><br />Scantrak is easily set up and deployed in minutes by one person and can be configured to suit different environments.Scantrak operates with any of the Golden pulsed x-ray generators and our ScanView Imaging software can be installed on any Windows XP or Windows 7 laptop or tablet .
                    <br /><br />Scantrak is available with adjustable exposure settings, different size ICUs from 8 x 10” up to 16 x 22 and has both wireless and ROV capabilities.
                    <br /><br />X-ray Generators
                    <br />Works with most portable x-ray sources including the Golden XR150, golden XR200, golden XRS-3 and also recommended continuous x-ray sources
                    <br /><br />Power Options
                    <br />Completely battery powered in the field for over 5 hours continuous operation. Recharge through the transit case’s integral charging system.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Direct CCD x-ray image viewing with fast rescans and no return to target to retrieve image plate
                        <br /><br />>>Portable and easy to set up and use in 2 minutes
                        <br /><br />>>Ethernet Cable or wireless operation
                        <br /><br />>>Range of Image Capture Units from 8 x 10” up to 16 x 22”

                        <br /><br />>>Image processing features
                        <br />Scantrak uses our powerful ScanView software to give you a range of image manipulation options to get all the detail out of your x-ray image. Features include Zoom, inverse Image, b/w, pseudo colour, pseudo 3D, contrast enhancement, clean image, rotation, distance, measure and show gradients.

                        <br />A range of annotation tools allow you to insert text, notes and highlight suspect areas.

                        <br /><br />>>Database features
                        <br />ScanView’s database software allows you to store and manage over 32,000 images using searchable fields. Option to export both Raw and Stored images via  email or across a network.
                        <br /><br />
                        >>Standard System Configuration
                        <br />>>Scantrak 8 x 10” CCD x-ray imager (ICU)
                        <br />>>XR200 X-ray generator
                        <br />>>Spare generator battery
                        <br />>>High specification laptop
                        <br />>>Scanview security imaging software
                        <br />>>50m cable on reel
                        <br />>>Integrated System Chargers
                        <br />>>Wheeled Pelistyle Transit Case

                        <br /><br />>>Scanview image processing features
                        <br />>>Zoom, inverse Image, b/w, pseudo colour, pseudo 3D, contrast enhancement, clean image, rotation, distance, measure and show gradients.
                        <br />>>A range of annotation tools: Insert text, notes and highlight suspect areas.
                        <br />>>Image Database and Incident Management Tools
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