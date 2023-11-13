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
                    <p className="text-lg text-gray-500">
                        The BrightBeam ULTRA is a “field ready”, high power, single color or dual color forensic laser system. Designed specifically for crime scene situations and equipped with 7 to 8 Watt lasers, the ULTRA’s lightweight design combines a high level of functionality with extreme portability.
                        <br /><br />The ergonomically designed package powered by long lived LI-Ion battery technology, provides the forensic professional with hours of use on a single charge. And if that is not enough, the “external-interchangeable” battery design allows for extended use limited only by the availability of charged batteries.
                        <br /><br />Although the ULTRA is small and compact it offers many of the same features available on the higher level lab grade instruments, including; smart hand piece/umbilical with dynamic zoom and power control, “fan smart” technology and an easy to read LCD display.
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Forensic – CrimeScene
                        <br />>>Forensic – Fingerprint
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        For ultimate performance and versatility, the ULTRA Laser series has a complete offering of colors and power. The ULTRA can be either Blue or Green and the ULTRA DUAL has both colors in one compact portable unit. TheseForensic laser systems deliver highest quality laser power.
                        <br /><br />Kit includes: ULTRA Laser system, Rugged carry case, two SMART Li-Ion batteries, battery charger, one auxiliary DC power supply input, Laser goggles.
                        <br /><br />>>ULTRA portable light weight and smallest rugged compact size on the market
                        <br /><br />>>Quick switch out Battery packs for complete freedom from cables and extended runtimes
                        <br /><br />>>Illuminate Latent prints using the complete array of chemicals RAY, RAM, MBD, DFO, Rhodamine 6G, Basic Yellow and many more.
                        <br /><br />>>Illuminate Body fluids that naturally fluoresce under high power blue laser illumination
                        <br /><br />>>Specialized zoom optics for versatile spot size adjustment and speckle free field illumination for superior photographic evidence collection.
                        <br /><br />>>Rugged designs offer system reliability in the field or heavy through put laboratories (Can operate inside supplied rugged carry case).
                        <br /><br />>>Integrates the highest reliability and longest Lifetime Lasers available in the world.
                    </p>
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