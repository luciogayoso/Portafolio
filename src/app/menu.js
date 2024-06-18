import Image from "next/image";
import  Link  from "next/link";

const Memu = (evento) => {
    return(
        <div className="container-menu">
        <button id="btn-menuDiv" onClick={() => evento.evento(false)} className="grupo-menuDiv">
            <Image src="/images/eliminar.png" height={40} width={40} alt="funciono" />  
        </button>     
        <nav className="menu">
            <Link href="/home">Home</Link>
            <Link href="/portafolio">Portafolio</Link>
            <Link href="/laboratorio">Laboratorio</Link>
            <Link href="/contacto">Contacto</Link>
        </nav>
        </div>
    )
}

export default Memu;