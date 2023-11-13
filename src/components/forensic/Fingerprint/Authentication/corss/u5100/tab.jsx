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
                    The U.are.U 5100 Module is a miniature USB fingerprint reader designed for integration into OEM equipment where fingerprint verification or identification is needed. It is tailored to the unique form-factor, power, usability and durability requirements of mobile ID devices, particularly those used in public-facing Civil ID applications such as voting, benefits-checking and micro-finance.
                    <br /><br />
                    This self-contained module optically scans the fingerprint when the user touches the glass imaging window. Optical technology offers the highest combination of durability and ease of use.
                    <br /><br />
                    The U.are.U 5100 Module is designed to simplify OEM integration. The top surface of the module is IP64-rated, sealed against dust and liquids*. Its compact size and convenient mounting features help it fit easily into even small devices. The on-board electronics automatically control calibration and data transfer over the USB interface.
                    <br /><br />
                    The U.are.U 5100 is designed to meet and exceed the FIPS 201 Personal Identity Verification (PIV) Image Quality Specification, a key industry standard. It produces 500 and 1000 dot-per-inch (dpi) fingerprint images in ANSI and ISO/IEC standard formats.
                    <br /><br />
                    The U.are.U 5100 Module can be used with any standards-compatible fingerprint templates extractor or matcher, including the DigitalPersona® FingerJet Biometric Engine, VeriFinger and MegaMatcher Standard and Extended SDK’s and the Fulcrum Biometric Framework including the FbF Bioserver and Device Listener.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className='text-gray-500 text-lg'>
                        >>Defense<br />
                        >>Finance<br />
                        >>Government<br />
                        >>Law Enforcement<br />
                        >>Hospitality and Retail<br />
                        >>Enterprise
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-gray-500 text-lg">
                        >>Blue LED<br />
                        Soft, cool blue glow fits into any environment. Provides a pleasing presence; doesn’t compete in low light environments, such as restaurants, or conflict with alarm condition colors, such as in healthcare.
                        <br /><br />
                        >>Small Form Factor<br />
                        Designed for building into embedded hardware devices.
                        <br /><br />
                        >>Rugged Construction<br />
                        High-quality casing. IP64 Rated.
                        <br /><br />
                        >>Extra Tough Lens<br />
                        Extra tough glass optics for use in shared or customer facing environments.
                        <br /><br />
                        >>Power Management<br />
                        Optimized for battery operated handheld systems.
                        <br /><br />
                        >>Rotation Invariant<br />
                        Touch it from any direction, it still provides a high quality image and matching performance, perfect for shared environments.
                        <br /><br />
                        >>Excellent Image Quality<br />
                        High-quality optics ensure best image every time.
                        <br /><br />
                        >>Works well with Dry, Moist, or Rough Fingerprints<br />
                        Reliable performance over the widest population of users. Reads even the most difficult fingerprints.
                        <br /><br />
                        >>Landing Lights<br />
                        Landing light LED’s provide guidance for finger tracking.
                        <br /><br />
                        >>Security<br />
                        Counterfeit finger rejection.
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