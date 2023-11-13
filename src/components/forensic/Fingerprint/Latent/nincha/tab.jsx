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
                    The NINcha series is a family of real forensic climate chamber, focussing particularly on the development of fingerprints on porous surfaces after treatment with Ninhydrin, DFO or Indandione.
                    <br /><br />
                    With NINcha we offer a suitable solution for developing fingerprints on porous and semi porous materials such as paper treated with DFO, Ninhydrin or Indandione.
                    <br /><br />
                    Evidence is usually treated with Ninhydrin, DFO or Indandione by bathing or spraying. Following this actual treatment process, for an optimum result, the samples need to be developed under given temperature and humidity conditions. NINcha enables all of this, using a user friendly, multilingual touch panel control with a USB QA data logger and a novel and innovative air stream concept.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        Forensic – Fingerprint
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        <p className='text-2xl'>Key advances of the NINCha include:</p>

                        >>Pre-Programmed Treatment Cycles for Ninhydrin, DFO and Indandione ensure simple operation and consistently high quality of evidence development. Parameters and timers can be adjusted by a user to his demands. In addition a manual mode is available.
                        <br />>>Variable Shelving Concept The carriers on the inner sides of the chamber are suitable for the usage with easy to clean metal grills and hanging rods.
                        <br />>>Air Filter and  External Ventilation In order to limit cross-contamination and reduce the cleaning requirements, a special air filter system has been integrated into the cabinet to clean out chemical loaded evidence abrasion particles or dust. The filters are coded to prevent the use of Ninhydrin, DFO or Indandione filter units with the wrong process. Alternatively or additionally, the cabinet can be upgraded for external ventilation with process controlled air inflow and exhaust valves.
                        <br />>>UV-Decontamination Unit For easy elimination of DNA inside the cabinet, a short wave UV illumination unit (see picture on the back page) can be fitted. The control system automatically detects, when the unit is placed inside.
                        <br />>>Water Supply and Drainage  Integrated into the cabinet is a tank for distilled water as well as a container for accumulated condensed water. The touch panel display informs the user about a due re-fill or drainage.
                        <br />>>Easy clean design   The innovative design makes the cleaning and maintenance of the NINcha system very simpleClear visibility on the evidence at all times   The unique design prevents condensation build up on the window allowing the user to monitor the development process at all times
                        <br />>>Low cost of ownership The system is very simple and easy to maintan.  The system is built from durable stainless steel which will not rust and provide many years of operation. Annual ISO17025 calibration costs are also very low.
                        <br />>>3 sizes are available in the following dimensions:
                        <br />
                        >>NINcha S31   105 x 70 x 60 cm (desktop or on wheeled rack)
                        <br />>>NINcha M31   185 x 70 x 60 (on castors)
                        <br />>>NINcha L31    205 x 70 x 60 cm (on castors)
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