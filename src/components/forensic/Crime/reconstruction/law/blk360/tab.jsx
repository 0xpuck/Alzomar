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
                    The next generation of the smallest and lightest imaging laser scanner has arrived<br /><br />

                    The all-new Leica BLK360 is an advanced precision imaging laser scanner. At the push of a button, users can capture a full scan with spherical images in only twenty seconds – over five times faster than the BLK360 G1. Blaze through job sites with best-in-class rapid scanning that doesn’t compromise on quality, while the Visual Inertial System (VIS) Technology automatically combines your scans on-site to speed up your workflow and help you make sure your datasets are complete. The BLK360 enables users to work faster and smarter while getting the data they need immediately.
                    <br />
                    BLK360 data is valuable for many uses, from traditional AEC to mind-bending VFX and VR, and users can easily transfer and work with it in your software ecosystem to create immersive and highly accurate deliverables and experiences.
                    <br />
                    The BLK360 also includes a free companion app, BLK Live, allowing the user to control the imaging laser scanner and immediately view captured data for on-site feedback, quality assurance, quality control, and export E57 files. Available for iOS and Android.
                    <br /><br />
                    The new BLK360 also makes it easy to get your data into your preferred software and to share your scans with others. Directly upload your data to HxDR with automatic conversion to OBJ and cloud-based visualisation, allowing others to work with and download your data. Or transfer your data to Cyclone REGISTER 360 PLUS or export to E57 via USB-C or WLAN for Scan-to-BIM workflows.
                    <br /><br />
                    Immersive HDR Imaging
                    <br />
                    The BLK360’s four 13-megapixel cameras capture high-quality photospheres, and 5-bracket HDR imaging captures all the details in challenging lighting conditions and environments for more immersive photospheres and colourised point clouds.
                    <br /><br />
                    VIS Scan Alignment System
                    <br />
                    Leica Geosystems patented VIS, available with our Leica RTC360 3D laser scanner, is now built into the new BLK360 to combine scans automatically. Each scan captured in the field combines with the previous scan so you’ll spend less time aligning data in the office and more time creating valuable deliverables.
                    <br /><br />
                    Ultra-Fast Scanning
                    <br />
                    The enclosed LiDAR sensor in the new BLK360 captures point clouds at a rate of 680,000 points per second and completes a scan with spherical images in 20 seconds, with flexible scan settings to ensure you capture everything you want and need.
                    <br /><br />
                    High-Speed Data Transfer
                    <br />
                    The USB-C port on the BLK360 gives you a faster, easier way to transfer your data, nine times faster than the BLK360 G1. You’ll benefit from fast and stable data transfers without relying on WLAN.
                    <br /><br />
                    Upload to HxDR
                    <br />
                    The new BLK360, like the BLK2GO, BLK2FLY, and BLK ARC, connects directly to HxDR, Hexagon’s cloud-based storage, visualisation, and collaboration platform for reality capture and geospatial data. Upload scans to HxDR for simple cloud storage, including any E57 file or directly from compatible Leica BLK scanners.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Law Enforcement
                        <br /><br />
                        >>Accident Reconstruction
                        <br /><br />
                        >>Forensics
                        <br /><br />
                        >>Fire
                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        >>Four scan settings capture data in 7, 13, 30, or 75 seconds at 680,000 points per second
                        <br /><br />
                        >>Rich High-Dynamic Range (HDR) imagery with 5 bracket HDR
                        <br /><br />
                        >>Small and light, measuring 155x80mm and weighing just 850g with batteries
                        <br /><br />
                        >>Five times faster than the BLK360 G1, taking 20 seconds for a full-dome scan with photospheres
                        <br /><br />
                        >>Visual Inertial System (VIS) automatically pre-registers scans in the field
                        <br /><br />
                        >>High-speed data transfer via USB-C and Wi-Fi
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