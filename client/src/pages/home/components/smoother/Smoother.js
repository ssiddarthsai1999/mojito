import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import bgmoon from "../../../../assets/images/city.gif";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
function Smoother() {
    const sceneRef = useRef(null);
    const imgRef = useRef(null); // Reference for the image you want to rotate

    useEffect(() => {
        // Initialize parallax
        if (sceneRef.current) {
            const parallaxInstance = new Parallax(sceneRef.current);
            return () => parallaxInstance.destroy();
        }
    }, []);

    useEffect(() => {
        // Rotate image based on mouse movement
        const handleMouseMove = (event) => {
            const { pageX, pageY } = event;
            const rotateX = (pageY / window.innerHeight - 0.5) * 10; // Adjust rotation sensitivity here
            const rotateY = (pageX / window.innerWidth - 0.5) * 10; // Adjust rotation sensitivity here

            if (imgRef.current) {
                imgRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        gsap.registerPlugin(SplitText);

        const splitSmootherH1 = new SplitText("#splitsmootherh1", { type: "chars" });
        const splitSmootherH4 = new SplitText("#splitsmootherh4", { type: "chars" });


        gsap.from(splitSmootherH1.chars, {
            duration: 1.2,
            opacity: 0,
            rotation: 360,
            scale: 0.1,

            transformOrigin: "center center", // Ensures scaling and rotation are centered
            delay: 0.5,
            ease: "back.out(1.7)", // Use a 'back' ease for a nice overshoot effect
            stagger: {
                each: 0.03,
                from: "start",
            },
        });

        gsap.from(splitSmootherH4.chars, {
            duration: 1.2,
            opacity: 0,
            delay: 0.5,
            ease: "power1.inOut",
            stagger: {
                each: 0.03, // Adjust time between each word appearing
                from: "start", // Animation will start from the left
            },
        });

        gsap.from("#splitSmootherButton", {
            duration: 2.5,
            scale: 2,
            scrub: 2,

            rotation: -360,
            y: -500,
            ease: "back.out(1.7)",
        });

        // Additional whole button animation for a "hover-like" effect on load

        // Clean up function to revert the SplitText to avoid any potential memory leaks
        return () => {
            splitSmootherH1.revert();
            splitSmootherH4.revert();
       
        };
    }, []);

    return (
        <div
            id="scene"
            className="overflow-hidden text-center  flex justify-center items-center align-middle h-screen p-4 md:p-10 "
        >
            <div>
                <div className="py-10 ">
                    <h1 className="mb-10 md:mb-2" id="splitsmootherh1">
                        ROAR IN THE DIGITAL WILDERNESS
                    </h1>
                    <h4
                        className=" mb-2 md:mb-[100px] w-1/2 mx-auto text-center"
                        id="splitsmootherh4"
                    >
                        We roar with success, deliverying the nymos through
                        versatile design, branding and the latest tech
                        development.
                    </h4>
                </div>
                <div className="flex justify-around md:justify-between max-w-[2400px] mx-auto">
                    {" "}
                    <button
                        className="buttonVariation1"
                        id="splitSmootherButton"
                    >
                        Explore Work
                    </button>
                    <button
                        className="buttonVariation1"
                        id="splitSmootherButton"
                    >
                        Get in Touch
                    </button>
                </div>
            </div>

            {/* <div data-depth="0.1" className="layer overflow-hidden h-screen ">
                <img
                    ref={imgRef} // Assign ref to the image
                    src={bgmoon}
                    alt=""
                    className="h-screen object-cover w-full  opacity-15"
                />
            </div> */}
        </div>
    );
}

export default Smoother;
