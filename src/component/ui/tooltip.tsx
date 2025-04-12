import * as React from "react";
import * as PrimitiveTooltip from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

function ToolitpProvider({
  children,
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof PrimitiveTooltip.Provider>) {
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

function Tooltip({
  ...props
}: React.ComponentProps<typeof PrimitiveTooltip.Root>) {
  return (
    <ToolitpProvider>
      <PrimitiveTooltip.Root data-slot="tooltip" {...props} />
    </ToolitpProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof PrimitiveTooltip.Trigger>) {
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
}: React.ComponentProps<typeof PrimitiveTooltip.Content> &
  VariantProps<typeof tootltipContentVariant>) {
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
