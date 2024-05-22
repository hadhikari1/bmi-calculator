import React, { useState } from 'react';
import '../css/HeaderComponent.css';
export default function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = () => {
        setIsOpen(!isOpen);
    };
    return(
        <header>
            <div onClick={handleChange}
                className="hamburger">&#9776;
            </div>
            <h1>BMI Calculator</h1>
            {isOpen && (
                <div className="dropdown-menu">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            )}
        </header>
    );
}