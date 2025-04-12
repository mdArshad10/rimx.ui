import * as PrimitiveTooltip from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

function ToolitpProvider({children, delayDuration = 0, ...props }) {
  return (
    <PrimitiveTooltip.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    >
        {children}
    </PrimitiveTooltip.Provider>
  );
}

function Tooltip({ ...props }) {
  return (
    <ToolitpProvider>
      <PrimitiveTooltip.Root data-slot="tooltip" {...props} />
    </ToolitpProvider>
  );
}

function TooltipTrigger({ ...props }) {
  return <PrimitiveTooltip.Trigger data-slot="tooltip-trigger" {...props} />;
}

const tootltipContentVariant = cva(
  "select-none rounded bg-white px-[15px] py-2.5 text-[15px]",
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

function TooltipContent({
  children,
  variant = "default",
  className,
  sideOffset = 5,
  ...props
}) {
  return (
    <PrimitiveTooltip.Portal data-slot="tooltip-portal">
      <PrimitiveTooltip.Content
        data-slot="tooltip-content"
        className={cn(tootltipContentVariant({ variant, className }))}
        sideOffset={sideOffset}
        {...props}
      >
        {children}
        <PrimitiveTooltip.Arrow className="" />
      </PrimitiveTooltip.Content>
    </PrimitiveTooltip.Portal>
  );
}

export { ToolitpProvider, Tooltip, TooltipContent, TooltipTrigger };
