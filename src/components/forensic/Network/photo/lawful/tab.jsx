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
                    Decision Group’s Lawful Interception Suite (LI Suite) for Packet Data Network provides all the hardware and software needed for targeted network surveillance based on a court-issued warrant. The suite includes iMediator, iMonitor, our EDDM module that decodes and reconstructs network packets, and the evidence archiving manager – Data Retention Management System.
                    <br /><br />These devices are integrated to create a powerful tool for the law enforcement community and their efforts to eliminate cybercrime.
                    <br /><br />When deploying a Lawful Interception system, there are three important factors to consider: the devices, the telecom/ISP interception point, and the warrant that issued by a court and authorizing the legal interception of a suspect’s network traffic.
                    <br /><br />When the warrant is issued by the court, the warrant information is entered into Decision Group’s iMonitor. The iMonitor then sends the warrant information as HI1 data to the iMediator device that is located within the telecom/ISP network. This target provision information is then sent to the ISP’s AAA and Broadband Remote Access Server (B-RAS).
                    <br /><br />When the target accesses the internet through the telecom/ISP the AAA and B-RAS mirror the traffic and send the copy of the traffic to the iMediator by 2 types of data stream: X2 and X3. The X2 traffic that is sent to iMediator is the Interception Related Information, and the X3 traffic is the Content data.
                    <br /><br />These two data sets are returned to the iMonitor in the law enforcement domain by the standardized form: HI2 and HI3 respectively, where the HI3 data is correlated with HI2 and sent to the EDDM module for decoding and reconstruction. After the data has been decoded, it will then be sent to the Data Retention Management System where analysis and/or archiving will take place.
                    <br /><br />The main user interface for our Lawful Interception Suite is the iMonitor. Three user authorities exist for the iMonitor: Administrator, Operator, and Claimer. The Administrator has the authority to configure the system, create users, and enter warrant information. The Operator is restricted to only entering warrant information. The Claimer is the only authorized user to view the intercepted data.
                    <br /><br />The iMonitor user interface in the Operator authority, the Operator can create and view warrant information, but does not have access to system settings, or intercepted data.
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