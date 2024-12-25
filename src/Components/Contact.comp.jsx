import React from "react";

export default function Contact() {
  return (
    <>
      <section className=" contact_sections relative  flex justify-center py-24 bg-black   items-center  w-full  z-[100]  ">
        <div className=" bg-gradient-to-l from-[#6d96fc25] right-0 to-[#6d96fc00]  absolute top-0 z-[200] w-[60%] h-full object-cover"></div>
        <div className=" z-[500]  gap-10 md:gap-0 md:flex-row flex-col w-[90%] h-full flex justify-center items-center ">
          <div className="flex h-full  flex-col items-start justify-center  w-full md:w-[50%] lg:w-[45%] gap-5">
            <h2 className=" font-bold  text-white text-[35px]  lg:text-[40px]   uppercase bring_right_contact">
              Get in <span className="text-[#6D95FC]">TOUCH</span>.
            </h2>
            <hr className="border-[#fff] border-2 rounded-lg w-1/5 bring_right_contact" />

            <p className="text-white text-[17px] font-light bring_right_contact">
              Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
              sit amet, Neque porro elit NeDque porro
            </p>

            <div className="flex items-center justify-start w-full gap-5 mt-10 bring_right_contact">
              <img src="./location.svg" className="w-[30px] " alt="Location" />
              <div>
                <p className="text-white font-semibold text-[21px] ">
                  Office Address
                </p>
                <p className="text-[#6D95FC] text-[14px] ">
                  98, Arca St, PR City, 33414 , Indonesia
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start w-full gap-5 bring_right_contact">
              <img src="./phone.svg" className="w-[30px]" alt="Location " />
              <div>
                <p className="text-white font-semibold text-[21px] ">Call Us</p>
                <p className="text-[#6D95FC] text-[14px] ">
                  (+BK) 123 456 7891
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start w-full gap-5 bring_right_contact">
              <img src="./mail.svg" className="w-[30px] " alt="Location" />
              <div>
                <p className="text-white font-semibold text-[21px] ">Mail Us</p>
                <p className="text-[#6D95FC] text-[14px] ">
                  info@creaticagency.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full sm:w-[70%] md:w-[50%]   lg:w-[55%] h-full">
            <div className=" w-[100%] md:w-[80%] lg:w-[65%] contact_form  flex-col rounded-3xl flex justify-center items-center  relative  h-[20%]  bg-[#00000094] py-10">
              <div className="  rounded-3xl z-[300] w-full absolute top-0 bg-gradient-to-b from-[#6d96fc2a] right-0 to-[#6d96fc12] h-full"></div>
              <form
                action=""
                className=" z-[500] flex flex-col items-center justify-center w-full gap-6"
              >
                <div className="flex w-[80%] sm:w-[70%] flex-col justify-center items-center gap-3">
                  <label
                    htmlFor="name"
                    className="uppercase text-white text-[17px] text-start w-full"
                  >
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="  text-white  px-2   hover:outline-none focus:outline-none w-full bg-transparent border border-white  h-[40px]"
                  />
                </div>
                <div className="flex w-[80%] sm:w-[70%] flex-col justify-center items-center gap-3">
                  <label
                    htmlFor="email"
                    className="uppercase text-white text-[17px] text-start w-full"
                  >
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="  text-white  px-2   hover:outline-none focus:outline-none w-full bg-transparent border border-white  h-[40px]"
                  />
                </div>
                <div className="flex w-[80%] sm:w-[70%] flex-col justify-center items-center gap-3">
                  <label
                    htmlFor="message"
                    className="uppercase text-white text-[17px] text-start w-full"
                  >
                    YOUR MESSAGE
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    className="w-full px-2 text-white bg-transparent border border-white  hover:outline-none focus:outline-none"
                  ></textarea>
                </div>
              </form>
              <div className="flex items-center justify-center w-full z-[300]">
                <button className=" mt-5 p-3 px-10 text-[15px] py-2 transition-all duration-300 ease-in-out font-medium bg-[#6D95FC] hover:bg-[#fff] uppercase text-black border-4  border-[#6D95FC]">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
