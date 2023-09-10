import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function TopBar() {
    return (
        <div className="hidden sm:block absolute w-full bg-white sm:top-0 z-20">
            <div className="sm:w-6/12 sm:flex py-2 m-auto">
                <div className="sm:flex w-1/2">
                    <div className="p-1 font-medium text-gray-400">Dorian Jimenez's Portfolio</div>
                </div>

                <div className="sm:flex w-1/2 place-content-end space-x-4">
                    <a href="https://github.com/dorianjimenez" className="my-auto">
                        <AiFillGithub size="1.5rem" className=" my-auto text-gray-400 hover:text-black" />
                    </a>
                    <a href="https://www.linkedin.com/in/dorian-jimenez-636078193/" className="my-auto">
                        <AiFillLinkedin size="1.5rem" className="my-auto text-gray-400 hover:text-black" />
                    </a>
                    <a href="https://github.com/dorianjimenez/personal-website" className="my-auto text-gray-400 cursor-pointer hover:text-black">
                        Code for this website
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TopBar;