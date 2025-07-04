import { Disc3, Headphones, Music } from "lucide-react";
import SimpleCard from "./SimpleCard";

export default function SimpleCards() {
    return (
        <div className="grid grid-cols-3 gap-10">
            <SimpleCard title="Albums" icon={<Disc3 />} />
            <SimpleCard title="Songs" icon={<Music />} />
            <SimpleCard title="Artists" icon={<Headphones />} />
        </div>
    );
}