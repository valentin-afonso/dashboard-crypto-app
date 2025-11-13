import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Categories = ({ categories }: { categories: string[] }) => {
  return (
    <Carousel className="w-full max-w-[90%] mb-4 mx-auto py-4">
      <CarouselContent>
        {categories.map((category, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-auto pl-2">
            <div className="text-[.65rem] text-black/60 bg-black/5 rounded-full px-2 py-1 whitespace-nowrap">
              {category}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  );
};
