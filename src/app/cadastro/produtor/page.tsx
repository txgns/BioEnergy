"use client";

import { useState } from 'react';

export default function CadastroProdutorPage() {
  const [formData, setFormData] = useState({
    nome: 
 	'',
    email: 
 	'',
    telefone: 
 	'',
    endereco: 
 	'',
    tipoResiduo: 
 	'',
    quantidadeEstimada: 
 	'',
    frequenciaColeta: 
 	'',
    mensagem: 
 	'',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados do Produtor:', formData);
    alert('Cadastro de produtor enviado com sucesso! (Mock)');
    setFormData({
        nome: 
 		'',
        email: 
 		'',
        telefone: 
 		'',
        endereco: 
 		'',
        tipoResiduo: 
 		'',
        quantidadeEstimada: 
 		'',
        frequenciaColeta: 
 		'',
        mensagem: 
 		'',
    });
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-primary-dark mb-10 text-center">Cadastro de Produtor</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-neutral-lightest p-10 rounded-xl shadow-xl space-y-6">
        <div>
          <label htmlFor="nome" className="block text-neutral-dark font-semibold mb-2">Nome Completo / Nome da Propriedade</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
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
          <label htmlFor="endereco" className="block text-neutral-dark font-semibold mb-2">Endereço da Propriedade (Rua, Número, Bairro, Cidade, Estado, CEP)</label>
          <input type="text" id="endereco" name="endereco" value={formData.endereco} onChange={handleChange} required className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
        </div>
        <div>
          <label htmlFor="tipoResiduo" className="block text-neutral-dark font-semibold mb-2">Principal Tipo de Resíduo Orgânico para Doação</label>
          <input type="text" id="tipoResiduo" name="tipoResiduo" value={formData.tipoResiduo} onChange={handleChange} required placeholder="Ex: Restos de frutas e vegetais, esterco animal, palhada, etc." className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
        </div>
        <div>
          <label htmlFor="quantidadeEstimada" className="block text-neutral-dark font-semibold mb-2">Quantidade Estimada Disponível (por semana/mês)</label>
          <input type="text" id="quantidadeEstimada" name="quantidadeEstimada" value={formData.quantidadeEstimada} onChange={handleChange} placeholder="Ex: 50kg por semana" className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
        </div>
        <div>
          <label htmlFor="frequenciaColeta" className="block text-neutral-dark font-semibold mb-2">Melhor Frequência/Disponibilidade para Coleta</label>
          <input type="text" id="frequenciaColeta" name="frequenciaColeta" value={formData.frequenciaColeta} onChange={handleChange} placeholder="Ex: Diariamente, Semanalmente às sextas, etc." className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
        </div>
        <div>
          <label htmlFor="mensagem" className="block text-neutral-dark font-semibold mb-2">Observações Adicionais (opcional)</label>
          <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} rows={4} className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"></textarea>
        </div>
        <button type="submit" className="btn-primary w-full text-lg">
          Enviar Cadastro de Produtor
        </button>
      </form>
    </div>
  );
}

