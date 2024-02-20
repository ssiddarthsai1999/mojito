import React from "react";
import "../about.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
function AboutCard({ item }) {
    return (
        <div className={`  `} key={item.id}>
            <div className="flex flex-col justify-between    w-full h-full">
                <div className="w-full  h-1/2 ">
                    <h1>{item.number}</h1>
                </div>
                <div className="w-full  h-1/2 flex text-right items-center justify-end ">
                    <h4 className="text-right w-[80%]  ">{item.stat}</h4>
                </div>
            </div>
        </div>
    );
}

export default AboutCard;
