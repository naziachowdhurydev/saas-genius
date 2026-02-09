import { Container } from "@/components/shared/container.component";

export const Banner = () => {
  return (
    <section
      className="relative w-fulltext-white overflow-hidden bg-cover bg-center h-[600px]"
      style={{
        backgroundImage: "url(/home/home-banner.jpg)",
      }}
    >
      <Container>
        <div className="flex flex-col items-start justify-center w-[50%] space-y-4 my-[150px]">
          <h1 className="text-5xl font-bold">
            Discover the <span className="text-orange-500">Right Software</span>{" "}
            with SaaSGenius
          </h1>
          <p className="text-2xl font-semibold">
            Our directory is designed to assist businesses and individuals make
            informed buying decisions for SaaS products and solutions.
          </p>
          <div className="flex items-center ">
            <input
              placeholder="Search your favourites SaaS"
              type="text"
              className="border w-[350px] p-3 focus:outline-none bg-white border-white rounded-l-[50px] placeholder:text-gray-400 placeholder:text-[16px]"
            />
            <button className="bg-[#be2edd] hover:bg-[#834b91] text-white p-3 text-[16px] font-semibold rounded-r-[50px]">
              Submit
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
