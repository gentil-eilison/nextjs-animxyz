import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { XyzTransition } from "@animxyz/react";

export default function Header() {
    return (
        <XyzTransition appearVisible xyz="fade small stagger ease-out-back">
            <header className="xyz grow-2 flex flex-col items-center justify-center bg-[#333333] gap-4 rounded">
                <Avatar className="w-32 h-32">
                    <AvatarImage src="/images/headphone-profile.jpg" />
                    <AvatarFallback>HP</AvatarFallback>
                </Avatar>
                <p>Music is life. Play it anywhere.</p>
            </header>
        </XyzTransition>
    );
}