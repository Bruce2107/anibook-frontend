import React, { useMemo } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { UserStatus } from '../../types/Serie';
import { getGraphStatus } from '../../utils/getStatus';

type Props = {
  width: number
  height: number
  data: { [key in UserStatus]: number }
}

const COLORS: { [k in UserStatus]: string } = {
  watching: '#0088FE',
  watched: '#00C49F',
  plan_to_watch: '#151515',
  dropped: '#f65f14',
};

type ChardData = { name: string, value: number, ref: UserStatus }

const CustomChart = ({ width, height, data }: Props) => {
  const chartData: ChardData[] = useMemo(() => (
    (Object.keys(data) as UserStatus[]).map((key) => ({
      name: getGraphStatus(key),
      value: data[key],
      ref: key
    }))
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
          <Cell key={`cell-${index}`} fill={COLORS[entry.ref]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default CustomChart;
