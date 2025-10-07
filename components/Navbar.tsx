import React, { useState, useEffect, useRef } from 'react';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import MoreVerticalIcon from './icons/MoreVerticalIcon'; // Importando o novo ícone

interface NavbarProps {
  links: { name: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false); // Novo estado para o menu desktop
  const [hasScrolled, setHasScrolled] = useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null); // Ref para o menu desktop

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efeito para fechar o menu desktop ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(event.target as Node)) {
        setIsDesktopMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [desktopMenuRef]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Previne o salto padrão da âncora
    const targetId = href.substring(1); // Remove o '#'
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false); // Fecha o menu mobile na seleção
    }
    if (isDesktopMenuOpen) {
      setIsDesktopMenuOpen(false); // Fecha o menu desktop na seleção
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${hasScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')} 
              className={`text-2xl font-bold gradient-text transition-opacity duration-300 ${hasScrolled ? 'opacity-100' : 'opacity-0'}`}
              aria-label="Home"
            >
              WS
            </a>
          </div>
          
          {/* Botão e Dropdown do Menu Desktop */}
          <div className="relative hidden md:block" ref={desktopMenuRef}>
            <button
              onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-label="Menu de navegação"
            >
              <MoreVerticalIcon />
            </button>
            {isDesktopMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-black/90 ring-1 ring-white ring-opacity-5 focus:outline-none">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
                      role="menuitem"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Botão do Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Conteúdo do Menu Mobile */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-black/90`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="w-full text-center block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;