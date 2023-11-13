import React from 'react'
import { TabGroup } from '@statikly/funk'

export default function MyTabs1() {
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
                    <p>The SENTINEL alcohol screening system enables high-volume “zero tolerance” screening of employees, contractors and visitors in safety sensitive industries such as Mining, Construction and Oil and Gas. The SENTINEL can significantly reduce industrial accidents linked to alcohol consumption.</p>
                    <br />
                    <p>The SENTINEL entry-point breath alcohol testing system is fast, totally automated and completely non-invasive. Tests are triggered automatically when the subject blows. No mouthpieces or straws are required. The SENTINEL uses internationally recognizable color icons to prompt subjects to blow and to display test results. There are no buttons to push or lights to interpret.</p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        <p>Provide a safer workplace with the Lifeloc SENTINEL™, a high-volume, automated breath alcohol tester which easily integrates into most access control systems:</p>
                        <br />
                        <p>>>Access Card Readers</p>
                        <br />
                        <p>>>Biometric / Fingerprint Scanners</p>
                        <br />
                        <p>>>Security Turnstiles</p>
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <table className='text-gray-500'>
                        <tr>
                            <td className="font-bold w-10">Interoperability</td>
                            <td>Designed to work as a stand-alone unit or integrated with existing time clocks, gates and other security controlled access points.**</td>
                        </tr>
                        <tr>
                            <td className="font-bold w-10">Automatic Passive Testing</td>
                            <td>The test is automatically triggered as the subject blows towards the designated port. No mouthpieces or straws required. Low cost per test. Perfect for high volume environments.</td>
                        </tr>
                        <tr>
                            <td className="font-bold w-10">Rapid Repeatability</td>
                            <td>Instant response on negative tests. Capable of taking hundreds of tests per day.</td>
                        </tr>
                        <tr>
                            <td className="font-bold w-10">Icon Driven Communication</td>
                            <td>Universal, easy to understand visual prompts clearly communicate with the subject. No user interpretation needed.</td>
                        </tr>
                        <tr>
                            <td className="font-bold w-10">Remote Updating</td>
                            <td>System is field upgradable using the internal USB interface</td>
                        </tr>
                        <tr>
                            <td className="font-bold w-10">Serviceability</td>
                            <td>Calibrate the unit without removing the breathalyzer. Contains modular components for easy in-field replacements.</td>
                        </tr>
                        <tr>
                            <td className="font-bold w-10">Platinum Fuel Cell Sensor</td>
                            <td>Provides exceptional accuracy as well as a long life span.</td>
                        </tr>
                        <tr>
                            <td className="font-bold w-10">Adjustable Alcohol Levels	</td>
                            <td>Easily adjust alcohol cut-off levels depending on your testing protocol. Choose from .000 BAC when any amount of alcohol is a violation, .02, .04, or any desired alcohol level.</td>
                        </tr>
                    </table>
                    
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