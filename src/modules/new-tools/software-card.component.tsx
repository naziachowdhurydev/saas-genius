import { Container } from "@/components/shared/container.component";
import { SquareArrowOutUpRight, Star } from "lucide-react";

export const SoftwareCard = () => {
  return (
    <section className="my-8">
      <Container>
        <div className="px-8 lg:px-0 space-y-3">
          <h3 className="text-[40px] font-bold">Featured Software</h3>
          <p className="text-[20px] font-medium text-gray-500">
            Discover this week's top picks: Innovative tools that are
            transforming the industry. Praised by users and reviewrs.
          </p>
          <div className=" flex flex-col lg:flex-row justify-between gap-4">
            <div className="bg-gray-200 flex justify-between flex-col md:flex-row lg:w-[750px] p-4 gap-2 space-y-2 lg:space-y-0">
              <div className="space-y-4">
                <p className="text-[18px]">
                  <span className="font-bold text-[17px]"> 1. QuillBot AI</span>{" "}
                  — QuillBot is a powerful AI writing tool that uses
                  state-of-the-art… Read review
                </p>
                <div className="flex justify-center lg:justify-start">
                  <button className="flex gap-2 items-center py-2 px-4 border border-[#be2edd] bg-[#be2edd] hover:bg-[#834b91] hover:border-[#834b91] text-white rounded-[10px] ">
                    <p className="text-[18px]">visit</p>
                    <SquareArrowOutUpRight className="w-5 h-5 stroke-2" />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <img
                  className="w-70"
                  src="https://www.saasgenius.com/new-tools/wp-content/uploads/sites/2/2023/06/QuillBot-AI-360x190.jpg"
                  alt=""
                />
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
            <div className="bg-gray-200 flex justify-between flex-col md:flex-row lg:w-[750px] p-4 gap-2 space-y-2 lg:space-y-0">
              <div className="space-y-4">
                <p className="text-[18px]">
                  <span className="font-bold text-[17px]"> 1. QuillBot AI</span>{" "}
                  — QuillBot is a powerful AI writing tool that uses
                  state-of-the-art… Read review
                </p>
                <div className="flex justify-center lg:justify-start">
                  <button className="flex gap-2 items-center py-2 px-4 border border-[#be2edd] bg-[#be2edd] hover:bg-[#834b91] hover:border-[#834b91] text-white rounded-[10px]">
                    <p className="text-[18px]">visit</p>
                    <SquareArrowOutUpRight className="w-5 h-5 stroke-2" />
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  className="w-70"
                  src="https://www.saasgenius.com/new-tools/wp-content/uploads/sites/2/2023/06/QuillBot-AI-360x190.jpg"
                  alt=""
                />
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
          </div>
        </div>
      </Container>
    </section>
  );
};

SoftwareCard.displayName = "SoftwareCard";
