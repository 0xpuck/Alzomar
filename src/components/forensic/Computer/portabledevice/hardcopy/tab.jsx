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
                    Forensic SATA/IDE Hard Drive Imager, Cloner, Wiper with NIST approved SHA256 built into the hardware
                    <br /><br />NIST special publication 800-107 states “SHA-1 shall not be used for the generation of digital signatures after the end of 2013.”
                    <br /><br />>>Image to one or two drives, while simultaneously hashing SHA256 in the hardware, at up 6 GB per minute (5.8 GB per minute if hashing MD5).   The HardCopy 3P design replicates the data in the hardware during the data transfer, so adding a second destination drive will not slow you down.  Imaging speed is only limited by the slowest drive connected, up to 6GB per minute.
                    <br />>>Exceptionally easy to use. Many of our customers tell us they have yet to open the manual.  No time consuming or expensive training required.  Self-train in a few minutes.
                    <br />>>Stand-alone operation:
                    <br />>>Dedicated hardware device – does not require a laptop or PC to image.
                    <br />>>Tested and verified for the Department of Justice by the National Institute of Standards and Technology (NIST):
                    <br />>>Source port write-blocked for fault free data control, always.
                    <br />>>Hardware write-blocking – the source port never has data written to it, we designed the hardware, including the ATA/PI (SATA/IDE) controllers – our source port is hardware write-blocked, permanently
                    <br />>>More on speed and ease of use:
                    <br />>>Automatic handling of HPA and DCO’s
                    <br />>>Wipes (on the destination ports only) at over 7 GB per minute
                    <br />>>Clones as well as images – clones at the same speed as imaging from the one source port to two destinations without slowing down, with or without hash (actually caps out at 7.1 GB per minute without hashing/checksums)
                    <br />>>Built in IDE port for the source drive (there is a SATA connector and an IDE connector for the one source port – if you have an old (IDE) suspect drive, simply connect to the IDE source port, no adapter necessary)
                    <br />>>Portability
                    <br />>>The HardCopy is very small and lightweight.  Fits in a shirt pocket (though the laptop style power brick won’t)
                    <br />>>Clone or Wipe drives larger than 2 TB.  Image, Clone or wipe any SATA or IDE drive 2TB or less.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">Please contact us and request for additional information.</p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Information Security
                        <br />>>Digital Investigation
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