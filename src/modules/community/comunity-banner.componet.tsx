import { Container } from "@/components/shared/container.component";
import { AuthorCard } from "../saas-statistics/author-card.component";

export const CommunityBanner = () => {
  return (
    <section
      className="relative w-fulltext-white overflow-hidden bg-cover bg-center h-[650px] lg:h-[500px]"
      style={{
        backgroundImage: "url(/home/home-banner.jpg)",
      }}
    >
      <Container>
        <div className="flex flex-col items-start justify-center w-full md:w-[50%] space-y-4 my-[100px] px-10 lg:px-0">
          <h4 className="text-2xl font-semibold text-gray-600">
            Connecting brilliant minds shaping the SaaS industry
          </h4>

          <h1 className="text-5xl font-bold ">SaaSGenius Community</h1>
          <p className="text-xl font-semibold">
            Whether you're an aspiring founder, a tech enthusiast, or simply
            looking to understand how the SaaS space is evolving, you'll hear
            firsthand from the visionaries and “Geniuses” who are pushing the
            boundaries of what's possible in software and tech.
          </p>
          <button className="border px-4 py-3 rounded-[6px] text-white bg-[#BE2EDD] border-[#BE2EDD] hover:bg-[#834B91] hover:border-[#834B91]">
            Join SaaSGenius Comunity for Free
          </button>
        </div>
      </Container>
    </section>
  );
};

CommunityBanner.displayName = "CommunityBanner";
