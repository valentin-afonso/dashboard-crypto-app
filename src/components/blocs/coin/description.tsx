import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Description = ({ description }: { description: string }) => {
  const preview = description.slice(0, 300);

  return (
    <div className="flex flex-col gap-2 my-4">
      <p className="text-sm text-black/60">{`${preview}...`}</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="w-max">
            Read more
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:w-[80%] sm:max-w-full">
          <DialogHeader>
            <DialogTitle className="text-black">About</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
