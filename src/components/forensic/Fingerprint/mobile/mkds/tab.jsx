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
                    The PAPILON MKDS is a totally mobile and a stand-alone station which is ensured by incorporating all components in rugged and shockproof cases-containers easy to transport, by using laptop computers (notebooks) and cellular communications enabling connectivity for automated fingerprint identification searches in the AFIS. PAPILON currently offers a comprehensive line of mobile workstations. The mobile booking and express ID check workstations on the base of the PAPILON LS-4421 fingerprint scanner or PAPILON LS-1101 fingerprint and palmprint scanner (PAPILON MKDS 30 and PAPILON MKDS 45 respectively) are designed to create electronic forensic quality tenprint cards without the use of ink and to transmit them to the AFIS, and to perform inthe-field identity checks using touch fingerprints against the AFIS database in real-time mode. The use of the PAPILON LS-1101 livescan device allows also capture of palmprints, including writ-er’s palm impressions, and thereby allows to cre-ate more complete electronic tenprint cards. All components of the PAPILON MKDS 45 and PAPILON MKDS 30 are incorporated in two rug – gedized transportable case-containers rather small in size. With one of the cases that contains a notebook, a fingerprint scanner and a camera, you can quickly and accurately create high quality electronic tenprint cards and verify the identity of subjects in the field. With facilities from another, smaller, container, you can print out any information. The PAPILON mobile booking and express ID check workstations are adapted for efficient operation in any vehicle – they can be powered with car accumulators through voltage converter or with car on-board power system. If no external power source available, the equipment can operate being energized from the batteries.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Defense
                        <br />>>Finance
                        <br />>>Government
                        <br />>>Law Enforcement
                        <br />>>Hospitality and Retail
                        <br />>>Enterprise
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        Hardware and Software Configuration
                        <br /><br />
                        >>Notebook computer, mouse, recharger, ac-cumulator package, USB flash drive, DVD-RW
                        <br />>>Car voltage converter, surge protector
                        <br />>>GSM modem
                        <br />>>PAPILON LS-4421 fingerprint scanner
                        <br />>>Jet printer (A4 size)
                        <br />>>Digital camera, recharger, tripod
                        <br />>>Transportable cases-containers with mount-ing accessories inside
                        <br />>>PAPILON LIVE SCANNER software
                        <br />>>PAPILON FILTER software
                        <br />>>Linux or Windows operating system
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