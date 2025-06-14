import * as React from 'react'
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const badgesVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Badges({ className, variant = "default", asChild = false, ...props }:React.ComponentProps<"span"> & VariantProps<typeof badgesVariants> & {
  asChild?:boolean
} ) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      data-slot="badges"
      className={cn(badgesVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Badges };
