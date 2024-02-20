import React, { useState, useEffect } from "react";
import Hero from "./components/story/Story";
import HeavenScroll from "react-heaven-scroll";
import Testimonials from "./components/testimonials/Testimonials";
import Smoother from "./components/smoother/Smoother";
import Opening from "./components/opening/Opening";
import ProgressStart from "./components/progressStart/ProgressStart";
import LoadingBar from "react-top-loading-bar";

import gsap from "gsap";
import Lore from "./components/lore/Lore";
import Team from "./components/team/Team";
import About from "./components/about/About";
function Home({ data, pageName, setPageName }) {
    const handleLetsGo = () => {
        setPageName("normal");
    };
    const handleNormal = () => {
        setPageName("normal");
    };
    useEffect(() => {
        if (pageName === "normal") {
            gsap.from("#normal-page", {
                x: "100%", // Start sliding in from 100% off the right side
                opacity: 0,

                yoyo: true, // Go back and forth for the shake effect

                duration: 2, // Duration for the slide-in animation
                ease: "power3.out", // Use an ease for a smoother slide-in
            });
        }
    }, [pageName]);

    return (
        <div className="   max-w-full  w-full mx-auto  relative">
            {pageName === "progress" && (
                <div className="">
                    <ProgressStart setPageName={setPageName} />
                </div>
            )}
            {/* {pageName === "opening" && (
                <div className="">
                    <Opening handleLetsGo={handleLetsGo} />
                </div>
            )} */}
            {/* {pageName === "story" && (
                <div className="">
                    <Hero handleNormal={handleNormal} />
                </div>
            )} */}
            {pageName === "normal" && (
                <div className="relative ">
                    {/* <div className="absolute top-0 left-0 right-0 bottom-0 ">
                        <FluidAnimation />
                    </div> */}
                    <div className="" id="normal-page">
                        <Smoother />
                    </div>{" "}
                    <div
                        className=" w-full mx-auto px-[100px]  md:py-[100px]"
                        id="normal-page"
                    >
                        {" "}
                        <About data={data} />
                    </div>
                    <div className="" id="normal-page ">
                        <Team data={data} />
                    </div>{" "}
                </div>
            )}

            {/* <div className="">
                <Testimonials data={data.testimonials} />
            </div> */}
        </div>
    );
}

export default Home;
