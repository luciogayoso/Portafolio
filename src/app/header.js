'use client'

import { useState } from "react";
import Menu from "./menu.js";
import Image from "next/image";


const Header = ()=>{
    const [menuActivo,setMenuActivo] = useState(false);

 return(
        <>
        {!menuActivo ? 
        <div className="container-menu-cerrado">
        <button id="btn-menu" onClick={() => setMenuActivo(true)} className="menu-cerado">
            <Image src="/images/menu.png" height={40} width={40} alt="funciono" />  
        </button> 
        </div>
        :
        <Menu evento={setMenuActivo} />}
        </>
    )
}


export default Header;