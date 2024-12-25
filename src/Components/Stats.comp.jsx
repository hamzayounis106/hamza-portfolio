import React from "react";
import SingleStat from "./Single.Stat";
function Stats() {
  return (
    <>
      <section className="relative flex-wrap flex-col  flex justify-center bg-black lg:py-20 lg:min-h-[48vh]  items-center  w-full  z-[100]  gap-10 ">
        <div className=" bg-gradient-to-r from-[#6d96fc1c] left-0 to-[#6d96fc00]  absolute top-0 z-[200] w-[30%] h-full object-cover"></div>
        <div className="w-full justify-center gap-3 flex flex-col items-center text-center">
          <p className="text-[#6D95FC] text-[19px] lg:text-[21px] uppercase about_incoming_rtl">
            MY STATS
          </p>
          <h2 className="font-bold text-white text-[35px] lg:text-[40px] about_incoming_rtl capitalize">
          Going the extra 
            <span className="text-[#6d95fc] font-semibold"> mile</span>
          </h2>
          <hr className="border-[#fff] border lg:border-2 rounded-lg w-1/3 aboutHr" />
          <p className="text-[#6D95FC] text-[16px] font-light about_incoming_rtl">
            Delivering Exceptional Results
          </p>
        </div>

        <div className="flex gap-y-9 justify-center lg:justify-between flex-wrap  items-center w-[90%] lg:w-[80%] z-[300]">
          <SingleStat
            _id={"team_stat"}
            img="./Stats/Team.svg"
            count={"3"}
            text={"Years"}
          />
          <SingleStat
            _id={"projects_stat"}
            img="./Stats/projects.svg"
            count={"390+"}
            text={"Gigs done"}
          />
          <SingleStat
            _id={"customers_stat"}
            img="./Stats/customers.svg"
            count={"200+"}
            text={"Happy Clients"}
          />
          <SingleStat
            _id={"awards_test"}
            img="./Stats/Awards.svg"
            count={"4.9"}
            text={"Rating "}
          />
        </div>
      </section>
    </>
  );
}

export default Stats;
