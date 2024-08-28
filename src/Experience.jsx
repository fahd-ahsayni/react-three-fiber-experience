import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import App from "./App";

import Loading from "./loader/Loading";
import ControlButtons from "./ControlButtons";
import spaceAudio from "./assets/audio/space.mp3";

import btnControls from "./assets/btnControls";
import {
  FaArrowRightLong,
  FaArrowUpLong,
  FaArrowLeftLong,
  FaArrowDownLong,
} from "react-icons/fa6";

const Btn = ({ children }) => (
  <div className="h-full flex items-center justify-center w-1/3 bg-white/10 border border-white/60 rounded-lg">
    {children}
  </div>
);

export default function Experience() {
  const [isMuted, setIsMuted] = useState(false);
  const audio = useMemo(() => {
    const newAudio = new Audio(spaceAudio);
    newAudio.loop = true;
    newAudio.muted = true;
    return newAudio;
  }, []);

  useEffect(() => {
    audio.muted = isMuted;
    if (!isMuted) {
      audio.play();
    }
  }, [isMuted, audio]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Canvas>
          <App />
        </Canvas>
        <ControlButtons />
      </Suspense>
      <div className="md:not-sr-only sr-only">
        <div className="absolute bottom-10 left-10">
          <div className="w-52 h-36 flex flex-col gap-2">
            <div className="w-full h-1/2 flex justify-center gap-2">
              <div className="h-full w-1/3" />
              <Btn>
                <FaArrowUpLong className="text-white/60" />
              </Btn>
              <div className="h-full w-1/3" />
            </div>
            <div className="w-full h-1/2 flex justify-center gap-2">
              <Btn>
                <FaArrowLeftLong className="text-white/60" />
              </Btn>
              <Btn>
                <FaArrowDownLong className="text-white/60" />
              </Btn>
              <Btn>
                <FaArrowRightLong className="text-white/60" />
              </Btn>
            </div>
            <div className="flex h-16 w-42 items-center justify-center bg-white/10 border border-white/60 rounded-lg">
              <h4 className="text-white">Speed</h4>
            </div>
          </div>
        </div>
      </div>

      <button
        className={`hover:scale-105 opacity-30 hover:opacity-60 transition-all absolute right-5 top-5 p-2`}
        onClick={toggleMute}
      >
        <img
          src={isMuted ? btnControls.soundMute : btnControls.soundPlay}
          className="w-12 h-12 object-contain pointer-events-none"
        />
      </button>
    </>
  );
}
