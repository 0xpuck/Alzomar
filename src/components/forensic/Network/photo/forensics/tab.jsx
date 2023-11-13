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
                    FIT is Windows-Based Content Forensics Toolkit to read and analyze the content of the Internet raw data in PCAP format. FIT provides security administrative officers, auditors, fraud and forensics investigators, as well as law enforcement officers the power to perform content analysis and reconstruction on pre-captured Internet raw data from Wired or Wireless networks. Developed by Decision Group experts, FIT and E-Detective series of products have now been used extensively by Private and Public organizations, Law Enforcement and Defense Officers and Investigators.
                    <br />
                    FIT comes with a friendly Graphical User Interface (GUI) that allows a novice to easily learn and utilize the unit’s powerful functionality and features. All protocols and services analyzed and reconstructed are displayed in a readable format for the users. The GUI is much easier to navigate and operate compared with many of the packet analyzer tools. The other unique feature of the FIT is that imported raw data files will be immediately parsed and reconstructed. Unlike other packet analyzer or reconstruction tools that require the user to manually reconstruct them session by session. Therefore, the immediate parsing and reconstruction of the raw data imported allows all the parsed data to be displayed in the intended service categories. That makes viewing the output results much easier for the investigator.
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
                        Product Features (FIT version 1.0):
                        <br />>>Application Software Tool (Windows based)
                        <br />>>Case Management Function
                        <br />>>Support Import of Raw Data Files (in PCAP Format)
                        <br />>>Detail information includes Date-Time, Source IP, Destination IP, Source MAC etc.
                        <br />>>Search Function (Full Text Search)
                        <br />>>WhoIS and Google Map Integration Functions
                        <br />>>Bookmark Function
                        <br />>>Analysing and Reconstruction of various Internet traffic types which includes Email (POP3, SMTP, IMAP), Webmail (Read and Sent), IM or Chat (MSN, ICQ, Yahoo, QQ, Skype Voice Call Log, UT Chat Room, Gtalk, IRC Chat Room), File Transfer (FTP, P2P), Telnet, HTTP (Content, Upload/Download, Video Streaming, Request) and Others (SSL).
                        <br /><br />
                        Product Features (FIT version 2.0):
                        <br />>>Application Software Tool (Windows based)
                        <br />>>Case Management Function
                        <br />>>Support Import of Raw Data Files (in PCAP / CAP Format)
                        <br />>>Detail information includes Date-Time, Source IP, Destination IP, Source MAC etc.
                        <br />>>Search Function (Full Text Search)
                        <br />>>WhoIS and Google Map Integration Functions
                        <br />>>Bookmark Function
                        <br />>>• Analysing and Reconstruction of various Internet traffic types which includes Email (POP3, SMTP, IMAP), Webmail (Read and Sent), IM or Chat (MSN, ICQ, Yahoo, QQ, Skype Voice Call Log, UT Chat Room, Hangouts(Google Talk), IRC Chat Room, LINE, Fetion, AliWnagWang, FireChat, WiFi Talkie, Serval Mesh), File Transfer (FTP, P2P), Telnet, HTTP (Web Page (原Content), Upload/Download, Video Streaming, Request) , Social Network Service(Sina weibo, Sohu weibo, Tencent weibo, 163 weibo, Kaixin, Renren, Q Zone, Linkedin, Odnoklassniki, VK, My World) and Others (TELNET, SSL, SQLLOG).
                        <br />>>Association Analysis
                        <br />>>Support Windows 2000 / XP / VISTA / Windows 7 / Windows 8
                        <br />>>Export analysis data to PDF file
                        <br />>>Provide Sorting Analysis data format
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