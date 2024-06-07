import React, { useState } from "react";
import "./ChartsSection.css";
import {
  BarChart,
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "2006", uv: 4000, pv: 2400 },
  { name: "2007", uv: 3000, pv: 1398 },
  { name: "2008", uv: 2000, pv: 9800 },
  { name: "2009", uv: 2780, pv: 3908 },
  { name: "2010", uv: 1890, pv: 4800 },
  { name: "2011", uv: 2390, pv: 3800 },
  { name: "2012", uv: 3490, pv: 4300 },
];

const datatwo = [
  { name: "2006", uv: 4000, pv: 2400 },
  { name: "2007", uv: 3000, pv: 1398 },
  { name: "2008", uv: 2000, pv: 9800 },
  { name: "2009", uv: 2780, pv: 3908 },
  { name: "2010", uv: 1890, pv: 4800 },
  { name: "2011", uv: 2390, pv: 3800 },
  { name: "2012", uv: 3490, pv: 4300 },
];

const ChartsSection = () => {
  const [hoveredBar, setHoveredBar] = useState(null);

  return (
    <section className="bg-light pb-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="chart-heading-main-box p-4 text-center bg-white">
              <h4 className="text-white">Total Revenue</h4>
              <div className="chart">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid stroke="#ccc" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis ticks={[0, 2500, 5000, 7500, 10000]} />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="pv"
                      fill="#FF8042"
                      onMouseOver={() => setHoveredBar("pv")}
                      onMouseOut={() => setHoveredBar(null)}
                    />
                    <Bar
                      dataKey="uv"
                      fill="#f5506c"
                      onMouseOver={() => setHoveredBar("uv")}
                      onMouseOut={() => setHoveredBar(null)}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-lg-0 mt-md-5 mt-sm-5">
            <div className="chart-heading-main-box p-4 text-center bg-white">
              <h4 className="text-dark">Sales Overview</h4>
              <div className="chart">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={datatwo}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis ticks={[0, 2500, 5000, 7500, 10000]} />
                    <Tooltip />
                    <Legend />
                    <Line
                      dataKey="pv"
                      stroke="#FF8042"
                      onMouseOver={() => setHoveredBar("pv")}
                      onMouseOut={() => setHoveredBar(null)}
                    />
                    <Line
                      dataKey="uv"
                      stroke="#FF8042"
                      onMouseOver={() => setHoveredBar("uv")}
                      onMouseOut={() => setHoveredBar(null)}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartsSection;
