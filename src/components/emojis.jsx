import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext.jsx";

const Emoji = () => {
    const { currentMood, setCurrentMood } = useContext(AppContext);

    const moodToEmoji = {
        sad: "😢",
        fine: "😐",
        happy: "😄",
    };

    return (
        <div>
            <h2>Current Mood: {moodToEmoji[currentMood]}</h2>
            <ul>
                {compliments.map((compliment, index) => {
                    return <li key={index}>{compliment}</li>;
                })}
            </ul>
        </div>
    );
};

export default Emoji;