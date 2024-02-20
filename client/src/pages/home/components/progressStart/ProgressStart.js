import React, { useEffect, useState } from "react";
import { CircularProgress, LinearProgress, Stack } from "@mui/material/";
import loadingImage from "../../../../assets/images/loading.gif";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
function ProgressStart({ setPageName }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 4000; // 3 seconds for the count-up animation
        const intervalDuration = 30;
        const increment = (100 * intervalDuration) / duration;

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const nextProgress = prevProgress + increment;
                if (nextProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return nextProgress;
            });
        }, intervalDuration);

        // Set timeout to change page name after 3 seconds
        const timeout = setTimeout(() => {
            setPageName("normal");
        }, duration);

        // Clean up the interval and timeout on component unmount
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [setPageName]);
    return (
        <div className="min-h-screen   md:max-w-[100%] mx-auto max-w-full align-middle flex items-center justify-center ">
            <div />
            <div
                className="content text-center max-w-[400px] min-w-[200px] w-[250px] mx-auto"
                style={{ position: "relative", zIndex: 2 }}
            >
                <div className="mx-auto flex">
                    <img src={loadingImage} alt="" className="w-[40%]" />
                </div>
                {/* <p> {progress.toFixed(0)}%</p> */}
            </div>
        </div>
    );
}

export default ProgressStart;
