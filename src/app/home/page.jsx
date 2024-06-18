'use client'

import { gurdarnombre } from "@/store/slice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

const page = ()=>{
    const [nuevoValor, setNuevoValor] = useState("");
    const dispatch = useDispatch();
    const modificar = () => {
        dispatch(gurdarnombre(nuevoValor));
    }
    return(
        <div>

            <div>
                <Link href="/portafolio">Portafolio</Link>
            </div>
            <input value={nuevoValor} onChange={e => setNuevoValor(e.target.value)}/>
            <button onClick={modificar}>Modificar Valor</button>
        </div>
    )
}

export default page;