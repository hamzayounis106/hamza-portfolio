import React from "react";

export default function Footer() {
  return (
    <>
      <section className="  relative h-[90vh]  flex justify-center bg-black  items-center  w-full  z-[100]  ">
        <div className="absolute flex items-center justify-center w-full h-full">
          <div className="  z-[300] w-full absolute  bg-gradient-to-t from-[#6d96fc17]  to-[#6d96fc00]  bottom-0 h-1/2"></div>
          <div className="flex flex-col items-center justify-center h-full ">
            <div className="flex flex-col items-center justify-center text-center footer_section">
              <h1 className="text-[#6D95FC]  font-semibold   text-[35px] uppercase tracking-wider leading-none fade_up_animate_footer_el">
                Creatic
              </h1>
              <p className="text-white text-[11px]  tracking-widest leading-normal fade_up_animate_footer_el">
                CREATIVE AGENCY
              </p>
              <hr className="border-[#fff] border mt-3 rounded-lg w-[70px] fade_up_animate_footer_el" />
            </div>
            <nav className=" sm:text-[17px] text-[14px] flex items-center justify-center w-full mt-6 gap-2 sm:gap-10 text-[#6D95FC] list-none">
              <li className="fade_up_animate_footer_el">Categories</li>
              <li className="fade_up_animate_footer_el">About</li>
              <li className="fade_up_animate_footer_el">Services</li>
              <li className="fade_up_animate_footer_el">Portfolio</li>
              <li className="fade_up_animate_footer_el">Support</li>
            </nav>
            <div className="flex justify-center items-center w-[90%] sm:w-[60%] mt-6 flex-col gap-7">
              <p className="text-white text-center text-[14px] sm:text-[16px] fade_up_animate_footer_el">
                Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia
                dolor sit amet, Neque porro elit NeDque{" "}
              </p>
              <nav className="flex items-center justify-center w-full gap-8 text-white list-none">
                <li>
                  <img
                    src="./social_icons/fb.svg"
                    className="w-[19px] fade_up_animate_footer_el"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="./social_icons/insta.svg"
                    className="w-[19px] fade_up_animate_footer_el"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="./social_icons/whatsapp.svg"
                    className="w-[19px] fade_up_animate_footer_el"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="./social_icons/link.svg"
                    className="w-[19px] fade_up_animate_footer_el"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="./social_icons/print.svg"
                    className="w-[19px] fade_up_animate_footer_el"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="./social_icons/twitter.svg"
                    className="w-[19px] fade_up_animate_footer_el"
                    alt=""
                  />
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="absolute w-full bottom-8">
          <div className="flex items-center justify-center">
            <p className="text-sm font-light text-center text-white fade_up_animate_footer_el">
              Copyright © 2003-2023 Creatic Agency All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
