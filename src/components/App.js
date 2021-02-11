import React from 'react';
import './App.css';
import DonutChartContainer from './DonutChart/DonutChartContainer';
import InfoCards from '../components/InfoCards/InfoCards'
import Header from '../components/Header/Header'

const App = () => {
  return (
    <div className="App">
      <Header />
      <InfoCards />
      <DonutChartContainer />
    </div>
  );
}

export default App;
