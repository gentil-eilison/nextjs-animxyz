import { Disc3, Headphones, Music } from "lucide-react";
import SimpleCard from "./SimpleCard";

import { XyzTransition } from "@animxyz/react";

export default function SimpleCards() {
    return (
        <XyzTransition appearVisible xyz="fade flip-down stagger duration-10 delay-2 ease-out-back">
            <div className="grid grid-cols-3 gap-10">
                <SimpleCard title="Albums" icon={<Disc3 />} />
                <SimpleCard title="Songs" icon={<Music />} />
                <SimpleCard title="Artists" icon={<Headphones />} />
            </div>
        </XyzTransition>
    );
}