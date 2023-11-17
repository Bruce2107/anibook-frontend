import React, { useMemo } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { UserStatus } from '../../types/Serie';

type Props = {
  width: number
  height: number
  data: { [key in UserStatus]: number }
}

const COLORS: { [k in UserStatus]: string } = {
  watching: '#0088FE',
  watched: '#00C49F',
  plan_to_watch: '#FFBB28',
  dropped: '#f65f14',
};

type ChardData = { name: UserStatus, value: number }

const CustomChart = ({ width, height, data }: Props) => {
  const chartData: ChardData[] = useMemo(() => (
    [
      { name: 'watching', value: data.watching },
      { name: 'watched', value: data.watched },
      { name: 'plan_to_watch', value: data.plan_to_watch },
      { name: 'dropped', value: data.dropped },
    ]
  ), [data]);
  return (
    <PieChart width={width} height={height}>
      <Pie
        dataKey="value"
        data={chartData}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        innerRadius={40}
        label
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default CustomChart;
