import * as PrimitiveCheckbox from '@radix-ui/react-checkbox'
import {cn} from '@/utils/cn'
import { CheckIcon } from "lucide-react";
import {cva, type VariantProps} from 'class-variance-authority'

// TODO: Create a variants of checkbox
const checkboxVariants = cva(
  "flex size-[25px] appearance-none items-center justify-center rounded bg-white",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);


function Checkbox({className="", variant="default", ...props}){
    return (
      <PrimitiveCheckbox.Root
        data-slot="checkbox"
        className={cn(checkboxVariants({ variant, className }))}
      >
        <PrimitiveCheckbox.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center text-current transition-none"
        >
          <CheckIcon />
        </PrimitiveCheckbox.Indicator>
      </PrimitiveCheckbox.Root>
    );
}

export {Checkbox};