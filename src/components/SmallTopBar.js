import React, { useState } from 'react';
import { AiOutlineMenu, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const SmallTopBar = () => {
    const [isSmallTopBarVisible, setSmallTopBarVisible] = useState(false);

    const onWaffleClick = () => {
        setSmallTopBarVisible(!isSmallTopBarVisible);
    };

    return (
        <div>
            <div onClick={onWaffleClick} className="flex justify-between items-center w-screen p-4 ">
                <AiOutlineMenu size="2rem" className={(isSmallTopBarVisible ? "text-black" : "text-gray-400 ") + "my-auto mx-2 cursor-pointer inline-block"} />
                <div className="p-1 font-medium flex-grow text-gray-400 text-center">Dorian Jimenez's Portfolio</div>
                <div className='w-[2rem] mx-2'></div>
            </div>


            <div className={(isSmallTopBarVisible ? "" : "hidden ") + "w-screen pb-10 pl-10"}>
                <div className="flex flex-col gap-2 ">
                    <a href="https://github.com/dorianjimenez" className="my-auto">
                        <div className="inline-block w-auto pr-2 m-auto text-gray-400 text-xl hover:text-black">
                            <span>Github</span>
                            <AiFillGithub size="1.5rem" className="inline-block w-auto my-auto ml-1 mb-1ch" />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/dorian-jimenez-636078193/" className="my-auto">
                        <div className="inline-block w-auto pr-2 m-auto text-gray-400 text-xl hover:text-black">
                            <span>LinkedIn</span>
                            <AiFillLinkedin size="1.5rem" className="inline-block w-auto my-auto ml-1 mb-1" />
                        </div>
                    </a>
                    <a href="https://github.com/dorianjimenez/personal-website" className="my-auto text-xl text-gray-400 cursor-pointer hover:text-black">
                        Source
                    </a>
                </div>

            </div>
        </div>
    );
};

export default SmallTopBar;
