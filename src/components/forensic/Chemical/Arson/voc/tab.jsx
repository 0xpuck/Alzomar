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
                    <p>The Tiger VOC detector is a revolutionary handheld gas detection instrument for the rapid, accurate detection of volatile organic compounds (VOCs) within the harshest of environments.</p>
                    <br />
                    <p>Tiger incorporates Ion Science patented photoionisation detection (PID) sensor technology with humidity resistance and anti-contamination design, proven to dramatically extend run time in the field.</p>
                    <br />
                    <p>A robust VOC detector Tiger provides a dynamic detection range of 0 to 20,000 parts per million (ppm) with a minimum sensitivity of 0.001ppm (1 ppb), offering the widest measurement range of any other VOC detector on the market.</p>
                    <br />
                    <p>This handheld VOC detector has the fastest response time on the market of just two seconds and is just as quick to clear down. The instrument can be connected directly to a PC via the USB offering extremely fast data download capabilities.</p>
                    <br />
                    <p>Tiger has been designed for the safe replacement of batteries in hazardous environments. Long-life rechargeable Li-ion batteries give up to 24 hours of use. Fast battery charging allows the instrument to be fully charged in 6.5 hours, while 8 hours of use can be achieved from 1.5 hours charge.</p>
                    <br />
                    <p>Low-cost filters and lamps can be easily changed in seconds, minimising instrument downtime. Inexpensive disposable parts mean the Tiger VOC detector has the lowest running costs on the market.</p>
                    <br />
                    <p>Tiger is a fully upgradeable VOC detector with multiple functions to choose from. A base unit can be upgraded with data logging, health and safety and ppb options, remotely, without needing to be returned to the factory.</p>
                    <br />
                    <p>Tiger offers simple, one-handed operation for easy VOC detection. Its rugged design and protective, removable rubber boot withstand the harshest environments.</p>
                    <br />
                    <p>The large, clear back-lit display allows for easy viewing in any light condition. An integrated torch is designed for directing the instrument’s probe into dimly lit areas.</p>
                    <br />
                    <p>Ready to use on start-up the Tiger VOC detector needs no complex set up procedures via a PC to perform basic functions. Its simple-to-use software features require minimal user training.</p>
                    <br />
                    <p>Tiger uses the same PID sensor technology found within all Ion Science handheld, personal and fixed VOC detectors. This ground-breaking PID technology is widely used and trusted by major gas detection manufacturers worldwide.</p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className='text-gray-500 text-lg'>
                        >>Oil & Gas<br />
                        >>Pharmaceutical<br />
                        >>Eduvation<br />
                        >>Aerospace<br />
                        >>Manufacturing<br />
                        >>Food & Beverage<br />
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-gray-500 text-lg">Best available PID technology<br />
                        >>Humidity resistant PID sensor for the most challenging environments<br />
                        >>Anti-contamination design for extended run time<br />
                        >>Detects VOCs from 0 to 20,000 pp<br />
                        >>Minimum sensitivity 0.001 ppm (1 ppb)<br />
                        >>Fast 2-second response time and quick clear down<br />
                        >>Detects over 480 VOCs and toxic compounds<br />
                        <br />

                        Minimise downtime<br />
                        >>Fast start-up with no complicated set-up<br />
                        >>Battery life up to 24 hours continual use<br />
                        >>Simple to use – minimal training required<br />
                        >>Direct USB connectivity for fast data download<br />
                        >>Easily upgradeable via Ion Science website<br />
                        <br />

                        Ease of use<br />
                        >>Intuitive software for simple use<br />
                        >>Easy to access sensor, electrode stack and lamps<br />
                        >>Large keypad and slim design allow one-handed operation<br />
                        >>Keypad backlit for low light conditions<br />
                        <br />

                        Low cost operation<br />
                        >>Inexpensive consumables and parts<br />
                        >>Five-year warranty when TIGER registered online<br />
                        <br />

                        Safety<br />
                        >>Accurate results in all environmental conditions<br />
                        >>Meets ATEX, IECEx, UL and CSA standards</p>
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