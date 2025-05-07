import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-primary-dark text-neutral-lightest p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          BioEnergy
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-primary-lighter transition-colors">Home</Link></li>
            <li><Link href="/#como-funciona" className="hover:text-primary-lighter transition-colors">Como funciona</Link></li>
            <li><Link href="/doadores" className="hover:text-primary-lighter transition-colors">Doadores</Link></li>
            <li><Link href="/instituicoes" className="hover:text-primary-lighter transition-colors">Instituições</Link></li>
            <li><Link href="/#contato" className="hover:text-primary-lighter transition-colors">Contato</Link></li>
            <li><Link href="/admin" className="hover:text-primary-lighter transition-colors">Admin</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

