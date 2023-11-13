import React from "react";
import { Link } from "react-router-dom";
export default function Rightbar() {
    return (
        <div className="lg:w-1/5 w-full">
            <div className="w-full">
                <br />
                <p className="text-gray-700">LATEST POSTS</p><br />
                <a href="/digital-twin-2023" className="hover:text-blue-700"><span>Digital Twin 2023 March 14, 2023</span></a>
                <hr />
                <a href="/ajman-police-exhibition-2023" className="hover:text-blue-700"><span>Ajman Police Exhibition 2023 March 13, 2023</span></a>
                <hr />
                <a href="/world-police-summit-2023" className="hover:text-blue-700"><span>World Police Summit 2023 March 7, 2023</span></a>
                <hr />
                <a href="/world-police-summit-s-a-t-2" className="hover:text-blue-700"><span>World Police Summit – S.A.T March 7, 2023</span></a>
                <hr />
                <a href="/intersec-2023" className="hover:text-blue-700"><span>Intersec 2023 January 17, 2023</span></a>
                <hr />
                <a href="/supercar-blondie" className="hover:text-blue-700"><span>Supercar Blondie 2022 October 25, 2022</span></a>
                <hr />
                <a href="/isnr-2022" className="hover:text-blue-700"><span>ISNR 2022 October 10, 2022</span></a>
                <hr />
                <a href="/world-police-summit-2022" className="hover:text-blue-700"><span>World Police Summit 2022 March 14, 2022</span></a>
                <hr />
                <a href="/intersec-2022" className="hover:text-blue-700"><span>Intersec 2022 January 16, 2022</span></a>
                <hr />
                <a href="/iss-world-2021" className="hover:text-blue-700"><span>ISS World 2021 June 28, 2021</span></a>
                <hr />
            </div>
        </div>
    )
}