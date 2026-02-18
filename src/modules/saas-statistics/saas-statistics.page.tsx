import { SaaSBanner } from "./saas-banner.component";
import { SaaSPricingCard } from "./saas-pricing-card.component";
import { SaaSPage } from "./saas-page.component";

export const SaasStatisticsPage = () => {
  return (
    <div>
      <SaaSBanner />
      <SaaSPricingCard />
      <SaaSPage />
    </div>
  );
};

SaasStatisticsPage.displayName = "SaasStatisticsPage";
