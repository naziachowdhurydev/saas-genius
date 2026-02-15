import { Container } from "@/components/shared/container.component";
import { SquareArrowOutUpRight, Star } from "lucide-react";

export const ToolFaqs = () => {
  return (
    <section className="my-8">
      <Container>
        <div className="space-y-6 max-w-[800px] mx-auto px-6 lg:px-0">
          <h3 className="lg:text-5xl text-3xl font-bold">
            What Are New Saas Tools?
          </h3>
          <p className="lg:text-[24px] text-[20px] text-gray-600">
            The new SaaS Tools section of SaasGenius is your essential resource
            for discovering the latest and most exciting new SaaS products that
            will change how you work.
          </p>
          <p className="lg:text-[24px] text-[20px] text-gray-600">
            New SaaS tools are the latest software-as-a-service solutions that
            offer innovative features and capabilities to businesses,
            entrepreneurs, freelancers, and individuals. These tools are
            designed to streamline workflows, automate tasks and increase
            productivity across a range of industries. They leverage cloud
            computing technology and allow users to access and use them remotely
            over the Internet.
          </p>
          <p className="lg:text-[24px] text-[20px] text-gray-600">
            Our mission is to offer professionals and businesses of all sizes
            the latest and most innovative SaaS products. By providing a
            handpicked list of the hottest tools on the market, we strive to
            empower you to enhance your productivity and achieve your goals.
          </p>
          <p className="lg:text-[24px] text-[20px] text-gray-600">
            We plan to revolutionize the way people work and live by maximizing
            the possibilities using SaaS tools.
          </p>
          <p className="lg:text-[24px] text-[20px] text-gray-600">
            So read on to learn about the most groundbreaking tools to ensure
            that you are always one step ahead.
          </p>

          <h3 className="lg:text-5xl text-3xl font-bold">
            How We Find New Tools?
          </h3>
          <p className="lg:text-[24px] text-[20px] text-gray-600">
            Our team of experts scours the web to find the most innovative
            solutions for a variety of industries and challenges, from marketing
            and advertising to technology and finance. We add new tools to our
            collection daily so that you can stay up-to-date with the latest
            trends and technologies.
          </p>
          <p className="lg:text-[24px] text-[20px] text-gray-600">
            We stay on top of emerging trends, follow industry news, and closely
            monitor the tech landscape to ensure our selections are always
            current and relevant. Our considered approach guarantees you'll find
            the most promising and innovative tools for your business.
          </p>
        </div>
      </Container>
    </section>
  );
};

ToolFaqs.displayName = "ToolFaqs";
