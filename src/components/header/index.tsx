
import React from "react";

const Header = () => {
    return (
        <header className="bg-gray-800 py-2">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-lg font-bold">Merkle Users</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
