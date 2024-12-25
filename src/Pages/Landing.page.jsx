import React, { useRef, useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Header from "../Components/Header.comp";
import Hero from "../Components/Hero.comp";
import About from "../Components/About.comp";
import Services from "../Components/Services.comp";
import Stats from "../Components/Stats.comp";
import Projects from "../Components/Projects.comp";
import WhyUs from "../Components/WhyUs.comp";
import Feedback from "../Components/Feedback.comp";
import Contact from "../Components/Contact.comp";
import Footer from "../Components/Footer.comp";
import { createContext } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
export const TLContext = createContext();
export const RefEl = createContext();
function LandingPage() {
  const tl = gsap.timeline();

  const scrollRef = useRef();
  useLayoutEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,

      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // Ensure Locomotive updates on resize
    const handleResize = () => {
      locoScroll.update();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      locoScroll.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    // Hero Animation
    gsap.to(".image_hero_girl, .hero_content", {
      scrollTrigger: {
        markers: false,
        trigger: ".image_hero_girl",
        scroller: scrollRef.current,
        start: "top 10%",
        end: "10% 20%",
        scrub: 5,
      },
      y: 30,
      duration: 0.5,
      ease: "power2.in",
    });
    gsap.to(".shadow_Hero", {
      scrollTrigger: {
        markers: false,
        trigger: ".shadow_Hero",
        scroller: scrollRef.current,
        start: "top 10%",
        end: "10% 20%",
        scrub: 5,
      },
      opacity: 0.2,
      duration: 1,
      ease: "power2.in",
    });
    if (tl) {
      tl.from(".shadow_Hero ", {
        opacity: 0,
        delay: 0.5,
        x: 400,
        duration: 1,
        stagger: 1,
      });

      tl.from(".bringUp", {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,

        ease: "bounce.out",
      });

      tl.from(".line_progress", {
        size: 0,
        scale: 0,
        duration: 0.2,
        stagger: 0.1,
        transformOrigin: "left center",
      });

      // About Us

      tl.to(".about_Us", {
        scrollTrigger: {
          trigger: ".about_Us",
          scroller: scrollRef.current,
          start: "center 30%",
          end: "center 5%",
          markers: false,
          scrub: 5,
        },
        y: 50,
        duration: 0.5,
        ease: "power2.in",
      });
      gsap.to(".robot_about", {
        y: 10,
        duration: 1,
        yoyo: true,
        repeat: Infinity,
        ease: "power2.inOut",
      });
      tl.from(".about_incoming_rtl", {
        scrollTrigger: {
          trigger: ".about_incoming_rtl",
          scroller: scrollRef.current,
          start: "top 80%",
          end: "top 40%",
          markers: false,
          scrub: 5,
        },
        x: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "power1.inOut",
      });
      tl.from(".aboutHr", {
        scrollTrigger: {
          trigger: ".aboutHr",
          scroller: scrollRef.current,
          start: "top 60%",
          end: "top 40%",
          markers: false,
        },

        scale: 0,
        delay: 1,
        duration: 0.2,

        transformOrigin: "left center",
      });

      // Our Services
      tl.from(".bring_right", {
        scrollTrigger: {
          trigger: ".bring_right",
          scroller: scrollRef.current,
          markers: false,
          start: "top 80%",
          end: "top 40%",
          scrub: 5,
        },
        x: -200,
        opacity: 0,
        stagger: 0.1,
        ease: "power1.inOut",
      });
      tl.from(".service_hr", {
        scrollTrigger: {
          trigger: ".service_hr",
          scroller: scrollRef.current,
          start: "top 60%",
          end: "top 40%",
          markers: false,
        },

        scale: 0,
        delay: 1,
        duration: 0.2,

        transformOrigin: "left center",
      });
      tl.from(".vide_box", {
        scrollTrigger: {
          trigger: ".bring_right",
          scroller: scrollRef.current,
          markers: false,
          start: "top 80%",
          end: "top 60%",
          scrub: 5,
        },
        y: -200,
        x: -100,
        opacity: 0,
        duration: 0.1,
        ease: "power1.inOut",
      });
      tl.from(".graphics_box", {
        scrollTrigger: {
          trigger: ".bring_right",
          scroller: scrollRef.current,
          markers: false,
          start: "top 80%",
          end: "top 60%",
          scrub: 5,
        },
        y: -200,
        x: 100,
        opacity: 0,
        duration: 0.1,
        ease: "power1.inOut",
      });
      tl.from(".ui_box", {
        scrollTrigger: {
          trigger: ".bring_right",
          scroller: scrollRef.current,
          markers: false,
          start: "top 80%",
          end: "top 60%",
          scrub: 5,
        },
        y: 200,
        x: -100,
        opacity: 0,
        duration: 0.1,
        ease: "power1.inOut",
      });
      // Stats Animations
      gsap.from(".comeUpStat", {
        scrollTrigger: {
          markers: false,
          trigger: `.comeUpStat`,
          start: "top 70%",
          end: "top 30%",
          scroller: scrollRef.current,
          scrub: 5,
        },
        y: -10,
        opacity: 0,
        stagger: 0.05,
      });
      //Projects Animations
      gsap.from(".projects_come_up", {
        scrollTrigger: {
          markers: false,
          trigger: `.projectSection`,
          start: "top 70%",
          end: "top 30%",
          scroller: scrollRef.current,
          scrub: 5,
        },
        y: 30,
        opacity: 0,
        stagger: 0.5,
        ease: "power1.inOut",
      });
      //Why Us Animations
      gsap.from(".bring_right_why_us", {
        scrollTrigger: {
          trigger: ".whySection",
          scroller: scrollRef.current,
          markers: false,
          start: "top 80%",
          end: "top 60%",
          scrub: 5,
        },
        x: -200,
        opacity: 0,
        stagger: 0.1,
        ease: "power1.inOut",
      });
      //Feedback Section Animations
      tl.from(
        ".left_side_image",
        {
          scrollTrigger: {
            trigger: ".feedback_section",
            scroller: scrollRef.current,
            markers: false,
            start: "20% 80%",
            end: "25% 70%",
            scrub: 5,
          },

          width: "0%",
          transformOrigin: "center left",
        },
        3
      );
      tl.fromTo(
        ".innerBlackFeedbackBlock",
        {
          opacity: 0,
          width: "100%",
          transformOrigin: "center center",
        },
        {
          opacity: 1,
          width: "50%",
          scrollTrigger: {
            trigger: ".feedback_section",
            scroller: scrollRef.current,
            markers: false,
            start: "20% 80%",
            end: "25% 70%",
            scrub: 5,
          },
          duration: 3,
        }
      );
      tl.from(
        ".right_side_image",
        {
          scrollTrigger: {
            trigger: ".feedback_section",
            scroller: scrollRef.current,
            markers: false,
            start: "20% 80%",
            end: "25% 70%",
            scrub: 5,
          },

          width: "0%",
          transformOrigin: "center right",
        },
        3
      );
      tl.from(".feedback_come_up", {
        scrollTrigger: {
          trigger: ".feedback_section",
          scroller: scrollRef.current,
          markers: false,
          start: "20% 80%",
          end: "25% 70%",
          scrub: 5,
        },
        y: 30,
        delay: 5,
        opacity: 0,
        stagger: 0.3,
        ease: "power1.out",
      });
      //contactUs Annimations
      tl.from(".bring_right_contact", {
        scrollTrigger: {
          trigger: ".contact_sections",
          scroller: scrollRef.current,
          markers: false,
          start: "top 80%",
          end: "top 20%",
          scrub: 5,
        },
        x: -200,
        opacity: 0,
        stagger: 0.1,
        ease: "power1.inOut",
      });
      tl.from(".contact_form", {
        scrollTrigger: {
          trigger: ".contact_form",
          scroller: scrollRef.current,
          markers: false,
          start: "top 80%",
          end: "top 40%",
          scrub: 5,
        },
        y: 40,
        opacity: 0,
        duration: 0.4,
        ease: "power1.inOut",
      });
      //Footer Animations
      tl.from(".fade_up_animate_footer_el", {
        scrollTrigger: {
          scroller: scrollRef.current,
          trigger: ".footer_section",
          start: "top 80%",
          end: "top 40%",
          markers: false,
          scrub: 5,
        },
        y: 150,
        duration: 10,
        stagger: 1,
        opacity: 0,
      });
    }
    ScrollTrigger.refresh();
  }, []);
  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="flex flex-col items-center justify-center w-full bg-black page"
    >
      <Header />
      <Hero />
      <About />
      {/* <Services /> */}
      <Stats />
      <Projects />
      <WhyUs />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
