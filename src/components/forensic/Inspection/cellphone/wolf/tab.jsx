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
                    Wolfhound™-PRO’s high-speed scanning receiver utilizes a multi-band DF (Direction Finding) antenna system allowing security personnel to locate nearby cell phones in either standby mode* or during active voice, text or data RF transmissions making it the perfect TSCM tool for enforcing your NO WIRELESS security policy. Wolfhound-Pro’s passive receiver technology does NOT intercept or “listen-in” on any phones calls making it fully legal and the tool of choice for law enforcement trying to avoid sluggish court orders and search warrants. Wolfhound-PRO’s simple trackball/pushbutton operation and ultra-bright OLED screen make it easy to use for both trained and untrained security personnel.
                    <br /><br />>>Detects and locates active cellphones voice, text and data transmissions
                    <br /><br />>>DF antenna allows for locating of phones which no competitive solutions exist
                    <br /><br />>>Passive receiver technology is fast and legal, eschewing the need for slow court orders
                    <br /><br />Wolfhound-PRO Cell Phone Detector is a precision, handheld, wireless sniffer specifically tuned to the RF signature of common cell phones (both U.S. & international bands) including LTE, AWS, PCS, CDMA / WCDMA (UMTS), GSM, EGSM Cellular bands as well as GPS trackers and even U.S. DECT 6.0 cordless phones that cause interference with European cellular carriers.
                    <br /><br />Wolfhound-PRO Cell Phone Detector’s award-winning*, high speed scanning receiver utilizes a multi-band DF (Direction Finding) antenna system allowing security personnel to locate nearby cell phones in either standby mode* or during active voice, text or data RF transmissions making it the perfect TSCM tool for enforcing your NO WIRELESS security policy. Wolfhound-PRO’s simple trackball/pushbutton operation and ultra-bright OLED screen make it easy to use for both trained and untrained security personnel.
                    <br /><br />In addition, Wolfhound-PRO™ identifies each cellphone by frequency (not phone number or IMEI) allowing for detection and listing of multiple cellphones. This can prove useful in situations involving a variety of cellphone use such as large prisons and even disaster zones involving search and rescue operations. This also means that Wolfhound-PRO is legal and the preferred tool of choice for law enforcement looking to avoid time consuming court orders required by the use of some more complex and illegal phone interception devices. Wolfhound-PRO has up to 150 foot radius for cell phone detection (indoors) and up to 1 mile outdoors (line-of-sight) making it the most sensitive cell phone detector on the market. Wolfhound-PRO™is designed and manufactured in the U.S.A.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Receiver design boasts a dynamic range of -60 dB with user settable sensitivity
                        <br /><br />>>Detects cell phones up to 150 feet away (indoors) and up to 1 mile away (line-of-sight outdoors)
                        <br /><br />>>Identifies each phone by frequency allowing for multiple, simultaneous cellphone detection
                        <br /><br />>>User selectable from -83 dBm to –53 dBm with a resolution of 2 dB for detection in a noisy environment (typical of prisons)
                        <br /><br />>>Selectivity rejection of at least 50 dB at 1 MHz from the uplink frequency bands provides high immunity from false triggering caused by base stations, personal communication devices and other sources of interference
                        <br /><br />>>Software (optional) logging capability allows the user to record and time-stamp every detected cell phone transmission via built-in USB port.
                        <br /><br />>>User selectable mobile frequency bands allow the same unit to be used around the world; both USA and European mobile uplink bands are supported
                        <br /><br />>>Detects GPS trackers hidden on vehicles or people
                        <br /><br />>>Detects U.S. DECT 6.0 cordless phone standard
                        <br /><br />>>Integrated laser-assisted directional antenna (green 532 nanometer laser, 50 feet mimimum span)
                        <br /><br />>>Internal Li-ION battery runtime of 4+ hours
                        <br /><br />>>Weighs less than 2 lbs. (30 oz.) fully loaded or just over 1 lb. (18 oz.) using omni-directional antenna
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">Please contact us and request for additional information.</p>
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