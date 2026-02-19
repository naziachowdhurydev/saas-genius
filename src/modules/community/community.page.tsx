import { CommunityBanner } from "./comunity-banner.componet";
import { PodcastCard } from "./podcast-card.component";

export const CommunityPage = () => {
  return (
    <>
      <CommunityBanner />
      <PodcastCard />
    </>
  );
};

CommunityPage.displayName = "CommunityPage";
