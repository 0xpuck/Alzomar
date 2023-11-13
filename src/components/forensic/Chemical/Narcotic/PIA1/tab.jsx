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
                    <p className="font-bold">P.I.A.1</p><br />
                    <p>P.I.A.1 is the first mobile device for qualitative and semi-quantitative drug analysis. The system is able to quickly detect one or more drugs or compounds. With the P.I.A.1 analyzer, the accuracy and reliability of a drug analysis laboratory is available anytime, anyplace. Drugs, stimulants, depressants, hallucinogens and analgesics are easily identified using opto-electronic measurement.</p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        <p>P.I.A. 1 – Semi-quantitative or qualitative analysis</p>
                        <br />
                        <p className="font-bold">For Firefighters</p>
                        <p>Screening, the safest prevention tool for firefighters.</p>
                        <p>Firefighters are responsible for the lives of our loved ones, their colleagues and themselves. It is important that they are healthy and free of any negative psychological influence. Systematic screening is the most effective way of identifying a drug abuse problem.</p>
                        <br />
                        <p className="font-bold">For the Police</p>
                        <p>The perfect tools for Roadside Testing</p>
                        <br />
                        <p className="font-bold">For Prisons</p>
                        <p>Given the prevalence of drug use in prisons, it is not surprising that governments see drug testing as an essential element in combating drug use and abuse in correctional facilities.</p>
                        <br />
                        <p className="font-bold">For Customs</p>
                        <p>With the legalization of cannabis in several countries around the world, drug testing for passengers and goods at the border has, more than ever, become a necessity.</p>
                        <br />
                        <p className="font-bold">For Private companies</p>
                        <p>The equivalent of 10,000 to 13,000 working days are lost each day due to absenteeism caused by addiction. Only 30% of the companies take action to meet this challenge.</p>
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        <p className="font-bold">One test, several substances</p>
                        <p>P.I.A.1 analyzes up to six different drugs at a time in a single test. P.I.A.1 works with both conventional tests (plastic cassettes) and with our new GreenCheck range of ecological tests.</p>
                        <br />
                        <p className="font-bold">Several types of samples</p>
                        <p>P.I.A.1 is able to identify the presence of drugs in urine, saliva, sweat or other body fluids.</p>
                        <br />
                        <p className="font-bold">Easy to use</p>
                        <p>A single test for several substances provides clear and definitive results without any subjective interpretation by the user.</p>
                        <br />
                        <p className="font-bold">Quantitative analysis</p>
                        <p>P.I.A.1 provides a quantitative result, which means that we can detect if a result is more or less positive, from personalized interpretation limits.</p>
                        <br />
                        <p className="font-bold">Automatic data storage</p>
                        <p>P.I.A.1 offers storage space for up to 10000 data sheets.</p>
                        <br />
                        <p className="font-bold">Technical data</p>
                        <p>>>Battery life up to 8 hours; rechargeable with USB charger</p>
                        <p>>>Built-in LCD touch screen</p>
                        <p>>>Small size and light weight – same size as a conventional alcohol testing device</p>
                        <p>>>Incubation time 5 min ; measurement time 20 sec</p>
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
                    <p className="text-lg text-gray-500 font-bold">P.I.A.1</p>
                    <br />
                    <p className="text-lg text-gray-500">P.I.A.1 is the first mobile device for qualitative and semi-quantitative drug analysis. The system is able to quickly detect one or more drugs or compounds. With the P.I.A.1 analyzer, the accuracy and reliability of a drug analysis laboratory is available anytime, anyplace. Drugs, stimulants, depressants, hallucinogens and analgesics are easily identified using opto-electronic measurement.</p>
                </TabGroup.TabPanel>
            </TabGroup>
        </div>
    )
}