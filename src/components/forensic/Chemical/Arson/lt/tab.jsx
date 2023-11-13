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
                    <p className="text-gray-500 text-lg">
                        The system boasts megapixel and 30fps HDSDI digital readout, and 35mm HD Quartz lens with 20 bandpass filters and HD SSD recording.There are standard mode, enhancing mode, and nega mode for UV image capturing. These images are directely processed by DSP inside the camera.
                        <br /><br />
                        ST-35UV a new  35mm 1:3.0 Apo Macro high performance UV-VIS-IR lens for forensics, science, and fine art in CS or C Mount, covers a wavelength range of 200-1100nm.
                        <br /><br />
                        This lens sports an advanced floating element design for excellent close-up reproduction up to 1:1.5 magnification and consists of 8 lens elements. The chroatic error in the
                        200-1100nm range is virtually zero. The design covers a one inch  format which would make it suitable for most of the UV capable cameras in the market.
                        <br />1. Forensic: fingerprint imaging, documents checking
                        <br />2. UV microscopy, UV laser beam diagnostics
                        <br />3. Semiconductor: wafer inspection and mask alignment
                        <br />4. Electronics: solder inspection, PCB inspection
                        <br />5. Medical and law enforcement imaging
                        <br />6. Factory Automation: leak detection, surface inspection

                        <br />
                        <br />
                        Chromatically corrected from 200nm to 1100nm 90% transmission from 200nm to 1100nm Macro capablity
                        <br />
                        Lens for Multispectral imaging 200-1100nm apochromatic correction floating optics made of glass/quartz/fluorite magnification from 1:1.5  to 1:3 long life all-metal construction
                        Slide type filters Standard 20 band pass filters provided
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        <p>
                            >>Forensic – Fingerprint<br />
                            >>Forensic – Biometric
                        </p>
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>No focus shift from UV through IR<br />
                        >>Metal construction ensures long life<br />
                        >>Filters could be changed easily by the filter slide<br />
                        >>More than 20 kinds of band pass filters equipped
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