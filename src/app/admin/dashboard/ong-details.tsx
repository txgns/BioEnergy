"use client";

import { useState } from 'react';

export default function OngDetails({ ong, onClose, onSave }) {
  const [formData, setFormData] = useState({
    nomeOrganizacao: ong.nomeOrganizacao,
    responsavel: ong.responsavel,
    email: ong.email,
    telefone: ong.telefone,
    endereco: ong.endereco,
    tipoNecessidade: ong.tipoNecessidade,
    descricaoProjeto: ong.descricaoProjeto,
    status: ong.status
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...ong, ...formData });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary-dark">Detalhes da ONG/Instituição</h2>
            <button 
              onClick={onClose}
              className="text-neutral-dark hover:text-neutral-darkest"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nomeOrganizacao" className="block text-sm font-medium text-neutral-dark mb-1">Nome da Organização</label>
              <input
                type="text"
                id="nomeOrganizacao"
                name="nomeOrganizacao"
                value={formData.nomeOrganizacao}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-light rounded-md"
                required
              />
            </div>
            
            <div>
              <label htmlFor="responsavel" className="block text-sm font-medium text-neutral-dark mb-1">Responsável</label>
              <input
                type="text"
                id="responsavel"
                name="responsavel"
                value={formData.responsavel}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-light rounded-md"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-light rounded-md"
                required
              />
            </div>
            
            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-neutral-dark mb-1">Telefone</label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-light rounded-md"
                required
              />
            </div>
            
            <div>
              <label htmlFor="endereco" className="block text-sm font-medium text-neutral-dark mb-1">Endereço</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-light rounded-md"
                required
              />
            </div>
            
            <div>
              <label htmlFor="tipoNecessidade" className="block text-sm font-medium text-neutral-dark mb-1">Tipo de Necessidade</label>
              <input
                type="text"
                id="tipoNecessidade"
                name="tipoNecessidade"
                value={formData.tipoNecessidade}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-light rounded-md"
                required
              />
            </div>
            
            <div>
              <label htmlFor="descricaoProjeto" className="block text-sm font-medium text-neutral-dark mb-1">Descrição do Projeto</label>
              <textarea
                id="descricaoProjeto"
                name="descricaoProjeto"
                value={formData.descricaoProjeto}
                onChange={handleChange}
                rows={4}
                className="w-full p-2 border border-neutral-light rounded-md"
                required
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-neutral-dark mb-1">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-light rounded-md"
                required
              >
                <option value="Pendente">Pendente</option>
                <option value="Aprovado">Aprovado</option>
                <option value="Rejeitado">Rejeitado</option>
              </select>
            </div>
            
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-neutral-light text-neutral-dark rounded-md hover:bg-neutral-lighter"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
              >
                Salvar Alterações
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

