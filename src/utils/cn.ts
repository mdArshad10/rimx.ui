import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export const cn = (...inputs:classValue[])=>{
    return clsx(twMerge(inputs));
}