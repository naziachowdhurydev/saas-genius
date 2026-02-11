import { Container } from "@/components/shared/container.component";

export const StayAhead = () => {
  return (
    <section className="bg-[#be2edd]">
      <Container>
        <div className="py-16 px-10">
          <div className="flex items-center flex-col md:flex-row justify-between gap-20">
            <img
              className="w-[300px]"
              src="https://www.saasgenius.com/wp-content/uploads/2024/12/Community-1.png"
              alt=""
            />
            <div className="text-center space-y-4">
              <h4 className="text-4xl font-bold text-white">
                Stay Ahead in SaaS
              </h4>
              <p className="text-2xl text-white">
                Join founders and operators to get exclusive insights,
                strategies, and behind-the-scenes stories from the people
                shaping the future of SaaS.
              </p>
              <button className=" border border-white px-4 py-2 text-lg font-semibold text-white rounded-2xl hover:bg-white hover:text-[#be2edd]">
                Subscribe to SaaSGenius Newsletter
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

StayAhead.displayName = "StayAhead";
