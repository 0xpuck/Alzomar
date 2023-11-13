import React, { useState } from 'react';
import { FaComments } from 'react-icons/fa';
import { Chat } from './styles';

export default function ChatButton() {

    const [showModal, setShowModal] = React.useState(0);

    return (
        <div>
            <Chat>
                <FaComments style={{ visible: "inline" }} className="hover:scale-125 transition duration-700 " onClick={() => setShowModal(1 - showModal)} />
            </Chat>
            <div className={`w-1/3 h-80 ${showModal ? "fixed" : "hidden"} bottom-48 right-10 bg-transparent shadow-none`}>
                <div className="border rounded-lg">
                    <div className="w-full">
                        <div className="relative flex items-center p-3 border-b rounded-t-lg border-gray-300 bg-sky-600">
                            <img className="object-cover w-10 h-10 rounded-full"
                                src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
                            <span className="block ml-2 font-bold text-white">Emma</span>
                            <span className="absolute w-3 h-3 border-2 bg-green-600 rounded-full left-11 top-10">
                            </span>
                        </div>
                        <div className="relative w-full p-10 overflow-y-auto h-80 bg-white">

                            <ul className="space-y-2">
                                <li className="flex justify-start">
                                    <img className="object-cover w-6 h-6 rounded-full mr-2"
                                        src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
                                    <div className="relative max-w-xl px-4 py-2 text-gray-600 rounded shadow">
                                        <span className="block">Hi</span>
                                    </div>
                                </li>
                                <li className="flex justify-end">
                                    <div className="relative max-w-xl px-4 py-2 text-gray-800 bg-gray-400 rounded shadow">
                                        <span className="block">Hiiii</span>
                                    </div>
                                </li>
                                <li className="flex justify-end">
                                    <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-400 rounded shadow">
                                        <span className="block">how are you?</span>
                                    </div>
                                </li>
                                <li className="flex justify-start">
                                    <img className="object-cover w-6 h-6 rounded-full mr-2"
                                        src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
                                    <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                                        <span className="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                                    </div>
                                </li>
                            </ul>

                        </div>

                        <div className="flex items-center justify-between w-full border-t bg-white border-gray-300 rounded-b-lg">

                            {/* <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            </button>
                            <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            </button> */}

                            <input type="text" placeholder=" Write Message"
                                className="block w-11/12 p-4 pl-7 bg-gray-100 outline-none rounded-bl-lg focus:text-gray-700"
                                name="message" required />
                            {/* <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                            </button> */}
                            <button type="submit" className="bg-white m-2">
                                <svg className="w-5 h-5 mr-2 text-gray-500 origin-center transform" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M21.158.222L2.568 11.815c-.8.498-.749 1.215.113 1.591l4.406 1.923 10.395-9.903c1.377-1.296 1.569-1.119.426.395L8.254 18.215v4.927c0 .953.5 1.141 1.113.418l4.473-5.282 5.055 2.207c.861.376 1.643-.092 1.736-1.04l1.81-18.404c.094-.949-.484-1.317-1.283-.819" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
