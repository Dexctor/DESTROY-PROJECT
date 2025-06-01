import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine les classes CSS avec clsx et tailwind-merge
 * @param inputs - Les classes CSS à combiner
 * @returns Les classes CSS combinées et optimisées
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 