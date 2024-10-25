import { WORLD_STATES } from "@utils/constants";
import { Button } from "antd";
import React, { useRef, useState } from "react";
import audioTheme from "../../media/theme.mp3";
import { Hedgehog } from "../LivingBeings/Hedgehog";
import { Tree } from "../LivingBeings/Tree";
import "./App.scss";

function App() {
  const worldStates = Object.entries(WORLD_STATES);

  const [worldState, setWorldState] = useState(2);

  return (
    <>
      {/* <AudioTheme></AudioTheme> */}
      <AudioPlayer></AudioPlayer>
      {/* <header>спаси ежа</header>
      <Hedgehog size={200} state={worldState} />
      <Tree size={190} state={worldState} />
      <br />
      {worldStates.map(([id, worldState]) => {
        return (
          <Button
            key={id}
            onClick={() => {
              setWorldState(id);
            }}
          >
            {worldState}
          </Button>
        );
      })} */}
    </>
  );
}

function AudioTheme() {
  const [musicMode, setMusicMode] = useState(false);
  const audioRef = useRef(null);
  return (
    <div>
      <audio muted loop ref={audioRef}>
        <source src={audioTheme} type="audio/mpeg" />
      </audio>
      <button
        onClick={() => {
          setMusicMode((prev) => !prev);
          musicMode ? audioRef.current.pause() : audioRef.current.play();
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          console.log(1);
        }}
      >
        {musicMode ? "Включено" : "Выключено"}
      </button>
    </div>
  );
}

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (event) => {
    event.preventDefault();
    setMenuPosition({ x: event.pageX, y: event.pageY });
    setShowControls(true);
  };

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const handleClickOutside = () => {
    setShowControls(false);
  };

  // Handle clicks anywhere in the window to close the context menu
  React.useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      1
      <audio
        controls
        ref={audioRef}
        src={audioTheme}
        preload="auto"
        onContextMenu={handleContextMenu}
      />
      {showControls && (
        <div
          style={{
            position: "absolute",
            left: menuPosition.x,
            top: menuPosition.y,
            background: "white",
            border: "1px solid #ccc",
            padding: "10px",
            zIndex: 10,
          }}
        >
          <button onClick={playAudio}>Play</button>
          <button onClick={pauseAudio}>Pause</button>
          <button onClick={stopAudio}>Stop</button>
        </div>
      )}
    </div>
  );
};

export default App;
