import React from "react";
import { Button } from "../../components/ui/button";

interface HeaderProps {
  navItems: string[];
}

export const Header: React.FC<HeaderProps> = ({ navItems }) => {
  return (
    <header className="w-full h-auto md:h-[858px] relative bg-[url(/gradient.png)] bg-cover">
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 py-6 md:py-10">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <img
            className="w-[76px] h-[50px]"
            alt="Logo"
            src="/group-21.png"
          />
          <span className="font-semibold text-[#fefefe] text-[26px] tracking-[-1.82px]">
            MobuisEngine
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <div key={index} className="font-medium text-[#fefefe] text-[25px] tracking-[-1.25px] cursor-pointer">
              {item}
              {item === "More" && (
                <img
                  className="inline-block ml-2 w-[11px] h-[5px]"
                  alt="Dropdown"
                  src="/polygon-1.svg"
                />
              )}
            </div>
          ))}
        </div>
        <Button className="bg-[#fefefe] text-[#022183] rounded-[31.5px] h-[62px] w-[220px] text-[25px] font-medium">
          Get Started
        </Button>
      </nav>
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-[300px] mt-10 md:mt-20">
        <div className="max-w-[780px] order-2 md:order-1 mt-10 md:mt-0">
          <h1 className="font-semibold text-[40px] md:text-[80px] tracking-[-1.60px] leading-[1.2] md:leading-[83.2px]">
            <span className="text-[#fefefe]">Land job interviews<br /></span>
            <span className="text-[#0649e7]">10x</span>
            <span className="text-[#fefefe]"> faster</span>
          </h1>
          <p className="text-[#fefefe] text-lg md:text-xl mt-6 md:mt-10 max-w-[613px]">
            Custom-built resumes that match your goals, keywords, and recruiter expectations.
          </p>
          <Button className="mt-6 md:mt-10 bg-[#fefefe] text-[#022183] rounded-[33.86px] h-[60px] md:h-[68px] w-[216px] text-[18px] md:text-[21.1px] font-medium">
            Get Started →
          </Button>
        </div>
        <div className="relative w-[280px] h-[350px] md:w-[354px] md:h-[445px] order-1 md:order-2 mx-auto md:mx-0">
          <img
            className="absolute w-[240px] h-[310px] md:w-[301px] md:h-[390px] top-0 left-0 object-cover"
            alt="Image"
            src="/image-1.png"
          />
          <div className="absolute w-[90px] h-[90px] md:w-[121px] md:h-[121px] top-[240px] left-[180px] md:top-[303px] md:left-[227px] bg-[#d9d9d94c] rounded-[60.27px] border-[0.97px] border-solid border-[#fefefe] backdrop-blur-[6.8px]" />
          <div className="absolute top-[265px] left-[205px] md:top-[333px] md:left-[257px] font-medium text-black text-[50px] md:text-[61.2px]">
            📖
          </div>
          <div className="absolute w-[20px] h-[20px] md:w-[25px] md:h-[25px] top-[320px] left-[195px] md:top-[402px] md:left-[246px] bg-[#fefefe] rounded-[12.64px]" />
          <div className="absolute top-[325px] left-[203px] md:top-[410px] md:left-[255px] font-medium text-[#0649e7] text-[10px] md:text-[11.6px]">
            ↙
          </div>
          <p className="absolute top-[340px] left-[50px] md:top-[428px] md:left-[75px] font-medium text-white text-[14px] md:text-[17.5px]">
            Download Free E-Book
          </p>
        </div>
      </div>
    </header>
  );
};
