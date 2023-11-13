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
                    <p>P.I.A.² is a mobile reagent system for the qualitative and quantitative analysis of drugs of abuse and pharmaceutical drugs in a variety of sample materials. P.I.A.² may be used at anytime and in anyplace.</p>
                    <br />
                    <p>PIA ² is the next generation of the PIA mobile analysis system, dedicated to the quantitative evaluation of lateral flow tests, which are also known as immunoassay or immunochromatographic band tests.</p>
                    <br />
                    <p>With PIA² it is possible to test several groups of substances simultaneously or individually. The test system operates from body fluids such as urine, saliva or blood / serum, etc., but also with substance samples .</p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        <p>>>Police Forces and National Gendarmerie</p>
                        <p>The National Police, the National Gendarmerie, the Police Prefecture, the police trainers anti-drugs.</p>
                        <br />
                        <p>>>Customs, prisons, prisons, the army</p>
                        <br />
                        <p>>>Health institutions</p>
                        <p>Public and private hospitals, detox centers, medical laboratories, occupational health centers and pharmacies.</p>
                        <br />
                        <p>>>Private companies</p>
                        <p>In sensitive sectors: chemicals, metallurgical sector, construction sector, energy sector, mining industry, to ensure safety at work.</p>
                        <br />
                        <p>>>Educational institutions</p>
                        <p>Driving schools, police schools, public and private schools and colleges, colleges and intermediate schools.</p>
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        <p>>>Quick and easy to use</p>
                        <p> This new generation Raman handheld analyzer identifies illicit narcotics, controlled drugs, explosives materials, pharmaceutical ingredients and a wide range of unknownsubstances.</p>
                        <br />
                        <p>>>Automatic measurement</p>
                        <p>The test procedure is checked and evaluated by an automatic measuring technique and the drug concentration is measured in the technically accessible measuring range, the result being accurately provided.</p>
                        <br />
                        <p>>>Saving Results</p>
                        <p>The results are saved to allow you to track, either on the device or on your computer.</p>
                        <br />
                        <p>>>Sample Types</p>
                        <p>Urine, Saliva, Substances (Surfaces)</p>
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