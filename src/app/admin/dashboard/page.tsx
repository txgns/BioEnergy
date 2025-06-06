"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProdutorDetails from './produtor-details';
import OngDetails from './ong-details';

// Mock de dados de produtores e ONGs
const mockProdutoresData = [
  {
    id: 'prod1',
    nome: 'Fazenda Sol Nascente',
    email: 'contato@solnascente.com',
    telefone: '(11) 98765-4321',
    endereco: 'Rua das Palmeiras, 123, Campo Verde, SP',
    tipoResiduo: 'Esterco bovino, restos de milho',
    quantidadeEstimada: '100kg por semana',
    frequenciaColeta: 'Semanalmente às segundas',
    status: 'Aprovado',
  },
  {
    id: 'prod2',
    nome: 'Sítio Boa Esperança',
    email: 'sitio@boaesperanca.org',
    telefone: '(21) 91234-5678',
    endereco: 'Estrada da Colina, S/N, Vale Feliz, RJ',
    tipoResiduo: 'Restos de frutas e vegetais',
    quantidadeEstimada: '50kg por semana',
    frequenciaColeta: 'Quinzenalmente',
    status: 'Pendente',
  },
];

const mockOngsData = [
  {
    id: 'ong1',
    nomeOrganizacao: 'ONG Vida Verde',
    responsavel: 'Maria Silva',
    email: 'maria.silva@vidaverde.org',
    telefone: '(31) 99999-8888',
    endereco: 'Av. Ambiental, 789, Belo Horizonte, MG',
    tipoNecessidade: 'Composto orgânico para horta comunitária',
    descricaoProjeto: 'Projeto de horta urbana para famílias de baixa renda.',
    status: 'Aprovado',
  },
  {
    id: 'ong2',
    nomeOrganizacao: 'Instituto Bioconecta',
    responsavel: 'João Pereira',
    email: 'joao@bioconecta.com.br',
    telefone: '(41) 98877-6655',
    endereco: 'Rua da Sustentabilidade, 456, Curitiba, PR',
    tipoNecessidade: 'Biomassa para produção de biogás',
    descricaoProjeto: 'Desenvolvimento de biodigestor para geração de energia em comunidade rural.',
    status: 'Pendente',
  },
];

export default function AdminDashboardPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [produtores, setProdutores] = useState(mockProdutoresData);
  const [ongs, setOngs] = useState(mockOngsData);
  const [selectedProdutor, setSelectedProdutor] = useState(null);
  const [selectedOng, setSelectedOng] = useState(null);
  const [showProdutorDetails, setShowProdutorDetails] = useState(false);
  const [showOngDetails, setShowOngDetails] = useState(false);
  const [activeTab, setActiveTab] = useState('produtores');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isAdminLoggedIn');
    if (loggedIn === 'true') {
      setIsAdmin(true);
    } else {
      window.location.href = '/admin'; 
    }
  }, []);

  const handleApprove = (type, id) => {
    if (type === 'produtor') {
      setProdutores(produtores.map(p => p.id === id ? { ...p, status: 'Aprovado' } : p));
    } else {
      setOngs(ongs.map(o => o.id === id ? { ...o, status: 'Aprovado' } : o));
    }
    alert(`${type === 'produtor' ? 'Produtor' : 'ONG'} aprovado(a) com sucesso!`);
  };

  const handleReject = (type, id) => {
    if (type === 'produtor') {
      setProdutores(produtores.map(p => p.id === id ? { ...p, status: 'Rejeitado' } : p));
    } else {
      setOngs(ongs.map(o => o.id === id ? { ...o, status: 'Rejeitado' } : o));
    }
    alert(`${type === 'produtor' ? 'Produtor' : 'ONG'} rejeitado(a) com sucesso!`);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    setIsAdmin(false);
    window.location.href = '/admin';
  };

  const handleEditProdutor = (produtor) => {
    setSelectedProdutor(produtor);
    setShowProdutorDetails(true);
  };

  const handleEditOng = (ong) => {
    setSelectedOng(ong);
    setShowOngDetails(true);
  };

  const handleSaveProdutor = (updatedProdutor) => {
    setProdutores(produtores.map(p => p.id === updatedProdutor.id ? updatedProdutor : p));
    setShowProdutorDetails(false);
    alert('Produtor atualizado com sucesso!');
  };

  const handleSaveOng = (updatedOng) => {
    setOngs(ongs.map(o => o.id === updatedOng.id ? updatedOng : o));
    setShowOngDetails(false);
    alert('ONG atualizada com sucesso!');
  };

  const handleDeleteProdutor = (id) => {
    if (confirm('Tem certeza que deseja excluir este produtor?')) {
      setProdutores(produtores.filter(p => p.id !== id));
      alert('Produtor excluído com sucesso!');
    }
  };

  const handleDeleteOng = (id) => {
    if (confirm('Tem certeza que deseja excluir esta ONG?')) {
      setOngs(ongs.filter(o => o.id !== id));
      alert('ONG excluída com sucesso!');
    }
  };

  if (!isAdmin) {
    return (
        <div className="container mx-auto py-12 px-4 text-center min-h-[calc(100vh-200px)] flex flex-col justify-center items-center">
            <p className="text-xl text-red-600">Acesso negado. Por favor, faça login como administrador.</p>
            <Link href="/admin" className="text-primary hover:text-primary-dark mt-4 inline-block text-lg">
                Ir para a página de Login
            </Link>
        </div>
    );
  }

  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-dark mb-4 md:mb-0">Painel Administrativo</h1>
        <button 
            onClick={handleLogout} 
            className="bg-red-500 hover:bg-red-600 text-neutral-lightest font-bold py-2 px-4 rounded-lg transition-colors"
        >
            Sair
        </button>
      </div>

      {/* Tabs para mobile */}
      <div className="md:hidden mb-6">
        <div className="flex rounded-lg overflow-hidden border border-neutral-light">
          <button 
            className={`flex-1 py-2 px-4 text-center ${activeTab === 'produtores' ? 'bg-primary-light text-neutral-darkest' : 'bg-neutral-lighter text-neutral-dark'}`}
            onClick={() => setActiveTab('produtores')}
          >
            Produtores
          </button>
          <button 
            className={`flex-1 py-2 px-4 text-center ${activeTab === 'ongs' ? 'bg-primary-light text-neutral-darkest' : 'bg-neutral-lighter text-neutral-dark'}`}
            onClick={() => setActiveTab('ongs')}
          >
            ONGs
          </button>
        </div>
      </div>

      {/* Seção de Produtores */}
      <section className={`mb-12 ${activeTab === 'produtores' ? 'block' : 'hidden md:block'}`}>
        <h2 className="text-2xl md:text-3xl font-semibold text-secondary-dark mb-4 md:mb-6">Gerenciamento de Produtores</h2>
        <div className="bg-neutral-lightest p-4 md:p-6 rounded-xl shadow-xl overflow-x-auto">
          {produtores.length > 0 ? (
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lighter">
                <tr>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-neutral-dark uppercase tracking-wider">Nome</th>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-neutral-dark uppercase tracking-wider hidden md:table-cell">Email</th>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-neutral-dark uppercase tracking-wider hidden md:table-cell">Tipo de Resíduo</th>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-neutral-dark uppercase tracking-wider">Status</th>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-neutral-dark uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="bg-neutral-lightest divide-y divide-neutral-light">
                {produtores.map((produtor) => (
                  <tr key={produtor.id}>
                    <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-sm font-medium text-neutral-darkest">{produtor.nome}</td>
                    <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-sm text-neutral-dark hidden md:table-cell">{produtor.email}</td>
                    <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-sm text-neutral-dark hidden md:table-cell">{produtor.tipoResiduo}</td>
                    <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${produtor.status === 'Aprovado' ? 'bg-green-100 text-green-800' : produtor.status === 'Pendente' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                        {produtor.status}
                      </span>
                    </td>
                    <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-2">
                        {produtor.status === 'Pendente' && (
                          <>
                            <button onClick={() => handleApprove('produtor', produtor.id)} className="text-green-600 hover:text-green-800 font-semibold">Aprovar</button>
                            <button onClick={() => handleReject('produtor', produtor.id)} className="text-red-600 hover:text-red-800 font-semibold">Rejeitar</button>
                          </>
                        )}
                        <button onClick={() => handleEditProdutor(produtor)} className="text-blue-600 hover:text-blue-800 font-semibold">Editar</button>
                        <button onClick={() => handleDeleteProdutor(produtor.id)} className="text-red-600 hover:text-red-800 font-semibold">Excluir</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-neutral-dark">Nenhum produtor cadastrado no momento.</p>
          )}
        </div>
      </section>

      {/* Seção de ONGs */}
      <section className={`${activeTab === 'ongs' ? 'block' : 'hidden md:block'}`}>
        <h2 className="text-2xl md:text-3xl font-semibold text-secondary-dark mb-4 md:mb-6">Gerenciamento de ONGs/Instituições</h2>
        <div className="bg-neutral-lightest p-4 md:p-6 rounded-xl shadow-xl overflow-x-auto">
          {ongs.length > 0 ? (
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lighter">
                <tr>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-neutral-dark uppercase tracking-wider">Nome</th>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-neutral-dark uppercase tracking-wider hidden md:table-cell">Responsável</th>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-neutral-dark uppercase tracking-wider hidden md:table-cell">Email</th>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-neutral-dark uppercase tracking-wider">Status</th>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-neutral-dark uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="bg-neutral-lightest divide-y divide-neutral-light">
                {ongs.map((ong) => (
                  <tr key={ong.id}>
                    <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-sm font-medium text-neutral-darkest">{ong.nomeOrganizacao}</td>
                    <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-sm text-neutral-dark hidden md:table-cell">{ong.responsavel}</td>
                    <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-sm text-neutral-dark hidden md:table-cell">{ong.email}</td>
                    <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${ong.status === 'Aprovado' ? 'bg-green-100 text-green-800' : ong.status === 'Pendente' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                        {ong.status}
                      </span>
                    </td>
                    <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-2">
                        {ong.status === 'Pendente' && (
                          <>
                            <button onClick={() => handleApprove('ong', ong.id)} className="text-green-600 hover:text-green-800 font-semibold">Aprovar</button>
                            <button onClick={() => handleReject('ong', ong.id)} className="text-red-600 hover:text-red-800 font-semibold">Rejeitar</button>
                          </>
                        )}
                        <button onClick={() => handleEditOng(ong)} className="text-blue-600 hover:text-blue-800 font-semibold">Editar</button>
                        <button onClick={() => handleDeleteOng(ong.id)} className="text-red-600 hover:text-red-800 font-semibold">Excluir</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-neutral-dark">Nenhuma ONG/Instituição cadastrada no momento.</p>
          )}
        </div>
      </section>

      {showProdutorDetails && selectedProdutor && (
        <ProdutorDetails 
          produtor={selectedProdutor} 
          onClose={() => setShowProdutorDetails(false)} 
          onSave={handleSaveProdutor} 
        />
      )}

      {showOngDetails && selectedOng && (
        <OngDetails 
          ong={selectedOng} 
          onClose={() => setShowOngDetails(false)} 
          onSave={handleSaveOng} 
        />
      )}
    </div>
  );
}

