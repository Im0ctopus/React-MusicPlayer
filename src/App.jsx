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

  useEffect(() => {
    setPlayingSong(new Audio(music[currentSong].file));
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
      console.log(playingSong.currentTime)
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
      <div className="card">
        <button onClick={handleBack}>Back</button>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default App
