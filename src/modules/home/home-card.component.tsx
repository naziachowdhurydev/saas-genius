import { Container } from "@/components/shared/container.component";

export const HomeCard = () => {
  return (
    <section className="bg-[#191E24] py-20">
      <Container>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 px-5 lg:px-0">
          <div className="hover:scale-[1.05] transition-all duration-300 cursor-pointer ">
            <div className="w-full h-[150px] bg-white ">
              <img
                className="overflow-hidden w-full h-full"
                src="https://www.saasgenius.com/wp-content/uploads/2025/03/Best-CRM-software.svg"
                alt=""
              />
            </div>
            <h4 className="bg-[#22272E] w-full text-2xl font-bold text-white text-center py-7">
              Best CRM Software
            </h4>
          </div>
          <div className="hover:scale-[1.05] transition-all duration-300 cursor-pointer ">
            <div className="w-full h-[150px] bg-white">
              <img
                className="overflow-hidden w-full h-full"
                src="https://www.saasgenius.com/wp-content/uploads/2025/03/Best-project-management-software.svg"
                alt=""
              />
            </div>
            <h4 className="bg-[#22272E] w-full text-2xl font-bold text-white text-center py-3">
              Best Project Management Software
            </h4>
          </div>
          <div className="hover:scale-[1.05] transition-all duration-300 cursor-pointer ">
            <div className="w-full h-[150px] bg-white ">
              <img
                className="overflow-hidden w-full h-full"
                src="https://www.saasgenius.com/wp-content/uploads/2025/03/Best-HR-software-100-300x158.jpg"
                alt=""
              />
            </div>
            <h4 className="bg-[#22272E] w-full text-2xl font-bold text-white text-center py-7">
              Best HR Software
            </h4>
          </div>
          <div className="hover:scale-[1.05] transition-all duration-300 cursor-pointer ">
            <div className="w-full h-[150px] bg-white">
              <img
                className="overflow-hidden w-full h-full"
                src="https://www.saasgenius.com/wp-content/uploads/2025/03/Best-Email-Marketing-Software.svg"
                alt=""
              />
            </div>
            <h4 className="bg-[#22272E] w-full text-2xl font-bold text-white text-center py-3">
              Best Email Marketing <br /> Software
            </h4>
          </div>
          <div className="hover:scale-[1.05] transition-all duration-300 cursor-pointer ">
            <div className="w-full h-[150px] bg-white ">
              <img
                className="overflow-hidden w-full h-full"
                src="https://www.saasgenius.com/wp-content/uploads/2025/03/Best-Help-desk-software.svg"
                alt=""
              />
            </div>
            <h4 className="bg-[#22272E] w-full text-2xl font-bold text-white text-center py-7 px-1">
              Best Help Desk Software
            </h4>
          </div>
          <div className="hover:scale-[1.05] transition-all duration-300 cursor-pointer ">
            <div className="w-full h-[150px] bg-white ">
              <img
                className="overflow-hidden w-full h-full"
                src="https://www.saasgenius.com/wp-content/uploads/2025/03/Best-Marketing-Automation-Software.svg"
                alt=""
              />
            </div>
            <h4 className="bg-[#22272E] w-full text-2xl font-bold text-white text-center py-3 px-1">
              Best Marketing Automation Software
            </h4>
          </div>
          <div className="hover:scale-[1.05] transition-all duration-300 cursor-pointer ">
            <div className="w-full h-[150px] bg-white ">
              <img
                className="overflow-hidden w-full h-full"
                src="https://www.saasgenius.com/wp-content/uploads/2025/03/Best-Remote-Desktop-Software-3.svg"
                alt=""
              />
            </div>
            <h4 className="bg-[#22272E] w-full text-2xl font-bold text-white text-center py-7 px-1">
              Best Remote Desktop Software
            </h4>
          </div>
          <div className="hover:scale-[1.05] transition-all duration-300 cursor-pointer ">
            <div className="w-full h-[150px] bg-white ">
              <img
                className="overflow-hidden w-full h-full"
                src="https://www.saasgenius.com/wp-content/uploads/2025/03/Best-accounting-software.svg"
                alt=""
              />
            </div>
            <h4 className="bg-[#22272E] w-full text-2xl font-bold text-white text-center py-7 px-1">
              Best Accounting Software 2025
            </h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

HomeCard.displayName = "HomeCard";
