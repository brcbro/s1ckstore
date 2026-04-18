import Link from "next/link";
import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "gold" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type AnchorProps = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className">;

type ButtonProps = CommonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className">;

type Props = AnchorProps | ButtonProps;

const base =
  "inline-flex items-center justify-center font-sans font-semibold uppercase tracking-[0.18em] transition-all duration-300 whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  gold:
    "bg-gold text-ink hover:bg-gold-bright active:bg-gold shadow-[0_0_0_0_rgba(201,169,97,0)] hover:shadow-[0_0_32px_-4px_rgba(201,169,97,0.6)]",
  ghost:
    "bg-transparent text-ivory hover:text-gold",
  outline:
    "border border-gold/50 text-gold hover:bg-gold hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "text-[11px] px-5 h-10",
  md: "text-xs px-7 h-12",
  lg: "text-sm px-10 h-14",
};

export function Button(props: Props) {
  const {
    children,
    variant = "gold",
    size = "md",
    className,
    ...rest
  } = props;
  const cls = clsx(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorProps;
    return (
      <Link href={href} className={cls} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
