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
                    Amped FIVE is a world leader in image processing software specifically designed for investigative, forensic and security applications. Its primary purpose is to provide forensic investigators a complete and unique solution to process and analyze digital images and video data in a simple, fast and precise way.
                    <br />Through processing and analyzing both still and video images, then utilizing a clear workflow to present evidence that withstands the scrutiny of the courtroom, Amped FIVE is the forensic investigator’s trusted partner. Thanks to its revolutionary technology, Amped FIVE allows investigators to solve a wide range of problems which are otherwise easily missed. Since FIVE is self-contained, it can help to dramatically reduce the time required to process data and improves the success rate of the treated cases, from the restoration of low quality CCTV video to fingerprint analysis.
                    <br /><br />A new and better way to handle video evidence.
                    <br /><br />Amped FIVE has brought the key clarification tools for both video and still images into a single package that is both fast and impressive. Whether one needs to deblur a single image or stabilize a video, it can all be done with the same application. The interface is different, but very intuitive, enabling users to be up and running in a very short time. Although I have many tools in my image processing toolbox, I have added FIVE and am using it often.George Reis, Forensic Image Analyst at Imaging Forensics and author of Photoshop CS3 for Forensics Professionals
                    <br /><br />Maintaining the original evidence integrity is a key element in the design of Amped FIVE. In the law enforcement arena, courts, judges, prosecutors, and defense attorneys can sense the weakness of evidence and exclude it if there is any manipulation that has been done. The current judicial trend in admission of digital evidence shows that undocumented or modified files have a strong chance of being excluded. If this is the key evidence in a case, the case is likely to be lost.
                    <br /><br />With FIVE, our core philosophy in designing the product is that everything is done by simply applying a filter. This means that no rendering, modifying, altering or disturbing original evidence is done. Whether you are loading a video, exporting a sequence, applying some denoising, selecting frames, taking measurements and so on… This concept of filtering allows for very fast, elegant, and predictable workflow. For each step in the process, every filter takes as input the image or video generated by the previous filter and, after the processing, passes the result to their output filter (if any). You can even modify a filter and see the real time output effects on another one: in this way you can see how modifying some values on a previous filter will modify the final result. This is very effective especially for complex problems and long chains of filters.
                    <br /><br />Trial and error is often the most common scientific method that is applied in forensic analysis. Experimenting with different filters and settings is done to find the right filter group, settings, or combination of steps to correct unique problems. With most other forensic image processing software, this is a very long process that often must be restarted if one filter has to be changed or results are not optimal; then restarted again should the results of the second (or third or fourth, etc) result prove to be less than ideal. We have designed the architecture of FIVE with this in mind. Reviewing and modifying any step of the processing is as quick and easy and as simple as replacing, deleting or moving filters anywhere in the chain. In this way FIVE guarantees speed, effectiveness and scientific rigor.
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={2}
                    className="pt-10 transition-all transform flex flex-col h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <p className="text-lg text-gray-500">
                        >>Forensics
                        <br /><br />>>Video surveillance intelligence agencies
                        <br /><br />>>Biometrics
                        <br /><br />>>Research
                    </p>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-10 transition-all transform h-64 h-auto"
                    activeClassName="opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <span className="text-lg text-gray-500">
                        Analyze. Restore. Enhance. Certify.
                        <br /><br />FIVE is not a simple one-click video enhancement tool with limited settings or just a plug-in for photo editing software. It’s a complete software solution that addresses any possible need in the analysis of images and videos for investigations, surveillance, and forensic applications. For the forensic investigator, FIVE can make quick work of any video or image; from importing and converting the footage, analysis of its format, clarify content, taking measurements of the crime scene, and then generating the technical report that you will bring to the courtroom.
                        <br /><br />50 things you can do with FIVE
                        <br /><br />Load, save, process, and analyze single images, sequences of pictures, or videos from a VMS or external source using the same methodology and software.
                        <br /><br />>>Instant results: add, configure, move, and modify an unlimited number of filters, in real time even while playing video.
                        <br /><br />>>Automatically apply the same filters sequence to different files to avoid resetting all filters for different images from the same source or environment.
                        <br /><br />>>Apply the filters only to a region of interest of the image, or select frames of interest in a sequence.
                        <br /><br />>>Quickly seek for events in a long duration video with the integrated motion detection filter.
                        <br /><br />>>Automatically remove duplicates or mismatched frames.
                        <br /><br />>>Automatically demultiplex multi-camera video feeds.
                        <br /><br />>>Flexibility with technology: choose between classical standard techniques or latest state-of-the-art algorithms.
                        <br /><br />>>Precise control over images: operate with pixel level precision on selections and measurements on images. Most of the filters can work on the whole image, on a static selection or can automatically track a moving target.
                        <br /><br />>>Crop quad multiplexed videos.
                        <br /><br />>>Document evidence that wins: Amped FIVE can automatically generate detailed reports so that the investigations process is clearly documented. The report documents scientific methodology and includes all the technical details of the processing and relevant frames and processing steps selected by the user. This is something mandatory for Frye or Daubert states in the United States
                        <br /><br />>>View original and processed image or video side by side to easily show the results of your work.
                        <br /><br />>>Hide sensitive details in the video by blurring, darkening or pixelating selected areas.
                        <br /><br />>>Highlight sensitive details in the video blurring, darkening or pixelating selected areas.
                        <br /><br />>>Load image files from the most common formats, such as bitmap, jpeg, tiff, targa, jpeg2000, png.
                        <br /><br />>>Load video files from almost any digital format, sourced from NTSC, PAL and almost any other system such as mobile phones and internet content; users can decode most video formats by using internal libraries and codecs.
                        <br /><br />>>Amped FIVE’s complete internal library allows decoding even if your system does not have the required codecs installed.
                        <br /><br />>>Choose the video decoding engine to use for every single file. FIVE is the only tool which integrates all video frameworks available on Windows (DirectShow, Video For Windows, QuickTime, FFMS, FFMPEG).
                        <br /><br />>>Visualize the type of encoding of the current frame (I, P, B).
                        <br /><br />>>The customizable player allows to define personal frame step for faster seeking or to use the mouse wheel as a jog control.
                        <br /><br />>>Process a live feed from any DirectShow compatible device.
                        <br /><br />>>Amped FIVE is the only video enhance system integrated with VMS systems. For Milestone XProtect users, FIVE allows to process live stream, archived video or exported files in native format without any conversion or quality loss.
                        <br /><br />>>For unsupported proprietary DVR formats, FIVE integrates a very easy tool that allows to capture the screen without any loss of quality.
                        <br /><br />>>Convert a sequence of static images to present and control as if it were video. Transcode video to a different format or transform it into a sequence of images or vice versa.
                        <br /><br />>>Multiple video frames may be selected in either a consecutive or random sequence.
                        <br /><br />>>FIVE is secure. You can easily check for unauthorized modifications by verifying the file hash-code to maintain strict evidence handling procedures to avoid contamination that could lose a case.
                        <br /><br />>>Verify image EXIF and hash-code data.
                        <br /><br />>>Standard image editing features allow the user to instantaneously apply basic editing functions such as crop, flip, color to grayscale conversions, channel extraction, zoom and image rotation.
                        <br /><br />>>Correct geometric distortions caused by wide angle lenses. Amped FIVE also allows the user to convert images taken from an omnidirectional camera to a panoramic format.
                        <br /><br />>>Correct the perspective in order to see the picture of the scene from a different angle.
                        <br /><br />>>Resize the image with advanced algorithms, which ensures a higher definition than would be obtained with common interpolation algorithms used in other software.
                        <br /><br />>>Convert an interlaced video into a progressive one without loss of information.
                        <br /><br />>>Shift the fields of an interlaced video to view better moving objects.
                        <br /><br />>>Improve contrast and brightness manually, adjusting intensity curves, or speed workflow with automatic enhancement algorithms.
                        <br /><br />>>Analyze images with various threshold and edge detection filters.
                        <br /><br />>>Measure real world distances, heights, and lengths from images or video frames using FIVE’s advanced measuring tool.
                        <br /><br />>>Improve image details (unsharp masking, laplacian sharpening).
                        <br /><br />>>Reduce noise (averaging, Gaussian, median, bilateral, Wiener smoothing filters).
                        <br /><br />>>Apply custom kernel filters.
                        <br /><br />>>Reduce compression artifacts with deblocking algorithm.
                        <br /><br />>>Remove interferences or image background (such as banknote watermark) with Fourier filter.
                        <br /><br />>>Correct optical and motion blur resulting from fast movement or lack of focus.
                        <br /><br />>>Correct the blur caused by air turbulence on long range surveillance videos.
                        <br /><br />>>Remove noise from a video with temporal smoothing and frame integration.
                        <br /><br />>>Improve shaking video with local or global image stabilization.
                        <br /><br />>>Correct and modify the camera viewpoint in different frames with perspective alignment.
                        <br /><br />>>Improve the resolution of the frames with a super resolution algorithm.
                        <br /><br />>>Improve a video with bad weather conditions (fog, rain, flat light, sandstorm, etc.).
                        <br /><br />>>Improve backlight images.
                        <br /><br />>>View 360 dome camera images as panoramic.</span>
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