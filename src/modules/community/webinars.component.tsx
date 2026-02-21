import { Container } from "@/components/shared/container.component";

export const Webinars = () => {
  return (
    <section className="my-8 py-12">
      <Container>
        <div>
          <div>
            <h4 className="text-4xl font-bold text-center mb-8">
              SaaSGenius Webinars
            </h4>
            <div className="flex justify-between gap-10">
              <div className="w-[1200px] rounded-2xl ">
                <img
                  className="rounded-2xl w-full h-full object-cover"
                  src="https://www.saasgenius.com/wp-content/uploads/2025/10/1760427749204.jpeg"
                  alt=""
                />
              </div>
              <div className="space-y-4 py-2 ">
                <h4 className="text-3xl font-bold">AI Meets Hosting</h4>
                <p className="text-[22px] leading-relaxed text-gray-600">
                  From vibe coding and prompt engineering to fully interactive,
                  no-code website creation, Hostinger Horizons' expert
                  demonstrates what's next for entrepreneurs, developers, and
                  creators.
                </p>

                <button className="border border-[#BE2EDD] px-4 py-3 text-lg text-white bg-[#BE2EDD] hover:bg-[#834B91] hover:border-[#834B91] rounded-[6px] mt-6">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

Webinars.displayName = "Webinars";
