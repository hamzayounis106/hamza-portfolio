import React from "react";
import AnimatedButton from "./Utils/AnimatedButton";
import Timeline from "./Timeline";

export default function WhyUs() {
  return (
    <section className="relative pb-36 md:flex-row flex-col flex justify-center bg-black py-16 items-center w-full z-[100] gap-10 lg:gap-0 whySection">
      <div className="bg-gradient-to-r from-[#6d96fc1c] left-0 to-[#6d96fc00] absolute top-0 z-[200] w-[30%] h-full"></div>
      <div className="bg-gradient-to-l from-[#6d96fc0a] right-0 to-[#6d96fc00] absolute top-0 z-[50] w-[30%] h-full"></div>

      {/* Left Section */}
      <div className="flex h-full flex-col items-start justify-center w-[90%] md:w-[50%] lg:w-[45%] gap-5 z-[300]">
        <div className="flex flex-col gap-3 bring_right_why_us">
          <p className="text-[#6d95fc] text-[21px] uppercase">experience</p>
          <hr className="border-[#fff] border-2 rounded-lg w-full" />
        </div>
        <h2 className="font-bold text-white text-[28px] sm:text-[35px] lg:text-[40px] bring_right_why_us">
          A quick summary of my <span className="text-[#6D95FC]">Journey</span>
        </h2>
        <p className="text-white text-[16px] sm:text-[18px] leading-relaxed bring_right_why_us">
  Throughout my career, I have embraced challenges and continuously pushed boundaries to grow as a professional. From honing my skills in front-end development to mastering the art of crafting seamless user experiences, each step in my journey has been a testament to my dedication and passion for innovation.
</p>

        <AnimatedButton text="Download CV" specialClass="bring_right_why_us" />
      </div>

      {/* Right Section - Timeline */}
      <div className="flex h-full flex-col items-start justify-center w-[90%] md:w-[35%] gap-6">
        <Timeline />
      </div>
    </section>
  );
}
