import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-blue-500 p-4">
            <nav className="flex justify-between items-center">
                <Link to="/" className="text-white font-bold text-lg">Home</Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/about" className="text-white">About</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="text-white">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white">Contact</Link>
                    </li>
                    <li>
                        <Link to="/resume" className="text-white">Resume</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
