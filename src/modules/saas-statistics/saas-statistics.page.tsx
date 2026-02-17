import { SaaSBanner } from "./saas-banner.component";
import { SaaSPricingCard } from "./saas-pricing-card.component";

export const SaasStatisticsPage = () => {
  return (
    <div>
      <SaaSBanner />
      <SaaSPricingCard />
    </div>
  );
};

SaasStatisticsPage.displayName = "SaasStatisticsPage";
