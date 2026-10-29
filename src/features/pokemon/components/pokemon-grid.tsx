import { PokemonSummary } from "../schemas"
import { PokemonCard } from "./pokemon-card";

type Props = {
    items: PokemonSummary[];
}

export function PokemonGrid({ items }: Props) {
    if (items.length === 0) {
        return <p className="py-12 text-center text-muted-foreground">No Pokemon found.</p>
    }
    return (
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((p) => (
                <li key={p.id}>
                    <PokemonCard pokemon={p} />
                </li>
            ))}
        </ul>
    )
}