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
                    The M-Vac System enables investigators to solve more crime through better DNA collection. It expands potential evidentiary items by collecting DNA from porous and rough evidence.  It helps detectives, analysts and CSI move cases forward.
                    <br /><br />>>The M-Vac is helping solve cases when traditional methods like swabbing, taping, scraping and cutting have yielded inconclusive or weak DNA results.  It is an effective and inexpensive crime fighting tool.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Forensic – Crimescene
                        <br />>>Forensic – DNA & Biology
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>SEC
                        <br />The Support Equipment Case (SEC) supplies vacuum and pressurized solution to the M-Vac.
                        <br />An internal vacuum pump produces the powerful suction used by the M-Vac to recover forensic DNA material or microbes entrained in the sterile collection solution.
                        <br />The hinged pressure chamber pressurizes the 1 liter bags of sterile collection solution.
                        <br />The front panel allows easy control and monitoring.
                        <br />Integrated holders keep the M-Vac secured and untouched when not in use.
                        <br />HEPA filtration assures exhaust air is free of pathogens.
                        <br />Included handcart enables convenient portability.
                        <br />Available in 110 and 230 Volt models.
                        <br /><br />
                        >>SRS
                        <br />The sterile collection solution or surface rinse solution (SRS) is engineered for the peak performance of the M-Vac, the stable transport of the cellular material and for the uninhibited performance of the downstream processes.
                        <br />It is a sterile, DNA and RNA free solution designed to effectively capture surface particles.
                        <br />SRS is delivered in a durable 1 liter bag with aseptic connection port which loads easily into the SEC for dispensing to the M-Vac.
                        <br /><br />
                        >>Extension Tubing
                        <br />The extension tubing connects the M-Vac to the SEC vacuum port and to the pressurized bag of SRS.  It is a dual lumen tube.  One lumen supplies pressurized solution and the other vacuum.
                        <br />It gives the M-Vac mobility during the collection process.  It comes in different lengths to meet the needs of the customer.  Five and ten foot lengths are the most commonly used lengths, but it is also available in fifteen, twenty, forty and sixty foot lengths.
                        <br /><br />
                        >>Concentration Filter
                        <br />The concentration filter is an off-the-shelf media filter that is used to isolate the cellular material that has been collected.
                        <br />The filter is connected to the vacuum port of the SEC and the collected SRS is poured through the filter.  The cells reside on the filter and the liquid is allowed to pass through.
                        <br />The filter is polyethersulfone (PES) and processes much like a swab with most DNA extraction methods.
                        <br />It comes in two different pore sizes, 0.45 µm and 0.20 µm.
                        <br /><br />
                        >>Harness
                        <br />The M-Vac harness is a customized chest harness.  It clips the M-Vac collection chamber to the chest of the technician doing the collection and allows the technician to freely move about the evidence.
                        <br />The clip keeps the collection chamber secure and upright during the collection process.
                        <br />With the collection chamber in the clip, the technician has a hand free to manipulate the evidence during the collection process.
                        <br /><br />
                        >>Handcart
                        <br />The SEC comes with a convenient handcart that attaches directly to it.
                        <br />It allows the SEC to be moved about like a piece of luggage in an airport.  The wheels are oversized to allow for easier travel over rough terrain.
                        <br /><br />
                        >>Pre-Filter
                        <br />The Pre-Filter system (PF 040 and PF Shield) provides a way to filter out some of the excess debris that may have been collected during the sampling process.  It conditions the sample by trapping and removing the debris that is larger than 40 microns.  It is done prior to concentrating the collected sample through the concentration filter (Filter 100).  Granted, there is some risk of trapping some of the viable target cells amid the debris, but for samples where the debris may cause downstream processing problems, it is available as a sample conditioning method
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