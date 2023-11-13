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
                    DNAOps™ is the brainchild of Rocky Edwards, a globally recognized and renowned forensics examiner, and was perfected as a tool track criminals through recovered DNA.It gathers all the experience and knowledge necessary to fight and track criminals through DNA left at crime scenes.It is a flexible and very affordable alternative for any law enforcement agency wanting to use cutting edge and cloud based technology to efficiently and effectively target criminals through rapid DNA.
                    <br /><br />>>DNAOps™ is a cloud based and ultra-secure “on demand” web application using  resilient and proprietary grid storage technology.
                    <br /><br />>>DNAOps™ has an extensive API allowing for full access to the secure cloud
                    <br /><br />>>and third party application development including a secure chat.
                    <br /><br />>>DNAOps™ lets you input data on cases with ease and readily visualize the relationships between them in terms of time, proximity, and evidence characteristics.
                    <br /><br />>>DNAOps™ uses a highly intuitive and interactive GUI that makes it easy to learn and seamlessly incorporate into the daily routines of investigators and analysts.
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
                        >>Works on Mac or Windows
                        <bvr /><bvr />>>Compatible with Safari, Firefox, Chrome, IE
                        <bvr /><bvr />>>Front end HTML5 renders responsibly
                        <bvr /><bvr />>>Accessible from any device
                        <bvr /><bvr />>>Roles and Permission based access
                        <bvr /><bvr />>>Multi Tenant SaaS Application
                        <bvr /><bvr />>>No severs to buy, no VMs to set up
                        <bvr /><bvr />>>Use DNAOps™ tactically to identify and stop violent armed criminals before they have a chance to do more harm.
                        <bvr /><bvr />>>Use DNAOps strategically to prevent crime by mapping out hot spots and using advanced analytics to predict where the next rise in violence and criminality can happen.
                        <bvr /><bvr />>>FIGHT CRIME MORE EFFICIENTLY
                        <bvr /><bvr />>>Use the DNAOps™ visualization and association capabilities to deploy the resources of your department wisely where and when they are needed.
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