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
                    Regula 7517 is designed as a compact complex for desktop use. The workstation consists of a magneto-optical device Regula 7517A, an eddy-current magnetographing device Regula 7517B and magnetizing equipment Regula 7517C.
                    <br /><br />Regula 7517 is optionally supplied with a portable PC for collecting, storing, processing, transferring and displaying information; peripherals Regula 7516.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Forensics – Firearms & Toolmarks
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <span className="text-lg text-gray-500">
                        >>Restoration of fully destroyed original firearms and ammunition identification numbers on ferromagnetic materials
                        <br /><br />>>Surface examination of nonferromagnetic materials in order to get information and/or to prove the fact of original identification number falsification
                        <br /><br />>>Detection of welded joint defects in ferromagnetic materials and aluminium alloys
                        <br /><br />>>Magneto-optical device Regula 7517A
                        <br />>>USB DEVICE FOR MAGNETO-OPTICAL VISUALIZATION
                        <br />>>Examined object material — ferromagnetic
                        <br />>>Magnetic tape width, mm — 25.4 and 12.6
                        <br />>>Image file format — .BMP, .GIF, .JPG, .PCX
                        <br />>>Dimensions (length×width×height), mm — 240×110×110
                        <br />>>Weight, kg, max — 3.2
                        <br />>>Connection interface — USB port
                        <br />>>Power consumption, W — 2.5
                        <br />>>MAGNETIC COPYING ACCESSORIES SET
                        <br />>>Magnetic tape length, mm — 250
                        <br />>>Dimensions (length×width×height), mm — 120×80×40
                        <br />>>Weight, kg, max — 0.4
                        <br /><br />
                        >>Eddy-current magnetographing device Regula 7517B
                        <br />>>Scanning time, m/s, max — 0.05
                        <br />>>Width of the scanning area, mm, max — 20
                        <br />>>Magnetic field intensity on the surface of the scanner conductor, kА/m — 30–35
                        <br />>>Nonflatness of examined surface, mm, max — 0.5
                        <br />>>Dimensions (length×width×height), mm:
                        <br />>>scanners — 30×45×70
                        <br />>>controller — 160×100×30
                        <br />>>charging unit — 100×80×30
                        <br />>>Weight, kg:
                        <br />>>scanner:
                        <br />>>for nonferromagnetic materials (Al) — 0.16
                        <br />>>for ferromagnetic materials (Fe) — 0.21
                        <br />>>Controller — 0.3
                        <br />>>Charging unit — 0.15
                        <br />>>Scanner power supply voltage, V — 24
                        <br />>>Rechargeable batteries GP17R8H:
                        <br />>>Time of non-stop operation, min, min — 40 (≈ 120 copies)
                        <br />>>Charging time, h — 8
                        <br /><br />
                        >>Magnetizing equipment Regula 7517C
                        <br />>>Type of permanent magnets — Fe-Nd-B alloy
                        <br />>>Pole distance, mm:
                        <br />>>magnetizing desk — 0–330
                        <br />>>magnetizing bracket — 0–270
                        <br />>>magnetizing plank — 20–40
                        <br />>>Pull out force (when the pole distance is maximum), N:
                        <br />>>magnetizing desk — 120
                        <br />>>magnetizing bracket — 40
                        <br />>>magnetizing plank — 60
                        <br />>>Magnetic field strength in the middle of a 40 mm air gap (tangential component), А/cm:
                        <br />>>magnetizing desk — 200
                        <br />>>magnetizing bracket — 180
                        <br />>>magnetizing plank — 190
                        <br />>>Dimensions (length×width×height), mm:
                        <br />>>in a plastic case — 460×370×180
                        <br />>>in the operating mode — 380×200×120
                        <br />>>Weight, kg
                        <br />>>in a plastic case — 7,8
                        <br />>>in the operating mode — 4,5
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