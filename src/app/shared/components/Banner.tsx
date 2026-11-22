'use client'
import Image from "next/image";
import Container from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EMAIL = "chitadesarthak@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/sarthakchitade";
const ctaCaption = "block text-xs uppercase tracking-widest text-gray-500";
const ctaLabel = "text-white text-lg font-semibold group-hover:text-yellow-400 transition-colors";
const ctaIconButton = "p-1 text-gray-400 hover:text-yellow-400 transition-colors focus-visible:outline-none focus-visible:text-yellow-400 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-yellow-400";
const ctaReveal = "grid transition-[grid-template-rows,opacity,visibility] duration-300 ease-out motion-reduce:transition-none";
const ctaShown = "grid-rows-[1fr] opacity-100 visible";
const ctaHidden = "grid-rows-[0fr] opacity-0 invisible";


const Banner = () => {    
    const [contactOpen, setContactOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const contactToggleRef = useRef<HTMLButtonElement>(null);
    const contactEmailRef = useRef<HTMLAnchorElement>(null);

    function toggleContact(open: boolean) {
        setContactOpen(open);
        // Move focus to the control being revealed, once its fade-in has made it focusable.
        setTimeout(() => (open ? contactEmailRef : contactToggleRef).current?.focus({ preventScroll: true }), 50);
    }

    useEffect(() => {
        if (!copied) return;
        const timeoutId = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timeoutId);
    }, [copied]);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
        } catch {}
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            scrollDiv();
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);


    function scrollDiv() {
        let div = document.querySelector('.scroller-div') as HTMLElement;
        if (div) {
            div.scrollTo({top: div.scrollTop + div.offsetHeight, behavior: "smooth"});
            
            if (div.scrollTop > div.offsetHeight) {
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
                           <p className="tracking-widest font-thin text-gray-200">Senior Frontend Engineer with 7+ years of building fast, accessible React, Next.js and Angular products, and the AI agents and quality guardrails that help teams ship them safely.</p>
                        </div>
                        <div className="mt-8 mb-8 md:mb-0 flex flex-wrap min-[1100px]:flex-nowrap items-start gap-x-8 gap-y-5">
                            <a href="/Sarthak-Chitade-Resume.pdf" download className="group shrink-0 border-s-4 border-yellow-400 ps-4 py-1">
                                <span className={ctaCaption}>PDF · 1 page</span>
                                <span className={ctaLabel}>Download resume <span className="inline-block transition-transform group-hover:translate-y-0.5">↓</span></span>
                            </a>
                            <div className={`shrink-0 max-w-full border-s-4 ps-4 py-1 transition-colors ${contactOpen ? "border-yellow-400" : "border-neutral-700 hover:border-yellow-400"}`}>
                                <span className={ctaCaption}>Email · LinkedIn</span>
                                <div className={`${ctaReveal} ${contactOpen ? ctaHidden : ctaShown}`}>
                                    <button ref={contactToggleRef} type="button" onClick={() => toggleContact(true)} aria-expanded={contactOpen} aria-controls="hero-contact-panel" className="group min-h-0 overflow-hidden text-start">
                                        <span className={ctaLabel}>Contact me <span className="inline-block transition-transform group-hover:translate-x-1">→</span></span>
                                    </button>
                                </div>
                                <div id="hero-contact-panel" className={`${ctaReveal} ${contactOpen ? ctaShown : ctaHidden}`} onKeyDown={(e) => { if (e.key === "Escape") toggleContact(false); }}>
                                    <div className={`min-h-0 overflow-hidden transition-[max-width] duration-0 ${contactOpen ? "max-w-[40rem] delay-0" : "max-w-0 delay-300"}`}>
                                        <div className="flex flex-wrap min-[1100px]:flex-nowrap items-center gap-x-2 gap-y-1">
                                            <a ref={contactEmailRef} href={`mailto:${EMAIL}`} className="text-white text-lg font-semibold hover:text-yellow-400 focus:outline-none focus-visible:text-yellow-400 transition-colors">{EMAIL}</a>
                                            <button type="button" onClick={copyEmail} aria-label={copied ? "Email copied" : "Copy email address"} title={copied ? "Copied" : "Copy email"} className={copied ? "p-1 text-yellow-400 focus:outline-none" : ctaIconButton}>
                                                {copied ? (
                                                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                                                ) : (
                                                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="1.5" /><path d="M5 15V5.5A1.5 1.5 0 0 1 6.5 4H15" /></svg>
                                                )}
                                            </button>
                                            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="ms-2 text-sm font-semibold text-yellow-400 border-b-2 border-yellow-400 hover:text-white hover:border-white focus:outline-none focus-visible:text-white focus-visible:border-white transition-colors">LinkedIn ↗</a>
                                            <button type="button" onClick={() => toggleContact(false)} aria-label="Close contact details" title="Close" className={`ms-1 ${ctaIconButton}`}>
                                                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-5">
                        <Image className="-mb-6 sm:-mb-8 md:float-end mx-auto sm:mx-0" src="/Profile_photo.jpg" alt="profile" width="320" height="320"/>
                    </div>
                </div>
            </Container>
            <Container>
                <h2 className="text-gray-500 opacity-50 ms-1 text-4xl sm:text-6xl font-bold tracking-wider">I&apos;m a</h2>
                <div className="relative">
                    <div id="scroller-div" className="scroller-div h-32 sm:h-48 lg:h-64 overflow-y-scroll no-scrollbar">
                            <h2 id="Developer" className="text-6xl sm:text-8xl lg:text-9xl h-32 sm:h-48 lg:h-64 text-gray-500 opacity-50 font-bold break-all">DEVELOPER</h2>                
                            <h2 id="AIBuilder" className="text-6xl sm:text-8xl lg:text-9xl h-32 sm:h-48 lg:h-64 text-gray-500 opacity-50 font-bold break-all">AI BUILDER</h2>
                            <h2 id="Designer" className="text-6xl sm:text-8xl lg:text-9xl h-32 sm:h-48 lg:h-64 text-gray-500 opacity-50 font-bold break-all">DESIGNER</h2>
                    </div>
                    <div className="h-32 sm:h-48 lg:h-64 absolute bottom-0 inset-x-0 bg-gradient-to-b from-transparent from-30% to-black"></div>
                </div>
            </Container>
        </div>
    )
}

export default Banner;