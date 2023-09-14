import React from "react";
import Project from "./Project";

const ProjectList = () => {
    return (
        <div className="flex flex-col">
            <div className="mb-4">
                <Project
                    name="My Portfolio Website"
                    imgPath="/project-card-portfolio-website.png"
                    imgAlt="Photo of my website"
                    tags={["React", "Tailwind", "AWS Amplify", "AWS Route 53"]}
                    description="This website was built using React and Tailwind CSS. It is hosted on AWS Amplify and uses Route 53 for DNS, SSL, and hosted zone management."
                    srcLink="https://github.com/dorianjimenez/personal-website"
                    demoLink="https://www.dorianjimenez.com"
                />
            </div>

            <hr className="my-4" style={{ backgroundColor: 'gray', height: '4px' }} />

            <div className="mb-4">
                <Project
                    name="JumpStart"
                    imgPath="/project-card-jumpstart.png"
                    imgAlt="Photo of JumpStart"
                    tags={["Arduino", "BLE", "Embedded Systems", "Motion Detection", "XGBoost", "Javascript"]}
                    description="An alarm clock that forces the user to do jumping jacks to turn it off! 2 friends and I used the Arduino Nano 33, ML based motion detection, and BLE to create this alarm clock. "
                    srcLink="https://github.com/tkanarsky/jumpstart"
                    demoLink="https://drive.google.com/drive/folders/1H4_a4Mas0hzN4hjt65DtBcM2f4KBw6X9"
                />
            </div>

            <hr className="my-4" style={{ backgroundColor: 'gray', height: '4px' }} />

            <div className="mb-4">
                <Project
                    name="Reliable Transport Protocol over UDP"
                    imgPath="/project-card-reliable-transport-protocol-over-udp.png"
                    imgAlt="Photo of Reliable Transport Protocol over UDP"
                    tags={["Networking", "TCP/UDP", "C++", "C++ Socket Programming", "Client/Server Architecture"]}
                    description="I developed a transport protocol with TCP Tahoe congestion control, 3-way Handshake, and other error handling features built on top of UDP. I built this for my CS118 (Computer Networking) class at UCLA."
                    srcLink="https://gist.github.com/dorianjimenez/073888f0970d9018a2d994aad0871fa0"
                />
            </div>

            <hr className="my-4" style={{ backgroundColor: 'gray', height: '4px' }} />

            <div className="mb-4">
                <Project
                    name="Penalty Shootout"
                    imgPath="/project-card-penalty-shootout.png"
                    imgAlt="Photo of Penalty Shootout"
                    tags={["Computer Graphics", "Javascript", "WebGL", "Tiny Graphics"]}
                    description="A penalty shootout game built using WebGL and Tiny Graphics. 2 friends and I built this game for our CS174A (Computer Graphics) class at UCLA."
                    srcLink="https://github.com/jonathanbcarlson/CS174A-Project"
                    demoLink="https://www.youtube.com/watch?v=YagnUFtaj8A"
                    applicationLink="https://www.jonathanbcarlson.com/CS174A-Project/"
                />
            </div>
        </div>
    );
};

export default ProjectList;
