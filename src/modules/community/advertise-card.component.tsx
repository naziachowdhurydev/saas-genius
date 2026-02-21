import { Container } from "@/components/shared/container.component";

export const AdvertiseCard = () => {
  return (
    <section className="my-8 bg-gray-100 py-12">
      <Container>
        <div>
          <div>
            <div className="flex justify-between gap-10">
              <div className="w-[1400px] rounded-2xl ">
                <img
                  className="rounded-2xl w-full h-full object-cover"
                  src="https://www.saasgenius.com/wp-content/uploads/2025/10/SaasGenius-556-x-372-px.png"
                  alt=""
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-3xl font-bold">Advertise With Us</h4>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  We are constantly seeking and identifying the right partners
                  to list on our site and share across our community networks.
                </p>

                <p className="text-[18px] leading-relaxed text-gray-600">
                  From start-up to established enterprise, we have packages that
                  cater to every size for branding, lead generation, and content
                  placements. Does that sound like something for you, or do you
                  believe you're a fit?
                </p>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Book a call with our sales team to discover how we can help
                  you get more customers today.
                </p>

                <button className="border border-[#BE2EDD] px-4 py-3 text-white bg-[#BE2EDD] hover:bg-[#834B91] hover:border-[#834B91] rounded-[6px] mt-6">
                  Listen to More Podcast
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

AdvertiseCard.displayName = "AdvertiseCard";
