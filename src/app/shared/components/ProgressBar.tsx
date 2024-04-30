'use client'
import { motion } from "framer-motion";
import Container from "./Container";
import { useEffect } from "react";

const ProgressBar = ({ progress, label }: {progress: number, label: string}) => {
    

    const barWidth: number = 0;
    const variants = {
        initial: {
            width: 0
        },
        enter: {
            x: -barWidth
        },
        animate: {
            width: `${progress}%`,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
    };

    useEffect(() => {
        function setProgress() {
            const barWidth = document.getElementById(label)?.clientWidth || 0;
            const bar = document.querySelector('.progress-bar') as HTMLElement;
            const progressBar = document.querySelector('.progress-bar > div') as HTMLElement;
        }
        setProgress();
    },[label, progress])

    return (
        <Container>
                <div className="flex justify-between w-full mb-2">
                    <p className="text-yellow-400">{label}</p>
                    <p className="text-yellow-400">{progress}%</p>
                </div>
                <motion.div id={label} variants={variants} className="progress-bar h-2 bg-gray-800 tran w-full rounded-lg">
                    <motion.div  
                    variants={variants}
                    initial={"initial"}
                    animate={"animate"}
                    exit="enter"  className="relative h-2 bg-yellow-500 rounded-lg"></motion.div>
                </motion.div>
        </Container>
    );
}

export default ProgressBar;