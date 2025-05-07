"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === 'admin123') { // Mock password
      localStorage.setItem('isAdminLoggedIn', 'true');
      setError('');
      router.push('/admin/dashboard');
    } else {
      setError('Senha incorreta. Tente novamente.');
      localStorage.removeItem('isAdminLoggedIn');
    }
  };

  return (
    <div className="container mx-auto py-16 px-4 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]"> {/* Ajuste de altura para centralizar melhor */}
      <div className="max-w-md w-full bg-neutral-lightest p-10 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-primary-dark mb-8 text-center">Login Administrativo</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-neutral-dark font-semibold mb-2">Senha de Administrador</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="w-full p-4 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button 
            type="submit" 
            className="btn-primary w-full text-lg"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

