import { ReactNode } from "react";

const Container = ({ styles, children }: Readonly<{children: ReactNode, styles?: string}>) => {
    return(
        <div className={`px-4 py-6 sm:p-8 max-w-6xl mx-auto ${styles}`}>
            {children}
        </div>
    )
}

export default Container;