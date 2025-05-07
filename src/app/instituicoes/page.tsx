"use client";

import Link from 'next/link';

// Mock data for institutions - in a real scenario, this would come from an API
const mockInstituicoes = [
  {
    id: 'ong1',
    nomeOrganizacao: 'ONG Vida Verde',
    responsavel: 'Maria Silva',
    localizacao: 'Belo Horizonte, MG',
    tipoNecessidade: 'Composto orgânico para horta comunitária',
    status: 'Aprovado',
    linkSite: '#'
  },
  {
    id: 'ong2',
    nomeOrganizacao: 'Instituto Bioconecta',
    responsavel: 'João Pereira',
    localizacao: 'Curitiba, PR',
    tipoNecessidade: 'Biomassa para produção de biogás',
    status: 'Aprovado',
    linkSite: '#'
  },
  {
    id: 'ong3',
    nomeOrganizacao: 'Associação Terra Viva',
    responsavel: 'Ana Costa',
    localizacao: 'Salvador, BA',
    tipoNecessidade: 'Resíduos para compostagem e adubo orgânico',
    status: 'Aprovado',
    linkSite: '#'
  },
];

export default function InstituicoesPage() {
  const aprovadas = mockInstituicoes.filter(i => i.status === 'Aprovado');

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-primary-dark mb-10 text-center">Nossas Instituições Parceiras</h1>
      <p className="text-xl text-neutral-dark mb-12 text-center max-w-3xl mx-auto">
        Conheça as ONGs e instituições que utilizam a biomassa doada para gerar impacto social e ambiental positivo através da plataforma BioEnergy.
      </p>

      {aprovadas.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aprovadas.map((instituicao) => (
            <div key={instituicao.id} className="card-custom text-neutral-dark hover:shadow-2xl transition-shadow flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">{instituicao.nomeOrganizacao}</h2>
                <p className="mb-2"><strong className="font-semibold">Responsável:</strong> {instituicao.responsavel}</p>
                <p className="mb-2"><strong className="font-semibold">Localização:</strong> {instituicao.localizacao}</p>
                <p className="mb-2"><strong className="font-semibold">Principal Necessidade:</strong> {instituicao.tipoNecessidade}</p>
              </div>
              <Link href={instituicao.linkSite} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full mt-6 text-center text-sm">
                Visitar Site / Contato (Mock)
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-neutral-dark text-lg">Ainda não temos instituições aprovadas publicamente. <Link href="/cadastro/ong" className="text-primary hover:text-primary-dark font-semibold">Cadastre sua instituição!</Link></p>
      )}

      <div className="mt-16 text-center">
        <Link href="/cadastro/ong" className="btn-primary text-lg">
          Cadastrar minha Instituição
        </Link>
      </div>
    </div>
  );
}

