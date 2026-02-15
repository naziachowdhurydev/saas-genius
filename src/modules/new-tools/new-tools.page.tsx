import { ToolBanner } from "./tool-banner.component";
import { SoftwareCard } from "./software-card.component";
export const NewToolsPage = () => {
  return (
    <div>
      <ToolBanner />
      <SoftwareCard />
    </div>
  );
};

NewToolsPage.displayName = "NewToolsPage";
