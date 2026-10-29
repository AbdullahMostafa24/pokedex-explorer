import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PokemonSummary } from "../schemas"
import { artworkUrl } from "../utils";

type Props = {
    pokemon: PokemonSummary;
}

export function PokemonCard({ pokemon }: Props) {
    return (
        <Card className="transition hover:-translate-y-1 hover:shadow-md">
            <CardContent className="flex flex-col items-center gap-2 p-4">
                <Image src={artworkUrl(pokemon.id)} alt={pokemon.name} width={160} height={160} />
                <span className="text-xs text-muted-foreground">
                    #{String(pokemon.id).padStart(4, "0")}
                </span>
                <span className="font-medium capitalize">{pokemon.name}</span>
            </CardContent>
        </Card>
    )
}