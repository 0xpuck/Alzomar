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
                    PrepGEM is formulated for general DNA extraction from buccal swabs and saliva. PrepGEM Saliva is a preparative method for DNA extraction.  The prepGEM method lyses cells and removes nucleoproteins from the DNA. Extracted DNA can be used for many types of genotyping including SNP and STR analysis as well as quantitative, multiplex and end-point PCR.ZyGEM’s prepGEM™ DNA extraction technology, based on the proprietary EA1 enzyme, can extract high quality DNA from a broad range of sample materials in less than 20 minutes.
                    <br /><br />The extracted DNA can be used directly with analytical platforms based on PCR, quantitative PCR or capillary electrophoresis. Unlike most DNA preparation methods that require multiple steps and special handling, which increase the risk of error or contamination, ZyGEM’s DNA extraction technology uses a single tube and a simple two-step temperature cycle to prepare DNA for analysis, greatly reducing sample preparation time and the risk of sample contamination.
                    <br /><br />All prepGEM™ kits are formulated and QCed for animal testing, biosecurity and R&D applications.
                    <br /><br />prepGEM™ Saliva is a single tube, enzymatic DNA extraction system specifically optimised for the extraction of DNA from buccal swabs and saliva. The kit uses sequential enzymatic treatment to lyse the cells and prepare the DNA template in conjunction with a specific wash and extraction buffer.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Forensic – DNA & Biology
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Closed–tube (protects sample integrity)
                        <br /><br />>>Hands–off (saves labor COSTs)
                        <br /><br />>>One-step (maximizes yields and so decreases repeat rate)
                        <br /><br />>>Easily automated (compatible with most low cost, off-the-shelf liquid handling robots)
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