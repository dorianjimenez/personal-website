import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { useMediaQuery } from 'react-responsive';

const images = [
    { url: "pfp/photo-1.jpg" },
    { url: "pfp/photo-2.jpg" },
    { url: "pfp/photo-3.jpg" },
    { url: "pfp/photo-4.jpg" },
    { url: "pfp/photo-5.jpg" },
];

function Main() {

    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

    return (
        <div className="container mx-auto mt-4 p-4 ">
            <div className="lg:flex items-center">
                {/* Left side (Image) */}
                <div className="lg:w-1/2 mb-8 lg:m-0 flex items-center justify-center">
                    {!isSmallScreen ? (<div className="relative rounded-xl overflow-hidden w-[450px] h-[450px]">
                        <SimpleImageSlider
                            width={450}
                            height={450}
                            images={images}
                            showNavs={true}
                            autoPlay={true}
                            autoPlayDelay={5}
                            showBullets={false}
                        />
                    </div>) : (<div className="relative rounded-xl overflow-hidden w-[300px] h-[300px]">
                        <SimpleImageSlider
                            width={300}
                            height={300}
                            images={images}
                            showNavs={true}
                            autoPlay={true}
                            autoPlayDelay={5}
                            showBullets={false}
                            navSize={30}
                            navMargin={10}
                        />
                    </div>)
                    }



                </div>

                {/* Right side (Text) */}
                <div className="lg:w-1/2 flex flex-col items-center">
                    <p className="mb-4">
                        Hello, I'm Dorian Jimenez (I also go by Dor), a 1st-year Computer Science Master's Student @ UCLA. I'm interested in Backend Development, Big Data, Cybersecurity, as well as Embedded Systems! I'm currently looking for a Summer 2024 Software Engineering Internship as well as a full-time job starting in January 2025.
                    </p>
                    <p className="mb-4">
                        In my free time, I enjoy making my own music on my computer, biking, and skateboarding. I also like cats, (certain) internet subcultures, and EDM music!
                    </p>

                </div>
            </div>
        </div>

    );
}

export default Main;
