'use client'
import Image from "next/image";
import Container from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";


const Banner = () => {    
    useEffect(() => {
        const intervalId = setInterval(() => {
            scrollDiv();
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    function scrollDiv() {
        const ref = document.querySelector('.scroller-div');
        let div = document.querySelector('.scroller-div');
        if (div) {
            div.scrollTo({top: div.scrollTop + 176, behavior: "smooth"});
            console.log(div.scrollTop, div.scrollHeight ,div.clientHeight)
            if (div.scrollTop >= 180) {
                console.log(div.scrollTop, div.scrollHeight ,div.clientHeight)
                div.scrollTo({top:0, behavior:"smooth"});
            }
        }
    }
    return(
        <div className="bg-black min-h-screen">
            <Container styles="border-b-4 border-yellow-400">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-7 my-auto">
                        <h1 className="text-white text-5xl mb-6">Hey there, <br /><span className="text-yellow-400 font-bold break-keep">I&apos;m Sarthak</span></h1>
                        <div className="text-white">
                           <p className="tracking-widest font-thin text-gray-200">With a keen eye for design and a love of crafting user journeys, I breathe life into pixels, transforming them into interactive interfaces that are both beautiful and intuitive.</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-5">
                        <Image className="-mb-6 sm:-mb-8 md:float-end mx-auto sm:mx-0" src="/Profile_photo.jpg" alt="profile" width="320" height="320"/>
                    </div>
                </div>
            </Container>
            <Container>
                <h2 className="text-gray-500 opacity-50 ms-1 text-6xl font-bold tracking-wider">I&apos;m a</h2>
                <div className="scroller-div h-44 overflow-y-scroll no-scrollbar">
                        <motion.h2 className="text-8xl lg:text-9xl lg:mb-12 mb-20 text-gray-500 opacity-50 font-bold break-all">DEVELOPER</motion.h2>                
                        <motion.h2 className="text-8xl lg:text-9xl lg:mb-12 mb-20 text-gray-500 opacity-50 font-bold break-all">DESIGNER</motion.h2>
                        <motion.h2 className="text-8xl lg:text-9xl lg:mb-12 mb-20 text-gray-500 opacity-50 font-bold break-all">PHOTOGRAPHER</motion.h2>
                </div>
                <div className="h-52 absolute inset-x-0 bottom-0"></div>
            </Container>
        </div>
    )
}

export default Banner;
