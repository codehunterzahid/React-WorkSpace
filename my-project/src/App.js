import { useState } from "react";
import Background from "./Components/Background/background"; // Note capital 'B'
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";

export const App = () => {
    let heroData = [
        { text1: "Dive in", text2: "That you Love to do" },
        { text1: "Indulge", text2: "Your passion" },
        { text1: "Give in to", text2: "Your Passion" }
    ];

    const [heroCount, setHeroCount] = useState(2);
    const [playStatus, setPlayStatus] = useState(false);

    return (
        <div>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <Navbar />
            <Hero 
                setPlayStatus={setPlayStatus}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                heroData={heroData[heroCount]}
                playStatus={playStatus}
            />
        </div>
    );
};

export default App;
