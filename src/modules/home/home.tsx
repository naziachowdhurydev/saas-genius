import { Banner } from "./banner.component";
import { SoftwareBusiness } from "./software-business.component";

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <SoftwareBusiness />
    </div>
  );
};

HomePage.displayName = "HomePage";
