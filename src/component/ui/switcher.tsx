import * as React from "react";
import * as PrimitiveSwitch from "@radix-ui/react-switch";
import { cn } from "@/utils/cn";

function Switch({ className, ...props }:React.ComponentProps<typeof PrimitiveSwitch.SwitchThumb>) {
  return (
    <PrimitiveSwitch.Root data-slot="switch" className={cn("", className)}>
      <PrimitiveSwitch.SwitchThumb
        data-slot="switch-thumb"
        className={cn("")}
        {...props}
      />
    </PrimitiveSwitch.Root>
  );
}

export { Switch };
