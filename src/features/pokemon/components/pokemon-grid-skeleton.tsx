import { Skeleton } from "@/components/ui/skeleton";

type Props = {
    count?: number;
}

export function PokemonGridSkeleton({ count = 24 }: Props) {
    return (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: count }, (_, i) => (
                <li key={i}>
                    <Skeleton className="h-56 w-full rounded-xl" />
                </li>
            ))}
        </ul>
    )
}