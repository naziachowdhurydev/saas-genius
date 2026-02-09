import Link from "next/link";
import { Button } from "../ui/button";
import { DesktopHeader } from "./dekstop-header";

export const Header = () => {
  return (
    <header className=" w-full font-sans sticky top-0 z-50">
      <div className="flex justify-between items-stretch">
        <DesktopHeader />
        <div className="fixed bottom-3.5 left-4 z-50">
          <Button
            size="lg"
            className="bg-[#00b2ff] hover:bg-[#0090cc] text-white border-none font-bold px-4 py-4 md:px-6 md:py-6 rounded-full shadow-lg text-xs md:text-lg"
          ></Button>
        </div>
      </div>
    </header>
  );
};
