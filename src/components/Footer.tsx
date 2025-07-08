import { useEffect, useState } from "react";
import { Play, Pause } from "lucide-react";
import { XyzTransition, XyzTransitionGroup } from "@animxyz/react";

export default function FooterPlayer() {
  const [barHeights, setBarHeights] = useState([10, 20, 15, 25, 12]);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setBarHeights(
        Array(5)
          .fill(0)
          .map(() => Math.floor(Math.random() * 30 + 10))
      );
    }, 300);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  return (
    <footer className="relative flex items-center justify-between px-6 py-3 bg-[#1e1e1e] rounded-b-lg">
  
      <XyzTransition appear xyz="pop duration-10 ease-out">
        <img
          src="/images/headphone-profile.jpg"
          alt="Album Cover"
          className="w-10 h-10 rounded"
        />
      </XyzTransition>

      <XyzTransition appear xyz="fade left small stagger duration-8 ease-out" className="text-white ml-1">
        <div>
          <p className="text-sm font-semibold leading-tight">Blinding Lights</p>
          <p className="text-xs text-gray-400 leading-tight">The Weeknd</p>
        </div>
      </XyzTransition>

      <XyzTransitionGroup
        appear
        xyz="fade small stagger duration-7 ease-out"
        className="hidden md:flex items-end gap-[3px] h-10 w-20 mx-4"
      >
        {barHeights.map((h, i) => (
          <div
            key={i}
            className="w-[4px] bg-green-400 rounded-full"
            style={{
              height: `${isPlaying ? h : 6}px`,
              transition: "height 0.3s ease",
            }}
          />
        ))}
      </XyzTransitionGroup>

      <button
        onClick={togglePlay}
        className="text-white text-lg bg-[#2a2a2a] p-2 rounded-full hover:bg-[#3a3a3a] transition"
      >
        <XyzTransition xyz="pop duration-5 ease-in-out" key={isPlaying ? "pause" : "play"}>
          {isPlaying ? <Pause /> : <Play />}
        </XyzTransition>
      </button>
    </footer>
  );
}
