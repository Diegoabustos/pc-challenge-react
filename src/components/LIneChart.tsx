import { Line } from 'react-chartjs-2';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

type LineChartProps = {
  data: number[];
};

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartData = {
    labels: [...Array(data.length).keys()].map((i) => i.toString()),
    datasets: [
      {
        label: 'Data',
        data: data,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Hour of the Day',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default LineChart;