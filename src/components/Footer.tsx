const Footer = () => {
  return (
    <footer className="text-neutral-lighter p-8 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} BioEnergy - Todos os direitos reservados</p>
        <div className="mt-2">
          <a href="/#contato" className="hover:text-primary-lighter transition-colors mx-2">Entre em contato</a>
          <span className="text-neutral-light">|</span>
          <a href="#" className="hover:text-primary-lighter transition-colors mx-2">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

