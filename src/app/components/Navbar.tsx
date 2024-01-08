'use client'

import Link from "next/link"
import { useState } from "react"
function Navbar() {
  const [menu, setMenu] = useState(false)

  function toggleMenu() {
    setMenu(!menu)
  }
  
  return (
      <>
      {menu && <div className="overlay" onClick={toggleMenu}></div>}
      <nav className="flex justify-start shadow-lg bg-cinza-claro">
        {/* Ícone do menu para telas pequenas */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            <i className="bi bi-list"></i>
          </button>
        </div>

        {/* Links do menu */}
        <div className={`${menu ? 'block' : 'hidden'} sm:flex flex-grow justify-evenly items-center h-14 shadow-xl`}>
          <button onClick={toggleMenu} className="absolute top-0 right-0 p-4 sm:hidden">
            <i className="bi bi-x-lg"></i>
          </button>
          <Link href="/" className={`${menu ? 'mobile-menu-link' : 'navbar-button'}`}>Home</Link>
          <Link href="/servicos" className={`${menu ? 'mobile-menu-link' : 'navbar-button'}`}>Serviços</Link>
          <Link href="/sobre" className={`${menu ? 'mobile-menu-link' : 'navbar-button'}`}>Sobre nós</Link>
          <Link href="/contato" className={`${menu ? 'mobile-menu-link' : 'navbar-button'}`}>Contato</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar