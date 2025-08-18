import React from "react";
import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("max-w-[1200px] w-full mx-auto px-4", className)}>
      {children}
    </section>
  );
};

export default Container;
