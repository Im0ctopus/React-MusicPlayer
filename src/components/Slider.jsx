import { useEffect, useState } from "react";

function Slides({ playingSong, isPlaying, handleTimeChange, handleNext }) {
    const min = parseInt((playingSong.duration ? playingSong.duration : 0) / 60);
    var sec = parseInt((playingSong.duration ? playingSong.duration : 0) - (min * 60));
    if (sec < 10) sec = '0' + sec;
    const [minPl, setMinPl] = useState('0');
    const [secPl, setSecPl] = useState('00');
    const [totalPl, setTotalPl] = useState(0);


    const timer = 500;
    useEffect(() => {
        const counter = setInterval(() => {
            setTotalPl(parseInt(playingSong.currentTime))
            setMinPl(parseInt(playingSong.currentTime / 60))
            const secCheck = parseInt(playingSong.currentTime % 60);
            if (secCheck < 10) setSecPl('0' + secCheck)
            else setSecPl(secCheck);
            if (playingSong.currentTime == playingSong.duration && playingSong.duration > 0) handleNext();
        }, timer);
        return () => clearInterval(counter);
    }, [isPlaying, playingSong])

    return (
        <div className="slider">
            <input type="range" min={0} max={playingSong.duration ? playingSong.duration : 0} value={totalPl} onChange={(e) => handleTimeChange(e.target.value)} />
            <p className="current">{minPl}:{secPl}</p>
            <p className="end">{min}:{sec}</p>
        </div>);
}

export default Slides;