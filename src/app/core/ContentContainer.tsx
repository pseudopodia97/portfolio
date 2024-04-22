import { ReactNode } from "react";

const ContentContainer = ({children}: Readonly<{children: ReactNode}>) => {

    return(
        <>
            <main>{children}</main>
        </>
    )
}

export default ContentContainer;



// import { ReactNode } from "react";

// const Container = ( {bgStyle, styles, children, fullWidth} : Readonly<{bgStyle: string, styles: string, fullWidth: boolean, children: ReactNode}>) => {
//     return(
//         <div className="bgStyle">
//             <div className={`${fullWidth ? '2xl:container 2xl:mx-auto' : 'lg:container lg:mx-auto goj-cpm'} ${styles}`}>
//                 {children}
//             </div>
//         </div>
//     )
// }


// export default Container;