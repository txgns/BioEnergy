"use client";

import React from 'react';

const GraficosBioenergiaPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-lime-400">Gráficos Interativos BioEnergy</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-lime-300">Aproveitamento de Resíduos Orgânicos</h2>
          <iframe 
            src="/grafico_barras_bioenergy.html" 
            title="Gráfico de Barras - Aproveitamento de Resíduos Orgânicos" 
            className="w-full h-96 md:h-[500px] border-0 rounded-md"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-lime-300">Evolução da Economia com Resíduos Orgânicos</h2>
          <iframe 
            src="/grafico_linha_bioenergy.html" 
            title="Gráfico de Linhas - Evolução da Economia com Resíduos Orgânicos" 
            className="w-full h-96 md:h-[500px] border-0 rounded-md"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-400">
          Estes gráficos são gerados dinamicamente e representam dados simulados para ilustrar o potencial da bioenergia.
        </p>
      </div>
    </div>
  );
};

export default GraficosBioenergiaPage;

