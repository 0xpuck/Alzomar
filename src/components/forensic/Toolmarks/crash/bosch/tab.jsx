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
                    What is CDR?
                    <br />CDR is an Acronym for “Crash Data Retrieval”
                    <br />CDR IS the Tool enabling the retrieval of vital data (EDR data) from a vehicle that has been involved in a crash. To retrieve crash data from today’s passenger cars, light trucks and SUVs, you need a third party tool that connects to the vehicle under examination and is able to access and retrieve the volumes of data that may be stored in that vehicle after a crash.
                    <br />CDR IS a Tool made up of hardware and software which provides the ability to “image” or retrieve EDR data that may be stored in the control modules of passenger cars, light trucks and SUVs.
                    <br />The CDR Tool hardware and software are completely external to supported production vehicles.
                    <br />The software component is a single, stand alone program designed to run in a Windows environment. The hardware part of the Tool is a collection of components including cables and adapters which, with proper training and minimal difficulty, are used to “image” data from supported vehicles.

                    <br /><br />EDR – Event Data Recorder
                    <br />An Event Data Recorder (EDR) is a function or device installed in a motor vehicle to record technical vehicle and occupant information for a very brief period of time before, during and after a crash solely for the purpose of monitoring and assessing vehicle safety system performance.
                    <br />After a module’s primary functions are complete and where appropriate thresholds are met, data may be recorded as part of the “Event Data Recorder” (EDR) functionality or capability. An “EDR” is not a stand alone device and the data may not always be recorded. In some situations, there may be nothing to “image” from a module in a vehicle.

                    <br /><br />EDRs may record:

                    <br />>>information, but only after some physical event like a crash
                    <br />>>vehicle dynamics information and system status for about 5 seconds before a crash
                    <br />>>certain driver inputs for about 5 seconds before a crash
                    <br />>>vehicle crash severity signature
                    <br />>>restraint use and deployment related information
                    <br />>>post-crash data such as the activation of an automatic collision notification (ACN) system


                    <br /><br />EDR data (crash data) is currently used by law enforcement, private accident reconstructionists, auto manufacturers, auto insurance companies, fleet management and government researchers to assist in accurately evaluating crashes involving passenger cars, light trucks and SUVs. By retrieving and reviewing the crash data stored in these vehicle, potential fault, fraud, liability, witness accounts and other evidence can be more effectively evaluated.

                    <br />The use of EDR data in civil and criminal court cases is on the rise as the data has become more accepted as a source of reliable, empirical evidence. There have been a number of trial cases in the United Stated as well as internationally involving EDRs.  Drivers have been both convicted and exonerated as a direct result of EDR evidence and thorough crash investigations.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Forensics – Toolmarks<br />
                        >>Law-Enforcement<br />
                        >>Traffic Department
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <span className="text-lg text-gray-500">
                        >>Automatic controller troubleshooting, control of battery charge provided that the charging unit is connected.
                        <br /><br />
                        >>Possibility to examine weak signals such as residual stress in surface layers of ferromagnetic and nonferromagnetic objects.
                        >>Investigation of markings on data carriers made of aluminium alloys (silumin bodies of cylinder blocks and reduction gear assemblies, manufacturer aluminium plates, duraluminium bodies)
                        <br /><br />
                        >>Restoration of fully destroyed original VINs on ferromagnetic materials
                        <br /><br />
                        >>Surface examination of nonferromagnetic materials in oder to get information and (or) to prove the fact of VIN falsification
                        <br /><br />
                        >>Detection of welded joint defects in ferromagnetic materials and aluminium alloys as well as detection of weak signals in surface layers of ferromagnetic objects, e.g. residual (internal) stresses
                        <br />Scanning time, m/s, max — 0,05
                        <br /><br />
                        Width of the scanning area, mm, max — 20
                        <br /><br />
                        Magnetic field intensity on the surface of the scanner conductor, kА/m — 30–35
                        <br /><br />
                        Nonflatness of examined surface, mm, max — 0,5
                        <br /><br />
                        Dimensions (length×width×height), mm:
                        <br />
                        >>scanners — 30×45×70
                        <br />>>controller — 160×100×30
                        <br />>>charging unit — 100×80×30
                        <br /><br />
                        Weight, kg:
                        <br /><br />
                        >>scanner:
                        <br />>>for nonferromagnetic materials (Al) — 0,16
                        <br />>>for ferromagnetic materials (Fe) — 0,21
                        <br />>>controller — 0,3
                        <br />>>charging unit — 0,15
                        <br /><br />
                        Scanner power supply voltage, V — 24
                        <br /><br />
                        Rechargeable batteries GP17R8H:
                        <br />>>time of non-stop operation, min, min — 40 (≈ 120 copies)
                        <br />>>charging time, h — 8
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