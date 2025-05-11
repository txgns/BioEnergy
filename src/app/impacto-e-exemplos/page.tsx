"use client";

import { useEffect } from 'react';
import Script from 'next/script';

const ImpactoEExemplosPage = () => {

  useEffect(() => {
    // Mock de dados
    const barChartData = {
      data: [
        {
          x: ['50kg Resíduos', '100kg Resíduos', '200kg Resíduos'],
          y: [20, 40, 80], // m³ de Biogás
          name: 'Biogás (m³)',
          type: 'bar',
          marker: {
            color: 'hsl(var(--color-primary))'
          }
        },
        {
          x: ['50kg Resíduos', '100kg Resíduos', '200kg Resíduos'],
          y: [15, 30, 60], // kg de Biofertilizante
          name: 'Biofertilizante (kg)',
          type: 'bar',
          marker: {
            color: 'hsl(var(--color-secondary-dark))'
          }
        }
      ],
      layout: {
        title: 'Potencial de Geração por Quantidade de Resíduos',
        barmode: 'group',
        paper_bgcolor: 'hsl(var(--color-neutral-lightest))',
        plot_bgcolor: 'hsl(var(--color-neutral-lightest))',
        font: {
            color: 'hsl(var(--color-neutral-darkest))'
        }
      }
    };

    const lineChartData = {
      data: [
         {
                name: 'Biogás (m³)',
                x: [50, 100, 150, 200, 250, 300, 350, 400, 450, 500],
                y: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
                type: 'scatter',
                mode: 'lines+markers'
            },
            {
                name: 'Biofertilizante (kg)',
                x: [50, 100, 150, 200, 250, 300, 350, 400, 450, 500],
                y: [15, 25, 35, 50, 65, 75, 85, 100, 115, 125],
                type: 'scatter',
                mode: 'lines+markers'
            },
            {
                name: 'Economia (R$)',
                x: [50, 100, 150, 200, 250, 300, 350, 400, 450, 500],
                y: [20, 39, 58, 78, 98, 118, 138, 158, 178, 195],
                type: 'scatter',
                mode: 'lines+markers'
            }
        
      ],
      layout: {
        title: 'Evolução da Economia com Doação de Resíduos',
        xaxis: { title: 'Resíduos Orgânicos Doados (kg)' },
        yaxis: { title: 'Economia Estimada (R$)' },
        paper_bgcolor: 'hsl(var(--color-neutral-lightest))',
        plot_bgcolor: 'hsl(var(--color-neutral-lightest))',
        font: {
            color: 'hsl(var(--color-neutral-darkest))'
        }
      }
    };

    if (typeof Plotly !== 'undefined') {
      Plotly.newPlot('grafico-barras', barChartData.data, barChartData.layout, { displayModeBar: false });
      Plotly.newPlot('grafico-linha', lineChartData.data, lineChartData.layout, { displayModeBar: false });
    } else {
        
        const intervalId = setInterval(() => {
            if (typeof Plotly !== 'undefined') {
                Plotly.newPlot('grafico-barras', barChartData.data, barChartData.layout, { displayModeBar: false });
                Plotly.newPlot('grafico-linha', lineChartData.data, lineChartData.layout, { displayModeBar: false });
                clearInterval(intervalId);
            }
        }, 100);
    }

  }, []);

  return (
    <>
      <Script src="https://cdn.plot.ly/plotly-latest.min.js" strategy="lazyOnload" />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-primary-dark mb-10 text-center">Impacto e Exemplos do Aproveitamento de Biomassa</h1>
        
        <section className="mb-16 bg-neutral-lightest p-10 rounded-xl shadow-xl">
          <h2 className="text-3xl font-semibold text-secondary-dark mb-6">O Potencial do Aproveitamento Sustentável</h2>
          <p className="text-neutral-dark text-lg leading-relaxed mb-4">
            O aproveitamento de resíduos orgânicos, transformando-os em biogás e biofertilizantes, oferece benefícios ambientais e econômicos significativos. Esta prática reduz a quantidade de lixo destinada a aterros sanitários, diminui a emissão de gases de efeito estufa (como o metano) e gera energia limpa e renovável, além de fertilizantes naturais que enriquecem o solo.
          </p>
          <p className="text-neutral-dark text-lg leading-relaxed">
            Ao adotar essa abordagem, promovemos uma economia circular, onde resíduos que seriam descartados são convertidos em produtos valiosos. Isso beneficia diretamente tanto os pequenos produtores rurais, que podem encontrar uma nova fonte de renda ou reduzir custos, quanto as ONGs e instituições, que utilizam esses recursos em projetos de sustentabilidade e apoio comunitário.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-primary-dark mb-8 text-center">Visualizando o Impacto: Gráficos Interativos</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-neutral-lightest p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-semibold text-secondary-dark mb-4 text-center">Geração de Biogás e Biofertilizante</h3>
              <div id="grafico-barras" style={{ width: '100%', height: '400px' }}></div>
              <p className="text-neutral-dark mt-4 text-center text-sm">
                Este gráfico ilustra a quantidade de Biogás (em metros cúbicos) e Biofertilizante (em quilogramas) que podem ser gerados a partir de diferentes volumes de resíduos orgânicos (em kg).
              </p>
            </div>
            <div className="bg-neutral-lightest p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-semibold text-secondary-dark mb-4 text-center">Evolução da Economia Gerada</h3>
              <div id="grafico-linha" style={{ width: '100%', height: '400px' }}></div>
              <p className="text-neutral-dark mt-4 text-center text-sm">
                O gráfico de linha demonstra como a economia gerada pela produção e uso de Biogás e Biofertilizantes pode aumentar à medida que a quantidade de resíduos orgânicos doados e processados cresce. A economia é calculada com base na substituição de insumos convencionais.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-lightest p-10 rounded-xl shadow-xl">
          <h2 className="text-3xl font-semibold text-secondary-dark mb-6">Impacto Social e Ambiental Ampliado</h2>
          <p className="text-neutral-dark text-lg leading-relaxed mb-4">
            O uso consciente de resíduos orgânicos para a geração de Biogás e Biofertilizantes transcende os benefícios econômicos, promovendo um impacto social e ambiental profundo e duradouro. Ao destinar corretamente esses resíduos, contribuímos ativamente para a mitigação das mudanças climáticas, reduzindo a emissão de gases poluentes e diminuindo a pressão sobre os recursos naturais.
          </p>
          <p className="text-neutral-dark text-lg leading-relaxed mb-4">
            A produção de biofertilizantes orgânicos, por exemplo, ajuda a combater a degradação do solo, melhora a sua estrutura e capacidade de retenção de água, e reduz a dependência de fertilizantes químicos sintéticos, que podem ser prejudiciais ao meio ambiente e à saúde humana.
          </p>
          <p className="text-neutral-dark text-lg leading-relaxed">
            Socialmente, o projeto BioEnergy beneficia as ONGs e instituições parceiras ao fornecer acesso a energia limpa e fertilizantes a custos reduzidos ou nulos. Isso permite que essas organizações ampliem seus projetos, melhorem a qualidade de vida de comunidades carentes, promovam a segurança alimentar e fomentem a educação ambiental.
          </p>
        </section>
      </div>
    </>
  );
};

export default ImpactoEExemplosPage;

