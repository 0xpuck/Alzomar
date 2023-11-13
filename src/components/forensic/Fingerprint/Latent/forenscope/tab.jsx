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
                    FORENSCOPE 4K PRO is a mobile revolutionary Forensic Sciences technology for latent fingerprint development.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        <img src="../../../img/forensic/fingerprint/latent/81.jpg" className="w-full" />
                        <p className='text-blue-900 font-bold'>WOODEN DOOR</p>
                        <img src="../../../img/forensic/fingerprint/latent/82.jpg" className="w-full" />
                        <p className='text-blue-900 font-bold'>TRAVEL TICKET</p>
                        <img src="../../../img/forensic/fingerprint/latent/83.jpg" className="w-full" />
                        <p className='text-blue-900 font-bold'>CHOCOLATE WRAPER</p>
                        <img src="../../../img/forensic/fingerprint/latent/84.jpg" className="w-full" />
                        <p className='text-blue-900 font-bold'>CONCRETE WALL</p>
                        <img src="../../../img/forensic/fingerprint/latent/85.jpg" className="w-full" />
                        <p className='text-blue-900 font-bold'>THERMAL PAPER</p>
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Portable Terminal
                        <br /><br />
                        >>Imaging System
                        <br />>>16.3 MP, 4K Display Feature UV (UVA-UVB-UVC) /VIS/IR
                        <br />>>Camera Spectral Range 200 – 1100nm ±20nm
                        <br />>>Camera Sensor Number of Effective Pixels: 4655×3515: 16.362.325 (pixels)
                        <br />>>Camera Live Image :1920×1080
                        <br />>>Full HD Picture Size mininum: 4640×3506: 16.267.840 (pixels), 46.5MB (48.803.574 Bayt)
                        <br />>>4640×3506 resolution BMP and RAW Picture
                        <br />>>1920×1080 Full HD MP4 and RAW Video recording
                        <br />>>30mm F3.5 UV lens (Transmission Wavelenght (180 nm-1200nm)
                        <br />>>4cm to infinity focus
                        <br />>>Aparture: f /3.5
                        <br />>>Digital Zoom Function which works with software
                        <br /><br />
                        >>Special Forensic Software
                        <br /><br />
                        >>Professional Special Light Filter
                        <br />>>Total: 22 Different Band Pass Filter Options
                        <br /><br />
                        >>Multispectral Changeable Multispectral Light Lenses Groups
                        <br />>>6 different Narrowband Led groups can be selected between 254nm ~ 1.050nm
                        <br /><br />
                        >>Hand Light (Optional)
                        <br /><br />
                        >>Battery Power Source

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