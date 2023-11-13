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
                    <p className="text-lg text-gray-500">
                        APFIS; a fully domestic system that enables governments and law enforcements to fulfil the biometric identity and criminal justice management phases by acquiring, searching, matching, editing and storing biometric credentials.
                        <br /><br />Throughout the years, fingerprint identification technology has evolved in many ways. The technologies may emerge day to day, but there are things that have never changed or will ever seem to change, such as need for accurate, user friendly and reliable database.
                        <br /><br />Papilon APFIS is a fully scalable, extendable, customizable and reliable software pack that we continually apply latest proven technology while sustaining the core necessities within the system. In this context, it is an unprecedented platform where theoretical mathematics has been successfully implementing onto application.
                        <br />APFIS demonstrates its superiority through two points:
                        <br />Accuracy rates – 99.5%
                        <br />Ability to interoperate with external systems, wireless devices and by live scan technology.
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Forensic – Fingerprint
                        <br />>>Forensic – Biometric
                        <br />>>Homeland Security
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        Latent Print – Latent Print Match
                        <br />APFIS is a platform where latent print – latent print match is possible as well as latent print – ten print match. This makes APFIS revolutionary and to prosper solving long awaited cases.
                        <br /><br />
                        Maintaining Public Confidence in the Judicial System
                        <br />Unfortunately, it is no secret that cases gone wrong for operational reasons, because of the fact that latent prints often tend to get mixed and jumbled. This causes mismatchings in the identification systems. In other words, these incorrect matches could done by users which cause misjudgements in courts and cause going into a road of no return. Incorrect matches destroy people’s lives and stain justice credibility, therefore it must be minimized as much as possible, if not overcame forever.
                        <br /><br />
                        Speed is what matters
                        <br />Papilon APFIS operates with the system of listing, not queue as opposed to others. Listing technology constitutes a great foundation for response time speed.
                        <br />
                        Containing millions of biometric data in it, Papilon APFIS’ response time concludes within seconds, which demands an extremely high capacity distinguishing algorithms to provide required speed. As might be expected, speed is one of the biggest reason that APFIS is being preferred as it created a crucial competitive advantage in large-scale deployments.
                        <br /><br />
                        Large-Scale Deployments
                        <br />Papilon APFIS is a platform where grand deployment procured with distributed system architecture. It’s a first in the world – having that amount of biometric data (80 million) in one platform, executed from thousands of workstations yet constantly improving the quality of prints.
                        <br /><br />
                        APFIS x Turkey in Numbers
                        <br />Since 2012, APFIS has been the national system for palmprint and fingerprint credentials for Republic of Turkey. Holding more than 34 million fingerprint records from both civilians and criminals, operating in 81 cities and over 1000 workstations all over Turkey.
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