import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { useMediaQuery } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

import { Schedule, Container, Title } from './StatisticsChart.styled';

const Chart = ({ firstDayCurrentMonth, _ }) => {
  const [data, setData] = useState(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `statistics?date=${format(firstDayCurrentMonth, 'yyyy-MM-dd')}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [firstDayCurrentMonth, token]);

  if (!data) {
    return null;
  }
  const { todo, inProgres, done } = data;

  const chartData = [
    {
      name: 'Todo',
      day: todo.forDay.quantity,
      dayPercentage: todo.forDay.percents,
      month: todo.forMonth.quantity,
      monthPercentage: todo.forMonth.percents,
    },
    {
      name: 'In Progress',
      day: inProgres.forDay.quantity,
      dayPercentage: inProgres.forDay.percents,
      month: inProgres.forMonth.quantity,
      monthPercentage: inProgres.forMonth.percents,
    },
    {
      name: 'Done',
      day: done.forDay.quantity,
      dayPercentage: done.forDay.percents,
      month: done.forMonth.quantity,
      monthPercentage: done.forMonth.percents,
    },
  ];

  const Meaning = ({ x, y, width, value }) => (
    <g transform={`translate(${x + width / 2},${y + 4})`}>
      <text
        x={2}
        y={3}
        dy={0}
        textAnchor='middle'
        fill='#343434'
        fontSize={isMobile ? 12 : 16}
        fontWeight={400}
      >
        {!isNaN(value) && value !== 0 ? `${value.toFixed(0)}%` : ''}
      </text>
    </g>
  );

  const generateLinearGradient = (id, color, opacity) => (
    <linearGradient id={id} x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0%' stopColor={color} stopOpacity={opacity} />
      <stop offset='100%' stopColor={color} stopOpacity={1} />
    </linearGradient>
  );

  return (
    <Schedule>
      <Container>
        <Title>Tasks</Title>
        <ResponsiveContainer width='100%' height={266}>
          <BarChart
            data={chartData}
            barGap={isMobile ? 8 : 14}
            barSize={isMobile ? 22 : 27}
          >
            <CartesianGrid
              stroke='#e3f3ff'
              strokeWidth={1}
              strokeDasharray='none'
              vertical={false}
            />
            <XAxis
              dataKey='name'
              tick={{ fontSize: isMobile ? 12 : 16, fill: '#343434' }}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              domain={[0, 10]}
              tickCount={11}
              tick={{ fill: '#343434' }}
              allowDataOverflow={true}
              scale='linear'
              axisLine={false}
              tickLine={false}
              tickMargin={30}
            />
            <Bar
              dataKey='day'
              fill='url(#schedule-day)'
              radius={[0, 0, 10, 10]}
            >
              <LabelList
                dataKey='dayPercentage'
                position='top'
                content={<Meaning />}
                fill='#343434'
              />
            </Bar>
            <Bar
              dataKey='month'
              fill='url(#schedule-month)'
              radius={[0, 0, 10, 10]}
            >
              <LabelList
                dataKey='monthPercentage'
                position='top'
                content={<Meaning />}
                fill='#343434'
              />
            </Bar>
            <defs>
              {generateLinearGradient('schedule-day', '#ffd2dd', 0)}
              {generateLinearGradient('schedule-month', '#3e85f3', 0)}
            </defs>
            <CartesianGrid vertical={false} />
          </BarChart>
        </ResponsiveContainer>
      </Container>
    </Schedule>
  );
};

export default Chart;