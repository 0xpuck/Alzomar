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
                    Scanmax 25 has a large capacity x-ray mailscreening chamber of 56 x 42 cm making it the perfect postal x-ray scanner for checking bundles of letters, courier deliveries, york trays, parcels and handbags.
                    <br /><br />Scanmax 25 produces an extremely detailed x-ray image of an item’s contents which is displayed on screen for fast and easy viewing. Scanmax 25 software offers a range of colour density based contrasts, allowing operators to quickly and accurately distinguish between legitimate harmless items and malicious mail and be able to instantly confirm a parcel’s safety.
                    <br /><br />Scanmax 25 is designed and tested to comply to the British Security Industry Standard: PAS97:2012 Specification for Mailscreening as well as US FDA Standards for Cabinet X-ray systems CFR 1020.40.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Compact and Easy to Use
                        <br />Scanmax 25 is a freestanding postal security x-ray screening cabinet combining a large screening chamber with a compact physical size. It is designed for ease of use by non-technical staff and the front loading door and small footprint mean it can be located virtually anywhere in the workplace.
                        <br /><br />>>Image Enhancements
                        <br />Images are automatically enhanced for optimum clarity with the option to be shown in negative. There are also several image enhancement options for highlighting low, medium and high density materials as well as for defining powders, syringes and circuitry.
                        <br />Image enhancements are made using a simple handheld mouse. All images are stored on screen until the next x-ray exposure is made.
                        <br />Both Scanna and customer tests have shown that Scanmax Colorscan x-ray scanners are able to clearly view powders in envelopes provided the envelopes are scanned flat in small batches (up to 40 envelopes on top of the envelope containing powder).
                        <br /><br />>>Versatile Monitor
                        <br />The 17″ flat screen monitor can sit on top of unit, on top of desk or be remote wired to a security control room.
                        <br />This is an advantage over postal cabinet x-ray units incorporating a built in monitor (remote viewing possible and no unit shutdown or expensive maintenance due to monitor error- simply swap over monitor!)
                        <br /><br />>>Advanced Options
                        <br />The optional Scanprint facility allows you to print, email and archive x-ray images while the Network model allows you to link your x-ray machine up to a pc on your network to save and view images remotely.
                        <br /><br />>>Safe and Secure
                        <br />Scanmax 25 cabinet X-ray machines produce only very low level x-rays and conform to all published international Electrical Safety and Radiation Standard. Each x-ray cabinet is issued with a Radiation Safety and Test Certificate. It is completely safe for use by any person including pregnant women.
                        <br /><br />>>Standard System Configuration
                        <br />>>Scanmax 25 Postal Cabinet X-ray Scanner
                        <br />>>17” flat panel viewing monitor
                        <br />>>Handheld Mouse Control
                        <br />>>System safety key
                        <br />>>VGA monitor lead
                        <br />>>Monitor IEC lead
                        <br />>>Mains Lead
                        <br />>>Operating Manuals
                        <br />>>12 month back to base exchange warranty
                        <br /><br />>>Detection Capability
                        <br />Camera:                  1.3 megapixel minimum
                        <br />Penetration:           3 mm steel
                        <br />Wire Detection:      36 AWG
                        <br /><br />>>X-ray Generator
                        <br />KvP:                         70-90 KvP
                        <br />Current:                   8 mA
                        <br />Cooling Method:      Oil Cooled
                        <br /><br />>>Safety and Emissions
                        <br />Magnetic media: Scanmax 25 will not damage magnetic tape, computer discs, CDs DVDs, video tape, ID cards, Credit Cards
                        <br />Radiation: Scanmax 25 meets all published international radiation regulations with emissions of less than 0.1 microsieverts per hour
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