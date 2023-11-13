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
                    Screening inbound mail against postal IEDs and other personal harm devices such as razor blades that can be easily delivered through the postal system is standard practice in organisations committed to protecting their people and their property. Some organisations may also find that mailroom security measures are becoming part of their standard insurance requirements.
                    <br /><br />Scanmail 10k is the world’s most popular compact desk-top electronic mailscreener for security checking letters and small packages for the presence of harmful devices. It is mobile and can work off battery meaning you can transport it to wherever suspicious mail needs to be checked – ie to an office on a different floor, another office or to a hotel or residence where a VIP may need protection whilst travelling.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Auto detection of suspect packages
                        <br />Scanmail is not operator dependent like an x-ray machine so it will automatically find highly explosive letterbombs/postal IEDS. It does not rely on finding explosive material and instead looks for the individual bomb making components such as  detonators, batteries and circuitry. It will also find other common mail delivered hazards such as razor blade letters and cutting devices whilst reliably ignoring office clutter such as paperclips and staples.
                        <br /><br />>>Trusted worldwide
                        <br />Over 10,000 Scanmail units are used to protect staff in Government, Embassy, UN, Police and Military locations as well as in Corporate Mailrooms.
                        <br />Scanmail 10K is used throughout the world in high security locations as well as in private residences, for Lawyers, Celebrities, MPs and for Royalty Protection. Scanmail 10K was also the machine that saved the life of one of the Unabomber’s intended victims by successfully intercepting one of his postal devices.
                        <br /><br />>>High Discrimination and Reliability
                        <br />Unlike other cheap metal detector imitations, Scanmail is not simply a metal detector, it is an intelligent device with advanced discrimination that allows you to reliably find a small battery while discriminating against paperclips and staples.
                        <br />No other unit in the world can reliably do this and Scanmail has a 20 year pedigree and has proven itself time and time again by finding real live postal bombs that would have injured and maimed their targets had they not been intercepted. At the same time, unlike other mailscreening devices, has been scientifically proven that it gives off no damaging RF that could accidentally trigger a postal device
                        <br />Scanmail 10K can be used alone or alongside an x-ray machine as the first line of defence against postal bombs.
                        <br /><br />>>Standard System Configuration
                        <br />>>Demo Kit
                        <br />>>Scanmail 10K mailscreener / letter bomb detector
                        <br />>>Test Card
                        <br />>>Mains Lead
                        <br />>>Operating Manual
                        <br />>>12 month back to base exchange warranty
                        <br />>>Power and Battery
                        <br />Power Supply: 100V +/- 15% and 220V +/- 15% single phase 50/60 hz – (state voltage when ordering)
                        <br />Stand by: 12 V DC nominal.
                        <br />Battery : High Duty Cycle, Sealed, Maintenance free, lead acid type. Fused at 2.0 amp
                        <br />Battery operation: 4 + hours
                        <br />Recharge Time: 8 hours
                        <br /><br />>>Detection Targets
                        <br />Test Card: The TEST CARD supplied with each unit shall be reliably detected at throughput rates both higher and lower than normally deployed in the mailscreening operation.
                        <br />Non-target: Specimen non-target supplied with unit shall not be detected under normal mailscreening conditions. Use of sensitivity plus function will reduce discrimination such that non-target may cause alarm Rate of not greater than 3/10
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <span className="text-lg text-gray-500">
                        >>Defence / Military Police and First Responders
                        <br /><br />>>Facilities Protection
                        <br /><br />>>Postrooms
                        <br /><br />>>Border Security
                        <br /><br />>>Transport Security
                        <br /><br />>>Prisons
                        <br /><br />>>Events and Venues
                    </span>
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