import { AdvertiseCard } from "./advertise-card.component";
import { CommunityBanner } from "./comunity-banner.componet";
import { PodcastCard } from "./podcast-card.component";
import { Webinars } from "./webinars.component";

export const CommunityPage = () => {
  return (
    <>
      <CommunityBanner />
      <PodcastCard />
      <AdvertiseCard />
      <Webinars />
    </>
  );
};

CommunityPage.displayName = "CommunityPage";
