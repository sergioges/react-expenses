import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // Calculate the maximun value of all dataPoints
  // Convert object into array of values
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  // spread operation for getting independent value from the array of values
  const totalMax = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint, index) => (
                <ChartBar
                    key={index}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                ></ChartBar>
            ))}
        </div>
    );
};

export default Chart;
