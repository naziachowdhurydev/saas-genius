import { Container } from "@/components/shared/container.component";

export const PodcastCard = () => {
  return (
    <section className="my-8">
      <Container>
        <div>
          <div className="flex justify-end ">
            <button className="border py-3 px-4 rounded-[5px] hover:bg-gray-200 ">
              On this page
            </button>
          </div>

          <h2 className="text-3xl font-bold text-center my-3">
            SaaSGenius Podcast
          </h2>
          <p className="text-xl text-gray-600 text-center mb-6">
            Sharp takes and honest conversations every{" "}
            <span className="italic font-semibold">Thursday</span>. Our weekly
            podcast is where SaaS founders, marketers, and operators share real
            insights, lessons, and stories you won't want to miss. Tune in and
            hear it for yourself.
          </p>

          <div>
            <div className="flex justify-between gap-10">
              <div className="max-w-[600px] rounded-2xl">
                <img
                  className="rounded-2xl"
                  src="https://www.saasgenius.com/wp-content/uploads/2025/11/24578.png"
                  alt=""
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-3xl font-bold">
                  SEO vs. LLM Search Results
                </h4>
                <p className="text-[22px] leading-relaxed text-gray-600">
                  SEO veteran Sean Bianco exposes the uncomfortable truths about
                  search marketing that most agencies won’t tell you, including
                  why 95% of SEO “experts” have no idea what they’re doing, and
                  why your startup probably shouldn’t invest in SEO at all.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="border border-[#BE2EDD] px-4 py-3 text-white bg-[#BE2EDD] hover:bg-[#834B91] hover:border-[#834B91] rounded-[6px]">
                Listen to More Podcast
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

PodcastCard.displayName = "PodcastCard";
