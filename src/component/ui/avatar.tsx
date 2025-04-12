import * as React from 'react'
import * as PrimitiveAvatar from "@radix-ui/react-avatar";
import { cn } from "@/utils/cn";

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof PrimitiveAvatar.Root> & {
  className?: string;
}) {
  return (
    <PrimitiveAvatar.Root
      data-slot="avatar"
      className={cn("", className)}
      {...props}
    />
  );
}


function AvatarImage({ className="", ...props }:React.ComponentProps<typeof PrimitiveAvatar.AvatarImage> & {
  className?:string
}) {
  return (
      <PrimitiveAvatar.AvatarImage
        data-slot="avatar-image"
        className={cn("", className)}
        {...props}
      />
  );
}


function AvatarFallBack({className, delayMs=1,...props}: React.ComponentProps<typeof PrimitiveAvatar.Fallback>&{
  delayMs?:number,
  className?:string
}){
    return (
      <PrimitiveAvatar.Fallback
        data-slot="avatar-fallback"
        className={cn("", className)}
        delayMs={delayMs}
        {...props}
      />
    );
}

export {Avatar,AvatarFallBack,AvatarImage}