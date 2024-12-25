import React from "react";
import AnimatedButton from "./Utils/AnimatedButton";
export default function Feedback() {
  return (
    <>
      <section className="relative h-[100vh]  flex justify-center bg-black  items-center  w-full  z-[100]  feedback_section">
        <div className=" z-[100] absolute top-0 right-0 block object-cover w-full h-full md:hidden">
          <img
            src="./feedback/bg_mobile.webp"
            className="object-cover w-full h-full opacity-55"
            alt=""
          />
        </div>
        <div className="flex items-stretch justify-center w-full h-full">
          <div className="w-full  md:flex hidden max-w-[25%]   left_side_image">
            <img
              src="./feedback/left_side.webp"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className=" z-[200]  flex flex-col items-center justify-center !w-[90%] p-5 md:max-w-1/2 innerBlackFeedbackBlock">
            <h2 className=" text-center font-bold  text-white text-[35px]  lg:text-[40px]  uppercase feedback_come_up">
              WHAT <span className="text-[#6D95FC]">our</span>
              <br /> CLIENTS SAY?
            </h2>
            <hr className="border-[#6D95FC] border-2 rounded-lg my-3 w-[50%] feedback_come_up" />{" "}
            <p className="text-[#fff] text-[15px] uppercase text-center feedback_come_up">
              TESTIMONIALS
            </p>
            <div className="my-5"></div>
            <div className=" rounded-[38px] w-full  xl:w-[500px] bg-black  relative feedback_come_up">
              <div className="rounded-[38px]  z-[300] w-full absolute top-0 bg-gradient-to-b from-[#11182a4f]  to-[#11182a1f] h-full"></div>
              <div className="p-10">
                <p className=" text-center lg:text-justify text-white text-[17px] tracking-tight leading-7">
                  Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia
                  dolor sit amet, Neque porro elit
                </p>
                <div className="flex items-center justify-center w-full gap-4 mt-6 lg:justify-between lg:gap-4">
                  <img
                    src="./feedback/f1_img.webp"
                    alt="f1"
                    className="lg:w-[60px] w-[40px]"
                  />
                  <div className="flex flex-col ">
                    <p className="font-semibold text-[19px] text-white">
                      Carol Chaves
                    </p>
                    <p className="text-[14px] text-[#6D95FC]">
                      @caroles.gmail.com
                    </p>
                  </div>
                  <img
                    className="lg:w-[50px] w-[30px]"
                    src="./feedback/Coomas.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-5">
              <AnimatedButton
                text={"View All Testimonials"}
                specialClass={"feedback_come_up"}
              />
            </div>
          </div>
          <div className="w-full  md:flex hidden max-w-[25%]  right_side_image">
            <img
              src="./feedback/right_side.webp"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
