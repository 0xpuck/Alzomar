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
                    PocketHound™ is the industry’s most sensitive cell phone detector for it’s size. This award-winning*, passive receiver is no larger or heavier than a deck of cards and specifically tuned to the RF signature of common cell phones (both U.S. & international bands) including all 2G, 3G and 4G bands (PCS, CDMA / WCDMA (UMTS), GSM, EGSM).
                    <br /><br />>>Covert size fits in any pocket
                    <br />>>Detects active cell phone use up to 75 feet away
                    <br />>>Vibrating alerts for user
                    <br /><br />PocketHound™ is the industry’s most sensitive cell phone detector for it’s size. This award-winning*, passive receiver is no larger or heavier than a deck of cards and specifically tuned to the RF signature of common cell phones (both U.S. & international bands) including all 2G, 3G and 4G bands (PCS, CDMA / WCDMA (UMTS), GSM, EGSM).
                    <br /><br />This breadth of band detection allows any security personnel to locate nearby cell phones in either standby mode* or during active voice, text or data RF transmissions making it the perfect TSCM tool for enforcing your NO WIRELESS security policy. PocketHound prevents unauthorized mobile phone use by detecting nearby (up to 75 feet indoors) cellular phones all from your pocket. PocketHound’s auto threshold feature automatically detects cell phone activity only above the RF noise in your environment. This prevents false triggers and alerts the user to any cell phone activity with bright LED flashing or vibration for completely covert, in-pocket detection.
                    <br /><br />Pocket Hound Covert Cell Phone Detector is the perfect device for  GOVERNMENT BUILDINGS  (court rooms),  CLASSROOMS & UNIVERSITIES  (stop cheating students) and  SECURED INSTALLATIONS  (prevent corporate espionage) as well as  CORRECTIONAL FACILITIES  (detect and locate contraband cell phones) and made  entirely in the USA.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Small enough to fit into your pocket or the palm of your hand
                        <br /><br />>>Auto threshold sets detection level above ambient RF noise to avoid false triggering
                        <br /><br />>>Perfect for catching cheating students, corporate espionage, government secure facilities & prisons too
                        <br /><br />>>Internal, integrated flat antenna
                        <br /><br />>>Up to 75 foot detection range indoors
                        <br /><br />>>Superbright LEDs & vibration alerts you all from within your pocket
                        <br /><br />>>Receiver design boasts a dynamic range of -60 dB with user settable sensitivity
                        <br /><br />>>Detects all phones including 2G, 3G, 4G, CDMA, GSM, PCS, UMTS & more
                        <br /><br />>>User selectable up to –50dBm with a resolution of 2dB for detection in a noisy environment (typical of prisons)
                        <br /><br />>>Selectivity rejection of at least 50 dB at 1 MHz from the uplink frequency bands provides high immunity from false triggering caused by base stations, personal communication devices and other sources of interference
                        <br /><br />>>User selectable mobile frequency bands allow the same unit to be used around the world; both USA and international bands supported including 2G, 3G, 4G, GSM, CDMA, PCS, UMTS, WCDMA, AWS, EGSM & more
                        <br /><br />>>Internal Li-ION battery runtime of 2+ hours (extended battery available as option on this product)
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