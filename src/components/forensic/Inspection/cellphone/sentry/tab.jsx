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
                    SentryHound™ cell phone detection security portal is triggered when cell phones (or other ferromagnetic material) pass by its sensors. This type of TSCM installation is especially useful for security personnel looking to detect any cell phones (ON or OFF) as well as some weapons including knives and guns without invasive and time-consuming searches.
                    <br /><br />>>Detects all cell phones even when switched OFF and battery removed
                    <br /><br />>>Rugged pressure switch mat ensures only suspects passing through sensors will trigger alarm
                    <br /><br />>>Detects any ferromagnetic material including cell phones, laptops, tablets as well as knives, guns and other weapons
                    <br /><br />>>Alarm does not false trigger from jewelry (gold and silver), copper, aluminum, bronze or brass
                    <br /><br />SentryHound Cell Phone Security Detection Portal is triggered when cell phones (or other ferromagnetic material) pass by its sensors. This type of TSCM installation is especially useful for security personnel looking to detect any cell phones (ON or OFF) as well as some weapons including knives and guns without invasive and time-consuming searches.
                    <br /><br />Since SentryHound is triggered by specific components found in mobile phones, time, money and resources normally spent using standard metal detectors are saved. This makes SentryHound the perfect compliment to teams securing concert halls, courtrooms, conference rooms, government secure facilities (SCIFs), and many more public and private areas from cell phones. SentryHound contains (12) independent, ultra-sensitive zones between 2 poles to detect cell phones from head to toe and even indicate location of the hidden item with glowing LED alerts and sirens. These LED zones “lock” onto any mobile phone, tablet or laptop hidden in a pocket, bag or purse. The rugged pressure mat switch ensures that only suspects passing through the sensors will be instantly scanned by SentryHound. Setup and takedown of SentryHound is easy and its flexible power requirements (plug in for AC or use it’s internal DC battery) allow it to run all day. Ten levels of sensitivity and auto calibration ensure that SentryHound is always on the trail of hidden or contraband phones. SentryHound is designed and manufactured in the U.S.A.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Quick scan anyone for unauthorized cell phones in pockets, backpacks, purses & briefcases
                        <br /><br />>>Rugged pressure switch mat ensures only suspects passing through sensors will trigger alarm
                        <br /><br />>>12 Independent, ultra-bright LED “zones” instantly indicate approximate position of phone
                        <br /><br />>>Detects any ferromagnetic material including cell phones, laptops, tablets as well as knives* and guns*
                        <br /><br />>>Alram does not false trigger from jewelry (gold and silver), copper, aluminum, bronze or brass
                        <br /><br />>>Ten levels of user adjustable sensitivity
                        <br /><br />>>Detects cell phones even when switched OFF and battery removed
                        <br /><br />>>Lighweight and simple setup make for portable perimeter security
                        <br /><br />>>Optional rain coat protects entire unit from water and elements
                        <br /><br />>>Assembles in under 10 minutes
                        <br /><br />>>Perfect for DoD, NSA, FBI & any secure government or military SCIF
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