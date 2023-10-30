import React, { useEffect, useMemo, useState } from "react"
import Slider from './components/Slider'
import Buttons from "./components/Buttons";

function App() {
  const [music, setMusics] = useState([
    {
      name: "Fato treino do City",
      singer: "Sippinpurp",
      img: "https://i.scdn.co/image/ab67616d00001e02dc87d4789265ae3d88e170fe",
      file: "/Music/Sippinpurpp  Fato treino do City.mp3"
    },
    {
      name: "FAKE LOVE",
      singer: "Lon3r Johny",
      img: "https://i.scdn.co/image/ab67616d00001e027dd4b250a22df1baa689bec4",
      file: "/Music/FAKE LOVE.mp3"
    },
    {
      name: "Lamborghini",
      singer: "KSI",
      img: "https://i.scdn.co/image/ab67616d00001e025fcf0f30f06000bfb5cd1454",
      file: "/Music/KSI  Lamborghini Explicit ft P Money.mp3"
    },
  ])

  const [currentSong, setCurrentSong] = useState(0);
  const [playingSong, setPlayingSong] = useState(new Audio(music[currentSong].file));
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicDuration, setMusicDuration] = useState(0);
  const [minPlaying, setMinPlaying] = useState(playingSong.currentTime);

  useEffect(() => {
    setPlayingSong(new Audio(music[currentSong].file));
    playingSong.preload = "metadata";
  }, [currentSong]);

  useEffect(() => {
    if (isPlaying) playingSong.play();
  }, [playingSong]);

  function handlePlay() {
    if (isPlaying) {
      playingSong.pause();
      setIsPlaying(false);
    } else {
      playingSong.play();
      setIsPlaying(true);
    }
  }

  function handleBack() {
    setIsPlaying(true);
    if (playingSong.currentTime <= 2) {
      playingSong.pause();
      if (currentSong == 0) setCurrentSong((music.length - 1))
      else setCurrentSong(currentSong - 1);
    } else playingSong.currentTime = 0;
  }

  function handleNext() {
    setIsPlaying(true);
    playingSong.pause();
    if (currentSong == (music.length - 1)) setCurrentSong(0)
    else setCurrentSong(currentSong + 1);
  }

  function handleTimeChange(time) {
    playingSong.currentTime = time;
  }

  return (
    <>
      <div className="bigCard">
        <img src={music[currentSong].img} alt="" />
        <Buttons handlePlay={handlePlay} handleBack={handleBack} handleNext={handleNext} />
        <Slider playingSong={playingSong} isPlaying={isPlaying} handleTimeChange={handleTimeChange} handleNext={handleNext} />
      </div>
    </>
  )
}

export default App
