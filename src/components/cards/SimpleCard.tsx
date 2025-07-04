import type { JSX } from "react";
import { Card, CardHeader } from "../ui/card";

interface SimpleCardProps {
    title: string;
    icon: JSX.Element;
}

export default function SimpleCard({ title, icon }: SimpleCardProps) {
    return (
        <Card className="xyz-nested">
            <CardHeader>
                <span className="flex flex-col items-center justify-center gap-3">
                    {icon}
                    <h2>{title}</h2>
                </span>
            </CardHeader>
        </Card>
    );
}