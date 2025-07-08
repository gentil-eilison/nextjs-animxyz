import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { XyzTransition } from "@animxyz/react";

export default function Header() {
  return (
    <XyzTransition appearVisible xyz="fade small stagger ease-out-back">
      <header className="xyz w-full min-h-60 flex flex-col items-center justify-center bg-[#333333] gap-6 px-6 py-8 text-white text-center">
        <Avatar className="w-32 h-32 shadow-lg">
          <AvatarImage src="/images/headphone-profile.jpg" />
          <AvatarFallback>HP</AvatarFallback>
        </Avatar>
        <p className="text-lg font-medium tracking-wide">Music is life. Play it anywhere.</p>
      </header>
    </XyzTransition>
  );
}
