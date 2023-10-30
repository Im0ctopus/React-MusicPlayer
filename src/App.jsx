import React, { useEffect, useMemo, useState } from "react"

function App() {
  const [music, setMusics] = useState([
    {
      name: "Fato treino do City",
      singer: "Sippinpurp",
      file: "/Music/Sippinpurpp  Fato treino do City.mp3"
    },
    {
      name: "FAKE LOVE",
      singer: "Lon3r Johny",
      file: "/Music/FAKE LOVE.mp3"
    },
    {
      name: "Lamborghini",
      singer: "KSI",
      file: "/Music/KSI  Lamborghini Explicit ft P Money.mp3"
    },
  ])

  const [currentSong, setCurrentSong] = useState(0);
  const [playingSong, setPlayingSong] = useState(new Audio(music[currentSong].file));
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicDuration, setMusicDuration] = useState(0);
  const min = parseInt(musicDuration / 60);
  const sec = parseInt(musicDuration - (min * 60));
  const [minPlaying, setMinPlaying] = useState(playingSong.currentTime);

  useEffect(() => {
    setPlayingSong(new Audio(music[currentSong].file));
    playingSong.preload = "metadata";
  }, [currentSong]);

  useEffect(() => {
    if (isPlaying) playingSong.play();
    playingSong.onloadedmetadata = () => {
      setMusicDuration(playingSong.duration);
    };
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


  return (
    <>
      <div className="buttons">
        <a onClick={handleBack}>back</a>
        <a onClick={handlePlay}>play</a>
        <a onClick={handleNext}>next</a>
      </div>
      <div className="Slider">
        <input type="range" min={0} max={musicDuration} />
        <p>{minPlaying}</p>
        <p>{min}:{sec}</p>
      </div>
    </>
  )
}

export default App
