import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonCommonProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonAnchorProps = ButtonCommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    disabled?: boolean;
    href: string;
  };

type ButtonNativeProps = ButtonCommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = ButtonAnchorProps | ButtonNativeProps;

const baseClasses =
  "inline-flex items-center justify-center rounded-lg font-bold transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:pointer-events-none disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:-translate-y-0.5 hover:shadow-lg",
  secondary:
    "border border-border bg-secondary text-foreground hover:border-accent hover:text-accent",
  ghost:
    "border border-border text-muted hover:border-accent hover:text-foreground",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-12 px-7 py-3 text-sm md:text-base",
  lg: "min-h-14 px-8 py-4 text-base md:text-lg",
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function omitProps(source: object, omittedKeys: string[]) {
  const result: Record<string, unknown> = {};

  for (const key in source) {
    if (!omittedKeys.includes(key)) {
      result[key] = source[key as keyof typeof source];
    }
  }

  return result;
}

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    fullWidth = false,
    size = "md",
    variant = "primary",
  } = props;

  const classes = cx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  if ("href" in props && props.href) {
    const { disabled, href, rel, target } = props;
    const anchorProps = omitProps(props, [
      "children",
      "className",
      "disabled",
      "fullWidth",
      "href",
      "rel",
      "size",
      "target",
      "variant",
    ]) as AnchorHTMLAttributes<HTMLAnchorElement>;

    if (disabled) {
      return (
        <span aria-disabled="true" className={cx(classes, "opacity-70")}>
          {children}
        </span>
      );
    }

    return (
      <a
        {...anchorProps}
        className={classes}
        href={href}
        rel={target === "_blank" && !rel ? "noopener noreferrer" : rel}
        target={target}
      >
        {children}
      </a>
    );
  }

  const { type = "button" } = props as ButtonNativeProps;
  const buttonProps = omitProps(props, [
    "children",
    "className",
    "fullWidth",
    "href",
    "size",
    "type",
    "variant",
  ]) as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button {...buttonProps} className={classes} type={type}>
      {children}
    </button>
  );
}
