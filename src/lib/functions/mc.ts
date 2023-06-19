import type { ClassValue } from "clsx";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const mc = (...classes: ClassValue[]) => twMerge(clsx(...classes));
