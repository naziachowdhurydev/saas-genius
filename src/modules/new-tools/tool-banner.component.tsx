import { Container } from "@/components/shared/container.component";

export const ToolBanner = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-start justify-center w-full md:w-[50%] space-y-7 my-[100px] px-10 lg:px-0">
          <h1 className="text-5xl font-bold ">
            Find The {""}
            <span className="text-orange-500">Newest SaaS Tools</span>{" "}
          </h1>
          <p className="text-xl font-semibold">
            We collect and organize the best and most exciting new SaaS tools
            for businesses, entrepreneurs, freelancers, and tech enthusiasts.
          </p>
          <div className="flex items-center ">
            <input
              placeholder="Search your favourites SaaS"
              type="text"
              className="border border-gray-300 md:w-[350px] p-3 focus:outline-none bg-white rounded-l-[50px] placeholder:text-gray-400 placeholder:text-[16px]"
            />
            <button
              className="bg-[#be2edd] hover:bg-[#834b91] text-white p-3 text-[16px] font-semibold rounded-r-[50px] border border-[#be2edd]
            "
            >
              Submit
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

ToolBanner.displayName = "ToolBanner";
