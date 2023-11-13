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
                    <p className="text-gray-500 text-lg">
                        TIGERLT is an entry-level VOC detector that provides fast, accurate, reliable results, however challenging your environment.
                        <br /><br />This variant of the hugely popular Tiger VOC detector is low on cost but high on performance. Its revolutionary, patented photoionisation detection (PID) sensor technology with humidity resistance and anti-contamination design provide market leading accuracy and run-time.
                        <br /><br />Combined with 24-hour battery life, its features maximise field time by minimising inaccurate readings in high humidity and drift in harsh environments.
                        <br /><br />TIGERLT accurately detects gases from 0 to 5,000 ppm with a 0.1 ppm minimum sensitivity, has the fastest response time on the market of just two seconds, and is as quick to clear down. Its push-to-log data logging stores up to 80,000 data points in up to 128 user selectable zones.
                        <br /><br />This instrument has been designed with the user in mind for ease of use and servicing. Batteries can be replaced in potentially explosive environments due to the innovative Intrinsically Safe design. Low-cost filters and lamps can be easily changed in minutes, minimising instrument downtime. Fast battery charging allows the instrument to be fully charged in just six hours.
                        <br /><br />TIGERLT offers simple, one-handed operation even when wearing the thickest of gloves. Its rugged design and protective, removable rubber boot withstand harsh environments.
                        <br /><br />The large, clear backlit display allows for easy viewing in any light condition. An integrated torch is designed for directing the instrument’s probe into dimly lit areas. The illuminated keypad activates when the light is low.
                        <br /><br />TIGERLT is a ground-breaking, low-cost entry level PID with all the essential functions you need for VOC detection. The instrument has the lowest running costs on the market with inexpensive disposable parts, lamps and filters.
                        <br /><br />Ion Science VOC detectors all incorporate leading PID sensor technology which has received independent verification as the best performing on the market for its speed of response, accuracy and linearity.
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        <p>
                            >>Oil & Gas<br/>
                            >>Pharmaceutical<br/>
                            >>Eduvation<br/>
                            >>Aerospace<br/>
                            >>Manufacturing<br/>
                            >>Food & Beverage<br/>
                        </p>
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">

                        Ease of use<br />
                            >>User selectable response factors for direct concentration readout<br />
                            >>Intuitive, easy to use software<br />
                            >>Large clear keypad for easy operation when wearing gloves<br />
                            >>Ergonomic design allows simple one handed operation<br />
                            >>Large, clear visual display<br />
                            >>Torch and back-lit keypad for low light conditions<br />
                            >>Push-to-log data logging, 128 zones, 80,000 points<br />
                            >>Designed for easy service<br />
                        <br />

                        Best available PID technology<br />
                            >>PID independently verified as best performing on the market<br />
                            >>Accurate results across all environments from 0 – 5000 ppm<br />
                            >>Minimum sensitivity 0.1 ppm (100 ppb)<br />
                            >>Patented humidity resistance to 99% RH – no compensation needed<br />
                            >>Anti-contamination design minimises drift and extends run time<br />
                            >>Fastest 2 second response time and rapid clear down<br />
                        <br />

                        Minimise downtime<br />
                            >>Anti-contamination design reduces calibration frequency<br />
                            >>Li-ion battery for up to 24 hours continuous operation<br />
                            >>6.5 hours battery charge time maximises uptime<br />
                            >>Batteries field replaceable, even in explosive environments<br />
                            >>Filters and lamps replaceable in minutes<br />
                            >>Simple icon driven menu requires minimal user training<br />
                        <br />

                        Safety<br />
                            >>95 dBA, bright LED and vibration alarms alert you to gases present<br />
                            >>Intrinsically safe; meets ATEX, IECEx, UL and CSA standards<br />

                        <br />
                        Low cost<br />
                            >>Entry level VOC detector with all the essential functions<br />
                            >>Inexpensive consumables and parts for low cost operation<br />
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