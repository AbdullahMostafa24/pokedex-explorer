"use client";

import { Button } from "@/components/ui/button";

type Props = {
    reset: () => void;
}

export default function Error({ reset }: Props) {
    return (
        <div className="mx-auto max-w-md space-y-4 p-12 text-center">
            <h2 className="text-xl font-semibold">Couldn't load Pokémon</h2>
            <p className="text-muted-foreground">The API may be down. Please try again.</p>
            <Button onClick={reset}>Try again</Button>
        </div>
    )
}