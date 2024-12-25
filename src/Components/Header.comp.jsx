import { useGSAP } from "@gsap/react";
import { useState } from "react";
import gsap from "gsap";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
function Header() {
  const [translate, setTranslate] = useState(true);
  const headerSwitchHander = () => {
    setTranslate(!translate);
  };
  useGSAP(() => {
    gsap.from(".fadeFromTop", {
      y: -100,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      delay: 0.5,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <>
      <section className="bg-[#000000]  w-full flex justify-center overflow-hidden">
        {/* Mobile Header  */}
        <div
          className={`bg-[#000000]  absolute flex flex-col gap-y-8 items-center justify-center w-full h-screen p-3 md:hidden z-[1000] duration-500 ease-in-out transition-all  ${
            translate ? "translate-x-[200%]" : "translate-x-[0%]"
          }`}
        >
          {" "}
          <div className=" from-[#6d96fc27] bg-gradient-to-r right-0 to-[#6d96fc00]  absolute top-0  w-full h-full object-cover z-[1001]"></div>
          <div className="absolute top-5 right-7 z-[1003]">
            <IoMdClose
              onClick={headerSwitchHander}
              className="text-2xl text-white cursor-pointer"
            />{" "}
          </div>{" "}
          <div className="flex flex-col items-center justify-center text-center fadeFromTop">
            <h1 className="text-[#6D95FC]  font-semibold   text-[30px] lg:text-[35px] uppercase tracking-tighter">
          HAMZA
            </h1>
      
          </div>
          <nav className=" z-[1002] flex flex-col items-center justify-center w-full gap-6 text-white list-none lg:gap-10">
            <li className="fadeFromTop">Home</li>
            <li className="fadeFromTop">About Us</li>
            <li className="fadeFromTop">Services</li>
            <li className="fadeFromTop">Portfolio</li>
            <li className="fadeFromTop">Contact Us</li>
          </nav>
        </div>
        {/* Desktop Header  */}
        <header className="flex justify-between w-full h-[15vh] ">
          <div className=" w-[50%] md:w-[30%] lg:w-[20%] flex flex-col justify-center text-center items-center fadeFromTop">
            <h1 className="text-[#6D95FC]  font-semibold   text-[30px] lg:text-[35px] uppercase tracking-tighter">
            HAMZA
            </h1>
          
          </div>
          <div className=" w-[60%]  hidden md:flex justify-center items-center">
            <nav className="flex items-center justify-center w-full gap-6 text-white list-none lg:gap-10">
              <li className="fadeFromTop">Home</li>
              <li className="fadeFromTop">About Us</li>
              <li className="fadeFromTop">Services</li>
              <li className="fadeFromTop">Portfolio</li>
              <li className="fadeFromTop">Contact Us</li>
            </nav>
          </div>
          {/* Menu icon  */}
          <div className=" w-[10%] flex items-center justify-center md:hidden">
            <RiMenu3Line
              onClick={headerSwitchHander}
              className="text-2xl text-white"
            />
          </div>
        </header>
      </section>
    </>
  );
}

export default Header;
