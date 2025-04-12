import * as PrimitiveLabel from "@radix-ui/react-label";
import { cn } from "@/utils/cn";

function Label({ className="", ...props }) {
  return (
    <PrimitiveLabel.Root
      data-slot="label"
      className={cn(
        "text-[15px] font-medium leading-[35px] text-white",
        className
      )}
      {...props}
    />
  );
}

export { Label };
