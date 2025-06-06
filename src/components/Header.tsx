"use client";

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary-dark text-neutral-lightest p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          BioEnergy
        </Link>
        
        {/* Menu para desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-primary-lighter transition-colors">Início</Link></li>
            <li><Link href="/#como-funciona" className="hover:text-primary-lighter transition-colors">Como funciona</Link></li>
            <li><Link href="/impacto-e-exemplos" className="hover:text-primary-lighter transition-colors">Impactos e Exemplos</Link></li>
            <li><Link href="/doadores" className="hover:text-primary-lighter transition-colors">Doadores</Link></li>
            <li><Link href="/instituicoes" className="hover:text-primary-lighter transition-colors">Instituições</Link></li>
            <li><Link href="/#contato" className="hover:text-primary-lighter transition-colors">Contato</Link></li>
          </ul>
        </nav>
        
        {/* Botão de menu para mobile */}
        <button 
          className="md:hidden text-neutral-lightest focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <nav>
            <ul className="flex flex-col space-y-3">
              <li><Link href="/" className="block px-4 py-2 hover:bg-primary hover:text-neutral-lightest rounded transition-colors" onClick={toggleMenu}>Início</Link></li>
              <li><Link href="/#como-funciona" className="block px-4 py-2 hover:bg-primary hover:text-neutral-lightest rounded transition-colors" onClick={toggleMenu}>Como funciona</Link></li>
              <li><Link href="/impacto-e-exemplos" className="block px-4 py-2 hover:bg-primary hover:text-neutral-lightest rounded transition-colors" onClick={toggleMenu}>Impactos e Exemplos</Link></li>
              <li><Link href="/doadores" className="block px-4 py-2 hover:bg-primary hover:text-neutral-lightest rounded transition-colors" onClick={toggleMenu}>Doadores</Link></li>
              <li><Link href="/instituicoes" className="block px-4 py-2 hover:bg-primary hover:text-neutral-lightest rounded transition-colors" onClick={toggleMenu}>Instituições</Link></li>
              <li><Link href="/#contato" className="block px-4 py-2 hover:bg-primary hover:text-neutral-lightest rounded transition-colors" onClick={toggleMenu}>Contato</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

