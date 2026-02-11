import { Linkedin, Twitter, Youtube } from "lucide-react";
import { Container } from "../shared/container.component";

export const Footer = () => {
  return (
    <footer className="bg-[#12141A] py-20">
      <Container>
        <div className="grid lg:grid-cols-4  gap-4">
          <div className="px-6 lg:px-0">
            <img className="w-40 h-10" src="/logo/saas-logo-white.png" alt="" />
            <div className="flex items-center gap-2 my-4">
              <Twitter className="text-white " size={29} />
              <Youtube className="text-white" size={29} />
              <Linkedin className="text-white" size={29} />
            </div>
          </div>
          <div className="space-y-3 px-6 lg:px-0">
            <p className="text-white text-lg">
              Twitter YouTube LinkedIn SaasGenius.com is part of Adventrum AB
            </p>
            <p className="text-white text-lg">
              Adventrum AB Box 2534 116 74 Stockholm SWEDEN
            </p>
            <button className="bg-[#BE2EDD] text-white py-3 px-6 rounded-[5px]">
              Partner With Us
            </button>
          </div>
          <div className="space-y-3 px-6 lg:px-0">
            <h6 className="text-white text-lg">Information</h6>
            <ul className="space-y-3">
              <li className="text-[#BE2EDD] text-lg hover:underline cursor-pointer">
                About Us
              </li>
              <li className="text-[#BE2EDD] text-lg hover:underline cursor-pointer">
                Contact Us
              </li>
              <li className="text-[#BE2EDD] text-lg hover:underline cursor-pointer">
                Terms & Conditions
              </li>
              <li className="text-[#BE2EDD] text-lg hover:underline cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-[#BE2EDD] text-lg">Get Listed</li>
              <li className="text-[#BE2EDD] text-lg">New Tools</li>
            </ul>
          </div>
          <div className="space-y-3 px-6 lg:px-0">
            {" "}
            <h6 className="text-white text-lg">Popular Top Lists</h6>
            <ul className="space-y-3">
              <li className="text-[#BE2EDD] text-lg hover:underline cursor-pointer">
                CRM Software
              </li>
              <li className="text-[#BE2EDD] text-lg hover:underline cursor-pointer">
                Email Marketing Software
              </li>
              <li className="text-[#BE2EDD] text-lg hover:underline cursor-pointer">
                Help Desk Software
              </li>
              <li className="text-[#BE2EDD] text-lg hover:underline cursor-pointer">
                HR Software
              </li>
              <li className="text-[#BE2EDD] text-lg">Get Listed</li>
              <li className="text-[#BE2EDD] text-lg">
                Project Management Software
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white mt-10"></div>
        <div className=" text-center mt-10">
          <p className="text-gray-400 text-lg my-5">Preferred Partners</p>
          <div className="flex flex-wrap justify-center md:justify-center lg:justify-center items-center gap-10">
            <img
              src="https://www.saasgenius.com/wp-content/uploads/2025/05/godaddy-logo-white.png"
              alt=""
            />
            <img
              src="https://www.saasgenius.com/wp-content/uploads/2025/05/shopify-logo.png"
              alt=""
            />
            <img
              className="w-12"
              src="https://www.saasgenius.com/wp-content/uploads/2025/08/Logo-Shira-Simmonds-1.png"
              alt=""
            />
          </div>
          <p className="text-white text-lg text-center my-6">
            © 2026 SaasGenius.com is part of Adventrum AB
          </p>
        </div>
      </Container>
    </footer>
  );
};

Footer.displayName = "Footer";
