import { XyzTransition } from "@animxyz/react";

const headerImage = "/images/headphone-profile.jpg";

const cards = [
  { id: 1, title: "Lo-fi Beats", cover: headerImage, subtitle: "Playlist" },
  { id: 2, title: "Indie Rock", cover: headerImage, subtitle: "Album" },
  { id: 3, title: "Jazz Essentials", cover: headerImage, subtitle: "Artist" },
];

export default function DiscoverSection() {
  return (
    <section className="mt-6 px-6">
      <XyzTransition appearVisible xyz="fade flip-down stagger duration-10 delay-2 ease-out-back">
        <div className="grid grid-cols-3 gap-10 max-w-full">
          {cards.map(({ id, title, cover, subtitle }) => (
            <div
              key={id}
              className="bg-[#2F2F2F] rounded-md cursor-pointer hover:bg-[#3a3a3a] transition-colors duration-200 overflow-hidden"
            >
              <div className="w-full h-24 rounded-t-md overflow-hidden">
                <img
                  src={cover}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-white text-sm font-semibold truncate">{title}</p>
                <p className="text-gray-400 text-xs mt-1">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </XyzTransition>
    </section>
  );
}
