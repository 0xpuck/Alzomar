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
                    Regula 7515 is a compact device which consists of a controller constructed in metal body and two scanners used for non-destructive examination of the structure of electro-conductive nonferromagnetic and ferromagnetic materials.
                    <br /><br />
                    The device is used together with Regula 7505М, expanding functionality of the latter.
                    <br /><br />
                    Operation:
                    <br /><br />
                    >>After being demagnetized, magnetic tape is placed on the examined surface and fixed.
                    <br />>>One of the scanners chosen according to the type of material examined moves along the examined surface.
                    <br />>>The controller forms voltage pulses with preset parameters and feeds them to the scanner.
                    <br />>>Pulse current flowing in the scanner conductor forms an alternating magnetic field around it which induces eddy currents in electroconductive material of the examined object.
                    <br />>>The eddy currents trajectories and the corresponding magnetic stray fields display the lines of electric resistance caused by the form, size and location of defects on the examined object.
                    <br />>>Obtained magnetograms of magnetic stray fields are visualized by Regula 7505М for further processing and expert analysis.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Forensics – Toolmarks
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <span className="text-lg text-gray-500">
                        >>Automatic controller troubleshooting, control of battery charge provided that the charging unit is connected.
                        <br /><br />
                        >>Possibility to examine weak signals such as residual stress in surface layers of ferromagnetic and nonferromagnetic objects.
                        >>Investigation of markings on data carriers made of aluminium alloys (silumin bodies of cylinder blocks and reduction gear assemblies, manufacturer aluminium plates, duraluminium bodies)
                        <br /><br />
                        >>Restoration of fully destroyed original VINs on ferromagnetic materials
                        <br /><br />
                        >>Surface examination of nonferromagnetic materials in oder to get information and (or) to prove the fact of VIN falsification
                        <br /><br />
                        >>Detection of welded joint defects in ferromagnetic materials and aluminium alloys as well as detection of weak signals in surface layers of ferromagnetic objects, e.g. residual (internal) stresses
                        <br />Scanning time, m/s, max — 0,05
                        <br /><br />
                        Width of the scanning area, mm, max — 20
                        <br /><br />
                        Magnetic field intensity on the surface of the scanner conductor, kА/m — 30–35
                        <br /><br />
                        Nonflatness of examined surface, mm, max — 0,5
                        <br /><br />
                        Dimensions (length×width×height), mm:
                        <br />
                        >>scanners — 30×45×70
                        <br />>>controller — 160×100×30
                        <br />>>charging unit — 100×80×30
                        <br /><br />
                        Weight, kg:
                        <br /><br />
                        >>scanner:
                        <br />>>for nonferromagnetic materials (Al) — 0,16
                        <br />>>for ferromagnetic materials (Fe) — 0,21
                        <br />>>controller — 0,3
                        <br />>>charging unit — 0,15
                        <br /><br />
                        Scanner power supply voltage, V — 24
                        <br /><br />
                        Rechargeable batteries GP17R8H:
                        <br />>>time of non-stop operation, min, min — 40 (≈ 120 copies)
                        <br />>>charging time, h — 8
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