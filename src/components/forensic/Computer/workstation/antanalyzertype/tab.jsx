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
                    Workstation with hardware encryption for sensitive data
                    <br /><br />The AntAnalyzer S-Type is the first forensic workstation worldwide with the possibility to encrypt the destination drives with 256bit hardware encryption.
                    <br /><br />Only proper security measures help to prevent and to guard from unauthorized access to sensible data.
                    <br /><br />With this technology there is no performance lost regarding reading or writing on the drives.
                    <br /><br />To provide the best encryption technology we integrated a 256 bit AES encryption that does not use a password but a real key with 2 256 characters length.
                    <br /><br />To give you an idea of that size:
                    <br />2256 = 115.792.089.237.316.195.423.570.985.008.687.907.853.269.984.665.640.564.039.457.584.007.913.129.639.936
                    different possibilities. To cover these all with a brute-force attack, imagine it would be possible to check 1,000,000 possibilities a second and check if it matches, it would “only” take 3.67 x 10 60 years. To give you a relation, consider that this would be 2.68 x 10 39 times the age of our universe.
                    <br /><br />The S-Type is available in every configuration of our AntAnalyzer series (Enterprise, Extreme, Advanced and Basic) and can be customized like all our solutions.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        TECHNICAL DATA:
                        <br />  Big Tower Case, ATX
                        <br />The technical data depends on the configuration and correspondent to our Antanalyzer-Series.
                        <br /><br />FORENSIK:
                        <br />Wiebetech Combo Bridge “Forensic LabDock” (IDE, SATA, USB)
                        <br />HDD fan integrated in the Forensic LabDock.
                        <br /><br />Alternative: Tableau T356789iu Forensic SATA/IDE/PCIe/SAS/USB/FireWire Combo Bridge
                        <br />IceTray internal cooler for suspected drive
                        <br />Keyboard, Mouse and all necessary cables and adapters included.
                        <br /><br />SOFTWARE:
                        <br />Windows 64 bit (7 / 8 / 10 ), Optional Linux 64 bit
                        <br />Forensic Imaging Tools:
                        <br />AccessData FTK-Imager , (bei T356789iu: Tableau Imager “TIM”)
                        <br />bei Windows, EnCase, Guymager bei Linux
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Information Security
                        <br />>>Digital Investigation
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