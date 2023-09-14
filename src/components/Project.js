import React from "react";


const Project = ({
    name,
    imgPath,
    imgAlt,
    tags,
    description,
    srcLink,
    demoLink,
    applicationLink
}) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
            <div className="flex flex-col justify-start items-start w-full md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">{name}</h2>
                <div className="flex flex-wrap mb-3">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-sm bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 mb-1 text-gray-800 dark:text-gray-200 mr-2"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-md mb-2">{description}</p>
                <div className="flex flex-row justify-start items-center w-full pb-3">
                    {srcLink && (
                        <>
                            <a
                                href={srcLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base text-gray-500 underline"
                            >
                                Source Code
                            </a>
                            {demoLink && (
                                <span className="text-black mx-2">|</span>
                            )}
                        </>
                    )}
                    {demoLink && (
                        <>
                            <a
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base text-gray-500 underline"
                            >
                                Demo
                            </a>
                            {applicationLink && (
                                <span className="text-black mx-2">|</span>
                            )}
                        </>
                    )}
                    {applicationLink && (
                        <a
                            href={applicationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-gray-500 underline"
                        >
                            Play the Game!
                        </a>
                    )}
                </div>
            </div>
            <div className="flex justify-center items-center w-full md:w-[550px] h-[250px] overflow-hidden " >
                <img
                    src={imgPath}
                    alt={imgAlt}
                    className="rounded-md shadow-md w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Project;
