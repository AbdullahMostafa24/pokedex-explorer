import "server-only"
import { pokemonListSchema } from "./schemas";

const BASE = "https://pokeapi.co/api/v2";

// custom Error
export class PokeApiError extends Error {
    constructor(public status: number) {
        super(`PokeAPI responded with ${status}`);
    }
}

// get all pokemons
export async function listPokemon({ page = 1, limit = 24 } = {}) {
    const offset = (page - 1) * limit;
    console.log(`${BASE}/pokemon?limit=${limit}&offset=${offset}`)
    const res = await fetch(`${BASE}/pokemon?limit=${limit}&offset=${offset}`, {
        next: { revalidate: 86400, tags: ["pokemon"] },
    });
    if (!res.ok) throw new PokeApiError(res.status);
    const { count, results } = pokemonListSchema.parse(await res.json());
    return { results, totalPages: Math.ceil(count / limit) };
}