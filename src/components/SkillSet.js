import React from "react";
import SkillList from "./SkillList";

const SkillSet = () => {
    return (
        <div className="flex">
            <SkillList
                title="Languages"
                skills={[
                    { name: "Python", experience: "(4 YOE)" },
                    { name: "C++", experience: "(4 YOE)" },
                    { name: "SQL", experience: "(3 YOE)" },
                    { name: "JavaScript", experience: "(2 YOE)" },
                    { name: "Java", experience: "(2 YOE)" },
                ]}
            />
            <SkillList
                title="Backend"
                skills={[
                    { name: "AWS", experience: "Certified SAA" },
                    { name: "Firebase", experience: "(3 YOE)" },
                    { name: "Python Flask", experience: "(2 YOE)" },
                    { name: "Java Spring", experience: "(2 YOE)" },
                    { name: "Microservices", experience: "(2 YOE)" },
                    { name: "REST APIs", experience: "(2 YOE)" }
                ]}
            />
            <SkillList
                title="Frontend"
                skills={[
                    { name: "React", experience: "(2 YOE)" },
                    { name: "Redux", experience: "(2 YOE)" },
                    { name: "React Native", experience: "(1 YOE)" },
                    { name: "Tailwind", experience: "(1 YOE)" },
                ]}
            />
            <SkillList
                title="Miscellaneous"
                skills={[
                    { name: "Git", experience: "(4 YOE)" },
                    { name: "IoT", experience: "(4 YOE)" },
                    { name: "Docker", experience: "(2 YOE)" },
                    { name: "Networking", experience: "(2 YOE)" },
                    { name: "ML", experience: "primarily CV" }
                ]}
            />
        </div>
    );
};

export default SkillSet;
