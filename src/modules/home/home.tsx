import { Banner } from "./banner.component";
import { SoftwareBusiness } from "./software-business.component";
import { HomeCard } from "./home-card.component";

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <SoftwareBusiness />
      <HomeCard />
    </div>
  );
};

HomePage.displayName = "HomePage";
