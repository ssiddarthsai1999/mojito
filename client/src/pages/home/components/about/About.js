import React, { useEffect, useRef } from "react";

import AboutCard from "./aboutCard/AboutCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import "./about.css";
function About({ data }) {
    const cardRefs = useRef([]);
    const about = data.about;

    useEffect(() => {
        const splitH1 = new SplitText("#splith1", { type: "chars" });
        const splitH3 = new SplitText("#splith3", { type: "chars" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#splith1",
                start: "top bottom", // When the top of the trigger hits the center of the viewport
                end: "bottom center", // Adjust as needed
                scrub: 1, // Smooth scrubbing effect on scroll
                // Toggle actions when scrolling forward and backward
                toggleActions: "play reverse play reverse",
            },
        });

        // Add your animation to the timeline
        tl.to(splitH1.chars, {
            duration: 1,
            x: 100,
            color: "#ccc",
            ease: "power2.inOut",
            stagger: 0.1,
        });
        gsap.from(splitH3.chars, {
            scrollTrigger: {
                trigger: "#splith3",
                start: "top bottom", // Adjust as needed. "top bottom" means the animation starts when the top of #splith3 hits the bottom of the viewport.
                toggleActions: "play none none none", // Adjust if you want the animation to reverse on scroll up.
            },
            duration: 0.5,
            opacity: 0,
            ease: "power1.inOut",
            stagger: {
                each: 0.05,
                from: "start",
            },
        });

        gsap.from("#aboutCard1", {
            scrollTrigger: {
                trigger: "#aboutCard1",
                end: "bottom bottom",
                scrub: 1,
                start: "top bottom", // Adjust as needed. "top bottom" means the animation starts when the top of #splith3 hits the bottom of the viewport.
                toggleActions: "play reverse play reverse",
            },
            duration: 2,
            x: -1000,
            rotation: -90,
            ease: "power1.out",
        });
        gsap.from("#aboutCard3", {
            scrollTrigger: {
                trigger: "#aboutCard3",
                end: "bottom bottom",
                scrub: 1,
                start: "top bottom", // Adjust as needed. "top bottom" means the animation starts when the top of #splith3 hits the bottom of the viewport.
                toggleActions: "play reverse play reverse",
            },
            duration: 2,
            x: -1000,
            rotation: -90,
            ease: "power1.out",
        });

        gsap.from("#aboutCard2", {
            scrollTrigger: {
                trigger: "#aboutCard2",
                end: "bottom bottom",
                scrub: 1,
                start: "top bottom", // Adjust as needed. "top bottom" means the animation starts when the top of #splith3 hits the bottom of the viewport.
                toggleActions: "play reverse play reverse",
            },
            duration: 2,
            x: 1000,
            rotation: 90,
            ease: "power1.out",
        });
        gsap.from("#aboutCard4", {
            scrollTrigger: {
                trigger: "#aboutCard4",
                end: "bottom bottom",
                scrub: 1,
                start: "top bottom", // Adjust as needed. "top bottom" means the animation starts when the top of #splith3 hits the bottom of the viewport.
                toggleActions: "play reverse play reverse",
            },
            duration: 2,
            x: 1000,
            rotation: 90,
            ease: "power1.out",
        });

        // Cleanup function
        return () => {
            tl.kill();

            splitH1.revert();
            splitH3.revert();
        };
    }, []);

    return (
        <div className="relative">
            <div className="py-10 w-full md:w-1/2 flex flex-col">
                <h1 className="text-white/30 mb-2 md:mb-6" id="splith1">
                    WHO WE ARE
                </h1>
                <span className=" mb-2 md:mb-[100px] text-left " id="splith3">
                    We roar with success, deliverying the mojito through
                    versatile design, branding and the latest tech development.
                </span>
                <button className="buttonVariation1 md:mt-2 mt-10 w-fit">
                    About us
                </button>
            </div>
            <div className="cards-container flex md:flex-row flex-col pt-10 md:pt-[150px]  ">
                <div
                    id={`aboutCard${1}`}
                    className=" w-full mx-auto md:w-[48%] aboutCard "
                >
                    <AboutCard item={about[0]} key={about[0].id} />
                </div>
                <div
                    id={`aboutCard${2}`}
                    className=" w-full mx-auto md:w-[48%] aboutCard"
                >
                    <AboutCard item={about[1]} key={about[1].id} />
                </div>
                <div
                    id={`aboutCard${3}`}
                    className=" w-full mx-auto md:w-[48%] aboutCard "
                >
                    <AboutCard item={about[2]} key={about[2].id} />
                </div>
                <div
                    id={`aboutCard${4}`}
                    className=" w-full mx-auto md:w-[48%] aboutCard"
                >
                    <AboutCard item={about[3]} key={about[3].id} />
                </div>
            </div>{" "}
        </div>
    );
}

export default About;
