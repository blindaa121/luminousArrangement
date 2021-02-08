import React from 'react';
import './App.css';
import DonutChartContainer from './DonutChart/DonutChartContainer';
import InfoCards from '../components/InfoCards/InfoCards'

const App = () => {
  return (
    <div className="App">
      <h1>Luminous Arrangement</h1>
      <InfoCards />
      <DonutChartContainer />
    </div>
  );
}

export default App;
