'use client'
import { useEffect, useState } from "react";

const EMAIL = "chitadesarthak@gmail.com";
const linkStyle = "text-yellow-400 border-b-2 border-yellow-400 hover:text-white hover:border-white transition-colors";

const Footer = () => {
    const [copied, setCopied] = useState(false);

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

    return(
        <footer id="contact" className="bg-black border-t-4 border-yellow-400">
            <div className="px-4 sm:px-8 pt-16 pb-8 max-w-6xl mx-auto">
                <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Let&apos;s work together</h2>
                <a href={`mailto:${EMAIL}`} className="block w-fit text-[6vw] min-[1200px]:text-7xl leading-tight font-bold text-gray-300 hover:text-white transition-colors">
                    chitadesarthak<span className="text-yellow-400">@</span>gmail.com
                </a>
                <div className="mt-8 flex flex-wrap items-baseline gap-x-10 gap-y-4">
                    <p className="text-gray-400">Open to senior and lead frontend roles, in India or remote.</p>
                    <button type="button" onClick={copyEmail} className={linkStyle}><span aria-live="polite">{copied ? "Copied ✓" : "Copy email"}</span></button>
                    <a className={linkStyle} href="https://www.linkedin.com/in/sarthakchitade" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                    <a className={linkStyle} href="/Sarthak-Chitade-Resume.pdf" download>Resume ↓</a>
                </div>
                <div className="mt-16 pt-6 border-t border-neutral-800 flex flex-wrap justify-between gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Sarthak Chitade</p>
                    <a href="#" className="hover:text-yellow-400 transition-colors">Back to top ↑</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
