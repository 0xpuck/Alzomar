import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";

class Rop extends React.Component {
    state = {
        visible: 0,
        photoIndex: 0,
        isOpen: false,
        images: ["../../img/projects/shabiya/1.jpg",
            "../../img/projects/shabiya/2.jpg",
            "../../img/projects/shabiya/3.jpg",
            "../../img/projects/shabiya/4.jpg",
            "../../img/projects/shabiya/5.jpg",
        ],
    };
    setVisible(state) {
        this.setState({ visible: state })
    }

    renderImages = () => {
        let photoIndex = -1;
        const { images } = this.state;

        return images.map((imageSrc) => {
            photoIndex++;
            const privateKey = photoIndex;
            return (
                <MDBCol md="3" key={photoIndex}>
                    <figure>
                        <div className="w-full lg:border lg:pb-2 sm:pb-0 scale-90 border-gray-300 lg:h-60 pt-2 bg-white px-5 items-content justify-center flex">
                            <img
                                src={imageSrc}
                                alt="Gallery"
                                className="img-fluid hover:scale-105 hover:cursor-pointer transition duration-500"
                                onClick={() =>
                                    this.setState({ photoIndex: privateKey, isOpen: true })
                                }
                            />
                        </div>
                    </figure>
                </MDBCol>
            );
        });
    };

    render() {
        const { photoIndex, isOpen, images } = this.state;
        return (
            <div className="w-full xl:pt-28">
                <div className="w-full items-content justify-center flex bg-[#1845aa] py-7">
                    <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 flex">
                        <div className="w-1/2">
                            <span className="text-white text-xl">SHABIYA POLICE STATION</span>
                        </div>
                        <div className="w-1/2 flex flex-col items-end justify-end">
                            <div className="text-white text-xs">
                                <a href="/">Home</a><span> > </span><a href="/projects">Projects</a><span> > </span><span className="text-white text-xs">Shabiya Police Station</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full items-content justify-center flex">
                    <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 pt-16 items-content justify-center">
                        <div className="w-full px-5 text-gray-500 text-lg mb-8">
                            <span>Weapon storage is a one of a kind project which Abu Dhabi Police has implemented in Al Shabiya Police station. In the specific project , all weapons, ammunitions and equipments will be transferred from the policeman to the storage and vice versa with a clear cut procedure, with proper documentation and secures all information’s regarding the transfer, the formation of the modus operandi has been jointly structured by SAT and Abu Dhabi Police. The fully secured Weapon storage has got bullet proof rooms, testing areas, transfer areas and storage areas.</span>
                        </div>
                        <div className="w-full mb-7">
                            <button onClick={() => this.setVisible(1 - this.state.visible)} className="w-full h-12 bg-gray-300 hover:text-green-500 transition duration-300">GALLERY</button>
                        </div>
                        <div style={{ display: this.state.visible ? "flex" : "none" }} className={"w-full items-content justify-center ease-in-out transition duration-300"}>
                            <div className="w-8/12 text-center">
                                {/* <ul className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 text-sm leading-6"> */}
                                <MDBContainer className="mt-5">
                                    <div className="mdb-lightbox no-margin">
                                        <MDBRow className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">{this.renderImages()}</MDBRow>
                                    </div>
                                    {isOpen && (
                                        <Lightbox
                                            mainSrc={images[photoIndex]}
                                            nextSrc={images[(photoIndex + 1) % images.length]}
                                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                            imageTitle={photoIndex + 1 + "/" + images.length}
                                            onCloseRequest={() => this.setState({ isOpen: false })}
                                            onMovePrevRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                                })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + 1) % images.length,
                                                })
                                            }
                                        />
                                    )}
                                </MDBContainer>
                                {/* </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rop;
