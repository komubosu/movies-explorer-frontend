import './Chart.css';

function Chart(params) {
  return (
    <div className="chart">
      <div className="chart__timeline chart__timeline_theme_green">
        <p className="chart__text">1 неделя</p>
      </div>
      <div  className="chart__timeline chart__timeline_theme_grey">
        <p className="chart__text">4 недели</p>
      </div>
      <p className="chart__subtitle">Back-end</p>
      <p className="chart__subtitle">Front-end</p>
    </div>
  );
};

export default Chart;