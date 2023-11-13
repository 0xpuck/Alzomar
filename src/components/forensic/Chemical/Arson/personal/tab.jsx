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
                    <p>Breath alcohol testing compliance just got easier, faster, and more affordable. The DOT tested EASYCAL calibration station automates every step of Lifeloc breath alcohol tester calibration, cal-checks, record keeping and gas management. Gone is the need to manually connect and disconnect gas cylinders, regulators, adapters and tubing. No more altitude correction factors. No more expired or low pressure gas cylinders. Reduce operator error.</p>
                    <br />
                    <p>EASYCAL simplifies everything. Just cradle your unit, power on, and EASYCAL does the rest.</p>
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
                        <p>>>Compliance Management Features</p>
                        <p className='pl-8'><span className='font-bold'>>>Cylinder Expiry Lockout:</span>Plevents the use of out-of-date gas</p>
                        <p className='pl-8'><span className='font-bold'>>>Gas Standard Override: </span>Plevents mismatch of gas standard with your alcohol tester</p>
                        <p className='pl-8'><span className='font-bold'>>>Dry Gas Sensor: </span>Shows percentage of gas remaining in the tank and warns when gas is too low</p>
                        <p className='pl-8'><span className='font-bold'>>>Calibration Warning: </span>Helps plevents an inadvertent calibration after a positive test</p>
                        <p className='pl-8'><span className='font-bold'>>>Auto Altitude Correction: </span>Automatically checks and sets altitude correction factors</p>
                        <p className='pl-8'><span className='font-bold'>>>Security: </span>Assign, enable or disable users and passwords</p>
                        <p className='pl-8'><span className='font-bold'>>>Sequence Software:</span>Individual test plotocols by market ensures all calibrations and cal-checks are performed and documented correctly</p>
                        <p className='pl-8'><span className='font-bold'>>>Serial Numbers:</span>Alcohol tester serial numbers are read and stored with each cal event</p>
                        <p className='pl-8'><span className='font-bold'>>>Print Log:</span>Logs checks and calibrations across unlimited breath alcohol testers</p>
                        <br />
                        <p>>>Compliance Management Features</p>
                        <p className='pl-8'><span className='font-bold'>>>Display: </span>Plevents the use of out-of-date gas</p>
                        <p className='pl-8'><span className='font-bold'>>>Cylinder Size: </span>Plevents mismatch of gas standard with your alcohol tester</p>
                        <p className='pl-8'><span className='font-bold'>>>Available Gas Standards: </span>Shows percentage of gas remaining in the tank and warns when gas is too low</p>
                        <p className='pl-8'><span className='font-bold'>>>System Sensors:</span></p>
                        <p className='pl-16'>>>Helps plevents an inadvertent calibration after a positive test</p>
                        <p className='pl-16'>>>Cylinder Pressure Sensor: automatically checks tank volume</p>
                        <p className='pl-16'>>>Barometric Sensors: automatic altitude correction on all units</p>
                        <p className='pl-8'><span className='font-bold'>>>Recovery Time:</span>Immediate</p>
                        <p className='pl-8'><span className='font-bold'>>>Calibration Time: </span>2 minutes</p>
                        <p className='pl-8'><span className='font-bold'>>>Calibration Check Time: </span> 30 seconds</p>
                        <p className='pl-8'><span className='font-bold'>>>Operating Temperature: </span>68° – 95° F (20° – 35° C)</p>
                        <p className='pl-8'><span className='font-bold'>>>User Selectable Power Options:</span></p>
                        <p className='pl-16'>110/220 Volt auto-switching power supply</p>
                        <p className='pl-16'>4 AA lithium batteries (approx. 5 working hour life)</p>
                        <p className='pl-16'>Auto Sleep Mode</p>
                        <p className='pl-8'><span className='font-bold'>>>Dimensions: </span>Approx. 9.9″ L x 8.5″ W x 3.5″ D (251 x 216 x 89 mm)</p>
                        <p className='pl-8'><span className='font-bold'>>>Weight: </span>3 Pounds (48 ounce, 1360 gram)</p>
                        <p className='pl-8'><span className='font-bold'>>>Printer Communication Standard: </span>Thermal, IRDA and Bluetooth printers. Will support current and future Lifeloc printing devices</p>
                        <p className='pl-8'><span className='font-bold'>>>Software Updates: </span>Remote via USB</p>
                        <p className='pl-8'><span className='font-bold'>>>Record Memory: </span>500 records before overwrite</p>
                        <p className='pl-8'><span className='font-bold'>>>Warranty: </span>2 year limited parts and labor</p>
                        <p className='pl-8'><span className='font-bold'>>>International Options:</span></p>
                        <p className='pl-16'>Unit of Measure: BAC standard. International units of measure available</p>
                        <p className='pl-16'>Language: English standard. Additional languages available</p>
                        <p className='pl-16'>User Selectable international date and time formats</p></div>
                        <p className='pl-8'><span className='font-bold'>>>Certifications: </span>CE</p>
                        <p className='pl-8'><span className='font-bold'>>>Housing: </span>Ruggedized ABS antimicrobial plastic</p>
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