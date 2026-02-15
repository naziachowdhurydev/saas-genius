import { ToolBanner } from "./tool-banner.component";
import { SoftwareCard } from "./software-card.component";
import { PopularSoftware } from "./popular-software.component";
export const NewToolsPage = () => {
  return (
    <div>
      <ToolBanner />
      <SoftwareCard />
      <PopularSoftware />
    </div>
  );
};

NewToolsPage.displayName = "NewToolsPage";
