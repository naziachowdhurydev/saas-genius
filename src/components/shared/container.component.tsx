import { cn } from "@/lib/utils";
import { FC } from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn("container mx-auto", className)}>{children}</div>;
};

Container.displayName = "Container";
