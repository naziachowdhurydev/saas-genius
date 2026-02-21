import { Container } from "@/components/shared/container.component";

export const CtaCommunity = () => {
  return (
    <section className="my-8 py-12 bg-[#292E36]">
      <Container>
        <div className="text-center space-y-4">
          <h4 className="text-white text-4xl font-semibold">
            Find the Right Software and Services for Your Business
          </h4>
          <h5 className="text-white text-lg font-semibold">
            Our directory helps you make smarter, faster decisions. Browse,
            compare, and decide.
          </h5>
          <button className="border border-[#BE2EDD] px-4 py-3 text-lg text-white bg-[#BE2EDD] hover:bg-[#834B91] hover:border-[#834B91] rounded-[6px] mt-6">
            Explore SaaS Software
          </button>
        </div>
      </Container>
    </section>
  );
};

CtaCommunity.displayName = "CtaCommunity";
