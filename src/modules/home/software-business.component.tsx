import { Container } from "@/components/shared/container.component";
import { SquareArrowOutUpRight, Star } from "lucide-react";

export const SoftwareBusiness = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="space-y-2 px-10 lg:px-0">
          <h2 className="text-2xl md:text-3xl font-bold">
            Top Software for Business
          </h2>
          <p className="text-xl md:text-2xl">
            Explore the top-rated software trusted by businesses worldwide.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-12 space-y-7 lg:space-y-0">
          <div className="flex items-center gap-5">
            <div className="lg:w-[140px] lg:h-[250px] flex items-center px-3">
              <img src="/home/software-1.png" alt="" />
            </div>
            <div className="max-w-[350px] space-y-2">
              <p className="text-[16px]">
                <span className="font-bold">1. Cloudways</span> — Cloudways is
                simple to use and provides flexible plans. It's one of the best
                hosting platforms for…{" "}
                <span className="border-b border-dashed cursor-pointer hover:underline underline-offset-4">
                  Cloudways Review
                </span>
              </p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                </div>
                <span className="font-bold">93%</span>
              </div>
            </div>
          </div>
          <div className="max-w-[350px]">
            <div className="flex justify-between items-center gap-20 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">
                Starting price
              </h5>
              <p className="text-sm font-bold ">$10.00/mo</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Pricing model</h5>
              <p className="text-sm font-bold ">Per License</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Free Trial</h5>
              <p className="text-sm font-bold ">Yes</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Free Version</h5>
              <p className="text-sm font-bold ">No</p>
            </div>
          </div>
          <div className="">
            <button className="flex gap-2 items-center py-4 px-20 border bg-[#be2edd] hover:bg-[#834b91] text-white rounded-[10px] ">
              <p className="font-bold text-[18px]">visit</p>
              <SquareArrowOutUpRight className="w-5 h-5 stroke-3" />
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-12 space-y-7 lg:space-y-0">
          <div className="flex items-center gap-5">
            <div className="lg:w-[140px] lg:h-[250px] flex items-center px-3">
              <img src="/home/software-1.png" alt="" />
            </div>
            <div className="max-w-[350px] space-y-2">
              <p className="text-[16px]">
                <span className="font-bold">1. Cloudways</span> — Cloudways is
                simple to use and provides flexible plans. It's one of the best
                hosting platforms for…{" "}
                <span className="border-b border-dashed cursor-pointer hover:underline underline-offset-4">
                  Cloudways Review
                </span>
              </p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                </div>
                <span className="font-bold">93%</span>
              </div>
            </div>
          </div>
          <div className="max-w-[350px]">
            <div className="flex justify-between items-center gap-20 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">
                Starting price
              </h5>
              <p className="text-sm font-bold ">$10.00/mo</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Pricing model</h5>
              <p className="text-sm font-bold ">Per License</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Free Trial</h5>
              <p className="text-sm font-bold ">Yes</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Free Version</h5>
              <p className="text-sm font-bold ">No</p>
            </div>
          </div>
          <div className="">
            <button className="flex gap-2 items-center py-4 px-20 border bg-[#be2edd] hover:bg-[#834b91] text-white rounded-[10px] ">
              <p className="font-bold text-[18px]">visit</p>
              <SquareArrowOutUpRight className="w-5 h-5 stroke-3" />
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-12 space-y-7 lg:space-y-0">
          <div className="flex items-center gap-5">
            <div className="lg:w-[140px] lg:h-[250px] flex items-center px-3">
              <img src="/home/software-1.png" alt="" />
            </div>
            <div className="max-w-[350px] space-y-2">
              <p className="text-[16px]">
                <span className="font-bold">1. Cloudways</span> — Cloudways is
                simple to use and provides flexible plans. It's one of the best
                hosting platforms for…{" "}
                <span className="border-b border-dashed cursor-pointer hover:underline underline-offset-4">
                  Cloudways Review
                </span>
              </p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                </div>
                <span className="font-bold">93%</span>
              </div>
            </div>
          </div>
          <div className="max-w-[350px]">
            <div className="flex justify-between items-center gap-20 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">
                Starting price
              </h5>
              <p className="text-sm font-bold ">$10.00/mo</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Pricing model</h5>
              <p className="text-sm font-bold ">Per License</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Free Trial</h5>
              <p className="text-sm font-bold ">Yes</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Free Version</h5>
              <p className="text-sm font-bold ">No</p>
            </div>
          </div>
          <div className="">
            <button className="flex gap-2 items-center py-4 px-20 border bg-[#be2edd] hover:bg-[#834b91] text-white rounded-[10px] ">
              <p className="font-bold text-[18px]">visit</p>
              <SquareArrowOutUpRight className="w-5 h-5 stroke-3" />
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-12 space-y-7 lg:space-y-0">
          <div className="flex items-center gap-5">
            <div className="lg:w-[140px] lg:h-[250px] flex items-center px-3">
              <img src="/home/software-1.png" alt="" />
            </div>
            <div className="max-w-[350px] space-y-2">
              <p className="text-[16px]">
                <span className="font-bold">1. Cloudways</span> — Cloudways is
                simple to use and provides flexible plans. It's one of the best
                hosting platforms for…{" "}
                <span className="border-b border-dashed cursor-pointer hover:underline underline-offset-4">
                  Cloudways Review
                </span>
              </p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                </div>
                <span className="font-bold">93%</span>
              </div>
            </div>
          </div>
          <div className="max-w-[350px]">
            <div className="flex justify-between items-center gap-20 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">
                Starting price
              </h5>
              <p className="text-sm font-bold ">$10.00/mo</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Pricing model</h5>
              <p className="text-sm font-bold ">Per License</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Free Trial</h5>
              <p className="text-sm font-bold ">Yes</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Free Version</h5>
              <p className="text-sm font-bold ">No</p>
            </div>
          </div>
          <div className="">
            <button className="flex gap-2 items-center py-4 px-20 border bg-[#be2edd] hover:bg-[#834b91] text-white rounded-[10px] ">
              <p className="font-bold text-[18px]">visit</p>
              <SquareArrowOutUpRight className="w-5 h-5 stroke-3" />
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-12 space-y-7 lg:space-y-0">
          <div className="flex items-center gap-5">
            <div className="lg:w-[140px] lg:h-[250px] flex items-center px-3">
              <img src="/home/software-1.png" alt="" />
            </div>
            <div className="max-w-[350px] space-y-2">
              <p className="text-[16px]">
                <span className="font-bold">1. Cloudways</span> — Cloudways is
                simple to use and provides flexible plans. It's one of the best
                hosting platforms for…{" "}
                <span className="border-b border-dashed cursor-pointer hover:underline underline-offset-4">
                  Cloudways Review
                </span>
              </p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                </div>
                <span className="font-bold">93%</span>
              </div>
            </div>
          </div>
          <div className="max-w-[350px]">
            <div className="flex justify-between items-center gap-20 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">
                Starting price
              </h5>
              <p className="text-sm font-bold ">$10.00/mo</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Pricing model</h5>
              <p className="text-sm font-bold ">Per License</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Free Trial</h5>
              <p className="text-sm font-bold ">Yes</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Free Version</h5>
              <p className="text-sm font-bold ">No</p>
            </div>
          </div>
          <div className="">
            <button className="flex gap-2 items-center py-4 px-20 border bg-[#be2edd] hover:bg-[#834b91] text-white rounded-[10px] ">
              <p className="font-bold text-[18px]">visit</p>
              <SquareArrowOutUpRight className="w-5 h-5 stroke-3" />
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-12 space-y-7 lg:space-y-0">
          <div className="flex items-center gap-5">
            <div className="lg:w-[140px] lg:h-[250px] flex items-center px-3">
              <img src="/home/software-1.png" alt="" />
            </div>
            <div className="max-w-[350px] space-y-2">
              <p className="text-[16px]">
                <span className="font-bold">1. Cloudways</span> — Cloudways is
                simple to use and provides flexible plans. It's one of the best
                hosting platforms for…{" "}
                <span className="border-b border-dashed cursor-pointer hover:underline underline-offset-4">
                  Cloudways Review
                </span>
              </p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                  <Star className="fill-yellow-500 color-yellow-500 stroke-yellow-500 w-5 h-5" />
                </div>
                <span className="font-bold">93%</span>
              </div>
            </div>
          </div>
          <div className="max-w-[350px]">
            <div className="flex justify-between items-center gap-20 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">
                Starting price
              </h5>
              <p className="text-sm font-bold ">$10.00/mo</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Pricing model</h5>
              <p className="text-sm font-bold ">Per License</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Free Trial</h5>
              <p className="text-sm font-bold ">Yes</p>
            </div>
            <div className="flex justify-between items-center gap-5 border-b border-gray-200 py-2">
              <h5 className="text-gray-500 uppercase text-sm">Free Version</h5>
              <p className="text-sm font-bold ">No</p>
            </div>
          </div>
          <div className="">
            <button className="flex gap-2 items-center py-4 px-20 border bg-[#be2edd] hover:bg-[#834b91] text-white rounded-[10px] ">
              <p className="font-bold text-[18px]">visit</p>
              <SquareArrowOutUpRight className="w-5 h-5 stroke-3" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

SoftwareBusiness.displayName = "SoftwareBusiness";
