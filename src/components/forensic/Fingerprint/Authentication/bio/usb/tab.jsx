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
                    Biolink’s FS25 USB2.0 Fingerprint Mifare Card Reader/Writer combines a fingerprint scanner and an ISO14443A compatible Mifare card Reader/Writer into one device.
                    <br />
                    FS25 is a standalone fingerprint matcher and can do вЂњMatch on DeviceвЂќ. Under the control of PC via USB interface, it captures a fingerprint image, extracts the minutiae (fingerprint characteristics) and then stores to its internal memory. The stored fingerprint can be used to match with a freshly captured fingerprint and matching result is sent to PC for authentication. Its internal memory can store up 100 fingerprints.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className='text-gray-500 text-lg'>
                        With a combination of fingerprint вЂњMatch on DeviceвЂќ and ISO14443A Mifare card Reader/Writer, FS25 is perfect for real two-factors authentication, what you own(finger) is matched with what you carry(Mifare card). It is because fingerprint data can be stored to Mifare card and at the time of authentication:
                        <br /><br />
                        >>User shows the Mifare card and FS25 read the fingerprint data stored in card.<br />
                        >>Then put finger and FS25 scans the fingerprint image.<br />
                        >>FS25 matches the scanned fingerprint with the fingerprint data read from the Mifare card.<br />
                        >>The matching result is sent to PC for authentication<br /><br />

                        The use of fingerprint recognition for logical and physical access control has been controversial. It is because the fingerprint data must be stored somewhere in system for authentication. This may infringe the privacy of users in some cases. And FS25 is the answer to this problem as it can identify an individual using fingerprint without storage of fingerprint data in the system.
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-gray-500 text-lg">
                        SPECIFICATION-GENERAL<br />
                        >>USB 2.0 compatible interface, plug and play device<br />
                        >>Work on Windows XP and Vista<br />
                        >>With a 2 meter standard USB cable<br />
                        >>Size, 50 x 73 x 35 mm<br />
                        >>Weight, 200 gram<br />
                        >>Operation temperature: -10 to +55 Degree Celsius<br />
                        >>Supply voltage: DC 4.5-5.5V via USB port<br />
                        >>Power consumption: active 180mA and standby 80mA<br />
                        >>ESD contact – 8KV and air discharge – 16KV, no permanent damage<br /><br />


                        SPECIFICATION-FINGERPRINT MATCHER<br />
                        >>Fingerprint scanning window size is 16x24mm<br />
                        >>Image resolution is 480×320 pixel, 500 DPI<br />
                        >>8 bit grey level<br />
                        >>Light source: Infrared LED<br />
                        >>Raw fingerprint image file size is 150K byte<br />
                        >>With Live Finger Detection (LFD) feature<br />
                        >>Can store a maximum of 100 fingerprint<br />
                        >>FAR=0.000001 and FRR=0.01
                        <br /><br />

                        SPECIFICATION-MIFARE CARD READER/WRITER<br />
                        >>Compliant with ISO14443A<br />
                        >>Carrier frequency: 13.56MHz<br />
                        >>Support standard Mifare key encryption<br />
                        >>Support both 1KB and 4KB Mifare card<br />
                        >>Card sensing range: 15mm<br />
                        >>Card read/write time: 0.5sec(also depends on the data size)<br />
                        >>Two colors LED for Mifare card reader/writer status indication<br />
                    </p>
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