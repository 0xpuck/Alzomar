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
                    For most enterprise accounts in the market, the issue for internal Internet access by employees usually brings benefits as well as damages. Accessing the Internet conveniently will increase the productivity of an employee in terms of fast information collection and better communication with both customers and suppliers. On the other hand, the Internet is also the major reason of data leakage and employee distraction from their job. In many enterprises, minimizing the disadvantages of employee internet access while increasing productivity is a primary concern of senior management.
                    <br /><br />Internet user behavior management is not a new idea. Senior management already uses log files from network management systems or active directories for that purpose in many enterprises. Unfortunately, reports from these systems, which are not designed for such purposes, don’t usually reveal many clues about employee behavior during working hours nor specify which event is abnormal. So, year after year, the situation is still the same as the internal network infrastructure grows more complicated with business development.
                    <br /><br />Digital Forensic Technology is a new way to manage Internet user behavior. It collects all data packets, inbound or outbound, at the router side of the network, and parses and classifies these packets, reconstructs the packets back to its original contents, and stores it in a file system in a database.
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
                        >>Instant Message Record :
                        <br />>>Present date, time, account ID, IP(MAC) address, object and content of conversation and attachment.
                        <br />>>Work on MSN, Web MSN, ICQ, Yahoo Message, Google Talk, QQ, IRC and UT.
                        <br />>>Output conversation content of Instant Message by the condition of date into the format of Excel spreadsheet.
                        <br />>>Reconstruct video, audio, origin and destination from Yahoo Messenger.
                        <br />>>Provide log file of Skype with date, time, account ID, IP of sender and receiver.
                        <br />>>Provide friend list of MSN, Yahoo messenger.
                        <br /><br />>>Provide decryption function of Gmail.
                        <br /><br />>>Network integration with Microsoft AD or Novell Netware server.
                        <br /><br />>>Provide analysis information of data packet with unknown protocol with date, time, origin and destination IP, port number, MAC, packet size, packet number in the sequence by filter request.
                        <br /><br />>>Archive system
                        <br /><br />>>The system is equipped with 2.5GHz above CPU,2GB memory and external disk array for archive image file.
                        <br /><br />>>Provide searching function with specified keyword and file on the archive image files by at least 100.
                        <br /><br />>>The major functions provided for enterprises are :
                        <br /><br />>>Prevention of internal data leakage
                        <br /><br />>>Deployment without change of the internal network infrastructure
                        <br /><br />>>Low total IT cost of ownership through services offered by ISP
                        <br /><br />>>Remote disaster recovery mechanism with email transaction data
                        <br /><br />>>Audit mechanism compliant with ISO 27001
                        <br /><br />>>Transaction and forensic auditing on email, instant message and VoIP systems
                        <br /><br />>>User network usage and daily behavior report for performance review
                        <br /><br />>>Confidential files and key words transmission tracking
                        The major functions provided for Home and School are :
                        <br /><br />>>Monitor student behavior at school from the viewpoint of Internet transactions, such as email, instant message, and set up sensitive words/jargons related to bully, pornography, drug deal, violent fight…etc.
                        <br /><br />>>Monitor children behavior at home from the viewpoint of Internet transactions, such as email, instant message, online game, web link…etc.
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