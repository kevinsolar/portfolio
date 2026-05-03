import type { ElementType } from "react";
import type { LocalizedCopy } from "@/app/data/portfolio";

type LocalizedTextProps = {
  as?: ElementType;
  value: LocalizedCopy;
  className?: string;
};

export function LocalizedText({
  as: Component = "span",
  value,
  className,
}: LocalizedTextProps) {
  return (
    <>
      <Component className={className} data-locale="en">
        {value.en}
      </Component>
      <Component className={className} data-locale="pt">
        {value.pt}
      </Component>
    </>
  );
}
