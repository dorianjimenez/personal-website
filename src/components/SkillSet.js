import React from "react";
import SkillList from "./SkillList";

const SkillSet = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            <SkillList
                title="Frontend"
                skills={[
                    { name: "React", experience: "(2 YOE)" },
                    { name: "Redux", experience: "(2 YOE)" },
                    { name: "React Native", experience: "(1 YOE)" },
                    { name: "Tailwind CSS", experience: "(1 YOE)" },
                ]}
            />
            <SkillList
                title="Backend"
                skills={[
                    { name: "AWS", experience: "Certified SAA" },
                    { name: "SQL", experience: "(3 YOE, primarily PostgreSQL)" },
                    { name: "Firebase", experience: "(2 YOE)" },
                    { name: "NoSQL", experience: "(2 YOE, primarily Firestore)" },
                    { name: "Python Flask", experience: "(2 YOE)" },
                    { name: "Java Spring", experience: "(2 YOE)" },
                    { name: "Microservices", experience: "(2 YOE)" },
                    { name: "REST APIs", experience: "(2 YOE)" },
                ]}
            />
            <SkillList
                title="Miscellaneous"
                skills={[
                    { name: "Git", experience: "(4 YOE)" },
                    { name: "IoT", experience: "(4 YOE)" },
                    { name: "Docker", experience: "(2 YOE)" },
                    { name: "Networking", experience: "(2 YOE)" },
                    { name: "ML", experience: "primarily CV" },

                ]}
            />
            <SkillList
                title="Languages"
                skills={[
                    { name: "Python", experience: "(4 YOE)" },
                    { name: "C++", experience: "(4 YOE)" },
                    { name: "JavaScript", experience: "(2 YOE)" },
                    { name: "Java", experience: "(2 YOE)" },
                ]}
            />




        </div>
    );
};

export default SkillSet;
