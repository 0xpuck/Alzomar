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
                    <p>In some settings, monitoring the amount of exposure is the key to safe working conditions. ChromAir is designed to detect exposure dose levels to specific toxic chemicals. Because it relies on diffusion, there is no pump to operate. The patented design provides immediate and accurate results throughout the sampling period.</p>
                    <br />
                    <p>The ChromAir chemical exposure monitoring badge offers six exposure levels, with most indicating from one-tenth to two times the Permissible Exposure Limit (PEL) Time Weighted Average (TWA) for an eight-hour work period. To determine the average concentration, users can locate the highest cell with a color change and divide the corresponding dose level (parts per million times hour) by the sampling time in hours.</p>
                    <br />
                    <p>Some ChromAir badges can be used with color comparators to pinpoint higher resolution and wider range. These specially designed color charts feature a slot for the badges. After the badge is inserted, the user can move the slider to match the colors. The exposure dose is indicated in the exposure dose window. For more information, see the ChromAir System brochure.</p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <div className="text-gray-500 text-lg">
                        <p>>>Healthcare</p>
                        <p>>>Manufacturing</p>
                        <p>>>Aluminium</p>
                        <p>>>Quality Control</p>
                        <p>>>Industrial</p>
                        <p>>>Environment</p>
                        <p>>>Oil & Gas</p>

                    </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">Click on the chemical name in the table to open the Operating Instructions.</p>
                    <br />
                    <table className="text-lg text-gray-500">
                        <tr className="font-bold bg-gray-200">
                            <td className="p-3">Chemical Name</td>
                            <td>Badge Part Number (Box of Ten)</td>
                            <td>Comparator Part Number</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3">Acetone</td>
                            <td>380020-10</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3">Ammonia</td>
                            <td>380003-10</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3">Carbon Monoxide	</td>
                            <td>380008-10</td>
                            <td>384006</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3">Chlorine</td>
                            <td>380004-10</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3">Formaldehyde</td>
                            <td>380007-10</td>
                            <td>384001</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3">Glutaraldehyde</td>
                            <td>380017-10</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3">Mercury</td>
                            <td>380018-10</td>
                            <td>384003</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3">Methyl Ethyl Ketone</td>
                            <td>380020-10</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3">Methyl Isobutyl Ketone</td>
                            <td>380020-10</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3">Ozone</td>
                            <td>380010-10</td>
                        </tr>
                    </table>
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