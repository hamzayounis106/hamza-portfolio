import React from "react";
import AnimatedButton from "./Utils/AnimatedButton";
function About() {
  return (
    <>
      <section className="relative about_Us  flex justify-center bg-black  w-full   z-[100] h-full py-5   lg:min-h-[100vh] ">
        <div className=" bg-gradient-to-r from-[#6d96fc3b] left-0 to-[#6d96fc00]  absolute top-0 z-[200] w-[50%] h-full object-cover"></div>
        <div className="  gap-10 lg:gap-0 py-10 lg:py-1 w-[95%]  flex-col md:flex-row   lg:w-[90%] h-full flex justify-center items-center ">
          <div className="flex items-center  justify-center md:justify-start md:w-[40%]  lg:w-[50%] h-full">
            <img
              src="./About/about_robot.webp"
              className="max-w-[65%]  robot_about"
              alt=""
            />
          </div>
          <div className="flex h-full  flex-col items-start justify-center w-[95%] sm:w-[80%]  md:w-[60%] lg:w-[45%] gap-5">
            <p className="text-[#6D95FC]  text-[19px] lg:text-[21px] uppercase  about_incoming_rtl">
              ABOUT ME
            </p>
            <h2 className=" font-bold  text-white  text-[35px]  lg:text-[40px] about_incoming_rtl">
              I Turn Ideas into
              <span className="text-[#6d95fc] font-semibold"> Life</span>
            </h2>
            <hr className="border-[#fff] border lg:border-2 rounded-lg w-1/3 aboutHr" />
            <p className="text-[#6D95FC] text-[16px] font-light   about_incoming_rtl">
              I love Creating
            </p>
            <p className="text-white text-[16px] lg:text-[17px] font-light about_incoming_rtl">
  I’m <strong className="text-[#6d95fc] font-semibold">Hamza</strong>, a passionate front-end developer and freelancer with over <strong className="text-[#6d95fc] font-semibold">3 years of experience</strong> in combining creativity and functionality. I specialize in crafting pixel-perfect HTML email templates, building custom MERN stack websites, and creating seamless user interfaces. As a freelancer, I’ve worked with clients worldwide, delivering responsive <strong className="text-[#6d95fc] font-semibold">websites</strong>, <strong className="text-[#6d95fc] font-semibold">Shopify stores</strong>, and performing custom WordPress customizations, completing dozens of projects over the past two years. This experience has sharpened my <strong className="text-[#6d95fc] font-semibold">adaptability</strong>, <strong className="text-[#6d95fc] font-semibold">communication</strong>, and ability to meet deadlines while maintaining top-quality work. I’m always excited to take on new challenges and create impactful solutions.
</p>


          </div>
        </div>
      </section>
    </>
  );
}

export default About;
