'use client'

import Link from "next/link";
import { useSelector } from "react-redux";

const page = ()=>{
    const miNombre = useSelector(state => state.valores.nombre)
    return(
        <>
        <h1>Laboratorio:</h1>
        <h2>{miNombre}</h2>
        </>
    )
}

export default page;