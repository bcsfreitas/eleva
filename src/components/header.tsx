import React from 'react';
import ElevaLogo from "../images/logo-eleva.svg";


const HeaderComponent = () => {
    return (

        <div className="mx-auto max-w-6xl sm:px-4 lg:px-8 flex flex-wrap flex-col lg:flex-row items-center justify-between lg:flex-nowrap">
            <a className="inline-block py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline" href="/">
                <img src={ElevaLogo} alt="Eleva Inovação" />
            </a>
        </div> 

    )
}

export default HeaderComponent