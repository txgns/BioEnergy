import Image from 'next/image';
import Link from 'next/link'; // Import Link

//colaboradores
const colaboradores = [
  {
    id: 1,
    nome: 'Caio Souza',
    imagem: '/img/Caio.jpeg',
  },
  {
    id: 2,
    nome: 'Gabriella Iglesias',
    imagem: '/img/Gabriella.jpg',
  },
  {
    id: 3,
    nome: 'Niani Palmonari ',
    imagem: '/img/Niani.jpg',
  },
  {
    id: 4,
    nome: 'Lincon Amaro',
    imagem: '/img/Lincon.jpg',
  },
  {
    id: 5,
    nome: 'Rafaella Andriotta',
    imagem: '/img/Rafa.png',
  },
];


export default function HomePage() {
  return (
    <>
      {/* Seção Hero/Intro*/}
      <section className="bg-primary-dark text-neutral-lightest py-20 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-6">Bem-vindo à BioEnergy</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">Conectando produtores de biomassa e ONGs para um futuro mais sustentável, transformando resíduos em recursos valiosos.</p>
          {/* Cards iniciais da imagem*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card-custom text-primary-dark hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Produtores de Biomassa</h3>
              <p className="text-neutral-dark">Cadastre seus resíduos orgânicos e contribua para a geração de energia limpa e biofertilizantes.</p>
            </div>
            <div className="card-custom text-primary-dark hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">ONGs e Instituições</h3>
              <p className="text-neutral-dark">Encontre doadores de biomassa para seus projetos de sustentabilidade e impacto social.</p>
            </div>
            <div className="card-custom text-primary-dark hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Como Funciona?</h3>
              <p className="text-neutral-dark">Nossa plataforma facilita a conexão direta e transparente entre quem doa e quem precisa.</p>
            </div>
            <div className="card-custom text-primary-dark hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3">Impacto Positivo</h3>
              <p className="text-neutral-dark">Reduza o desperdício, gere energia renovável e fortaleça comunidades com a BioEnergy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Conheça a BioEnergy */}
      <section id="sobre" className="py-20 px-4 bg-neutral-lighter">
        <div className="container mx-auto max-w-4xl bg-neutral-lightest p-10 rounded-xl shadow-xl">
          <h2 className="text-4xl font-bold text-primary-dark mb-8 text-center">Conheça a BioEnergy</h2>
          <p className="text-neutral-dark text-lg leading-relaxed mb-6">
            A BioEnergy é uma plataforma inovadora dedicada a promover o aproveitamento sustentável de resíduos orgânicos. Nossa missão é conectar pequenos produtores, que possuem excedentes de biomassa, com Organizações Não Governamentais (ONGs) e outras instituições que podem transformar esses recursos em energia limpa, biofertilizantes e outras soluções sustentáveis.
          </p>
          <p className="text-neutral-dark text-lg leading-relaxed mb-6">
            Acreditamos que, ao facilitar essa conexão, podemos contribuir significativamente para a redução do desperdício, a diminuição da emissão de gases de efeito estufa e a promoção de uma economia circular. Produtores rurais encontram uma forma de dar um destino nobre aos seus resíduos, enquanto ONGs ganham acesso a matéria-prima valiosa para seus projetos ambientais e sociais.
          </p>
          <p className="text-neutral-dark text-lg leading-relaxed">
            Junte-se a nós nesta jornada por um futuro mais verde e sustentável. Cadastre-se como produtor ou instituição e faça parte da mudança!
          </p>
        </div>
      </section>

      {/* Seção Como Funciona*/}
      <section id="como-funciona" className="py-20 px-4 bg-primary-dark text-neutral-lightest">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Como Funciona</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-neutral-lightest text-neutral-dark p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-2xl font-semibold text-primary mb-3">1. Cadastro Simplificado</h3>
              <p>Pequenos produtores e ONGs se cadastram na plataforma através de formulários intuitivos, detalhando os resíduos disponíveis ou as necessidades de biomassa para seus projetos.</p>
            </div>
            <div className="bg-neutral-lightest text-neutral-dark p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-2xl font-semibold text-primary mb-3">2. Validação e Aprovação</h3>
              <p>Nossa equipe administrativa revisa e aprova os cadastros, garantindo a veracidade das informações e a conformidade com os objetivos da plataforma, assegurando um ambiente seguro e confiável.</p>
            </div>
            <div className="bg-neutral-lightest text-neutral-dark p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-2xl font-semibold text-primary mb-3">3. Conexão Direta</h3>
              <p>ONGs e instituições podem pesquisar e visualizar os produtores e os recursos disponíveis, entrando em contato diretamente para coordenar a logística da coleta e o aproveitamento da biomassa doada.</p>
            </div>
             <div className="bg-neutral-lightest text-neutral-dark p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-2xl font-semibold text-primary mb-3">4. Geração de Impacto</h3>
              <p>A biomassa doada é transformada em energia renovável, biofertilizantes nutritivos ou outros produtos sustentáveis, gerando um impacto ambiental e social positivo e mensurável.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Cadastro*/}
      <section id="cadastro-home" className="py-20 px-4 bg-secondary-dark text-neutral-lightest">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Faça Parte da Mudança</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-neutral-lightest text-secondary-dark p-10 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-3xl font-semibold mb-6">Sou Produtor</h3>
              <p className="mb-8 text-lg">Tem resíduos orgânicos e quer dar um destino sustentável e lucrativo? Cadastre-se e ajude a gerar impacto positivo.</p>
              <Link href="/cadastro/produtor" className="btn-primary w-full text-lg">
                Cadastrar como Produtor
              </Link>
            </div>
            <div className="bg-neutral-lightest text-secondary-dark p-10 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-3xl font-semibold mb-6">Sou uma ONG/Instituição</h3>
              <p className="mb-8 text-lg">Precisa de biomassa para seus projetos de sustentabilidade e impacto social? Encontre doadores em nossa plataforma.</p>
              <Link href="/cadastro/ong" className="btn-primary w-full text-lg">
                Cadastrar como ONG
              </Link>
            </div>
          </div>
        </div>
      </section>

  <section id="parceiros" className="py-20 px-4 bg-neutral-lighter">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-secondary-dark mb-12">Colaboradores</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
      {colaboradores.map((colaborador) => (
        <div
          key={colaborador.id}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
        >
          <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-primary shadow-md">
            <Image
              src={colaborador.imagem}
              alt={`Imagem de ${colaborador.nome}`}
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-lg font-semibold text-secondary-dark">{colaborador.nome}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Seção Contato - Formulário */}
       <section id="contato" className="py-20 px-4 bg-primary-dark">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-neutral-lightest mb-10">Entre em Contato</h2>
          <form className="bg-neutral-lightest p-10 rounded-xl shadow-xl space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-neutral-dark font-semibold mb-2">Nome Completo</label>
              <input type="text" id="name" name="name" className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-neutral-dark font-semibold mb-2">Seu Melhor Email</label>
              <input type="email" id="email" name="email" className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block text-neutral-dark font-semibold mb-2">Sua Mensagem</label>
              <textarea id="message" name="message" rows={5} className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full text-lg">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

