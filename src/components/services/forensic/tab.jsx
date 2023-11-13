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
                        style = {{ backgournd: "#000"}}
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
                        <p>The PALADIN ®  – a fully mobile, fully independent and fully equipped laboratory for IT-forensic investigations on wheels!</p>
                        <p>With this vehicle you will always have your acquisition hardware, analysing software and workstations on board, to find, collect, save and analyse evidence.</p>
                        <p>IT-forensic, Intrusion Detection, eDiscovery and Data Recovery can be professionally applied in difficult environments like undercover investigations or in conflict areas.</p>
                        <p>With a built-in Rack-Server, including massive storage capabilities, you have all the network based possibilities available, including Data- and Email- analysis and Password Recovery.</p>
                    </TabGroup.TabPanel>
                    <TabGroup.TabPanel
                        index={1}
                        className="pt-10 transition-all transform flex flex-col h-auto"
                        activeClassName="opacity-100 duration-500 translate-x-0"
                        inactiveClassName="absolute opacity-0 -translate-x-2"
                    >
                        <div className="text-gray-500 text-lg">
                            <p>>>Truck base from 4,5 t to 40 t possible</p>
                            <p>>>Up to twelve workplaces with workstations, screens, writeblockers, etc.</p>
                            <p>>>Rack mounted server</p>
                            <p>>>Rack mounted storage</p>
                            <p>>>Independent network with optional WIFI</p>
                            <p>>>Network- and mobile phone intrusion detection</p>
                            <p>>>Mobile phone forensics</p>
                            <p>>>CD- DVD- BluRay- robot</p>
                            <p>>>Duplex document scanner & printer</p>
                            <p>>>Meeting table with a 42″ screen</p>
                            <p>>>Internet connection via satellite or GSM/UMTS</p>
                            <p>>>Integrated current AC generator</p>
                            <p>>>Own batteries to supply the truck with power for up to 8 hours</p>
                            <br />

                            <p className="text-black font-bold">HARDWARE POSSIBILITIES:</p>
                            <p>>>AntAnalyzer</p>
                            <p>>>TreCorder</p>
                            <p>>>ForensicCube</p>
                            <p>>>NUIX PAN / MEGA / PRO Server</p>
                            <p>>>GeCo</p>
                            <p>>>SpyGetty</p>
                            <p>>>OctaGraph</p>
                            <p>>>Tableau TD2u/TD3 Kit For. Duplicator mit TDP Multipack</p>
                            <p>>>Tableau Superkit</p>
                            <p>>>CellCube / Oxycube for mobile forensics</p>
                            <p>>>Paraben Mobile Kit</p>
                            <p>>>ICE Bay – HDD Kühler</p>
                            <br />

                            <p className="text-black font-bold">SOFTWARE POSSIBILITIES:</p>
                            <p>>>EnCase</p>
                            <p>>>Nuix</p>
                            <p>>>Passware</p>
                            <p>>>Videntifier</p>
                            <p>>>Belkasoft</p>
                            <p>>>Internet Evidence Finder</p>
                            <p>>>CD/DVD Inspector</p>
                            <p>>>Elcomsoft</p>
                            <p>>>P2 Commander</p>
                            <p>>>Network E-Mail Examinier</p>
                            <p>>>And even more…</p>
                        </div>
                    </TabGroup.TabPanel>
                    <TabGroup.TabPanel
                        index={2}
                        className="pt-10 transition-all transform h-64 h-auto"
                        activeClassName="opacity-100 duration-500 translate-x-0"
                        inactiveClassName="absolute opacity-0 -translate-x-2"
                    >
                        <p className="text-lg text-gray-500">Please contact us and request for additional information.</p>
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