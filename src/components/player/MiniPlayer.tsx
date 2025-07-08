import { useState } from "react";
import { XyzTransition } from "@animxyz/react";
import { Play, Pause } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function MiniPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  return (
    <XyzTransition appear xyz="fade up big delay-4 ease-in-out">
      <div className="xyz-nested bg-[#292929] text-white px-6 py-4 flex items-center gap-4 w-full mt-8">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/images/headphone-profile.jpg" />
          <AvatarFallback>HP</AvatarFallback>
        </Avatar>

        <div className="flex-1 overflow-hidden">
          <h4 className="text-sm font-semibold truncate">Now Playing</h4>
          <p className="text-xs text-gray-400 truncate">Song Name – Artist</p>
        </div>

        <XyzTransition xyz="fade flip duration-5">
          <button
            key={isPlaying ? "pause" : "play"}
            className="xyz-nested cursor-pointer"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </XyzTransition>
      </div>
    </XyzTransition>
  );
}
