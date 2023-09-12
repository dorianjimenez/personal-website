import React from 'react';

function Main() {

    return (
        <div className="container mx-auto mt-4 p-4">
            <div className="flex flex-col lg:flex-row items-center">
                {/* Left side (Image) */}
                <div className="lg:w-1/2 lg:mr-4 flex items-center justify-center"> {/* Center horizontally and vertically */}
                    <div className="relative rounded-xl overflow-hidden shadow-md" style={{ width: '450px', height: '450px' }}>
                        <img
                            src="/dorian-photo.jpg"
                            alt="Your Profile"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Right side (Text) */}
                <div className="lg:w-1/2">
                    <p className="mb-4">
                        Hello, I'm Dorian Jimenez (I also go by Dor), a 1st year Computer Science Master's Student @ UCLA. I'm interested in Backend Development, Big Data, Cybersecurity, as well as Embedded Systems! I'm currently looking for a Summer 2024 Software Engineering Internship as well as a full-time job starting in January 2025.
                    </p>
                    <p className="mb-4">
                        In my free time, I enjoy making my own music on my computer, biking, and skateboarding. I also like cats, (certain) internet subcultures, and EDM music!
                    </p>
                    {/* Add more text content as needed */}
                </div>
            </div>
        </div>
    );
}

export default Main;
