import { Banner } from "./banner.component";
import { SoftwareBusiness } from "./software-business.component";
import { HomeCard } from "./home-card.component";
import { MediaOpportunities } from "./media-opportunities.component";
import { StayAhead } from "./stay-ahead.component";
import { Blog } from "./blog.component";

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <SoftwareBusiness />
      <HomeCard />
      <MediaOpportunities />
      <StayAhead />
      <Blog />
    </div>
  );
};

HomePage.displayName = "HomePage";
