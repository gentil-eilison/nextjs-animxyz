import { XyzTransition } from "@animxyz/react";

export default function FeaturedArtist() {
  return (
    <section className="px-6"> 
      <XyzTransition appear xyz="fade flip-up duration-6">
        <div className="xyz-nested bg-[#2B2B2B] rounded-xl p-6 flex flex-col md:flex-row items-center gap-10 text-white w-full">
          <img
            src="/images/headphone-profile.jpg"
            alt="Album Cover"
            className="w-full md:w-36 h-36 rounded-xl object-cover"
          />
          <div className="flex flex-col space-y-4 text-center md:text-left md:py-2 md:px-4 w-full">
            <h3 className="text-xl font-semibold">Arctic Sound</h3>
            <p className="text-sm text-gray-400">New album out now!</p>
            <button className="bg-white text-black px-4 py-1.5 rounded text-xs w-fit mx-auto md:mx-0">
              ▶ Play All
            </button>
          </div>
        </div>
      </XyzTransition>
    </section>
  );
}
