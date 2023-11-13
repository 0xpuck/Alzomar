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
                    Scanmax 225 is a premium large capacity colour mail and parcel x-ray scanner with networking and advanced image analysis features, wrapped in one slim, affordable package.
                    <br /><br />Scanmax 225 incorporates the very latest high resolution camera technology to produce fast on-screen definition rich images of an item’s contents. Images can be enhanced, annotated, printed, stored in a database for training, saved into windows folders and shared over a network for remote analysis.
                    <br /><br />Electronic components and circuitry are more clearly defined than ever before, to allow operators to distinguish easily between harmless items and malicious mail and instantly confirm a parcel’s safety.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Compact and Easy to Use
                        <br />Scanmax 225 is a freestanding mailroom security x-ray machine combining a large screening chamber with a compact physical size. It is designed for ease of use by non-technical staff and the front loading door and small footprint mean it can be located virtually anywhere in the workplace.

                        <br /><br />
                        >>Image Enhancements
                        <br />Image are automatically enhanced for optimum clarity with the option to be shown in negative. There are also several image enhancement options for highlighting low, medium and high density materials as well as powders, syringes and circuitry.

                        <br />Image enhancements are made using via simple icons in the ScanView Imaging Software. All images are stored on screen until the operator chooses to save or close them.

                        <br />Scanmax 225 offers advanced image analysis tools that will give greater contrast to low density materials such as powders and fine wires and assist experienced operators make more confident decisions about the safety of postal items.

                        <br /><br />
                        >>Versatile Monitor
                        <br />The 17″ flat screen monitor can sit on top of unit, on top of desk or be remote wired to a security control room.

                        <br />This is an advantage over postal x-ray units incorporating a built in monitor (remote viewing possible and no unit shutdown or expensive maintenance due to monitor error- simply swap over monitor!)

                        <br /><br />
                        >>Print and Store Images
                        <br />Scanmax 225 runs on a Windows XP framework which gives you the capability to print, email and store x-ray images for training, archiving or image verification between departments.

                        <br /><br />
                        >>Network Capable
                        <br />Scanmax 225 also has an ethernet output so you can link your x-ray machine to your corporate network to save and view images centrally and remotely. Images can also be downloaded to a usb memory stick.

                        <br /><br />
                        >>System Protection and Reset
                        <br />Should your building suffer a temporary electrical failure your x-ray system is protected by a built in UPS and can be switched back into operating mode via a simple reset

                        <br /><br />
                        >>Safe and Secure
                        <br />Scanmax 225 uses very low level x-rays and conforms to all published international Electrical Safety and Radiation Standards and is issued with a Radiation Safety and Test Certificate. It is completely safe for use by any person including pregnant women.Standard System Configuration
                        <br /><br />
                        >>Scanmax 225 Postal Cabinet X-ray Scanner
                        <br />>>Keyboard Control
                        <br />>>17” flat panel viewing monitor
                        <br />>>System safety key
                        <br />>>VGA monitor lead
                        <br />>>Monitor IEC lead
                        <br />>>Mains Lead
                        <br />>>Operating Manuals
                        <br />>>12 month back to base exchange warranty
                        <br /><br />>>Detection Capability
                        <br />Camera: 1.5 megapixel camera minimum
                        <br />Penetration: 3 mm steel
                        <br />Wire Detection: 36 AWG
                        <br /><br />
                        Max Humidity: 95%
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <span className="text-lg text-gray-500">
                        >>Defence / Military Police and First Responders
                        <br /><br />>>Facilities Protection
                        <br /><br />>>Postrooms
                        <br /><br />>>Border Security
                        <br /><br />>>Transport Security
                        <br /><br />>>Prisons
                        <br /><br />>>Events and Venues
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