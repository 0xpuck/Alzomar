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
                    <p>Actionable screening results for 6 drugs in 5 minutes.</p>
                    <br />
                    <p>The Alere DDS®2 Mobile Test System is a portable system designed for rapid screening and detection for drugs of abuse in oral fluid. With test results in 5 minutes, the battery-operated device is portable, lightweight, and easy to use, making it ideal for roadside drug screening.</p>
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
                        <p>>>Prison</p>
                        <p>>>Border Security</p>
                        <p>>>Rehabilitation</p>
                        <p>>>Oil & Gas</p>
                        <p>>>Transportation</p>
                        <p>>>Manufacturing</p>
                        <p>>>Inspection</p>
                        <p>>>Military</p>
                        <p>>>Maritime</p>
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        <p>>>Robust Design</p>
                        <p>The Alere DDS2 was developed to meet the high performance demands of law enforcement agencies, drug treatment centers, and workplace environments.</p>
                        <br />
                        <p>>>Reliable Results</p>
                        <p>Alere DDS2 combines rapid drug screening and accurate result interpretation. With system analysis printouts on location, the DDS2 eliminates subjectivity and misinterpretation of test results for greater reliability.</p>
                        <br />
                        <p>>>Easy to Use</p>
                        <p>With an intuitive test process, the Alere DDS2 Mobile Test System is incredibly easy to use in any environment. The system is lightweight, portable and compact with a full color screen, readable day and night.</p>
                        <br />
                        <p>>>Simple Collection Process</p>
                        <p>Rapid oral fluid collections are easy to obtain while in the field and less invasive than urine or blood sampling. The observed collection process limits adulteration and tampering concerns.</p>
                        <br />
                        <p>>>Manage Results</p>
                        <p>The analyzer can store 10,000 results which can be printed at the end of the test or reprinted from memory card. Test data can be downloaded to the optional Alere™ Software Application Suite for enhanced data management capabilities.</p>
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