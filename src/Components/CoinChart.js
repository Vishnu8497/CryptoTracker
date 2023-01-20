import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "../Asset/Api";
import { chartDays } from "../Asset/ChartDays";
import "./CoinChart.css";
import SelectButton from "./SelectButton";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { display } from "@mui/system";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinChart = ({ coin }) => {
  const [chart, setChart] = useState();
  const [days, setDays] = useState(1);
  const [flag, setflag] = useState(false);

  const fetchChart = async () => {
    const { data } = await axios.get(Chart(coin.id, days));
    setflag(true);
    setChart(data.prices);
  };

  console.log(chart);

  useEffect(() => {
    fetchChart();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (
    <div className="chart">
        {!chart | flag===false ? (
          <CircularProgress
            style={{ color: "gold"}}
            size={250}
            thickness={1}
           
          />
        ) : (
          <div className="chartGraph">
            <Line
              data={{
                labels: chart.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: chart.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ₹`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {setDays(day.value);
                    setflag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </div>
        )}
      </div>
  );
};

export default CoinChart;
