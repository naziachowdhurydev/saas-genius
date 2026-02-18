import { Container } from "@/components/shared/container.component";

export const SaaSPage = () => {
  return (
    <section className="my-8">
      <Container>
        <div>
          <h3 className="text-4xl font-bold">
            Uncover The Numbers Behind SaaS Pricing
          </h3>

          <p className="my-4 text-xl text-gray-600 leading-relaxed">
            In the ever-changing SaaS market, understanding pricing trends isn't
            just important, it's vital. That's why at SaaS Genius Statistics,
            we're dedicated to using the power of numbers to illuminate the
            landscape of SaaS pricing.
          </p>

          <p className="my-4 text-xl text-gray-600 leading-relaxed">
            The core of our mission?
            <span className="font-bold text-black">
              {" "}
              We provide you with comprehensive, up-to-date statistics on a
              variety of topics centered around SaaS pricing.
            </span>{" "}
            From software category comparisons to geographic trends, from
            startup reviews to enterprise-level benchmarks, we dive deep to
            bring you the facts and figures that matter most to you.
          </p>

          <p className="my-4 text-xl text-gray-600 leading-relaxed">
            Whether you're a startup looking for a competitive edge, an
            established SaaS provider looking to optimize pricing strategies, or
            an investor seeking data-driven insights, our stats are your first
            stop.
          </p>

          <p className="my-4 text-xl text-gray-600 leading-relaxed">
            Our commitment to accuracy, understandability, and relevance ensures
            that the data we present isn't just a number but a story of the SaaS
            market waiting to be unraveled. In the world of SaaS Genius
            Statistics, every statistic has a strategy, and every number has a
            story.
          </p>

          <p className="my-4 text-xl text-gray-600 leading-relaxed">
            Join us in our quest for understanding. Dive into SaaS Genius
            Statistics today and discover the power of data-driven decision
            making in SaaS pricing.
          </p>

          <h3 className="text-4xl font-bold">Explore SaasGenius</h3>
          <p className="my-3 text-xl text-gray-600 leading-relaxed border-b border-dashed w-[190px] hover:underline underline-offset-9 cursor-pointer">
            SaaS Pricing Glossary
          </p>
          <p className="my-3 text-xl text-gray-600 leading-relaxed border-b border-dashed w-[90px] hover:underline underline-offset-9 cursor-pointer">
            SaaS Blog
          </p>
          <p className="my-3 text-xl text-gray-600 leading-relaxed border-b border-dashed w-[150px] hover:underline underline-offset-9 cursor-pointer">
            New SaaS Tools
          </p>
        </div>
      </Container>
    </section>
  );
};

SaaSPage.displayName = "SaaSPage";
