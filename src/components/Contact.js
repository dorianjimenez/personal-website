import React from "react";

const Contact = () => {
    return (
        <div className="flex">
            {/* Left Part for Email */}
            <div className="w-1/2 p-4">
                <h2 className="text-2xl font-semibold mb-2">Email</h2>
                <p className="text-lg font-normal text-gray-600 mb-2">djimenez (at) cs (dot) ucla (dot) edu</p>
            </div>

            {/* Right Part for Phone Number */}
            <div className="w-1/2 p-4">
                <h2 className="text-2xl font-semibold mb-2">Phone Number</h2>
                <p className="text-lg font-normal text-gray-600 mb-2">+1 (661) 381-1483</p>
            </div>
        </div>
    );
};

export default Contact;
