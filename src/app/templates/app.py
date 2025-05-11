from flask import Flask, render_template
import plotly.graph_objs as go
import plotly.io as pio

app = Flask(__name__)

@app.route("/")
def index():
    # Dados do gráfico de barras
    x_labels = ['50kg Resíduos', '100kg Resíduos', '200kg Resíduos']
    biogas = [20, 40, 80]
    biofertilizante = [15, 30, 60]

    bar_fig = go.Figure()
    bar_fig.add_trace(go.Bar(x=x_labels, y=biogas, name='Biogás (m³)', marker_color='#22c55e'))  # cor primária
    bar_fig.add_trace(go.Bar(x=x_labels, y=biofertilizante, name='Biofertilizante (kg)', marker_color='#0e7490'))  # cor secundária
    bar_fig.update_layout(
        title='Potencial de Geração por Quantidade de Resíduos',
        barmode='group',
        plot_bgcolor='white',
        paper_bgcolor='white',
        font=dict(color='black')
    )
    bar_html = pio.to_html(bar_fig, full_html=False)

    # Dados do gráfico de linha
    x_line = [0, 50, 100, 150, 200]
    y_line = [0, 25, 50, 75, 100]

    line_fig = go.Figure()
    line_fig.add_trace(go.Scatter(x=x_line, y=y_line, mode='lines+markers', name='Economia (R$)', line=dict(color='#86efac', width=3)))
    line_fig.update_layout(
        title='Evolução da Economia com Doação de Resíduos',
        xaxis_title='Resíduos Orgânicos Doados (kg)',
        yaxis_title='Economia Estimada (R$)',
        plot_bgcolor='white',
        paper_bgcolor='white',
        font=dict(color='black')
    )
    line_html = pio.to_html(line_fig, full_html=False)

    return render_template("index.html", bar_graph=bar_html, line_graph=line_html)

if __name__ == "__main__":
    app.run(debug=True)
