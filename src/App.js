import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import ScrollButton from './components/scrolltop';

import Landing from './components/landing/landing';

import About from './components/about/aboutus';
import Awards from './components/about/awards';
import Mission from './components/about/missionAndvision';

import Contact from './components/contact/contactus';
import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom';
import Abu from './components/projects/abu';
import Digital from './components/services/forensic/digital';
import Readmore from './components/services/forensic/readmore';
import DigitalReadmore from './components/landing/readmore/digital';
import AjmanReadmore from './components/landing/readmore/ajman';
import World1Readmore from './components/landing/readmore/worldpolice1';
import World2Readmore from './components/landing/readmore/worldpolice2';
import IntersecReadmore from './components/landing/readmore/intersec';
import SupercarReadmore from './components/landing/readmore/supercar';
import IsnxReadmore from './components/landing/readmore/isnr';
import World3Readmore from './components/landing/readmore/worldpolice3';
import Intersec2Readmore from './components/landing/readmore/intersec2';
import IssReadmore from './components/landing/readmore/iss';
import Al from './components/projects/al';
import Shabiya from './components/projects/shabiya';
import Rop from './components/projects/rop';
import Qatar from './components/projects/qatar';
import Qatar1 from './components/projects/qatar1';
import Cip from './components/projects/cip';
import Ballistic from './components/projects/ballistic';
import Police from './components/projects/police';
import DigitalForensics from './components/digitalforensics/digitalforensics';

import ChromAir from './components/forensic/Chemical/ChomAir/chromair';
import ChromReadmore from './components/forensic/Chemical/ChomAir/chromreadmore';
import SafeReadmore from './components/forensic/Chemical/SafeAir/safereadmore';
import ChameleonReadmore from './components/forensic/Chemical/Chameleon/chameleonreadmore';

import Explosive from './components/forensic/Chemical/Explosive/HandyRam/explosive';
import HandyReadmore from './components/forensic/Chemical/Explosive/HandyRam/handyreadmore';
import TraceReadmore from './components/forensic/Chemical/Explosive/TraceX/tracereadmore';
import XcatReadmore from './components/forensic/Chemical/Explosive/XCAT/xcatreadmore';

import Narcotic from './components/forensic/Chemical/Narcotic/Mobile/narcotic';
import MobileReadmore from './components/forensic/Chemical/Narcotic/Mobile/mobilereadmore';
import IntelligentReadmore from './components/forensic/Chemical/Narcotic/Intelligent/intelreadmore';
import PIA1Readmore from './components/forensic/Chemical/Narcotic/PIA1/pia1readmore';
import PIA2Readmore from './components/forensic/Chemical/Narcotic/PIA2/pia2readmore';
import PIALightReadmore from './components/forensic/Chemical/Narcotic/PIALight/pialightreadmore';
import AlereReadmore from './components/forensic/Chemical/Narcotic/Alere/alerereadmore';

import Breath from './components/forensic/Chemical/Breath/FC/breath';
import FCReadmore from './components/forensic/Chemical/Breath/FC/fcreadmore';
import AutoReadmore from './components/forensic/Chemical/Breath/Automatic/automaticreadmore';
import WorkReadmore from './components/forensic/Chemical/Breath/Workplace/workreadmore';;
import PhoenixReadmore from './components/forensic/Chemical/Breath/Workplace/phoenixreadmore';
import SentinelReadmore from './components/forensic/Chemical/Breath/Workplace/sentinelreadmore';
import PersonalReadmore from './components/forensic/Chemical/Breath/Personal/personalreadmore';

import Arson from './components/forensic/Chemical/Arson/voc/arson';
import VOCReadmore from './components/forensic/Chemical/Arson/voc/vocreadmore';
import LtReadmore from './components/forensic/Chemical/Arson/lt/ltreadmore';
import SelectReadmore from './components/forensic/Chemical/Arson/select/selectreadmore';
import CubPersonalReadmore from './components/forensic/Chemical/Arson/personal/personalreadmore';
import TacReadmore from './components/forensic/Chemical/Arson/tac/tacreadmore';

import Latent from './components/forensic/Fingerprint/Latent/eviscan/latent';
import CeraReadmore from './components/forensic/Fingerprint/Latent/cera/cerareadmore';
import El3Readmore from './components/forensic/Fingerprint/Latent/el3/el3readmore';
import EviscanReadmore from './components/forensic/Fingerprint/Latent/eviscan/eviscanreadmore';
import ForenscopeReadmore from './components/forensic/Fingerprint/Latent/forenscope/forenscopereadmore';
import HPSReadmore from './components/forensic/Fingerprint/Latent/hps/hpsreadmore';
import MobifumeReadmore from './components/forensic/Fingerprint/Latent/mobifume/mobifumereadmore';
import NinchaReadmore from './components/forensic/Fingerprint/Latent/nincha/Ninchareadmore';
import VMD360Readmore from './components/forensic/Fingerprint/Latent/vmd360/vmd360readmore';
import VMD560Readmore from './components/forensic/Fingerprint/Latent/vmd560/vmd560readmore';
import VMD1260Readmore from './components/forensic/Fingerprint/Latent/vmd1260/vmd1260readmore';

import Authentication from './components/forensic/Fingerprint/Authentication/corss/authentication';
import CrossReadmore from './components/forensic/Fingerprint/Authentication/corss/crossreadmore';
import BioReadmore from './components/forensic/Fingerprint/Authentication/bio/bioreadmore';
import EikonReadmore from './components/forensic/Fingerprint/Authentication/corss/eikon/eikonreadmore';
import U4500Readmore from './components/forensic/Fingerprint/Authentication/corss/u4500/u4500readmore';
import U5100Readmore from './components/forensic/Fingerprint/Authentication/corss/u5100/u5100readmore';
import U5300Readmore from './components/forensic/Fingerprint/Authentication/corss/u5300/u5300readmore';
import Verifier300Readmore from './components/forensic/Fingerprint/Authentication/corss/verifier300/verifier300readmore';
import Verifier310Readmore from './components/forensic/Fingerprint/Authentication/corss/verifier310/verifier310readmore';
import Verifier320Readmore from './components/forensic/Fingerprint/Authentication/corss/verifier320/verifier320readmore';
import Ef200Readmore from './components/forensic/Fingerprint/Authentication/corss/ef200/ef200readmore';
import MatchReadmore from './components/forensic/Fingerprint/Authentication/bio/match/matchreadmore';
import UsbReadmore from './components/forensic/Fingerprint/Authentication/bio/usb/usbreadmore';
import IDeniumReadmore from './components/forensic/Fingerprint/Authentication/bio/idenium/ideniumreadmore';

import Reconstruction from './components/forensic/Crime/reconstruction/reconstruction';
import LawReadmore from './components/forensic/Crime/reconstruction/law/lawreadmore';
import BLK360Readmore from './components/forensic/Crime/reconstruction/law/blk360/blk360readmore';
import BLKARCReadmore from './components/forensic/Crime/reconstruction/law/blkarc/blkarcreadmore';
import RTC360Readmore from './components/forensic/Crime/reconstruction/law/rtc360/rtc360readmore';
import Photo from './components/forensic/Crime/photo/photo';
import DOC360Readmore from './components/forensic/Crime/photo/doc360/doc360readmore';
import ExpertlabReadmore from './components/forensic/Crime/photo/expertlab/expertlabreadmore';
import FoskoReadmore from './components/forensic/Crime/photo/fosko/foskoreadmore';
import TvcReadmore from './components/forensic/Crime/photo/tvc/tvcreadmore';

import BloodStain from './components/forensic/Bloodstain/blood';
import SceneViewReadmore from './components/forensic/Bloodstain/sceneview/sceneviewreadmore';
import Forenscope from './components/forensic/Bloodstain/forenscope';
import FMSCFReadmore from './components/forensic/Bloodstain/fmscf/fmscfreadmore';
import FMSTReadmore from './components/forensic/Bloodstain/fmst/fmstreadmore';
import FMSLDSReadmore from './components/forensic/Bloodstain/fmslds/fmsldsreadmore';
import Spatter from './components/forensic/Bloodstain/spatter';
import FASTCAMReadmore from './components/forensic/Bloodstain/fastcam/fastcamreadmore';
import Network from './components/forensic/Network/photo/network';
import TacticReadmore from './components/forensic/Network/photo/tactic/tacticreadmore';
import LawfulReadmore from './components/forensic/Network/photo/lawful/lawfulreadmore';
import CloudReadmore from './components/forensic/Network/photo/cloud/cloudreadmore';
import DetectiveReadmore from './components/forensic/Network/photo/detective/detectivereadmore';
import HpptsReadmore from './components/forensic/Network/photo/hppts/hpptsreadmore';
import DecodingReadmore from './components/forensic/Network/photo/decoding/decodingreadmore';
import InvestigationReadmore from './components/forensic/Network/photo/investigation/investigationreadmore';
import ForensicsReadmore from './components/forensic/Network/photo/forensics/forensicsreadmore';
import Wireless from './components/forensic/Network/wireless/wireless';
import WireDetectiveReadmore from './components/forensic/Network/wireless/wiredetective/wiredetectivereadmore';
import VoIPDetectiveReadmore from './components/forensic/Network/voip/voip/voipdetectivereadmore';
import VOIP from './components/forensic/Network/voip/voip';
import Video from './components/forensic/Video/amped/video';
import AmpedReadmore from './components/forensic/Video/amped/video/ampedreadmore';
import Image from './components/forensic/Video/image/image';
import AuthenticateReadmore from './components/forensic/Video/image/authenticate/authenticatereadmore';
import Synopsis from './components/forensic/Video/synopsis/synopsis';
import BriefReadmore from './components/forensic/Video/synopsis/authenticate/Briefreadmore';
import Vehicle from './components/forensic/Toolmarks/vehicle/vehicle';
import VINReadmore from './components/forensic/Toolmarks/vehicle/VIN/vinreadmore';
import Weapon from './components/forensic/Toolmarks/weapon/weapon';
import RegulaReadmore from './components/forensic/Toolmarks/weapon/regula/regulareadmore';
import Toolmarks from './components/forensic/Toolmarks/toolmarks/toolmarks';
import NucastReadmore from './components/forensic/Toolmarks/toolmarks/nucast/nucastreadmore';
import Nucast180Readmore from './components/forensic/Toolmarks/toolmarks/nucast180/nucast180readmore';
import Nucast180XLReadmore from './components/forensic/Toolmarks/toolmarks/nucast180xl/nucast180xlreadmore';
import BoschReadmore from './components/forensic/Toolmarks/crash/bosch/boschreadmore';
import Crash from './components/forensic/Toolmarks/crash/crash';
import EviBubbleReadmore from './components/forensic/Shoeprint/evibubble/evibubble/evibubblereadmore';
import EviBubble from './components/forensic/Shoeprint/evibubble/evibubble';
import Acquisition from './components/forensic/Shoeprint/3d/3d';
import EverReadmore from './components/forensic/Shoeprint/3d/ever/everreadmore';
import DataBase from './components/forensic/Shoeprint/db/db';
import EverSoleReadmore from './components/forensic/Shoeprint/db/eversole/eversolereadmore';
import EverOSReadmore from './components/forensic/Shoeprint/db/everos/everosreadmore';
import Collection from './components/forensic/Shoeprint/collection/collection';
import EverLSSReadmore from './components/forensic/Shoeprint/collection/everlss/everlssreadmore';
import Analysis from './components/forensic/Shoeprint/analysis/analysis';
import WalkwayReadmore from './components/forensic/Shoeprint/analysis/walkway/walkwayreadmore';
import Laboratory from './components/forensic/Laboratory/laboratory/laboratory';
import LMSReadmore from './components/forensic/Laboratory/laboratory/lms/LMSreadmore';
import LabNarcotic from './components/forensic/Laboratory/narcotic/labnarcotic';
import NarcoticReadmore from './components/forensic/Laboratory/narcotic/narcotic/LMSreadmore';
import LabDNA from './components/forensic/Laboratory/dna/labdna';
import DNAprofilling from './components/forensic/Laboratory/dna/dnaprofilling/dnaprofilling';
import Crime from './components/forensic/Laboratory/crime/crime';
import CrimeReadmore from './components/forensic/Laboratory/crime/crime/crimereadmore';
import LabBallistic from './components/forensic/Laboratory/ballistic/ballistic';
import CloningReadmore from './components/forensic/Laboratory/ballistic/cloning/cloningreadmore';
import Kinship from './components/forensic/Laboratory/kinship/kinship';
import PaternityReadmore from './components/forensic/Laboratory/kinship/paternity/paternityreadmore';
import FingerprintAcquisition from './components/forensic/Fingerprint/Acquisition/acquisition';
import Guardian300Readmore from './components/forensic/Fingerprint/Acquisition/guardian300/guardian300readmore';
import Guardian200Readmore from './components/forensic/Fingerprint/Acquisition/guardian200/guardian200readmore';
import GuardianModuleReadmore from './components/forensic/Fingerprint/Acquisition/guardianmodule/guardianmodulereadmore';
import GuardianR2Readmore from './components/forensic/Fingerprint/Acquisition/guardianr2/guardianr2readmore';
import GuardianUSBReadmore from './components/forensic/Fingerprint/Acquisition/guardianusb/guardianusbreadmore';
import PatrolIDReadmore from './components/forensic/Fingerprint/Acquisition/patrolid/patrolidreadmore';
import LScanReadmore from './components/forensic/Fingerprint/Acquisition/lscan/lscanreadmore';
import LS01Readmore from './components/forensic/Fingerprint/Acquisition/ls01/ls01readmore';
import LS1102Readmore from './components/forensic/Fingerprint/Acquisition/ls1102/ls1102readmore';
import LS4421Readmore from './components/forensic/Fingerprint/Acquisition/ls4421/ls4421readmore';
import LS4422Readmore from './components/forensic/Fingerprint/Acquisition/ls4422/ls4422readmore';
import Mobile from './components/forensic/Fingerprint/mobile/mobile';
import LS11Readmore from './components/forensic/Fingerprint/Acquisition/ls11/ls11readmore';
import VerifierReadmore from './components/forensic/Fingerprint/mobile/verifier/verifierreadmore';
import SeekReadmore from './components/forensic/Fingerprint/mobile/seek/seekreadmore';
import JumpReadmore from './components/forensic/Fingerprint/mobile/jump/jumpreadmore';
import MWReadmore from './components/forensic/Fingerprint/mobile/mw/mwreadmore';
import PapillonReadmore from './components/forensic/Fingerprint/mobile/papillon/papillonreadmore';
import MKDSReadmore from './components/forensic/Fingerprint/mobile/mkds/mkdsreadmore';
import DPPReadmore from './components/forensic/Fingerprint/mobile/dpp/dppreadmore';
import MT01Readmore from './components/forensic/Fingerprint/mobile/mt01/mt01readmore';
import MT07Readmore from './components/forensic/Fingerprint/mobile/mt07/mt07readmore';
import OEM from './components/forensic/Fingerprint/OEM/oem';
import KojakReadmore from './components/forensic/Fingerprint/OEM/kojak/kojakreadmore';
import WatsonReadmore from './components/forensic/Fingerprint/OEM/watson/watsonreadmore';
import SherlockReadmore from './components/forensic/Fingerprint/OEM/sherlock/sherlockreadmore';
import ColumboReadmore from './components/forensic/Fingerprint/OEM/columbo/columboreadmore';
import CurveReadmore from './components/forensic/Fingerprint/OEM/curve/curvereadmore';
import TruReadmore from './components/forensic/Fingerprint/OEM/tru/trureadmore';
import APIFS from './components/forensic/Fingerprint/apfis/apfis';
import APFISReadmore from './components/forensic/Fingerprint/apfis/apfis/apfisreadmore';
import Light from './components/forensic/Fingerprint/light/light';
import CubeReadmore from './components/forensic/Fingerprint/light/cube/cubereadmore';
import SingleReadmore from './components/forensic/Fingerprint/light/laser/single/singlereadmore';
import Laser from './components/forensic/Fingerprint/light/laser/laser';
import DualReadmore from './components/forensic/Fingerprint/light/laser/dual/dualreadmore';
import MiniReadmore from './components/forensic/Fingerprint/light/laser/mini/minireadmore';
import UltraReadmore from './components/forensic/Fingerprint/light/laser/ultra/ultrareadmore';
import CrimeScene from './components/forensic/Fingerprint/light/crime/crime';
import LampReadmore from './components/forensic/Fingerprint/light/crime/lamp/lampreadmore';
import CSLReadmore from './components/forensic/Fingerprint/light/crime/csl/cslreadmore';
import PAGReadmore from './components/forensic/Fingerprint/light/crime/pag/pagreadmore';
import Swab from './components/forensic/Biology/swab/swab';
import DNAOPSReadmore from './components/forensic/Biology/swab/dnsops/dnaopsreadmore';
import Anthropology from './components/forensic/Biology/anthropology/anthropology';
import MillMixReadmore from './components/forensic/Biology/anthropology/millmix/millmixreadmore';
import CollectionDevice from './components/forensic/Biology/collection/collectiondevice';
import VACReadmore from './components/forensic/Biology/collection/vac/vacreadmore';
import ProcessingKit from './components/forensic/Biology/processingkit/processingkit';
import ExtractionBloodReadmore from './components/forensic/Biology/processingkit/extractionblood/extractionbloodreadmore';
import ExtractionCigaretteReadmore from './components/forensic/Biology/processingkit/extractioncigarette/extractioncigarettereadmore';
import ExtractionSalivaReadmore from './components/forensic/Biology/processingkit/extractionsaliva/extractionsalivareadmore';
import ExtractionTissueReadmore from './components/forensic/Biology/processingkit/extractiontissue/extractiontissuereadmore';
import PrepGemBloodReadmore from './components/forensic/Biology/processingkit/prepgemblood/prepgembloodreadmore';
import PrepGemSalivaReadmore from './components/forensic/Biology/processingkit/prepgemsaliva/prepgemsalivareadmore';
import PrepGemTissueReadmore from './components/forensic/Biology/processingkit/prepgemtissue/prepgemtissuereadmore';
import CollectionKit from './components/forensic/Biology/collectionkit/collectionkit';
import DNAStubReadmore from './components/forensic/Biology/collectionkit/dnastub/dnastubreadmore';
import Sperm from './components/forensic/Biology/sperm/sperm';
import SpermTrackerReadmore from './components/forensic/Biology/sperm/spermtracker/spermtrackerreadmore';
import Portable from './components/forensic/Inspection/portable/portable';
import ScanXReadmore from './components/forensic/Inspection/portable/scanx/scanxreadmore';
import ScanSilcReadmore from './components/forensic/Inspection/portable/scansilc/scansilcreadmore';
import ScanWedgeReadmore from './components/forensic/Inspection/portable/scanwedge/scanwedgereadmore';
import CR35Readmore from './components/forensic/Inspection/portable/cr35/cr35readmore';
import ScanTrakReadmore from './components/forensic/Inspection/portable/scantrak/scantrakreadmore';
import GeneratorsReadmore from './components/forensic/Inspection/portable/generators/generatorsreadmore';
import FlexRayReadmore from './components/forensic/Inspection/portable/flexray/flexrayreadmore';
import ScanMaxReadmore from './components/forensic/Inspection/portable/scanx/scanxreadmore';
import ScanMax25Readmore from './components/forensic/Inspection/portable/scanmax25/scanmax25readmore';
import ScanMailReadmore from './components/forensic/Inspection/portable/scanmail/scanmailreadmore';
import MantaReadmore from './components/forensic/Inspection/cellphone/manta/mantareadmore';
import CellPhone from './components/forensic/Inspection/cellphone/cellphone';
import PocketReadmore from './components/forensic/Inspection/cellphone/pocket/pocketreadmore';
import SentryReadmore from './components/forensic/Inspection/cellphone/sentry/sentryreadmore';
import WolfReadmore from './components/forensic/Inspection/cellphone/wolf/wolfreadmore';
import WatchReadmore from './components/forensic/Inspection/cellphone/watch/watchreadmore';
import Cameras from './components/forensic/Inspection/cameras/camears';
import LinearReadmore from './components/forensic/Inspection/cameras/linear/linearreadmore';
import Scanners from './components/forensic/Inspection/scannners/scanners';
import Tera256Readmore from './components/forensic/Inspection/scannners/tera256/tera256readmore';
import Tera1024Readmore from './components/forensic/Inspection/scannners/tera1024/tera1024readmore';
import Tera4096Readmore from './components/forensic/Inspection/scannners/tera4096/tera4096readmore';
import Linear1024Readmore from './components/forensic/Inspection/scannners/linear1024/linear1024readmore';
import TeraFastReadmore from './components/forensic/Inspection/scannners/terafast/terafastreadmore';
import PortableDevice from './components/forensic/Computer/portabledevice/portabledevice';
import TRecorderReadmore from './components/forensic/Computer/portabledevice/trecorder/trecorderreadmore';
import BeeCubeReadmore from './components/forensic/Computer/portabledevice/beecube/beecubereadmore';
import CellCubeReadmore from './components/forensic/Computer/portabledevice/cellcube/cellcubereadmore';
import OXYCubeReadmore from './components/forensic/Computer/portabledevice/oxycube/oxycubereadmore';
import ForensicCubeReadmore from './components/forensic/Computer/portabledevice/forensiccube/forensiccubereadmore';
import RuggedReadmore from './components/forensic/Computer/portabledevice/rugged/ruggedreadmore';
import SpyGettyReadmore from './components/forensic/Computer/portabledevice/spygetty/spygettyreadmore';
import VoomReadmore from './components/forensic/Computer/portabledevice/voom/voomreadmore';
import ShadowReadmore from './components/forensic/Computer/portabledevice/shadow/shadowreadmore';
import HardCopyReadmore from './components/forensic/Computer/portabledevice/hardcopy/hardcopyreadmore';
import DriveWiperReadmore from './components/forensic/Computer/portabledevice/drivewiper/drivewiperreadmore';
import UltraKitReadmore from './components/forensic/Computer/portabledevice/ultrakit/ultrakitreadmore';
import UltraUSB from './components/forensic/Computer/portabledevice/ultraUSB/ultrausb';
import SataReadOnlyReadmore from './components/forensic/Computer/portabledevice/ultraUSB/satareadonly/satareadonlyreadmore';
import SataReadWriteReadmore from './components/forensic/Computer/portabledevice/ultraUSB/satareadwrite/satareadwritereadmore';
import UltraSATA from './components/forensic/Computer/portabledevice/ultraeSATA/ultrasata';
import UltraSataReadOnlyReadmore from './components/forensic/Computer/portabledevice/ultraeSATA/satareadonly/satareadonlyreadmore';
import UltraSataReadWriteReadmore from './components/forensic/Computer/portabledevice/ultraeSATA/satareadwrite/satareadwritereadmore';
import DuplicatorReadmore from './components/forensic/Computer/portabledevice/duplicator/duplicatorreadmore';
import AtolaReadmore from './components/forensic/Computer/portabledevice/atola/atolareadmore';
import TableauReadmore from './components/forensic/Computer/portabledevice/tableau/tableaureadmore';
import DVRRecovery from './components/forensic/Computer/dvrrecovery/dvrrecovery';
import DVRReadmore from './components/forensic/Computer/dvrrecovery/dvrrecovery/dvrreadmore';
import Workstation from './components/forensic/Computer/workstation/workstation';
import AntAnalyzerReadmore from './components/forensic/Computer/workstation/antanalyzer/antanalyzerreadmore';
import AntAnalyzerTypeReadmore from './components/forensic/Computer/workstation/antanalyzertype/antanalyzertypereadmore';
function App() {
  return (
    <div>
      <Header />
       <BrowserRouter>
        <Routes>

          <Route path="/"> <Route index element={<Landing />} /> </Route>
          <Route path="/about"> <Route index element={<About />} /> </Route>
          <Route path="/about/mission-vision"> <Route index element={<Mission />} /> </Route>
          <Route path="/about/awards"> <Route index element={<Awards />} /> </Route>

          <Route path="/contact-us"> <Route index element={<Contact />} /> </Route>

          <Route path="/digital-twin-2023"> <Route index element={<DigitalReadmore />} /> </Route>
          <Route path="/ajman-police-exhibition-2023"> <Route index element={<AjmanReadmore />} /> </Route>
          <Route path="/world-police-summit-2023"> <Route index element={<World1Readmore />} /> </Route>
          <Route path="/world-police-summit-s-a-t-2"> <Route index element={<World2Readmore />} /> </Route>
          <Route path="/intersec-2023"> <Route index element={<IntersecReadmore />} /> </Route>
          <Route path="/supercar-blondie"> <Route index element={<SupercarReadmore />} /> </Route>
          <Route path="/isnr-2022"> <Route index element={<IsnxReadmore />} /> </Route>
          <Route path="/world-police-summit-2022"> <Route index element={<World3Readmore />} /> </Route>
          <Route path="/intersec-2022"> <Route index element={<Intersec2Readmore />} /> </Route>
          <Route path="/iss-world-2021"> <Route index element={<IssReadmore />} /> </Route>

          <Route path="/projects/abu-dhabi-ballastic"> <Route index element={<Abu />} /> </Route>
          <Route path="/projects/alian-forensic-lab"> <Route index element={<Al />} /> </Route>
          <Route path="/projects/shabiya-police-station"> <Route index element={<Shabiya />} /> </Route>
          <Route path="/projects/rop-ballistic-lab"> <Route index element={<Rop />} /> </Route>
          <Route path="/projects/qatar-hospital"> <Route index element={<Qatar />} /> </Route>
          <Route path="/projects/qatar-university"> <Route index element={<Qatar1 />} /> </Route>
          <Route path="/projects/mobile-cip-labs"> <Route index element={<Cip />} /> </Route>
          <Route path="/projects/mobile-ballistic-laboratory"> <Route index element={<Ballistic />} /> </Route>

          <Route path="/computer-forensics/digital-forensics-laboratory"> <Route index element={<Digital />} /> </Route>
          <Route path="/computer-forensics/digital-forensics-laboratory/mobile-lab-paladin-2"> <Route index element={<Readmore />} /> </Route>
 
          <Route path="/digital-forensics"> <Route index element={<DigitalForensics />} /> </Route>

          <Route path="/chemical-detection/chemical-detection-kits"> <Route index element={<ChromAir />} /> </Route>
          <Route path="/chemical-detection/chemical-detection-kits/chromair"> <Route index element={<ChromReadmore />} /> </Route>
          <Route path="/chemical-detection/chemical-detection-kits/safeair"> <Route index element={<SafeReadmore />} /> </Route>
          <Route path="/chemical-detection/chemical-detection-kits/chameleon"> <Route index element={<ChameleonReadmore />} /> </Route>

          <Route path="/explosive-detection/handheld-explosive-detection"> <Route index element={<Explosive />} /> </Route>
          <Route path="/explosive-detection/handheld-explosive-detection/handyram-hand-held-raman-spectroscopy-2/"> <Route index element={<HandyReadmore />} /> </Route>
          <Route path="/explosive-detection/handheld-explosive-detection/xcat"> <Route index element={<XcatReadmore />} /> </Route>
          <Route path="/explosive-detection/handheld-explosive-detection/tracex"> <Route index element={<TraceReadmore />} /> </Route>

          <Route path="/chemical-detection/narcotic-and-pharmaceutical"> <Route index element={<Narcotic />} /> </Route>
          <Route path="/chemical-detection/narcotic-and-pharmaceutical/mobile-field-lab-3000-mfl-3000"> <Route index element={<MobileReadmore />} /> </Route>
          <Route path="/chemical-detection/narcotic-and-pharmaceutical/pia2-protzek-instrumental-analysis"> <Route index element={<PIA2Readmore />} /> </Route>
          <Route path="/chemical-detection/narcotic-and-pharmaceutical/pia-light"> <Route index element={<PIALightReadmore />} /> </Route>
          <Route path="/chemical-detection/narcotic-and-pharmaceutical/pia1-protzek"> <Route index element={<PIA1Readmore />} /> </Route>
          <Route path="/chemical-detection/narcotic-and-pharmaceutical/intelligent-fingerprinting"> <Route index element={<IntelligentReadmore />} /> </Route>
          <Route path="/narcotic-identification/alere-dds2-mobile-test-system"> <Route index element={<AlereReadmore />} /> </Route>

          <Route path="/chemical-detection/breath-alcohol-testing"> <Route index element={<Breath />} /> </Route>
          <Route path="/chemical-detection/breath-alcohol-testing/workplace-series-2/"> <Route index element={<WorkReadmore />} /> </Route>
          <Route path="/chemical-detection/breath-alcohol-testing/workplace-series-2/workplace-series/"> <Route index element={<PhoenixReadmore />} /> </Route>
          <Route path="/chemical-detection/breath-alcohol-testing/workplace-series-2/sentinel-entry-system/"> <Route index element={<SentinelReadmore />} /> </Route>
          <Route path="/chemical-detection/breath-alcohol-testing/personal-breathalyzer/"> <Route index element={<PersonalReadmore />} /> </Route>
          <Route path="/chemical-detection/breath-alcohol-testing/fc-series"> <Route index element={<FCReadmore />} /> </Route>
          <Route path="/chemical-detection/breath-alcohol-testing/automatic-caliberation/"> <Route index element={<AutoReadmore />} /> </Route>

          <Route path="/chemical-detection/arson-investigation"> <Route index element={<Arson />} /> </Route>
          <Route path="/chemical-detection/arson-investigation/tiger-voc-detector/"> <Route index element={<VOCReadmore />} /> </Route>
          <Route path="/chemical-detection/arson-investigation/tiger-lt-handheld-voc-gas-detector/"> <Route index element={<LtReadmore />} /> </Route>
          <Route path="/chemical-detection/arson-investigation/tiger-select-handheld-benzene-detector/"> <Route index element={<SelectReadmore />} /> </Route>
          <Route path="/chemical-detection/breath-alcohol-testing/personal-breathalyzer/"> <Route index element={<CubPersonalReadmore />} /> </Route>
          <Route path="/chemical-detection/breath-alcohol-testing/fc-series"> <Route index element={<TacReadmore />} /> </Route>

          <Route path="/fingerprint/latent-fingerprint-detection"> <Route index element={<Latent />} /> </Route>
          <Route path="/fingerprint/latent-fingerprint-detection/eviscan/"> <Route index element={<EviscanReadmore />} /> </Route>
          <Route path="/fingerprint/latent-fingerprint-detection/el3/"> <Route index element={<El3Readmore />} /> </Route>
          <Route path="/fingerprint/latent-fingerprint-detection/vmd360/"> <Route index element={<VMD360Readmore />} /> </Route>
          <Route path="/fingerprint/latent-fingerprint-detection/vmd560/"> <Route index element={<VMD560Readmore />} /> </Route>
          <Route path="/fingerprint/latent-fingerprint-detection/vmd1260/"> <Route index element={<VMD1260Readmore />} /> </Route>
          <Route path="/fingerprint/latent-fingerprint-detection/cera-lt/"> <Route index element={<CeraReadmore />} /> </Route>
          <Route path="/fingerprint/latent-fingerprint-detection/hps/"> <Route index element={<HPSReadmore />} /> </Route>
          <Route path="/fingerprint/latent-fingerprint-detection/forenscope-4k-pro-mobile/"> <Route index element={<ForenscopeReadmore />} /> </Route>
          <Route path="/fingerprint/latent-fingerprint-detection/nincha-series/"> <Route index element={<NinchaReadmore />} /> </Route>
          <Route path="/fingerprint/latent-fingerprint-detection/mobifume/"> <Route index element={<MobifumeReadmore />} /> </Route>

          <Route path="/fingerprint/authenticationverification-2/"> <Route index element={<Authentication />} /> </Route>
          <Route path="/fingerprint/authenticationverification-2/crossmatch/"> <Route index element={<CrossReadmore />} /> </Route>
          <Route path="/fingerprint/authenticationverification-2/crossmatch/eikon-usb-fingerprint-readers/"> <Route index element={<EikonReadmore />} /> </Route>
          <Route path="/fingerprint/authenticationverification-2/crossmatch/u-are-u-4500-fingerprint-readers/"> <Route index element={<U4500Readmore />} /> </Route>
          <Route path="/fingerprint/authenticationverification-2/crossmatch/u-are-u-5100-fingerprint-reader/"> <Route index element={<U5100Readmore />} /> </Route>
          <Route path="/fingerprint/authenticationverification-2/crossmatch/u-are-u-5300-fingerprint-scanner/"> <Route index element={<U5300Readmore />} /> </Route>
          <Route path="/fingerprint/authenticationverification-2/crossmatch/verifier-300-lc-2-0/"> <Route index element={<Verifier300Readmore />} /> </Route>
          <Route path="/fingerprint/authenticationverification-2/crossmatch/verifier-310-lc/"> <Route index element={<Verifier310Readmore />} /> </Route>
          <Route path="/fingerprint/authenticationverification-2/crossmatch/verifier-320-lc/"> <Route index element={<Verifier320Readmore />} /> </Route>
          <Route path="/fingerprint/authenticationverification-2/crossmatch/ef200/"> <Route index element={<Ef200Readmore />} /> </Route>
          <Route path="/fingerprint/authenticationverification-2/bio-link/"> <Route index element={<BioReadmore />} /> </Route>
          <Route path="/fingerprint/authenticationverification-2/bio-link/biolink-u-match-7-5/"> <Route index element={<MatchReadmore />} /> </Route>
          <Route path="/authenticationverification-2/bio-link/biolink-fs25-usb2-0/"> <Route index element={<UsbReadmore />} /> </Route>
          <Route path="/fingerprint/authenticationverification-2/bio-link/biolink-idenium/"> <Route index element={<IDeniumReadmore />} /> </Route>
          <Route path="/fingerprint/livescan/"> <Route index element={<FingerprintAcquisition />} /> </Route>
          <Route path="/fingerprint/livescan/guardian-300/"> <Route index element={<Guardian300Readmore />} /> </Route>
          <Route path="/fingerprint/livescan/guardian-200/"> <Route index element={<Guardian200Readmore />} /> </Route>
          <Route path="/fingerprint/livescan/guardian-module/"> <Route index element={<GuardianModuleReadmore />} /> </Route>
          <Route path="/fingerprint/livescan/guardian-r2/"> <Route index element={<GuardianR2Readmore />} /> </Route>
          <Route path="/fingerprint/livescan/guardian-usb/"> <Route index element={<GuardianUSBReadmore />} /> </Route>
          <Route path="/fingerprint/livescan/patrol-id/"> <Route index element={<PatrolIDReadmore />} /> </Route>
          <Route path="/fingerprint/livescan/l-scan/"> <Route index element={<LScanReadmore />} /> </Route>
          <Route path="/fingerprint/livescan/ls-01/"> <Route index element={<LS01Readmore />} /> </Route>
          <Route path="/fingerprint/livescan/ls-1102/"> <Route index element={<LS1102Readmore />} /> </Route>
          <Route path="/fingerprint/livescan/ls-4421/"> <Route index element={<LS4421Readmore />} /> </Route>
          <Route path="/fingerprint/livescan/ls-4422/"> <Route index element={<LS4422Readmore />} /> </Route>
          <Route path="/fingerprint/livescan/ls-11/"> <Route index element={<LS11Readmore />} /> </Route>
          <Route path="/fingerprint/mobile-identification/"> <Route index element={<Mobile />} /> </Route>
          <Route path="/fingerprint/mobile-identification/verifier-sentry/"> <Route index element={<VerifierReadmore />} /> </Route>
          <Route path="/fingerprint/mobile-identification/seek-avenger/"> <Route index element={<SeekReadmore />} /> </Route>
          <Route path="/fingerprint/mobile-identification/guardian-jump-kit/"> <Route index element={<JumpReadmore />} /> </Route>
          <Route path="/fingerprint/mobile-identification/verifier-mw/"> <Route index element={<MWReadmore />} /> </Route>
          <Route path="/fingerprint/mobile-identification/papillon-m/"> <Route index element={<PapillonReadmore />} /> </Route>
          <Route path="/fingerprint/mobile-identification/mkds-30-mkds-45/"> <Route index element={<MKDSReadmore />} /> </Route>
          <Route path="/fingerprint/mobile-identification/dpp-6/"> <Route index element={<DPPReadmore />} /> </Route>
          <Route path="/fingerprint/mobile-identification/mt-01/"> <Route index element={<MT01Readmore />} /> </Route>
          <Route path="/fingerprint/mobile-identification/mt-o7/"> <Route index element={<MT07Readmore />} /> </Route>
          <Route path="/fingerprint/oem-integration/"> <Route index element={<OEM />} /> </Route>
          <Route path="/fingerprint/oem-integration/kojak/"> <Route index element={<KojakReadmore />} /> </Route>
          <Route path="/fingerprint/oem-integration/watson-mini/"> <Route index element={<WatsonReadmore />} /> </Route>
          <Route path="/fingerprint/oem-integration/sherlock/"> <Route index element={<SherlockReadmore />} /> </Route>
          <Route path="/fingerprint/oem-integration/columbo/"> <Route index element={<ColumboReadmore />} /> </Route>
          <Route path="/fingerprint/oem-integration/curve/"> <Route index element={<CurveReadmore />} /> </Route>
          <Route path="/fingerprint/oem-integration/tru/"> <Route index element={<TruReadmore />} /> </Route>
          <Route path="/fingerprint/afis/"> <Route index element={<APIFS />} /> </Route>
          <Route path="/fingerprint/afis/apfis/"> <Route index element={<APFISReadmore />} /> </Route>
          <Route path="/forensic-light/"> <Route index element={<Light />} /> </Route>
          <Route path="/forensic-light/forensic-laser-system/"> <Route index element={<Laser />} /> </Route>
          <Route path="/forensic-light/forensic-laser-system/brightbeam-single/"> <Route index element={<SingleReadmore />} /> </Route>
          <Route path="/forensic-light/forensic-laser-system/brightbeam-dual/"> <Route index element={<DualReadmore />} /> </Route>
          <Route path="/forensic-light/forensic-laser-system/brightbeam-mini/"> <Route index element={<MiniReadmore />} /> </Route>
          <Route path="/forensic-light/forensic-laser-system/brightbeam-ultra-ultra-dual/"> <Route index element={<UltraReadmore />} /> </Route>
          <Route path="/forensic-light/crimescene-light/"> <Route index element={<CrimeScene />} /> </Route>
          <Route path="/forensic-light/crimescene-light/crime-scene-lamp-sl-450/"> <Route index element={<LampReadmore />} /> </Route>
          <Route path="/forensic-light/crimescene-light/csl-shoe/"> <Route index element={<CSLReadmore />} /> </Route>
          <Route path="/forensic-light/crimescene-light/pag-lab-msa-810/"> <Route index element={<PAGReadmore />} /> </Route>

          <Route path="/crime-scene-reconstruction/leica-geosystems/"> <Route index element={<Reconstruction />} /> </Route>
          <Route path="/crime-scene-reconstruction/leica-geosystems/law-enforcement-2/"> <Route index element={<LawReadmore />} /> </Route>
          <Route path="/crime-scene-reconstruction/leica-geosystems/law-enforcement-2/leica-blk360-imaging-laser-scanner/"> <Route index element={<BLK360Readmore />} /> </Route>
          <Route path="/crime-scene-reconstruction/leica-geosystems/law-enforcement-2/leica-blk-arc"> <Route index element={<BLKARCReadmore />} /> </Route>
          <Route path="/crime-scene-reconstruction/leica-geosystems/law-enforcement-2/leica-rtc360-3d-laser-scanner/"> <Route index element={<RTC360Readmore />} /> </Route>
          
          <Route path="/crime-scene-reconstruction/photography/"> <Route index element={<Photo />} /> </Route>
          <Route path="/crime-scene-reconstruction/photography/doc360/"> <Route index element={<DOC360Readmore />} /> </Route>
          <Route path="/crime-scene-reconstruction/photography/expertlab/"> <Route index element={<ExpertlabReadmore />} /> </Route>
          <Route path="/crime-scene-reconstruction/photography/fosko/"> <Route index element={<FoskoReadmore />} /> </Route>
          <Route path="/crime-scene-reconstruction/photography/tvc-9-1-usb/"> <Route index element={<TvcReadmore />} /> </Route>
          
          <Route path="/blood-stain-spatter/"> <Route index element={<BloodStain />} /> </Route>
          <Route path="/bloodstain-pattern-analysis/blood-stain-spatter/sceneview-bv800/"> <Route index element={<SceneViewReadmore />} /> </Route>
          <Route path="/bloodstain-pattern-analysis/forenscope-2/"> <Route index element={<Forenscope />} /> </Route>
          <Route path="/forenscope-multispectral-contactless-fingerprint-imaging-system-fmscf/"> <Route index element={<FMSCFReadmore />} /> </Route>
          <Route path="/bloodstain-pattern-analysis/forenscope-2/forenscope-multispectral-tablet-imaging-system-fmst/"> <Route index element={<FMSTReadmore />} /> </Route>
          <Route path="/bloodstain-pattern-analysis/forenscope-2/forenscope-multispectral-laboratory-detection-system-fmslds/"> <Route index element={<FMSLDSReadmore />} /> </Route>
          <Route path="/blood-spatter/"> <Route index element={<Spatter />} /> </Route>
          <Route path="/blood-spatter-2/"> <Route index element={<FASTCAMReadmore />} /> </Route>

          <Route path="/network-forensics/network-forensics/"> <Route index element={<Network />} /> </Route>
          <Route path="/network-forensics/network-forensics/tactic-lawful-interception-package/"> <Route index element={<TacticReadmore />} /> </Route>
          <Route path="/network-forensics/network-forensics/lawful-interception-suite-li-suite-for-packet-data-network/"> <Route index element={<LawfulReadmore />} /> </Route>
          <Route path="/network-forensics/network-forensics/cloud-computing-application/"> <Route index element={<CloudReadmore />} /> </Route>
          <Route path="/network-forensics/network-forensics/e-detective/"> <Route index element={<DetectiveReadmore />} /> </Route>
          <Route path="/network-forensics/network-forensics/httpsssl-network-packet-forensics-device/"> <Route index element={<HpptsReadmore />} /> </Route>
          <Route path="/network-forensics/network-forensics/e-detective-decoding-centre/"> <Route index element={<DecodingReadmore />} /> </Route>
          <Route path="/network-forensics/network-forensics/network-investigation-toolkit/"> <Route index element={<InvestigationReadmore />} /> </Route>
          <Route path="/network-forensics/network-forensics/forensics-investigation-toolkit-fit/"> <Route index element={<ForensicsReadmore />} /> </Route>
          <Route path="/network-forensics/wireless-detective/"> <Route index element={<Wireless/>} /> </Route>
          <Route path="/network-forensics/wireless-detective-2/"> <Route index element={<WireDetectiveReadmore />} /> </Route>

          <Route path="/network-forensics/voip-detective/"> <Route index element={<VOIP />} /> </Route>
          <Route path="/network-forensics/voip-detective-2/"> <Route index element={<VoIPDetectiveReadmore />} /> </Route>
          <Route path="/video-and-photo-forensics/forensic-video-enhancement-software/"> <Route index element={<Video />} /> </Route>
          <Route path="/video-and-photo-forensics/forensic-video-enhancement-software/amped-five/"> <Route index element={<AmpedReadmore />} /> </Route>
          <Route path="/video-and-photo-forensics/forensic-image-authentication/"> <Route index element={<Image />} /> </Route>
          <Route path="/video-and-photo-forensics/forensic-image-authentication/amped-authenticate/"> <Route index element={<AuthenticateReadmore />} /> </Route>
          <Route path="/video-and-photo-forensics/video-synopsis/"> <Route index element={<Synopsis />} /> </Route>
          <Route path="/video-and-photo-forensics/forensic-video-enhancement-software/briefcam/"> <Route index element={<BriefReadmore />} /> </Route>

          <Route path="/toolmarks/vehicle-identification-number-vin/"> <Route index element={<BriefReadmore />} /> </Route>
          <Route path="/toolmarks/vehicle-identification-number-vin/7515m/"> <Route index element={<VINReadmore />} /> </Route>
          <Route path="/toolmarks/weapon-number-verification/"> <Route index element={<Weapon />} /> </Route>
          <Route path="/toolmarks/weapon-number-verification/regula-7517/"> <Route index element={<RegulaReadmore />} /> </Route>
          <Route path="/toolmarks/toolmarks-impression/"> <Route index element={<Toolmarks />} /> </Route>
          <Route path="/toolmarks/toolmarks-impression/nucasttool/"> <Route index element={<NucastReadmore />} /> </Route>
          <Route path="/toolmarks/toolmarks-impression/nucast180/"> <Route index element={<Nucast180Readmore />} /> </Route>
          <Route path="/toolmarks/toolmarks-impression/nucast180-xl/"> <Route index element={<Nucast180XLReadmore />} /> </Route>
          <Route path="/toolmarks/crash-data-retrieval/"> <Route index element={<Crash />} /> </Route>
          <Route path="/toolmarks/crash-data-retrieval/bosch-crash-data-retrieval/"> <Route index element={<BoschReadmore />} /> </Route>
          <Route path="/shoeprint-collection/footprints-tyre-impression"> <Route index element={<EviBubble />} /> </Route>
          <Route path="/shoeprint-collection/footprints-tyres-impressions/evibubble/"> <Route index element={<EviBubbleReadmore />} /> </Route>
          <Route path="/shoeprint-collection/3d-shoeprint-acquisition/"> <Route index element={<Acquisition />} /> </Route>
          <Route path="/shoeprint-collection/3d-shoeprint-acquisition/ever3d/"> <Route index element={<EverReadmore />} /> </Route>
          <Route path="/shoeprint-collection/shoeprint-database/"> <Route index element={<DataBase />} /> </Route>
          <Route path="/shoeprint-collection/shoeprint-database/eversole/"> <Route index element={<EverSoleReadmore />} /> </Route>
          <Route path="/shoeprint-collection/shoeprint-database/everos/"> <Route index element={<EverOSReadmore />} /> </Route>
          <Route path="/shoeprint-collection/shoeprint-collection/"> <Route index element={<Collection />} /> </Route>
          <Route path="/shoeprint-collection/shoeprint-collection/everlss/"> <Route index element={<EverLSSReadmore />} /> </Route>
          <Route path="/shoeprint-collection/gait-analysis/"> <Route index element={<Analysis />} /> </Route>
          <Route path="/shoeprint-collection/gait-analysis/everos-walkway/"> <Route index element={<WalkwayReadmore />} /> </Route>

          <Route path="/laboratory-management-system-2/"> <Route index element={<Laboratory />} /> </Route>
          <Route path="/laboratory-management-system-3/"> <Route index element={<LMSReadmore />} /> </Route>
          <Route path="/laboratory-management-system/narcotic-profiling-matching/"> <Route index element={<LabNarcotic />} /> </Route>
          <Route path="/laboratory-management-system/narcotic-profiling-matching-2/"> <Route index element={<NarcoticReadmore />} /> </Route>
          <Route path="/laboratory-management-system/dna-profiling-and-matching-2/"> <Route index element={<LabDNA />} /> </Route>
          <Route path="/laboratory-management-system/dna-profiling-and-matching/"> <Route index element={<DNAprofilling />} /> </Route>
          <Route path="/laboratory-management-system/crime-scene-management-2/"> <Route index element={<Crime />} /> </Route>
          <Route path="/laboratory-management-system/crime-scene-management/"> <Route index element={<CrimeReadmore />} /> </Route>
          <Route path="/laboratory-management-system/ballistic-cloning-system-2/"> <Route index element={<LabBallistic />} /> </Route>
          <Route path="/laboratory-management-system/ballistic-cloning-system/"> <Route index element={<CloningReadmore />} /> </Route>
          <Route path="/laboratory-management-system/kinship-paternity-2/"> <Route index element={<Kinship />} /> </Route>
          <Route path="/laboratory-management-system/kinship-paternity/"> <Route index element={<PaternityReadmore />} /> </Route>

          <Route path="/biology-dna/dna-swab-management-system/"> <Route index element={<Swab />} /> </Route>
          <Route path="/biology-dna/dna-swab-management-system/dnaops/"> <Route index element={<DNAOPSReadmore />} /> </Route>
          <Route path="/biology-dna/forensic-anthropology/"> <Route index element={<Anthropology />} /> </Route>
          <Route path="/biology-dna/forensic-anthropology/millmix-20/"> <Route index element={<MillMixReadmore />} /> </Route>
          <Route path="/biology-dna/dna-collection-device/"> <Route index element={<CollectionDevice />} /> </Route>
          <Route path="/biology-dna/dna-collection-device/m-vac/"> <Route index element={<VACReadmore />} /> </Route>
          <Route path="/biology-dna/dna-processing-kit/"> <Route index element={<ProcessingKit />} /> </Route>
          <Route path="/biology-dna/dna-processing-kit/forensicgem-dna-extraction-blood/"> <Route index element={<ExtractionBloodReadmore />} /> </Route>
          <Route path="/biology-dna/dna-processing-kit/forensicgem-dna-extraction-cigarette/"> <Route index element={<ExtractionCigaretteReadmore />} /> </Route>
          <Route path="/biology-dna/dna-processing-kit/forensicgem-dna-extraction-saliva/"> <Route index element={<ExtractionSalivaReadmore />} /> </Route>
          <Route path="/biology-dna/dna-processing-kit/forensicgem-dna-extraction-tissue/"> <Route index element={<ExtractionTissueReadmore />} /> </Route>
          <Route path="/biology-dna/dna-processing-kit/prepgem-dna-extraction-blood/"> <Route index element={<PrepGemBloodReadmore />} /> </Route>
          <Route path="/biology-dna/dna-processing-kit/prepgem-dna-extraction-saliva/"> <Route index element={<PrepGemSalivaReadmore />} /> </Route>
          <Route path="/biology-dna/dna-processing-kit/prepgem-dna-extraction-tissue/"> <Route index element={<PrepGemTissueReadmore />} /> </Route>
          <Route path="/biology-dna/dna-collection-kit/"> <Route index element={<CollectionKit />} /> </Route>
          <Route path="/biology-dna/dna-collection-kit/dna-stub/"> <Route index element={<DNAStubReadmore />} /> </Route>
          <Route path="/biology-dna/sperm-tracker/"> <Route index element={<Sperm />} /> </Route>
          <Route path="/biology-dna/sperm-tracker/stk-sperm-tracker/"> <Route index element={<SpermTrackerReadmore />} /> </Route>

          <Route path="/inspection/portable-x-ray-systems/"> <Route index element={<Portable />} /> </Route>
          <Route path="/inspection/portable-x-ray-systems/scanx-scout/"> <Route index element={<ScanXReadmore />} /> </Route>
          <Route path="/inspection/portable-x-ray-systems/scansilc-2520/"> <Route index element={<ScanSilcReadmore />} /> </Route>
          <Route path="/inspection/portable-x-ray-systems/scanwedge/"> <Route index element={<ScanWedgeReadmore />} /> </Route>
          <Route path="/inspection/portable-x-ray-systems/cr35/"> <Route index element={<CR35Readmore />} /> </Route>
          <Route path="/inspection/portable-x-ray-systems/scantrak/"> <Route index element={<ScanTrakReadmore />} /> </Route>
          <Route path="/inspection/portable-x-ray-systems/x-ray-generators/"> <Route index element={<GeneratorsReadmore />} /> </Route>
          <Route path="/inspection/portable-x-ray-systems/flexray/"> <Route index element={<FlexRayReadmore />} /> </Route>
          <Route path="/inspection/portable-x-ray-systems/scanmax-225/"> <Route index element={<ScanMaxReadmore />} /> </Route>
          <Route path="/inspection/portable-x-ray-systems/scanmax-25/"> <Route index element={<ScanMax25Readmore />} /> </Route>
          <Route path="/inspection/portable-x-ray-systems/scanmail-10k/"> <Route index element={<ScanMailReadmore />} /> </Route>
          <Route path="/inspection/cell-phone-detection/manta-ray/"> <Route index element={<MantaReadmore />} /> </Route>
          <Route path="/inspection/cell-phone-detection/"> <Route index element={<CellPhone />} /> </Route>
          <Route path="/inspection/cell-phone-detection/pockethound/"> <Route index element={<PocketReadmore />} /> </Route>
          <Route path="/inspection/cell-phone-detection/sentryhound/"> <Route index element={<SentryReadmore />} /> </Route>
          <Route path="/inspection/cell-phone-detection/wolfhound/"> <Route index element={<WolfReadmore />} /> </Route>
          <Route path="/inspection/cell-phone-detection/watchhound/"> <Route index element={<WatchReadmore />} /> </Route>
          <Route path="/terahertz-imaging-cameras/"> <Route index element={<Cameras />} /> </Route>
          <Route path="/high-speed-linear-thz-camera/"> <Route index element={<LinearReadmore />} /> </Route>
          <Route path="/inspection/terahertz-imaging-scanner/"> <Route index element={<Scanners />} /> </Route>
          <Route path="/inspection/terahertz-imaging-scanner/tera-256/"> <Route index element={<Tera256Readmore />} /> </Route>
          <Route path="/inspection/terahertz-imaging-scanner/tera-1024/"> <Route index element={<Tera1024Readmore />} /> </Route>
          <Route path="/inspection/terahertz-imaging-scanner/tera-4096/"> <Route index element={<Tera4096Readmore />} /> </Route>
          <Route path="/inspection/terahertz-imaging-scanner/linear-tera-1024/"> <Route index element={<Linear1024Readmore />} /> </Route>
          <Route path="/inspection/terahertz-imaging-scanner/terafast-256/"> <Route index element={<TeraFastReadmore />} /> </Route>

          <Route path="/computer-forensics/portable-devicesultrablocks/"> <Route index element={<PortableDevice />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/trecorder/"> <Route index element={<TRecorderReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/beecube/"> <Route index element={<BeeCubeReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/cellcube/"> <Route index element={<CellCubeReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/oxycube/"> <Route index element={<OXYCubeReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/forensiccube/"> <Route index element={<ForensicCubeReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/forensic-rugged-laptop/"> <Route index element={<RuggedReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/spygetty-pna/"> <Route index element={<SpyGettyReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/voom-superduper/"> <Route index element={<VoomReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/shadow-3/"> <Route index element={<ShadowReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/voom-hardcopy-3p/"> <Route index element={<HardCopyReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/drivewiper-3/"> <Route index element={<DriveWiperReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/ultrakit/"> <Route index element={<UltraKitReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/ultrablock-usb-3-0-ide-sata/"> <Route index element={<UltraSATA />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/ultrablock-usb-3-0-ide-sata/ultrablock-usb-3-0-ide-sata-read-only/"> <Route index element={<SataReadOnlyReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/ultrablock-usb-3-0-ide-sata/ultrablock-usb-3-0-ide-sata-read-write/"> <Route index element={<SataReadWriteReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/ultrablock-esata-ide-sata/"> <Route index element={<UltraUSB />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/ultrablock-esata-ide-sata/ultrablock-esata-ide-sata-read-only/"> <Route index element={<UltraSataReadOnlyReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/ultrablock-esata-ide-sata/ultrablock-esata-ide-sata-readwrite/"> <Route index element={<UltraSataReadWriteReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/forensic-duplicator-2u/"> <Route index element={<DuplicatorReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/tableau-tx1-forensic-imager/"> <Route index element={<TableauReadmore />} /> </Route>
          <Route path="/computer-forensics/portable-devicesultrablocks/atola-taskforce-and-insight-forensics/"> <Route index element={<AtolaReadmore />} /> </Route>
          <Route path="/computer-forensics/forensic-dvr-recovery/"> <Route index element={<DVRRecovery />} /> </Route>
          <Route path="/computer-forensics/forensic-dvr-recovery-2/"> <Route index element={<DVRReadmore />} /> </Route>
          <Route path="/computer-forensics/workstations/"> <Route index element={<Workstation />} /> </Route>
          <Route path="/computer-forensics/workstations/antanalyzer/"> <Route index element={<AntAnalyzerReadmore />} /> </Route>
          <Route path="/computer-forensics/workstations/antanalyzer-s-type/"> <Route index element={<AntAnalyzerTypeReadmore />} /> </Route>
          <Route path="/computer-forensics/workstations/fred-series-2/"> <Route index element={<Workstation />} /> </Route>
        </Routes>
      </BrowserRouter>
      <ScrollButton />
      <Footer />
      
    </div>
  );
}

export default App;
