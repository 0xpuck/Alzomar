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
                    Cartridge casings have long been gathered at crime scenes however, it is rare to find fingerprints as any deposits are usually destroyed when the weapon is fired.
                    Some casings though, may have some corrosion left by fingerprint sweat which can be viewed under the correct light and magnification.
                    <br />Through extensive research and development of the revolutionary CERA, Consolite Forensics has been able to produce a new optical system without the use of a complex powder and high voltage system, yet still capable of enhancing and capturing even the most difficult prints from a curved surface.
                    <br /><br />
                    “The electrostatic process has always relied on the presence of particular corrosion products to successfully enhance fingerprint corrosion and has provided a compliment to optical methods. Now, the CERA LT optical system provides superior imaging of the surface of the cartridge, including any corrosion, so as to remove the need for the electrostatic process”. Dr John W Bond OBE
                    <br /><br />
                    The new compact CERA LT achieves this purely through its advanced optical system and simple to use software called CFIS.
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
                    <p className='text-gray-500 text-lg'>
                        >>New features include the ability to capture and compare ballistic information from the breech face of a cartridge. The new holding system allows a full range of cartridges to be inspected for firing pin impressions and also ejector marks.
<br /><br />
                        >>Quick and simple to use
                        <br /><br />
                        >>Fingerprints extracted from cartridge cases & cylindrical objects such as screwdriver handles and syringes
                        <br /><br />
                        >>Cylindrical object holder 1mm – 25mm diameter
                        <br /><br />
                        >>Brush holding system for cartridge breech face examination
                        <br /><br />
                        >>Fully integrated high resolution camera
                        <br /><br />
                        >>Advanced 360° image processing
                        <br /><br />
                        >>Uniform LED cloud sky lighting system in white and 460nm blue
                        <br /><br />
                        >>Automated 6 position band pass filter wheel – 495nm, 530nm, 550nm, 570nm, 590nm
                        <br /><br />
                        >>Use of external alternate light sources
                        <br /><br />
                        >>No on-going consumables<br />
                        >>Dimensions: 485 x 160 x 350mm (19″ x 6″ x 13″)
                        <br /><br />
                        >>Weight: 8 Kgs (17 lbs)
                        <br /><br />
                        >>Voltage: 96-264 Volts ac
                        <br /><br />
                        >>Provided with dedicated computer and monitor
                        <br /><br />
                        >>Consolite Forensics Imaging Software (CFIS)
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