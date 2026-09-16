import Link from "next/link";
import { cn } from "@/lib/utils";
type Props = { href: string; children: React.ReactNode; variant?: "primary" | "secondary"; className?: string };
export function Button({ href, children, variant = "primary", className }: Props) {
  return <Link className={cn("button", variant === "secondary" && "button-secondary", className)} href={href}>{children}</Link>;
}
