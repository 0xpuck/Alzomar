import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { FaSearch } from 'react-icons/fa';

export default function FullscreenModal() {
    const [size, setSize] = useState(null);

    const handleOpen = (value) => setSize(value);

    return (
        <Fragment>
            <Button className="scale-125 text-gray-400 block md:inline-block px-3 py-2 hover:shadow-none hover:text-orange-700 focus:outline-none rotate-90" onClick={() => handleOpen("xxl")}>
                <FaSearch />
            </Button>
            <Dialog style={{ backgroundColor: "rgb(14,54,90)" }}
                open={
                    size === "xxl"
                }
                size={size || "md"}
                handler={handleOpen}
            >
                <DialogHeader className="w-full">
                    <div className="w-9/12 items-end justify-end flex">
                        <Button variant="text" color="white" onClick={() => handleOpen(null)} className="mr-1">
                            close
                        </Button>
                    </div>
                </DialogHeader>
                <DialogBody className="h-screen">
                    <div className="w-full h-5/6 items-content justify-center flex">
                        <div className="w-full mx-20 my-auto items-center justify-center flex">
                            <div className="w-2/12 items-end justify-end flex">
                                <span className="text-3xl text-white">Search:</span>
                            </div>
                            <div className="w-9/12">
                                <input className="border-2 h-10 w-full mx-3" type="text"></input>
                            </div>
                            <div className=" w-1/12">
                                <button className="text-white rotate-90 scale-150 ml-7">
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </DialogBody>
            </Dialog>
        </Fragment>
    );
}