import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariant = cva("", {
  variants: {
    variant: {
      default: "border",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Input({ type = "text", variant="default" , className="", ...props }) {
  return (
    <input
      data-slot="input"
      className={cn(inputVariant({ variant, className }))}
      type={type}
      {...props}
    />
  );
}

export { Input };
