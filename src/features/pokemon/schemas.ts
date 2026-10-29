import { z } from "zod";

// get pokemonId from URL 
const idFromUrl = (url: string) => Number(url.split("/").filter(Boolean).pop());

// convert API output {name, URL} into UI need {id, name}
export const pokemonSummarySchema = z
    .object({ name: z.string(), url: z.string() })
    .transform(({ name, url }) => ({ id: idFromUrl(url), name }));

// list of pokemons
export const pokemonListSchema = z.object({
    count: z.number(),
    results: z.array(pokemonSummarySchema),
});

// export type
export type PokemonSummary = z.infer<typeof pokemonSummarySchema>;