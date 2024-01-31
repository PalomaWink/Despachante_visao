'use client'

//componentes
import Link from "next/link"
import { useState } from "react"
import Whatsapp from "./botoes/Whatsapp"
function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
    setDrawerOpen(false);
  }

  return (
    <div className="drawer" style={{ zIndex: 1000 }}>
    <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={drawerOpen} onChange={() => setDrawerOpen(!drawerOpen)} />
    <div className="drawer-content flex flex-col">
      <nav className="flex justify-between items-center p-4 xs-custom:p-0 xs-custom:mr-5">
        <button onClick={() => setDrawerOpen(true)} className="btn btn-square btn-ghost sm:hidden">
          <i className="bi bi-list"></i>
        </button>
        { !drawerOpen && (
          <a href="https://wa.me/5551996739085" className="sm:text-xl">
            <Whatsapp />
          </a>
        )}
      </nav>
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-200">
        <li>
          <button onClick={() => setDrawerOpen(false)} className="btn btn-square btn-ghost">
            <i className="bi bi-x-lg"></i>
          </button>
        </li>
        <li><Link href="#servicos" onClick={(e) => handleLinkClick(e, 'servicos')}>Serviços</Link></li>
        <li><Link href="#sobre" onClick={(e) => handleLinkClick(e, 'sobre')}>Sobre nós</Link></li>
        <li><Link href="#contato" onClick={(e) => handleLinkClick(e, 'contato')}>Contato</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar