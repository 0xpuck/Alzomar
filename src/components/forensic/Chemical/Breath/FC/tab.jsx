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
                    <p>The FC Series of portable breath alcohol testers or “breathalyzers” are the professional’s choice for accuracy, reliability, and ease of use. Engineered and manufactured in the United States for Law Enforcement, Military, Probation, Parole, Schools and related applications, the FC Series of platinum fuel cell testers offer long working life, unsurpassed test accuracy and the fastest response time in the industry.</p>
                    <br />
                    <p>The five models of the FC Series cover the full spectrum of mobile alcohol testing. The FC5 passive alcohol screener rapidly and reliably detects the presence of alcohol in test subjects, ambient air and open drink containers without the need for mouthpieces or special attachments.</p>
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
                        <p>>>Product Innovation</p>
                        <p className="pl-8">>><scan className="font-bold">Comprehensive Feature Set:</scan> Everything from alcohol screening to evidential testing.</p>
                        <p className="pl-8">>><scan className="font-bold">Customizable Software: </scan> Customizable test protocols, language options, additional memory, air blanks and user defined units of measure.</p>
                        <p className="pl-8">>><scan className="font-bold">Password Protection & Lockout Features:</scan> Secure and control your settings and test results.</p>
                        <p className="pl-8">>><scan className="font-bold">Computer Interface: </scan> Print, export, sort, analyze, and archive test data.</p>
                        <br />
                        <p>>>Precision Instruments</p>
                        <p className="pl-8">>><scan className="font-bold">1″ Diameter Platinum Fuel Cell: </scan> Alcohol specific for exceptional life and accuracy.</p>
                        <p className="pl-8">>><scan className="font-bold">Superior Pump Sampling System:  </scan> Provides for passive testing without special attachments.</p>
                        <p className="pl-8">>><scan className="font-bold">Rapid & Repeatable Test Taking: </scan> Quickly and easily test one or many.</p>
                        <p className="pl-8">>><scan className="font-bold">Fastest Response Times: </scan> Less than 10 second response time</p>
                        <p className="pl-8">>><scan className="font-bold">Widest Operating Temperature: </scan> 32° – 130° F (0° – 55° C)</p>
                        <br />
                        <p>>>Ease of Use</p>
                        <p className="pl-8">>><scan className="font-bold">Fully Automated Operation:</scan> Automatic sampling and test taking</p>
                        <p className="pl-8">>><scan className="font-bold">Menu Selectable Features:  </scan> Easily change your test mode, time, date, calibration settings, print settings and more.</p>
                        <p className="pl-8">>><scan className="font-bold">Easy to Understand Prompts: </scan> Steps you through test taking via icons, full text prompts and alerts. No error codes to remember.</p>
                        <p className="pl-8">>><scan className="font-bold">Rugged & User Friendly Design: </scan> Comfortable to use. Fits easily into jacket, pocket and purse. Silicone grips add extra protection from falls and bumps.</p>
                        <br />
                        <p>>>Five Star Customer Care</p>
                        <p className="pl-8">>><scan className="font-bold">1 Year Warranty:</scan> Full parts and labor warranty on all system components (Tester, printers, etc.). Extended service packages available.</p>
                        <p className="pl-8">>><scan className="font-bold">Free Factory Technical Support:</scan> Available to all customers at no charge.</p>
                        <p className="pl-8">>><scan className="font-bold">Fast Repair Turnaround: </scan> Complete within 5 working days or less or it’s free.</p>
                        <p className="pl-8">>><scan className="font-bold">Comprehensive Service Packages:</scan> Full range of extended warranties, factory diagnostics and recertification’s available</p>
                        <p className="pl-8">>><scan className="font-bold">Made in USA: </scan>Manufactured at our factory in Wheat Ridge, CO</p>
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