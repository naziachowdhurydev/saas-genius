import { Container } from "@/components/shared/container.component";

export const CommunityFaq = () => {
  return (
    <section className="my-8 py-12">
      <Container>
        <div>
          <div>
            <div className="flex justify-between gap-10">
              <div className="space-y-4 py-2 ">
                <h4 className="text-3xl font-bold">Any Questions?</h4>
                <p className="text-[20px] leading-relaxed text-gray-600">
                  We appreciate our readers providing feedback so do let us know
                  your thoughts
                </p>
                <p className="text-[20px] leading-relaxed text-gray-600">
                  From general questions, to concerns, to community reactions
                </p>
                <p className="text-[20px] leading-relaxed text-gray-600">
                  Simply fill out the form below so the brilliant team behind
                  SaaSGenius can get back to you.
                </p>

                <button className="border border-[#BE2EDD] px-4 py-3 text-lg text-white bg-[#BE2EDD] hover:bg-[#834B91] hover:border-[#834B91] rounded-[6px] mt-6">
                  Watch Now
                </button>
              </div>
              <div className="w-[1000px] rounded-2xl ">
                <img
                  className="rounded-2xl w-full h-full object-cover"
                  src="https://www.saasgenius.com/wp-content/uploads/2024/12/2-2-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

CommunityFaq.displayName = "CommunityFaq";
