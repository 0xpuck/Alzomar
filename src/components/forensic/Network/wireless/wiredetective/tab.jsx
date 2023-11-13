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
                    Wireless-Detective is a complete and comprehensive Wireless LAN (WLAN) legal interception and forensics investigation solution for the intelligence related units/agencies such as police, military, criminal investigation department, national security department etc. In fact, it is the most reliable solution to trace, identify all illegal Wireless LAN Internet activities or transactions and preserve all of this evidence.
                    <br /><br />Wireless-Detective is a complete and comprehensive Wireless LAN (WLAN) legal interception and forensics investigation solution for intelligence related units/agencies such as police, military, criminal investigation departments, national security departments, etc. It is the most reliable solution to trace and identify all illegal Wireless LAN Internet activities or transactions and preserve all of the evidence. Wireless-Detective is the smallest and lightest WLAN forensics investigation tool available. It includes a small laptop (12.1 inches monitor screen) with a Linux-based OS integrated with the Wireless-Detective software installed. With its small size, forensic professionals can discreetly carry the unit to any place (such as restaurant, shopping mall, airport, café, hotspot etc.) for legal interception and forensic investigation tasks. With the capability to scan all WLAN channels (802.11a/b/g 2.4 GHz and 5 GHz frequency bands), to capture/sniff WLAN traffic from available Wi-Fi networks, decrypt WEP encrypted (WPA-PSK optional module) wireless network (automatically or manually), decode and reconstruct captured WLAN raw data, store the raw data captured and store the reconstructed data in its database, and display them in the original and exact content format, it is the most complete (All-in-One) WLAN interception and forensic investigation tool. Furthermore, the Wireless-Detective user management interface or GUI (accessed through a browser) is very user friendly, easy to operate and manage.
                    <br /><br />Due to the advantages of Wireless-Detective system when compared to other available wireless forensic tools, many forensics professionals all over the world have opted to have Wireless-Detective as their professional tool for legal interception and investigation. For these professionals, the mobility of Wireless-Detective, its complete features/functions, reliability and All-in-One solution have won their hearts and trust to fight Internet fraud, high tech criminals, and terrorism through the use of Wi-Fi networks.
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
                        Wireless-Detective is the smallest and lightest WLAN forensics investigation tool available. It includes a small laptop (12.1 inches monitor screen) with Linux base OS integrated with Wireless-Detective software installed. With the small size (mobility), forensic professionals can discreetly carry the unit to any place (such as restaurant, shopping mall, airport, café, hotspot etc.) for legal interception and forensic investigation tasks. With the capability to scan all WLAN channels (802.11a/b/g 2.4 GHz and 5 GHz frequency bands) to capture/sniff WLAN traffic from available Wi-Fi networks, decrypt WEP encrypted (WPA-PSK optional module) wireless network (automatically or manually), decode and Wireless-Detective user management interface or GUI (accessed through a browser) is very user friendly, easy to operate and manage.
                        <br /><br />Wireless-Detective is capable of decoding and reconstructing WLAN Internet traffic in real time such as Email (POP3, SMTP, IMAP), Webmail (Gmail, Yahoo Mail, Windows Live Hotmail etc.), Instant Messaging/Chat (MSN/Windows Live Messenger, Yahoo Messenger, IRC, ICQ, QQ, UT Chat Room, Google Talk Gmail, Skype Voice Log), FTP, P2P, Online Game, TELNET, HTTP (URL Link, Content, Reconstruct, Download/Upload, Video Stream) etc. After the decoding and reconstruction of the captured traffic, it displays the results in its menu list according to the different protocol/category types in exact or original content format. With the capability to search by keyword or search by parameter (conditional search), it allows further forensics investigation and analysis to be carried out. Because of its capability, Wireless-Detective is an All-in-One system (all WLAN investigation work is conducted in one machine) that can speed up the entire investigation process.
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