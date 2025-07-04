import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
    return (
        <header className="border-2 border-purple-500 grow-2 flex flex-col items-center justify-center gap-4">
            <Avatar className="w-32 h-32">
                <AvatarImage src="/images/headphones-profile.jpg" />
                <AvatarFallback>HP</AvatarFallback>
            </Avatar>
            <p>Curabitur blandit tempus porttitor. Morbi leo risus.</p>
        </header>
    );
}