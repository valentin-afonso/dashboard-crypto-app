import { Skeleton } from "@/components/ui/skeleton";

export const CoinTEaserSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 max-w-full px-4">
      <Skeleton className="h-[45px] w-2/3 mt-2" />
      <Skeleton className="h-[120px] w-full" />
    </div>
  );
};
