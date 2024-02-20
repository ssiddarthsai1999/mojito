import React, { useEffect, useRef } from "react";
import TeamCard from "./teamCard/TeamCard";
import ScrollContainer from "react-indiana-drag-scroll";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

function Team({ data }) {
    return (
        <div className="  min-h-screen w-full  pt-[100px] lg:pt-[2px] p-4 lg:p-6 flex-col flex align-middle items-center  mx-auto max-h-[2000px]">
            <Bounce>
                <h1 className="text-center lg:mb-2 mb-10">MEET THE TEAM</h1>
            </Bounce>

            <ScrollContainer className="w-full">
                <div className="  flex gap-10 md:gap-14 lg:gap-24 py-[50px] md:pt-[100px]  ">
                    {data.team.map((item) => (
                        <TeamCard item={item} />
                    ))}
                </div>
            </ScrollContainer>
        </div>
    );
}

export default Team;
