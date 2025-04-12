import {cn} from "@/utils/cn.ts";
import { cva, type VariantProps } from "class-variance-authority";
import {Slot} from '@radix-ui/react-slot'

export const buttonVariants = cva(
  "inline-flex gap-2 item-center text-white text-white justify-center px-4 py-3 rounded-full text-bold rounded-md shadow-md shadow-neutral-200 dark:shadow-neutral-800 transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-500 dark:text-white",
        secondary: "bg-accent-500 hover:bg-accent-600 text-white",
        destructive: "bg-error-500 hover:bg-error-600 text-white",
        outline:
          "border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-white",
        icon: "bg-primary-500 hover:bg-primary-600 text-white dark:bg-primary-400 dark:hover:bg-primary-500 dark:text-white",
        withIcon:
          "bg-primary-500 hover:bg-primary-600 text-white dark:bg-primary-400 dark:hover:bg-primary-500 dark:text-white",
      },
      size: {
        sm: "text-body-sm px-3 py-1.5",
        md: "text-body-md px-4 py-2",
        lg: "text-body-lg px-5 py-2.5",
      },
      defaultVariants: {
        variant: "default",
        size: "md",
      },
    },
  }
);

const Button = ({
  variant="default", 
  size="md",
  className="", 
  asChild=false,
  ...props}) => {
  
  const Comp = asChild ?  Slot: "button";

  return (
    <Comp data-slot="button" className={cn(buttonVariants({variant, size, className}))} {...props} />
  );
};

export default Button;



