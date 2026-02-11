import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="w-9 h-8 " />
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="flex flex-col gap-2 my-8">
          <Accordion
            type="single"
            collapsible
            className="w-full px-5 decoration-none"
            defaultValue="item-1"
          >
            <Link className="text-2xl font-bold hover:decoration-none" href="/">
              Home
            </Link>
            <AccordionItem value="item-1" className="hover:decoration-none">
              <AccordionTrigger className="text-2xl font-bold hover:decoration-none">
                <Link href="/white-label-seo">White Label Services</Link>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-[16px] font-semibold">
                <Link href="/white-label-digital-marketing-services">
                  White Label Digital Marketing Services
                </Link>
                <Link href="/white-label-seo">White Label SEO</Link>
                <Link href="/white-label-graphics-design">
                  White Label Graphics Design
                </Link>
                <Link
                  className="hover:text-blue-500"
                  href="/white-label-web-design"
                >
                  White Label Web Design
                </Link>
                <Link
                  className="hover:text-blue-500"
                  href="/white-label-web-development"
                >
                  White Label Web Development
                </Link>
                <Link
                  className="hover:text-blue-500"
                  href="/white-label-ppc-services"
                >
                  White Label PPC Services
                </Link>
                <Link
                  className="hover:text-blue-500"
                  href="/white-label-fb-ads"
                >
                  White Label Facebook Ads
                </Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl font-bold decoration-none">
                <Link href="/seo-services">SEO Services</Link>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-[16px] font-semibold">
                <Link className="hover:text-blue-500" href="/ai-seo-services">
                  AI SEO Services
                </Link>
                <Link
                  className="hover:text-blue-500"
                  href="/organic-seo-services"
                >
                  Organic SEO Services
                </Link>
                {/* <Link
                                    className="hover:text-blue-500"
                                    href="/e-commerce-seo"
                                >
                                    E-Commerce SEO Services
                                </Link> */}
                <Link className="hover:text-blue-500" href="/local-seo">
                  Local SEO Services
                </Link>
                <Link
                  className="hover:text-blue-500"
                  href="/small-business-seo-services"
                >
                  Small Business SEO Services
                </Link>
                <Link className="hover:text-blue-500" href="/content-marketing">
                  Content Marketing
                </Link>
                <Link
                  className="hover:text-blue-500"
                  href="/social-media-marketing"
                >
                  Social Media Marketing
                </Link>
                <Link className="hover:text-blue-500" href="/youtube-marketing">
                  YouTube Marketing
                </Link>
                <Link className="hover:text-blue-500" href="/google-business">
                  Google Business Optimization
                </Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-2xl font-bold decoration-none">
                <Link href="/ppc-services">PPC Services</Link>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-[16px] font-semibold">
                <Link className="hover:text-blue-500" href="/google-ads">
                  Google Ads
                </Link>
                <Link className="hover:text-blue-500" href="/ppc-facebook-ads">
                  Facebook Ads
                </Link>
                {/* <Link
                                    className="hover:text-blue-500"
                                    href="/ppc-e-commerce"
                                >
                                    E-Commerce PPC
                                </Link> */}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-2xl font-bold decoration-none">
                <Link href="/design-and-development">Design & Development</Link>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-[16px] font-semibold">
                <Link className="hover:text-blue-500" href="/startup-business">
                  Startup Business Development
                </Link>
                <Link className="hover:text-blue-500" href="/saas">
                  SaaS Development
                </Link>
                <Link className="hover:text-blue-500" href="/e-commerce-dev">
                  E-commerce Development
                </Link>
                <Link
                  className="hover:text-blue-500"
                  href="/react-native-mobile"
                >
                  React Native Mobile App
                </Link>
                <Link className="hover:text-blue-500" href="/pos">
                  POS
                </Link>
                <Link
                  className="hover:text-blue-500"
                  href="/management-software"
                >
                  Management Software
                </Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-2xl font-bold decoration-none">
                <Link href="/about-us">About Us</Link>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-[16px] font-semibold">
                <Link className="hover:text-blue-500" href="/contact-us">
                  Contact Us
                </Link>
                {/* <Link
                                    className="hover:text-blue-500"
                                    href="/case-studies"
                                >
                                    Case Studies
                                </Link> */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </nav>

        <button className=" lg:hidden block bg-[#1b1b90] text-white w-[200px] mx-auto px-0 py-2 rounded-[4px] font-bold hover:bg-[#0f3470] transition-colors text-[12px] sm:text-[15px] shadow-lg shadow-blue-300 mt-2 sm:mt-0">
          Get A Free Quote
        </button>
      </SheetContent>
    </Sheet>
  );
};
