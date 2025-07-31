import React from "react";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import { colors } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Logo = ({
  className,
  iconClassName,
  labelClassName,
  href = "/",
}: {
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  href?: string;
}) => {
  return (
    <Link href={href} className={cn("flex items-center gap-1", className)}>
      <LinkIcon
        className={cn("size-6", iconClassName)}
        color={colors["s-secondary"]}
      />
      <span
        className={cn(
          "font-dyna-puff text-s-secondary text-xl",
          labelClassName
        )}>
        LinkLite
      </span>
    </Link>
  );
};

export default Logo;
