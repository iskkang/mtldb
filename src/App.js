import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const fetchData = async (url, setData) => {
  try {
    const response = await axios.get(url);
    setData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const transformData = (data) => {
  if (!data || data.length === 0) return {};

  const labels = data.map(item => new Date(item.Date).toLocaleDateString());
  const values = data.map(item => item.Value);

  return {
    labels,
    datasets: [
      {
        label: 'Value',
        data: values,
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
};

const App = () => {
  const [globalExports, setGlobalExports] = useState([]);
  const [scfi, setScfi] = useState([]);
  const [portComparison, setPortComparison] = useState([]);
  const [portData, setPortData] = useState([]);

  useEffect(() => {
    fetchData('http://localhost:3000/global-exports', setGlobalExports);
    fetchData('http://localhost:3000/scfi', setScfi);
    fetchData('http://localhost:3000/port-comparison', setPortComparison);
    fetchData('http://localhost:3000/port-data', setPortData);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Global Exports</h2>
        <Line data={transformData(globalExports)} />
      </div>
      <div>
        <h2>SCFI</h2>
        <Line data={transformData(scfi)} />
      </div>
      <div>
        <h2>Top Port Comparison</h2>
        <Line data={transformData(portComparison)} />
      </div>
      <div>
        <h2>Port Data</h2>
        <Line data={transformData(portData)} />
      </div>
    </div>
  );
};

export default App;
