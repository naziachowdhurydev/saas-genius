import Link from "next/link";
import { NavMenuItem } from "./nav-menu-item.component";
import { MobileSidebar } from "./mobile-sidebar";
import { Search } from "lucide-react";

export const DesktopHeader = () => {
  return (
    <header className=" w-full font-sans sticky top-0 z-50">
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-3 flex sm:flex-row justify-between sm:items-center">
          <Link href="/" className="flex items-center gap-2 px-3">
            <div className="w-[150px] h-[100px]">
              <img
                className="w-full h-full object-contain"
                src="/logo/saas-logo.png"
                alt="/"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-[#0f2137] font-medium text-[14px] ">
            <NavMenuItem
              className="hover:underline"
              title="home"
              url="/"
              items={[]}
            />
            <NavMenuItem
              className="hover:underline"
              title="Software Categories"
              url="/software-categories"
              items={[]}
            />

            <NavMenuItem title="New Tools" url="/new-tools" items={[]} />

            <NavMenuItem
              title="SaaS Statistics"
              url="/saas-statistics"
              items={[]}
            />

            <NavMenuItem title="Community" url="/community" items={[]} />

            <NavMenuItem title="Newsletter" url="/newsletter" items={[]} />

            <NavMenuItem
              title="Media Opportunity"
              url="/media-opportunity"
              items={[]}
            />
          </nav>

          {/* CTA Button */}
          <div className="flex justify-between items-center gap-3.5">
            <button className="hidden md:block bg-[#be2edd] text-white px-0 py-2 sm:px-6 sm:py-2.5 rounded-[50px] font-bold hover:bg-[#834b91] transition-colors text-[12px] sm:text-[15px] shadow-lg shadow-blue-300 mt-2 sm:mt-0">
              Blog
            </button>
            <Search className="w-7 h-7 text-bold" />
            <div className="flex xl:hidden justify-between items-stretch ">
              <div className="bg-white flex items-center cursor-pointer">
                {/* <MobileSidebar /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

DesktopHeader.displayName = "DesktopHeader";
