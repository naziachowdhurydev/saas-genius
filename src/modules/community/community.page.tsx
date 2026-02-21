import { AdvertiseCard } from "./advertise-card.component";
import { CommunityBanner } from "./comunity-banner.componet";
import { PodcastCard } from "./podcast-card.component";
import { Webinars } from "./webinars.component";
import { CtaCommunity } from "./cta-community.component";
import { CommunityFaq } from "./community-faq.component";

export const CommunityPage = () => {
  return (
    <>
      <CommunityBanner />
      <PodcastCard />
      <AdvertiseCard />
      <Webinars />
      <CtaCommunity />
      <CommunityFaq />
    </>
  );
};

CommunityPage.displayName = "CommunityPage";
