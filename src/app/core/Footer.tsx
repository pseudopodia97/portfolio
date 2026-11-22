const Footer = () => {
    return(
        <footer id="contact" className="bg-black border-t-4 border-yellow-400">
            <div className="px-4 py-12 sm:p-12 max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-300 mb-4">Let&apos;s work together</h2>
                <p className="text-gray-400 mb-8">Open to senior and lead frontend roles, in India or remote.</p>
                <div className="flex flex-wrap justify-center gap-6">
                    <a className="text-yellow-400 border-b-2 border-yellow-400" href="mailto:chitadesarthak@gmail.com">chitadesarthak@gmail.com</a>
                    <a className="text-yellow-400 border-b-2 border-yellow-400" href="https://www.linkedin.com/in/sarthakchitade" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a className="text-yellow-400 border-b-2 border-yellow-400" href="/Sarthak-Chitade-Resume.pdf" target="_blank" rel="noopener noreferrer">Download resume</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
