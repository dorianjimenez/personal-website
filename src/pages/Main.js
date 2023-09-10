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
                        Hello! I'm [Your Name], a passionate [Your Profession/Title] with [X] years of experience in [Your Field]. I love to [mention your interests or skills].
                    </p>
                    <p className="mb-4">
                        In my free time, I enjoy [mention your hobbies or interests]. I'm also proficient in [mention relevant skills].
                    </p>
                    {/* Add more text content as needed */}
                </div>
            </div>
        </div>
    );
}

export default Main;
