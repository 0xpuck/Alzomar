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
                    Bloodstain patterns found at a crime scene can yield valuable information about the circumstances and progression of a crime.
                    <br /><br />
                    Chemical reagents that create luminescence in contact with the hemoglobin within blood are in use globally. The luminescence reaction might though be weak and cannot be repeated as often as wanted or needed.
                    <br /><br />
                    SCENEview BV800, Attestor Forensics’ latest development is the perfect tool for the search and documentation of blood spatter patterns at a crime scene and in the laboratory.
                    <br /><br />
                    With an integrated ambient light amplifier it allows optimum search results even when the crime scene cannot be darkened perfectly. Due to the light amplification luminescence effects can already be seen with a minimum amount of chemical being sprayed across the search area. Therefore the possibility to repeat and reproduce the effects for a subsequent documentation is higher.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Viewing and recording of bloodstain & gunshot residue<br /><br />
                        >>Search and documentation of blood spatter patterns at a crime scene.
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        High-Grade Residual Light Amplifier<br /><br />
                        >>Light amplification up to x 70.000<br /><br />
                        >>Signal/noise ratio 28 dB<br /><br />
                        >>Photo tube typical life time up to 15.000 hours<br /><br />
                        >>Image interface with 1.3 MPix resolution<br /><br />
                        >>Optical screw-on filter for enhancement of the Luminol contrast, 37mm<br /><br />
                        >>Switchable red orientation light<br /><br />
                        Image processing<br /><br />
                        >>Integrated WIN7 compatible Embedded PC with connectivity to external monitor, mouse, keyboard or pen drive storage (all USB)<br /><br />
                        >>Integrated 6,5” colour display<br /><br />
                        >>Integrated snapshot and video recording function<br /><br />
                        Accessories included in this kit<br /><br />
                        >>1x solid, dust and water proof transport carry case (430 x 525 x 210mm) with foam cut inlay<br /><br />
                        >>2x 18V/2 Ah Lithium-Ion batteries (operating time with a fully battery > 60 min.)<br /><br />
                        >>1x battery adapter with coiled cord (expandable from 300 mm to 1200 mm)<br /><br />
                        IR-Sensitive Colour Camera<br /><br />
                        >>5 MPix resolution<br /><br />
                        >>Optical screw-on filter for enhancement of the IR absorption contrast, 37mm<br /><br />
                        >>Auto focus with manual override<br /><br />
                        >>Integrated 850nm IR illumination, 2.25 W luminous power<br /><br />
                        >>1x battery pouch with shoulder strap<br /><br />
                        >>1x battery charger for use with 230V/50Hz<br /><br />
                        >>1x padded SCENEview carrying holster<br /><br />
                        >>1x user manual
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