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
                    Why is NuCAST180 a better solution?
                    Frontline Forensics have developed a quick-setting, footwear casting kit that enables a fast, easy and accurate footwear casting process for the forensic professionals.
                    <br /><br />
                    >>Waiting 25 minutes plus for a cast to set
                    <br />>>Measuring components and having inaccurate mixture
                    <br />>>Relying on user experience and perfected technique
                    <br />>>Lumpy mixtures and casts
                    <br />>>Cutting bags and inaccurate inconsistent pouring
                    <br />>>Waiting around in the cold and rain for casts to set
                    <br />>>Mess and fuss
                    <br />>>Wasted police force resources and money
                    <br /><br />

                    >>Pre-measured components for an accurate effective mixture every time
                    <br />>>Packaged in a disposable, recyclable container. A neat, clean process. No mess, No fuss.
                    <br />>>The container offers a quick mixing solution with lump free results in 35 seconds
                    <br />>>Easy, controlled pouring for accurate distribution across the whole print
                    <br />>>Ready to lift casts in 3 to 4 minutes (setting times may be longer in significantly colder climates)
                    <br />>>With a higher strength NuCAST180 casts are less likely to break than original materials and processes
                    <br />>>Excellent for both volume and serious crime where quick evidence collection is needed
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Forensics – Firearms
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <span className="text-lg text-gray-500">
                        >>Pack Quantity: 1 Kit<br /><br />
                        >>Powder Quantity: 800g<br /><br />
                        >>Mixing Time: 35 seconds. Shaking times are based on an ambient temperature of 21˚c. Please be aware at higher temperatures a shorter shaking time is recommended. At lower temperatures a longer shaking time is recommended.
                        <br /><br />>>Curing Time: 5 minutes (based on an ambient temperature of 21˚c.)
                        <br /><br />>>Compression Strength: 1 hour: 3770 PSI; 48 hours: 8557 PSI (approx.)
                        <br /><br />>>Expansion: 2 hours: 0.02% 48 hours: 0.06%
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