import { Suspense } from "react";
import { listPokemon } from "@/features/pokemon/api";
import { PokemonGrid } from "@/features/pokemon/components/pokemon-grid";
import { PokemonGridSkeleton } from "@/features/pokemon/components/pokemon-grid-skeleton";

async function PokemonResults() {
    const { results } = await listPokemon();
    return <PokemonGrid items={results} />;
}

export default function Home() {
    return (
        <main className="mx-auto max-w-6xl p-6">
            <h1 className="mb-6 text-3xl font-bold">Pokédex Explorer</h1>
            <Suspense fallback={<PokemonGridSkeleton />}>
                <PokemonResults />
            </Suspense>
        </main>
    );
}
