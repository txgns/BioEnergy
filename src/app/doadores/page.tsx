"use client";

import Link from 'next/link';

// Mock data for donors - in a real scenario, this would come from an API
const mockDoadores = [
  {
    id: 'prod1',
    nome: 'Fazenda Sol Nascente',
    tipoResiduo: 'Esterco bovino, restos de milho',
    localizacao: 'Campo Verde, SP',
    status: 'Aprovado',
    ultimaDoacao: '10/04/2025'
  },
  {
    id: 'prod2',
    nome: 'Sítio Boa Esperança',
    tipoResiduo: 'Restos de frutas e vegetais',
    localizacao: 'Vale Feliz, RJ',
    status: 'Aprovado',
    ultimaDoacao: '15/04/2025'
  },
  {
    id: 'prod3',
    nome: 'Chácara Recanto Verde',
    tipoResiduo: 'Palhada de café, podas de árvores',
    localizacao: 'Serra Azul, MG',
    status: 'Aprovado',
    ultimaDoacao: '20/04/2025'
  },
];

export default function DoadoresPage() {
  const aprovados = mockDoadores.filter(d => d.status === 'Aprovado');

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-primary-dark mb-10 text-center">Nossos Doadores</h1>
      <p className="text-xl text-neutral-dark mb-12 text-center max-w-3xl mx-auto">
        Conheça os pequenos produtores que estão fazendo a diferença, doando seus resíduos orgânicos para transformá-los em recursos valiosos através da BioEnergy.
      </p>

      {aprovados.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aprovados.map((doador) => (
            <div key={doador.id} className="card-custom text-neutral-dark hover:shadow-2xl transition-shadow flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">{doador.nome}</h2>
                <p className="mb-2"><strong className="font-semibold">Localização:</strong> {doador.localizacao}</p>
                <p className="mb-2"><strong className="font-semibold">Principais Resíduos:</strong> {doador.tipoResiduo}</p>
                <p className="text-sm text-neutral"><strong className="font-semibold">Última Atividade/Doação Registrada:</strong> {doador.ultimaDoacao}</p>
              </div>
              <Link href={`/cadastro/produtor`} className="btn-secondary w-full mt-6 text-center text-sm">
                Saiba Mais
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-neutral-dark text-lg">Ainda não temos doadores aprovados publicamente. <Link href="/cadastro/produtor" className="text-primary hover:text-primary-dark font-semibold">Seja o primeiro!</Link></p>
      )}

      <div className="mt-16 text-center">
        <Link href="/cadastro/produtor" className="btn-primary text-lg">
          Quero ser um Doador
        </Link>
      </div>
    </div>
  );
}

