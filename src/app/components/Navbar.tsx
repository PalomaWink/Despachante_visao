'use client'

//componentes
import Link from "next/link"
import { useState } from "react"
import Whatsapp from "./botoes/Whatsapp"
function Navbar() {
  const [menu, setMenu] = useState(false)

  function toggleMenu() {
    setMenu(!menu)
  }

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    
    const element = document.getElementById(id);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  };

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    handleScroll(e, id);
    setMenu(false);
  }

  return (
      <>
      {menu && <div className="overlay" onClick={toggleMenu}></div>}
      <nav className="flex justify-start">
        {/* Ícone do menu para telas pequenas */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            <i className="bi bi-list"></i>
          </button>
        </div>
        {/* Links do menu */}
        <div className={`${menu ? 'block' : 'hidden'} sm:flex flex-grow justify-evenly items-center h-14 shadow-xl xs-custom:bg-cinza-claro`}>
          <button onClick={toggleMenu} className="absolute top-0 right-0 p-4 sm:hidden">
            <i className="bi bi-x-lg"></i>
          </button>
          <Link onClick={(e) => handleLinkClick(e, 'servicos')} href="#servicos" className={`${menu ? 'mobile-menu-link' : 'navbar-button'}`}>Serviços</Link>
          <Link onClick={(e) => handleLinkClick(e, 'sobre')} href="#sobre" className={`${menu ? 'mobile-menu-link' : 'navbar-button'}`}>Sobre nós</Link>
          <Link onClick={(e) => handleLinkClick(e, 'contato')} href="#contato" className={`${menu ? 'mobile-menu-link' : 'navbar-button'}`}>Contato</Link>
          <a href="https://wa.me/5551996739085" className="sm:text-xl">
            <Whatsapp />
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar