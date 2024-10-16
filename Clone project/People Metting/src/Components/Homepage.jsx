import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Homepage.css'; // Ensure you have your styles ready

const Homepage = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        if (input.trim()) {
            navigate(`/room/${input}`);
        } else {
            alert("Please enter your name.");
        }
    };

    return (
        <div className="container">
            <h1>Welcome to People Meeting Room</h1>
            <p>
                Join your virtual meeting room easily by entering your name below. 
                Make sure to have your People client installed and ready for a smooth experience.
            </p>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Enter Your Name"
            />
            <button onClick={handleClick}>
                Join
            </button>
            <div className="info-section">
                <h2>How to Use:</h2>
                <ul>
                    <li>Enter your name in the input box.</li>
                    <li>Click "Join" to enter the meeting room.</li>
                    <li>If you're new to people, download the app first.</li>
                </ul>
            </div>
            <div className="footer">
                <p>For any assistance, contact support at support@example.com</p>
            </div>
        </div>
    );
};

export default Homepage;
