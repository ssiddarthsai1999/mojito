import React from "react";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
function TeamCard({ item }) {
    return (
        <div className="min-w-[200px] md:min-w-[350px]  sm:min-w-[250px] lg:min-w-[400px] xl:min-w-[600px] sm:w-[600px] lg:w-[1200px] h-[300px] md:h-[500px] border border-[#c5fcfc]  rounded-[40px] p-3  justify-center gap-2 flex-col flex teamCardBg">
            <img
                src={item.image}
                alt=""
                className="w-full rounded-[40px] h-[200px] md:h-[300px] lg:w-full object-cover"
            />

            <div className="flex justify-between items-center align-middle p-2 ">
                <Slide direction="left">
                    <div className="">
                        {" "}
                        <h4> {item.name}</h4>
                        <h4>{item.role}</h4>
                    </div>
                </Slide>
                <Slide direction="right">
                    <div className="">
                        <i class="fa-brands fa-twitter fa-fade fa-xl"></i>
                    </div>
                </Slide>
            </div>
        </div>
    );
}

export default TeamCard;
