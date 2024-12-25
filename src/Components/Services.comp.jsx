import React from "react";
import AnimatedButton from "./Utils/AnimatedButton";
function Services() {
  return (
    <>
      <section className="  py-9  overflow-hidden relative  flex justify-center bg-black  w-full  z-[100]  xl:py-0 h-full  xl:h-[100vh] ">
        <div className="w-[95%]   xl:w-[90%] h-full flex xl:gap-0 gap-7  xl:flex-row flex-col justify-center items-center ">
          <div className="flex h-full  flex-col items-start justify-center w-[90%] md:w-[70%] xl:w-[45%] gap-5">
            <p className="text-[#6D95FC] text-[18px] uppercase bring_right">
              our services
            </p>
            <h2 className=" font-bold  text-white  text-[35px]  lg:text-[40px] bring_right">
              Experience the power of{" "}
              <span className="text-[#6D95FC]">innovation</span>.
            </h2>
            <hr className="border-[#fff] border-2 rounded-lg w-1/3 service_hr" />
            <p className="text-[#6D95FC] text-[16px] font-light bring_right ">
              We love Creating
            </p>
            <p className="text-white text-[16px] lg:text-[17px]  font-light bring_right">
              Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
              sit amet, Neque porro elit NeDque porro Neque porro quisquam est
              qui do lorem ipsum quia dolor sit amets ipsum
            </p>
            <AnimatedButton specialClass={"service_button bring_right"} text={"View All"} />
          </div>
          <div className="flex items-center justify-center  xl:w-[55%] h-full">
            <div className="flex flex-wrap items-center justify-center w-full gap-9 sm:gap-4 xl:gap-0">
              {/* // VIDEO MARKETING */}
              <div className=" vide_box w-[250px]  xl:w-[280px] h-[240px] bg-gradient-to-r from-[#6d96fc17] xl:left-0 via to-[#1515156c]  flex justify-center items-center flex-col gap-1  ">
                <img
                  src="./Video_Icon.svg"
                  alt="video_icon"
                  className="w-[70px]"
                />
                <h2 className="text-[#6D95FC] text-[18px] font-semibold text-center mt-4 uppercase">
                  VIDEO MARKETING
                </h2>
                <p className="text-white text-[16px] font-light text-center">
                  Lorem ipsum Neque do porro quisquam est qui do quam{" "}
                </p>
              </div>
              {/* Graphic Design */}
              <div className=" graphics_box xl:mt-[2rem] w-[250px]  xl:w-[280px] h-[240px] bg-gradient-to-b from-[#6d96fc17] xl:left-0 via to-[#1515156c]  flex justify-center items-center flex-col gap-1  ">
                <img
                  src="./graphic_icon.svg"
                  className="w-[70px]"
                  alt="video_icon"
                />
                <h2 className="text-[#6D95FC] text-[18px] font-semibold text-center mt-4 uppercase">
                  Graphic Design
                </h2>
                <p className="text-white text-[16px] font-light text-center">
                  Lorem ipsum Neque do porro quisquam est qui do quam{" "}
                </p>
              </div>
              {/* ui/ux Design */}
              <div className=" ui_box w-[250px]  xl:w-[280px] h-[240px] bg-gradient-to-t from-[#6d96fc17] xl:left-0 via to-[#1515156c]  xl:mt-[-2rem] flex justify-center items-center flex-col gap-1  ">
                <img
                  src="./ux_icon.svg"
                  className="w-[70px]"
                  alt="video_icon"
                />
                <h2 className="text-[#6D95FC] text-[18px] font-semibold text-center mt-4 uppercase">
                  ui/ux Design
                </h2>
                <p className="text-white text-[16px] font-light text-center">
                  Lorem ipsum Neque do porro quisquam est qui do quam{" "}
                </p>
              </div>{" "}
              {/* WEBSITE DESIGN */}
              <div className="web_box  w-[250px]  xl:w-[280px] h-[240px] bg-gradient-to-l from-[#6d96fc17] xl:left-0 via to-[#1515156c]  flex justify-center items-center flex-col gap-1  ">
                <img
                  src="./web_icon.svg"
                  className="w-[70px]"
                  alt="video_icon"
                />
                <h2 className="text-[#6D95FC] text-[18px] font-semibold text-center mt-4 uppercase">
                  WEBSITE DESIGN
                </h2>
                <p className="text-white text-[16px] font-light text-center">
                  Lorem ipsum Neque do porro quisquam est qui do quam{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
