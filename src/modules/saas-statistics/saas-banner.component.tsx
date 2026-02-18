import { Container } from "@/components/shared/container.component";
import { Check, TimerReset } from "lucide-react";

export const SaaSBanner = () => {
  return (
    <section className="my-8">
      <Container>
        <div className="flex flex-col gap-4 ">
          <h2 className="text-4xl font-semibold">SaaS Statistics</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <img
                className="w-9 h-9 rounded-2xl"
                src="https://www.saasgenius.com/wp-content/uploads/2023/03/Adaline-300x300.jpg"
                alt=""
              />
              <p className="text-[18px] border-b border-dashed underline-offset-3">
                Adaline Mary John
              </p>
            </div>

            <div className="flex items-center gap-2">
              <TimerReset />
              <p className="text-[18px]">1 min</p>
            </div>

            <div className="flex items-center border border-[#BDDBC7] bg-[#BDDBC7] gap-2 px-3 w-[180px] rounded-[10px]">
              <Check stroke="green" className="stroke-2" />
              <p className="text-[14px] text-green-800">FACT CHECKED</p>
            </div>
          </div>
          <p className="text-2xl text-gray-700">
            Step into the heart of data-driven SaaS pricing – a hub where data
            transforms into insights and insights lead to strategies. Welcome to
            SaaS Genius Statistics.
          </p>
        </div>
      </Container>
    </section>
  );
};

SaaSBanner.displayName = "SaaSBanner";
