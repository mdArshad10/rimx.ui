import * as React from 'react'
import { cn } from "@/utils/cn.ts";
import * as PrimitiveAccordin from "@radix-ui/react-accordion";
import {ChevronDownIcon} from 'lucide-react'

function Accordion({ ...props }:React.ComponentProps<typeof PrimitiveAccordin.Root>) {
  return <PrimitiveAccordin.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }:React.ComponentProps<typeof PrimitiveAccordin.Item>) {
  return (
    <PrimitiveAccordin.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({ children, className, ...props }: React.ComponentProps<typeof PrimitiveAccordin.Trigger>) {
  return (
    <PrimitiveAccordin.Header className="flex">
      <PrimitiveAccordin.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </PrimitiveAccordin.Trigger>
    </PrimitiveAccordin.Header>
  );
}

function AccordionContent({ className, children, ...props }:React.ComponentProps<typeof PrimitiveAccordin.Content>) {
  return (
    <PrimitiveAccordin.Content
      data-slot="accordion-content"
      className=""
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </PrimitiveAccordin.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
