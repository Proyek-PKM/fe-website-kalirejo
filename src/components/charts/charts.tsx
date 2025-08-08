import React, { type JSX } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

interface DataItem {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data: DataItem[] = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 8, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 18, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

type CustomLabelProps = {
  x?: string | number;
  y?: string | number;
  width?: string | number;
  height?: string | number;
  value?: unknown;
  index?: number;
  payload?: unknown;
};

const renderCustomizedLabel = (props: CustomLabelProps): JSX.Element | null => {
  // Convert posisi ke number biar aman
  const x = Number(props.x ?? 0);
  const y = Number(props.y ?? 0);
  const width = Number(props.width ?? 0);
  const valueStr = String(props.value ?? "");

  const textVal = valueStr.split(" ")[1] ?? valueStr;
  const radius = 10;

  if (!valueStr) return null;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={10}
      >
        {textVal}
      </text>
    </g>
  );
};

const Example: React.FC = () => {
  return (
    // NOTE: ResponsiveContainer height="100%" but parent must have fixed height.
    <div className="h-80 w-full">
      {" "}
      {/* contoh: pake Tailwind h-80 */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
          <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;
