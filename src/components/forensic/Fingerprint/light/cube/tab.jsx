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
                        Forensic light sources are expensive due to the combination of high technical demands and the comparably low scale of production. For search and photography of evidence at the crime scene and in the laboratory, the same range of wavelengths (light colours) may be in use, the demand on the design is though different. In result, often multiple specialised light sources with only minor design differences need to be purchased. With the arrival of a new treatment method or chemical or with a new range of duty, additional wavelengths or power may be required. It would be desirable to have an upgradable system then.
                        <br /><br />LIGHTcube by Attestor Forensics is a modular light system with individually combinable and scalable modules. Each module features one particular wavelength and can be controlled (on/off and dimming) via a membrane panel.
                        <br />For increased versatility and budget economy LIGHTcubes can be scaled (multiple modules of the same wavelength for more power) or combined (multiple modules of different wavelength for different tasks), easily be added at a later date or maybe used together with temporarily borrowed modules from other units.
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
                        The top and bottom of each module features a mechanical quick release fastener. When clicking a LIGHTcube module to another or to a power adaptor, it automatically connects with power as well as to a control bus. Via this bus multiple modules of the same colour can be switched or dimmed by a superior system, e.g. the controller of a LABview system.
                        <br />For easy cleaning and for DNA reasons LIGHTcube are desig-ned without a cooling fan. Also there is a cover for the quick release fastener and the power and bus socket which is simply clicked onto the last module (see right pictures with LIGHTcube on the handle).
                        <br />Currently LIGHTcubes are available in white (two light colours), IR, green, blue and UV. Further modules with additional colours and beam shapes are under construction.
                        <br /><br />For optimum illumination in combination with a camera stand, we offer an adaptor which allows adjustment of the modules in horizontal direction and in angle.
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