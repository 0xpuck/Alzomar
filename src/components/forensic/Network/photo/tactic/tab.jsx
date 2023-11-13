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
                    Tactic lawful interception operation is usually carried out by investigator for urgent and temporary action with definite targets for communication monitoring. The difference between tactic and permanent lawful intercept is the LI device used for tactic operation without acquisition capability of target provision data. So it can be used flexibly to link with TSP network facility without too much deployment concern.
                    <br /><br />TSP network assistance for a successful LI operation is a must when investigator request LI task, because there is no target provision data available. The monitoring period is normally for few days to one or two weeks, and sometimes it may be longer than one month by special approval from authorized organization, but it is not so often.
                    <br /><br />It is deployed by LEA investigator at the gateway network segment in TSP data center or in Internet Exchange Gateway (IEX) by the help of network management staff for locating target subscribers. Normally TSP will ask to separate its own network facility from Tactic LI system for security or network management concern by firewall.
                    <br /><br />The network provision data may not be available directly, but provision data of online services can be obtained through link analysis process on the target content of transportation layer from intercepted traffic. So, the capability of content reconstruction is very important for tactic LI system.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Network Forensics
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        The Tactic LI system package provided by Decision Group is accommodated in a movable trolley with rollers as an independent LI suite inside TSP data center and can be maintained remotely by LI staff through VPN network. The whole basic package is consisted of:
                        <br /><br />>>3 units of full function E-Detective, which provides interception capability of both non-HTTPS and HTTPS traffic and primary data link analysis tool, and these 3 unit can be adjusted to intercept non-HTTPS or HTTPS traffic separately
                        <br /><br />>>One unit of data retention management system (DRMS) with less than 6TB capacity storage, which can provide room for reconstructed data archiving from frontend E-Detective systems
                        <br /><br />>>One unit of 12 port switch, which is for network link among E-Detective and DRMS systems
                        <br /><br />>>One unit of traffic load balancer, which is for incoming X3 traffic load dispatching to 4 units of E-Detective
                        <br /><br />>>One unit of router with firewall function, which is for link with TSP network and remote login from LEA site
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