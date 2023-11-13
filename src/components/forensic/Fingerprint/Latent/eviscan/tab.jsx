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
                    <p>EVISCAN has been developed and approved in cooperation with German Criminal Police Offices. This sample of German engineering offers the state-of-the-art solution for forensics to examine crime scene exhibits in an easy and efficient way. It has been awarded with several eligible prizes such as a main prize in the startup competition “IKT Innovativ” and the “red dot design award 2012”. EVISCAN is a quality product certified according to DIN EN ISO 9001.</p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className='text-gray-500 text-lg'>
                        >>Forensic – Fingerprint<br />
                        >>Forensic – Biometric<br />
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-gray-500 text-lg">
                        EVISCAN yields faster results
                        <br />EVISCAN merges all the different steps commonly made in a conventional forensic laboratory into just one digital workflow. No pretreatment of any kind is necessary, hence the need of standby times is eliminated. The automated flatscan feature identifies points of interest. A high resolution manual scan helps to zoom in on the details.
                        <br />Plus, EVISCAN supports most file types for the digital output of results. Thereby, time-consuming extra steps such as photography and digitalization of the trace evidence found are no longer required.
                        <br /><br />
                        EVISCAN guarantees health in the forensic laboratory
                        <br />Most traditional methods to generate a contrast between latent prints and the substrate require numerous aids. These include respirable powders, aggressive chemicals or fumes, several of them hazardous to our health. EVISCAN instead resolves the challenges forensics face today by using sophisticated high-tech. With only some mouse clicks EVISCAN can obtain results in a purely optical scanning process. Thereby it ensures full security and control for the user.

                        <br />Contactless
                        <br />For more than 100 years, dactyloscopy is an indispensable aid in crime solving. Since the late 19th century, fingerprints are utilized as means of identification. To detect and visualize latent traces, forensic investigators typically use a range of different techniques – including many relying on adhesives, chemicals and UV excitation. While such techniques can be highly effective, they require surfaces to be physically contacted in ways that ultimately can alter them. Altering of substrates or fingerprints, in turn, can hinder the use of other forensic technologies such as touch DNA or future innovations in fingerprint analysis.

                        <br /><br />Non-contaminative and non-invasive
                        <br />EVISCAN acquires latent trace evidence with neither physical contact nor use of chemicals. The unique lab workstation combines the latest detector technology with cutting-edge software for processing digital images. Thus evidence remains available for all subsequent analyses, in its original condition and with its DNA material fully intact. And because no chemicals are involved, examinations do not endanger the health of the user.

                        <br /><br />Innovation for forensics
                        <br />With EVISCAN, therefore, forensic investigators can examine objects thoroughly and still retain all other analysis options, thereby improving their chances to achieve an identification. Further, because EVISCAN no longer requires the time-consuming sub-steps of pre-treatment, exposure time and photo documentation, it reduces total processing time from hours – or even days – to just minutes. The acquired digital trace images can be immediately transferred to fingerprint databanks (e. g. AFIS) and dactyloscopic identification.
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