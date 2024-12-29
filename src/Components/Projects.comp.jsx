import React, { useRef, useState } from "react";
// Import Swiper React components
import projectsData from "../db/Projects";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "../index.css";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
export default function Projects() {
  return (
    <>
      <section className="relative  flex justify-center bg-black py-16 items-center  w-full  z-[100]  projectSection">
        <div className=" bg-gradient-to-r from-[#6d96fc1c] left-0 to-[#6d96fc00]  absolute top-0 z-[200] w-[30%] h-full object-cover"></div>

        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className=" font-bold  text-white text-[40px] text-center projects_come_up">
            ENJOY OUR <span className="text-[#6D95FC]">LATEST</span> PROJECTS
          </h2>
          <div className="w-[40%] flex justify-center items-center gap-2 projects_come_up">
            <hr className="flex-grow border-[#fff] border-2" />
            <h3 className="text-[#6D95FC] text-[21[x] uppercase">our WORK</h3>
            <hr className="flex-grow border-[#fff] border-2" />
          </div>
        </div>
      </section>
      <section className="relative pb-10  flex justify-center bg-black  items-center  h-screen w-full  z-[100]  ">
        {" "}
        <div className=" bg-gradient-to-r from-[#6d96fc1c] left-0 to-[#6d96fc00]  absolute top-0 z-[50] w-[30%] h-full object-cover"></div>
        <Swiper
          breakpoints={{
            500: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={8000}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper cursor-grab !z-[300] projects_come_up"
        >
          {projectsData?.map((project) => (
            <SwiperSlide className="flex items-center justify-center cursor-grab">
              <div
                className="w-[400px] h-[400px] rounded-lg shadow-lg flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${project.colors.primary}, ${project.colors.secondary})`,
                }}
              >
                <a href={project?.liveUrl} className="flex items-center justify-center">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="max-w-[90%] max-h-[90%] object-contain"
                  />{" "}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
