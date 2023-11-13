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
                    <p>The Workplace Series of evidential breath alcohol testers or “breathalyzers” are high precision handheld breath alcohol analyzers. Known for reliability, ease of use and long working life, all Lifeloc EBTs come with an impressive array of standard features and DOT compliance software that is easy to learn and use. Our breath detection and monitoring devices are also the easiest to calibrate in the industry.</p>
                    <br />
                    <p>The Phoenix 6.0BT is widely regarded as the best-in-class portable alcohol analyzer on the market. Whether you are administering pre-employment, post-accident, random or DOT mandated alcohol testing, our alcohol testing devices are designed for high productivity in office or mobile environments. Lifeloc proprietary EasyMode™ compliance software effortlessly guides operators through the DOT alcohol testing protocol. Equipped with secure wireless printing (no docking station required), numerous communication options and an impressive extensive list of standard features, the Phoenix 6.0BT is the perfect choice for Third Party Administrators, Clinics or anyone conducting workplace DOT or non-DOT testing.</p>
                    <br />
                    <p>The Lifeloc Phoenix 6.0BT and EV30 evidential breath alcohol testers are DOT/NHTSA approved and included on the DOT conforming products list. Unlike many competitor models, all Lifeloc Evidential Breath Testers include a 1 year warranty on all system components (including printers, keyboards and cases). Unlike others we use a full sized one inch diameter platinum fuel cell alcohol sensor. Our sensors are alcohol specific and offer long working life under the most extreme working conditions.</p>
                    <br />
                    <p>A variety of extended service programs, factory diagnosis and repair programs are also available. Depending on the program you select Lifeloc will provide free loaner equipment so you are never without. Our routine service and maintenance programs offer 5 working day turnaround or it’s on us.</p>
                    <br />
                    <p>Unlock the Power of Alcohol Testing with Lifeloc’s Workplace Series product line, the professional’s choice for accuracy, reliability, and ease of use.</p>
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
                        <p>>>Fully Integrated Solutions</p>
                        <p className="pl-8">>><scan className="font-bold">EasyMode™ Software:</scan> Error free testing by guiding users through the DOT protocol</p>
                        <p className="pl-8">>><scan className="font-bold">Wireless Bluetooth Capability: </scan>  Perfect for mobile testing, has up to a 33’ connectivity range</p>
                        <p className="pl-8">>><scan className="font-bold">Password Protection:</scan>Locks down your unit so no one can change or edit the menu settings</p>
                        <p className="pl-8">>><scan className="font-bold">Calibration Reminders and Lockout Features: </scan> Set calibration reminders by tests or time with the ability to warn or lock users out after expiration</p>
                        <p className="pl-8">>><scan className="font-bold">Computer Interface: </scan> Print, Sort, Analyze, Export and Archive your testing data via your PC</p>
                        <br />
                        <p>>>Precision Instruments</p>
                        <p className="pl-8">>><scan className="font-bold">1″ Diameter Platinum Fuel Cell: </scan> Alcohol specific for exceptional life and accuracy. Lifetime fuel cell warranty*</p>
                        <p className="pl-8">>><scan className="font-bold">Automatic Deep Lung Sampling: </scan>The unit triggers the test after detecting a full deep lung sample has been given</p>
                        <p className="pl-8">>><scan className="font-bold">Rapid & Repeatable Test Taking: </scan> Take an unlimited amount of tests in quick succession</p>
                        <br />
                        <p>>>Ease of Use</p>
                        <p className="pl-8">>><scan className="font-bold">Fully Automated Operation:</scan> Automatic sampling and test taking</p>
                        <p className="pl-8">>><scan className="font-bold">Simple Electronic Calibration: </scan> Quick and Easy, our units have the fastest calibration in the industry</p>
                        <p className="pl-8">>><scan className="font-bold">Menu Selectable Features: </scan>Change your test mode, time, date, calibration settings, print settings and more</p>
                        <p className="pl-8">>><scan className="font-bold">Easy to Understand Prompts: </scan>Walks you through test taking via full text prompts and alerts</p>
                        <p className="pl-8">>><scan className="font-bold">Sturdy & Rugged Design: </scan>Strong casing fits easily into your hand and pocket</p>
                        <p className="pl-8">>><scan className="font-bold">Exceptional Battery Life: </scan>Up to 70 on hours</p>
                        <br />
                        <p>>>Five Star Customer Care</p>
                        <p className="pl-8">>><scan className="font-bold">Deluxe 1 Year Warranty:</scan> Comprehensive coverage with free rentals while your unit is being repaired</p>
                        <p className="pl-8">>><scan className="font-bold">Live, Onsite Technical Support: </scan>Get help immediately by calling our direct tech support line</p>
                        <p className="pl-8">>><scan className="font-bold">Fast Repair Turnaround: </scan>Repairs are complete within 5 days or less or they’re free</p>
                        <p className="pl-8">>><scan className="font-bold">Comprehensive Service Packages: </scan>Full range of extended warranties, factory diagnostics and recertification’s available</p>
                        <p className="pl-8">>><scan className="font-bold">Affordable Product, Solutions and Supplies: </scan>We provide exceptional value for every testing level</p>
                        <p className="pl-8">>><scan className="font-bold">Full Training, Certification and Professional Consultation: </scan> National network of trainers and consultants</p>
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