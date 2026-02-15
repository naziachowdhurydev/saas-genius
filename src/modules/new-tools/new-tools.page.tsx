import { ToolBanner } from "./tool-banner.component";
import { SoftwareCard } from "./software-card.component";
import { PopularSoftware } from "./popular-software.component";
import { ToolFaqs } from "./tool-faqs.component";

export const NewToolsPage = () => {
  return (
    <div>
      <ToolBanner />
      <SoftwareCard />
      <PopularSoftware />
      <ToolFaqs />
    </div>
  );
};

NewToolsPage.displayName = "NewToolsPage";
