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
                    ExpertLab is a forensic device that is designed for examining, reproducing and photographing criminal evidence. It eases forensic experts operations regarding the objects which are hard to work with.
                    <br /><br />
                    Forensic evidences play vital role for criminal investigations, as they are lifted from surfaces which belongs to the crime scene. Therefore, these kind of evidences are hard work and should be analysed error-free and accurate.
                    <br />
                    It contains strategically positioned camera and lighting equipment to better investigate spoiled evidences from different angles.
                    <br /><br />
                    These evidences might be:
                    <br /><br />
                    >>Dispersed Footprints
                    <br /><br />
                    >>Faint Impressions
                    <br /><br />
                    >>Undeveloped latent fingers on objects
                    <br /><br />
                    >>Traces of wiping
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Visual documentation
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>The main stand and the detachable lighters are adjustable with respect to the evidence’s dimensions
                        <br /><br />
                        >>For fixing the objects, there are special holders
                        <br /><br />
                        >>Special lighting options for three dimensional objects (e.g. shadow-free)
                        <br /><br />
                        >>Stand
                        <br /><br />
                        >>Fill-in lighter with light-diffusing shades
                        <br /><br />
                        >>Slit shade
                        <br /><br />
                        >>Lamp
                        <br /><br />
                        >>Spotlight
                        <br /><br />
                        >>UV source
                        <br /><br />
                        >>Translucent platform
                        <br /><br />
                        >>Dark-field box with object-plate
                        <br /><br />
                        >>Object holder
                        <br /><br />
                        >>Bottle holder with accessories
                        <br /><br />
                        >>Small object and ruler holder
                        <br /><br />
                        >>Background (light/dark)
                        <br /><br />
                        >>Set of scales
                        <br /><br />
                        >>Laboratory stand with set of holders
                        <br /><br />
                        >>IR emitter
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