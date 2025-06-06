const Footer = () => {
  return (
    <footer className="bg-primary-dark text-neutral-lighter p-8 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">BioEnergy</h3>
            <p className="text-sm">Conectando produtores e ONGs para um futuro sustentável</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h4 className="font-semibold mb-2">Links Rápidos</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="/" className="hover:text-primary-lighter transition-colors">Início</a></li>
                <li><a href="/#como-funciona" className="hover:text-primary-lighter transition-colors">Como Funciona</a></li>
                <li><a href="/impacto-e-exemplos" className="hover:text-primary-lighter transition-colors">Impactos e Exemplos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Cadastros</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="/cadastro/produtor" className="hover:text-primary-lighter transition-colors">Produtores</a></li>
                <li><a href="/cadastro/ong" className="hover:text-primary-lighter transition-colors">ONGs e Instituições</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Contato</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="/#contato" className="hover:text-primary-lighter transition-colors">Fale Conosco</a></li>
                <li><a href="mailto:contato@bioenergy.com.br" className="hover:text-primary-lighter transition-colors">contato@bioenergy.com.br</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-light mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BioEnergy - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

