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
                    Autonomous Reality Capture for Robots
                    <br /><br />
                    The Leica BLK ARC is an autonomous laser scanning module for robots. It is designed to be integrated with robotic carriers to enable autonomous mobile laser scanning with minimal or no human intervention. Users can simply plan a scan path and set BLK ARC off on its own to scan autonomously.
                    <br /><br />
                    Our first robotic carrier is the Boston Dynamics Spot robot. BLK ARC combined with Spot creates a fast, simple, safe, and autonomous reality capture workflow. Together, they deliver fully autonomous and repeatable scan missions to capture 3D point clouds and panoramic imagery while Spot carries BLK ARC through an environment.
                    <br /><br />
                    With BLK ARC UI, an easy-to-use browser-based user interface, users can plan scan paths remotely using existing drawings or BIM models of your building, including large and complex spaces. This enables the user to save time and allow BLK ARC to scan complex or hazardous environments while remaining in a safe location.
                    <br /><br />
                    BLK ARC UI bridges the distance between the office and the field and enables uploads of offline missions planned in Cyclone 3DR to the robot. Once the mission is complete, BLK ARC UI helps to direct the data either into our legacy software, Leica Cyclone, or to direct upload from the field to HxDR.
                    <br /><br />
                    Remote user operation<br />
                    Plan and execute missions from a remote location, whether in the office or in the field, which also keeps you safe from hazardous areas.
                    <br /><br />
                    Offline path planning<br />
                    Create new missions and adjust existing missions for any environment using Leica Cyclone 3DR.
                    <br /><br />
                    GrandSLAM technology<br />
                    GrandSLAM combines LiDAR SLAM, Visual SLAM, and an IMU to enable fully autonomous scanning and robotic navigation.
                    <br /><br />
                    Static and mobile scanning modes<br />
                    BLK ARC can scan in static and mobile mode during the same scan mission and all scans of both types will be registered together during the mission.
                    <br /><br />
                    LiDAR module protection<br />
                    Included U-bar protects the BLK ARC module when mounted to its robotic carrier.
                    <br /><br />
                    Simple user interface<br />
                    Control and manage your BLK ARC from an easy-to-use, browser-based application: BLK ARC UI.
                    <br /><br />
                    Upload to HxDR<br />
                    Upload BLK ARC data directly from the module to HxDR, our cloud-based data storage, visualization, and collaboration platform.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Law Enforcement<br /><br />
                        >>Accident Reconstruction<br /><br />
                        >>Forensics<br /><br />
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
                        >>Performs scan missions autonomously with minimal user intervention<br /><br />
                        >>Easily mounts to Boston Dynamics Spot and integrates with its sensors<br /><br />
                        >>Improves robotic navigation while capturing 3D point clouds to create 3D digital twins<br /><br />
                        >>Captures both static and mobile scans during the same scan mission<br /><br />
                        >>Can repeat scan missions autonomously for up-to-date project progress and site changes<br /><br />
                        >>Uses GrandSLAM technology: LiDAR SLAM, Visual SLAM, and an IMU for reality capture and autonomous navigation through complex environments
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