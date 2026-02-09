import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

type Item = {
  title: string;
  url: string;
};

type NavMenuItemProps = {
  title: string;
  url: string;
  items: Item[];
  className?: string;
};

export const NavMenuItem: FC<NavMenuItemProps> = ({
  title,
  url,
  items,
  className,
}) => {
  const isItemEmpty = items.length === 0;

  if (isItemEmpty) {
    return (
      <Link
        href={url}
        className="cursor-pointer hover:underline underline-offset-4"
      >
        {title}
      </Link>
    );
  }

  return (
    <HoverCard openDelay={150} closeDelay={150}>
      <HoverCardTrigger asChild>
        <Link href={url} className={className}>
          <Button variant="link" className="hover:underline">
            <span>{title}</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#00aaff] transition-colors hover:underline" />
          </Button>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit">
        <div className="">
          <ul className="font-bold text-sm list-none flex flex-col gap-4 hover:underline">
            {items.map((item) => {
              return (
                <li
                  className="pb-2 hover:text-[#00aaff] transition-colors hover:underline"
                  key={item.title}
                >
                  <Link href={item.url}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

NavMenuItem.displayName = "NavMenuItem";
