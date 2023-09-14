import React from "react";

const Skill = ({ name, experience }) => {
    return (
        <li className="mb-1">
            <span className="mb-1 text-l lg:text-xl font-normal">{name}</span>
            {experience && (
                <span className="text-sm text-gray-500 ml-2">{experience}</span>
            )}
        </li>
    );
};

const SkillList = ({ title, skills }) => {
    return (
        <div className="w-full lg:w-1/4 p-4 ml-3 lg:ml-0 lg:pt-10">
            <h2 className="text-3xl font-semibold mb-2">{title}</h2>
            <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                    <Skill key={index} name={skill.name} experience={skill.experience} />
                ))}
            </ul>
        </div>
    );
};

export default SkillList;
