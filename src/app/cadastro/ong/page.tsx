"use client";

import { useState } from 'react';

export default function CadastroOngPage() {
  const [formData, setFormData] = useState({
    nomeOrganizacao: 
 	'',
    responsavel: 
 	'',
    email: 
 	'',
    telefone: 
 	'',
    endereco: 
 	'',
    tipoNecessidade: 
 	'',
    descricaoProjeto: 
 	'',
    documentacao: null,
    mensagem: 
 	'',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, documentacao: e.target.files[0] as any });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados da ONG:', formData);
    alert('Cadastro de ONG/Instituição enviado com sucesso! (Mock)');
    setFormData({
        nomeOrganizacao: 
 		'',
        responsavel: 
 		'',
        email: 
 		'',
        telefone: 
 		'',
        endereco: 
 		'',
        tipoNecessidade: 
 		'',
        descricaoProjeto: 
 		'',
        documentacao: null,
        mensagem: 
 		'',
    });
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-primary-dark mb-10 text-center">Cadastro de ONG / Instituição</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-neutral-lightest p-10 rounded-xl shadow-xl space-y-6">
        <div>
          <label htmlFor="nomeOrganizacao" className="block text-neutral-dark font-semibold mb-2">Nome da Organização/Instituição</label>
          <input type="text" id="nomeOrganizacao" name="nomeOrganizacao" value={formData.nomeOrganizacao} onChange={handleChange} required className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
        </div>
        <div>
          <label htmlFor="responsavel" className="block text-neutral-dark font-semibold mb-2">Nome do Responsável</label>
          <input type="text" id="responsavel" name="responsavel" value={formData.responsavel} onChange={handleChange} required className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
        </div>
        <div>
          <label htmlFor="email" className="block text-neutral-dark font-semibold mb-2">Email de Contato</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
        </div>
        <div>
          <label htmlFor="telefone" className="block text-neutral-dark font-semibold mb-2">Telefone / WhatsApp</label>
          <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
        </div>
        <div>
          <label htmlFor="endereco" className="block text-neutral-dark font-semibold mb-2">Endereço da Sede (Rua, Número, Bairro, Cidade, Estado, CEP)</label>
          <input type="text" id="endereco" name="endereco" value={formData.endereco} onChange={handleChange} required className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
        </div>
        <div>
          <label htmlFor="tipoNecessidade" className="block text-neutral-dark font-semibold mb-2">Tipo de Biomassa/Resíduo Orgânico que Necessita</label>
          <input type="text" id="tipoNecessidade" name="tipoNecessidade" value={formData.tipoNecessidade} onChange={handleChange} required placeholder="Ex: Esterco para biodigestor, restos de alimentos para compostagem, etc." className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
        </div>
        <div>
          <label htmlFor="descricaoProjeto" className="block text-neutral-dark font-semibold mb-2">Breve Descrição do Projeto/Uso da Biomassa</label>
          <textarea id="descricaoProjeto" name="descricaoProjeto" value={formData.descricaoProjeto} onChange={handleChange} rows={4} required className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"></textarea>
        </div>
        <div>
          <label htmlFor="documentacao" className="block text-neutral-dark font-semibold mb-2">Documentação (CNPJ, Estatuto - Opcional)</label>
          <input type="file" id="documentacao" name="documentacao" onChange={handleFileChange} className="w-full p-3 border border-neutral-light rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-lighter file:text-primary-dark hover:file:bg-primary-light transition-colors" />
        </div>
        <div>
          <label htmlFor="mensagem" className="block text-neutral-dark font-semibold mb-2">Observações Adicionais (opcional)</label>
          <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} rows={3} className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"></textarea>
        </div>
        <button type="submit" className="btn-primary w-full text-lg">
          Enviar Cadastro de ONG/Instituição
        </button>
      </form>
    </div>
  );
}

