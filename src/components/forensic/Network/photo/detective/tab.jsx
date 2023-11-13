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
                    E-Detective is a real-time Internet interception, monitoring and forensics system that captures, decodes, and reconstructs various types of Internet traffic. It is commonly used for organization Internet behavioral monitoring, auditing, record keeping, forensics analysis, and investigation, as well as, legal and lawful interception for lawful enforcement agencies such as Police Intelligence, Military Intelligence, Cyber Security Departments, National Security Agencies, Criminal Investigation Agencies, Counter Terrorism Agencies etc. It also can provide a compliance solution for many standards or acts like Sarbanes Oxley Act (SOX), HIPAA, GLBA, SEC, NASD, E-Discovery and many others.
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
                        >>E-Detective is capable of decoding, reassembling, and reconstructing various Internet applications and services such as “Email (POP3, IMAP and SMTP), Webmail (Yahoo Mail, Windows Live Hotmail, Gmail etc.), Instant Messaging (Yahoo, MSN, ICQ, QQ, Google Talk, IRC, UT Chat Room, Skype), File Transfer (FTP, P2P), Online Games, Telnet, HTTP (Link, Content, Reconstruct, Upload and Download, Video Streaming), VOIP (optional module) etc.
                        <br /><br />>>E-Detective comes with a wide variety of management and administrative functions and features. It provides the user various types of reports with Up-Down View. Reports that can be created include Total Throughput Statistical Report, Network Service Report (Daily, Weekly basis), Top Websites etc. All statistics can be displayed in per IP Address or per User Account basis.
                        <br /><br />>>E-Detective also provides a variety of search functions. It provides Free Text Search (search by Key Words with Boolean support), Conditional Search, Similar Search and Association with Relationship Search. It also comes with Alert and Notification (Throughput, Conditional and Key Words Alert) functions that allow the network administrator to setup different alert rules and parameters. This allows an alert to be triggered (email to be sent to the administrator) once the specified content is found in the captured and reconstructed content.
                        <br /><br />>>The Backup function allows a user to back up the captured raw data files or reconstructed contents. The user can setup auto backup to backup these files to external drives (NAS or SAN) through FTP upload method. Also, the user can opt for manually backing up these files by burning them onto a CD/DVD or download them to a local hard drive/PC.
                        <br /><br />>>Other functions available are:
                        <br />>>Bookmark
                        <br />>>Capture File List (Comparing the content of two files)
                        <br />>>Online IP List
                        <br />>>Authority Assignment
                        <br />>>Syslog Server
                        <br />>>Hased export (backup)
                        <br />>>File content comparison, etc.
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