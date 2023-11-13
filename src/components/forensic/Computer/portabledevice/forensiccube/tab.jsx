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
                    The Forensic Cube ® is a portable System to save two suspected data mediums simultaneously. The  Forensic Cube ®  provides the same rate of transmission per disc while imaging like all other mh systems evidence-saving solutions:
                    <br /><br />As fast as the suspected media is providing the data, it captures the data and creates the forensic image!
                    <br /><br />All features for saving digital evidence are already included in the Forensic Cube ®. The only thing needed to be done to create forensic images is to plug the device and connect the suspected media device.
                    <br /><br />The Forensic Cube® is equipped with up to 8 TB hot-swappable HDDs but can be extended with external storages.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        Barebone: 282 x 275 x 420 mm
                        <br />8” inch Touchscreen
                        <br />USB 3 und SATA 6 GB connection on the right
                        <br />Processor: Intel i7 newest generation
                        <br />RAM: 16 GB (up to 32 GB)
                        <br />System: 256 GB SSD
                        <br />Destination Storage: 2x 1TB – 4x 2 TB (2,5”) Hot-Swap in Backplane as JBOD or RAID
                        <br />Weight:  22 lbs.
                        <br /><br />
                        TRANSPORT:
                        <br />Hard Transportation Case (Trolley) for machine & equipment
                        <br /><br />
                        FORENSIC:
                        <br />2 x T35689iu Forensic SATA/IDE/SAS/USB/FireWire Combo Bridge
                        <br />ICE Bay external cooler for suspect’s drives
                        <br />External Forensic Media Card Reader
                        <br /><br />
                        Keyboard, mouse and all cables and adapters included.
                        <br />
                        SOFTWARE:
                        <br />Windows 64 bit (8.1 / 10), Linux 64 bit optional
                        <br /><br />
                        FORENSIC IMAGING TOOLS:
                        <br />AccessData FTK-Imager , Tableau Imager “TIM”(Windows), EnCase Imager
                        <br />
                        Guymager (Linux)
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Information Security
                        <br />>>Digital Investigation
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