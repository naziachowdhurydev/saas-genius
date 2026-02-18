import { SaaSBanner } from "./saas-banner.component";
import { SaaSPricingCard } from "./saas-pricing-card.component";
import { SaaSPage } from "./saas-page.component";
import { AuthorCard } from "./author-card.component";

export const SaasStatisticsPage = () => {
  return (
    <div>
      <SaaSBanner />
      <SaaSPricingCard />
      <SaaSPage />
      <AuthorCard />
    </div>
  );
};

SaasStatisticsPage.displayName = "SaasStatisticsPage";
