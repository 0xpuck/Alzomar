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
                    <p>Comprehensive and Affordable Drug Identification for the Lab or the Field</p>
                    <br />
                    <p>The most cost-effective solution of its kind on the market, the MFL-3000 enables law enforcement to quickly and easily perform drug identification in the field without destroying evidence. With a library of over 3,800 narcotics, precursors, synthetic drugs, and prescription pills, the MFL-3000 can identify the vast majority of both prescription pills and illicit substances found on the street. With the identification of cutting agents in street-mixtures, Centice is the first line in supporting intelligence-led investigations.  Auto-generated, tamper-proof reports support the legal process.</p>
                    <br />
                    <div className="text-gray-500 text-lg">
                        <p>>>Identifies bath salts, cocaine, MDMA, meth, and thousands more</p>
                        <p>>>Library contains over 3,800 illicits, prescription drugs, precursors, cutting agents, and synthetics</p>
                        <p>>>Non-destructive, tamper-free analysis preserves evidence</p>
                        <p>>>Category A (SWGDRUG), lab-proven results supports the prosecution</p>
                        <p>>>Automated reports and identification of mixture strengths for intel-led investigations</p>
                        <p>>>Eliminates false positives from chemical kits</p>
                        <p>>>Simple to use with dependable results in less than 30 seconds</p>
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        <p>>>Forensic-Chemistry</p>
                        <p>>>Law Enforcement</p>
                        <p>>>Border Security</p>
                        <p>>>Military</p>

                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        <p>Versatile</p>
                        <p>>>Identifies a Broad Range of Substances:</p>
                        <p>>>Narcotics</p>
                        <p>>>Precursors</p>
                        <p>>>Cutting agents</p>
                        <p>>>Pharmaceuticals</p>
                        <p>>>Street narcotic mixtures</p>
                        <br />
                    </div>
                    <div className="text-gray-500 text-lg">
                        <p>Rugged and Field-Ready</p>
                        <p>>>Designed for Law Enforcement</p>
                        <p>>>Portable, Rugged Carrying Case</p>
                        <p>>>Battery-Operated</p>
                        <br />
                    </div>
                    <div className="text-gray-500 text-lg">
                        <p>Extensive Library</p>
                        <p>>>Database of more than 3600 Pharmaceutical drugs</p>
                        <p>>>200+ Illicits, Precursors, Cutting Agents, synthetics, and bath salts</p>
                        <p>>>Automatic Library Updates with new substances</p>
                        <p>>>No Sample Preparation</p>
                        <p>>>Single Test for Multiple Drugs</p>
                        <p>>>Results in Less Than 30 seconds</p>
                        <br />
                    </div>
                    <div className="text-gray-500 text-lg">
                        <p>Cost-effective</p>
                        <p>>>No Periodic Factory Calibration Reports</p>
                        <p>>>Records History of Usage and Results</p>
                        <p>>>Generates Simple User-Friendly Reports</p>
                        <p>>>Presents stronger presumptive evidence</p>
                        <p>>>Enables law enforcement to hold defendant immediately</p>
                        <p>>>Provides immediate, definitive identification</p>
                        <p>>>Strengthens officer’s negotiating posture</p>
                        <p>>>Speeds arrest and detention process</p>
                        <p>>>Delivers flexibility in field operations</p>
                        <p>>>Enhances inter-agency communication</p>
                        <br />
                    </div>
                    <div className="text-gray-500 text-lg">
                        <p>Specifications:</p>
                        <p>>>Weight: 20 lbs</p>
                        <p>>>Size: Spectrometer:  6.5 x 11 x 3.5</p>
                        <p>Netbook: 7 x 10 x 1</p>
                        <p>>>Library: 3,600 narcotics, precursors, cutting agents, synthetics, and prescription drugs</p>
                        <p>>>Data Export Formats: CSV, Excel® spreadsheet, PDF</p>
                        <p>>>Interface: USB</p>
                        <p>>>Operating Temperature: -4° F to 122° F (-20° C to 50° C)</p>
                        <p>>>Languages: English, Chinese, Russian, Spanish, Vietnamese, Portuguese, Thai</p>
                        <p>>>Spectral range: 500-1800cm-1</p>
                        <p>>>Spectral resolution: 6-8 cm-1</p>
                        <p>>>Laser wavelength: 785nm +/- 0.5nm</p>
                        <p>>>Laser spot size: 1.5 mm</p>
                        <br />
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