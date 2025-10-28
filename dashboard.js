class LineChart {
    constructor(canvasId, dataUrl) {
        this.canvasId = canvasId;
        this.dataUrl = dataUrl;
        this.chart = null;
    }

    renderChart(data) {
        const ctx = document.getElementById(this.canvasId).getContext("2d");

        this.chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: data.labels,
                datasets: [{
                    label: "Monthly Data",
                    data: data.values,
                    borderWidth: 1, // fixed typo (was borderwidth)
                    borderColor: "rgba(81, 136, 136, 1)",
                    backgroundColor: "rgba(25, 32, 32, 0.2)",
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);

            if (!response.ok) {
                throw new Error(`Failed to load data: ${response.statusText}`);
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }

    async init() {
        const data = await this.fetchData();
        if (data) {
            this.renderChart(data);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const chart = new LineChart("lineChart", "linedata.json");
    chart.init();
});

class RadarChart {
  constructor(canvasId, dataUrl) {
    this.canvasId = canvasId;
    this.dataUrl = dataUrl;
    this.chart = null;
  }

  async fetchData() {
    try {
      const response = await fetch(this.dataUrl);

      if (!response.ok) {
        throw new Error(`Failed to load data: ${response.statusText}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

  renderChart(data) {
    const ctx = document.getElementById(this.canvasId).getContext("2d");

    this.chart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: data.labels,
        datasets: data.datasets
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          },
          title: {
            display: true,
            text: "Radar Chart"
          }
        },
        scales: {
          r: {
            angleLines: {
              display: true
            },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    });
  }

  async init() {
    const data = await this.fetchData();
    if (data) {
      this.renderChart(data);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const chart = new RadarChart("radarChart", "radarData.json");
  chart.init();
});
