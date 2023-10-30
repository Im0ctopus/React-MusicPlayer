import { musicLogic } from "../../hooks/MusicLogic";

function Buttons() {
    const {
        music,
        currentSong,
        isPlaying,
        handlePlay,
        handleBack,
        handleNext,
    } = musicLogic();
    return (
        <div className="buttons">
            <button onClick={handleBack}>back</button>
            <button onClick={handlePlay}>play</button>
            <button onClick={handleNext}>next</button>
        </div>
    );
}

export default Buttons;