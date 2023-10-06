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
import { getTasksByMonth } from 'redux/tasks/operations';
import { useDispatch } from 'react-redux';
import { getTasks, getMonth } from 'redux/tasks/tasksSlice';

const Chart = ({ currentDayMonth, _ }) => {
  console.log(currentDayMonth);
  const tasks = useSelector(getTasks);
  const month = useSelector(getMonth);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const dispatch = useDispatch();

  const currentMonth = format(currentDayMonth, 'yyyy-MM');
  const currentDay = format(currentDayMonth, 'yyyy-MM-dd');

  const [chartData, setChartData] = useState([]);

  function processTaskData(currentDay) {
    const totalMonthTasksNumber = tasks.length;

    const todoMonthTasksNumber = tasks.filter(
      task => task.status === 'todo'
    ).length;
    const inProgressMonthTasksNumber = tasks.filter(
      task => task.status === 'inProgress'
    ).length;
    const doneMonthTasksNumber = tasks.filter(
      task => task.status === 'done'
    ).length;

    const totalDayTasks = tasks.filter(task => task.date === currentDay);

    const totalDayTasksNumber = totalDayTasks.length || 0;
    const todoDayTasksNumber = totalDayTasks.filter(
      task => task.status === 'todo'
    ).length;
    const inProgressDayTasksNumber = totalDayTasks.filter(
      task => task.status === 'inProgress'
    ).length;
    const doneDayTasksNumber = totalDayTasks.filter(
      task => task.status === 'done'
    ).length;

    const chartData = [
      {
        name: 'Todo',
        day: todoDayTasksNumber,
        dayPercentage: Number(
          ((todoDayTasksNumber / totalDayTasksNumber) * 100).toFixed(0)
        ),
        month: todoMonthTasksNumber,
        monthPercentage: Number(
          ((todoMonthTasksNumber / totalMonthTasksNumber) * 100).toFixed(0)
        ),
      },
      {
        name: 'In Progress',
        day: inProgressDayTasksNumber,
        dayPercentage: Number(
          ((inProgressDayTasksNumber / totalDayTasksNumber) * 100).toFixed(0)
        ),
        month: inProgressMonthTasksNumber,
        monthPercentage: Number(
          ((inProgressMonthTasksNumber / totalMonthTasksNumber) * 100).toFixed(
            0
          )
        ),
      },
      {
        name: 'Done',
        day: doneDayTasksNumber,
        dayPercentage: Number(
          ((doneDayTasksNumber / totalDayTasksNumber) * 100).toFixed(0)
        ),
        month: doneMonthTasksNumber,
        monthPercentage: Number(
          ((doneMonthTasksNumber / totalMonthTasksNumber) * 100).toFixed(0)
        ),
      },
    ];

    return chartData;
  }

  useEffect(() => {
    if (currentMonth !== month) {
      dispatch(getTasksByMonth(currentMonth));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDayMonth]);

  useEffect(() => {
    if (tasks.length) {
      setChartData(processTaskData(currentDay));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks, currentDay]);

  const Meaning = ({ x, y, width, value }) => (
    <g transform={`translate(${x + width / 2},${y + 4})`}>
      <text
        x={2}
        y={3}
        dy={0}
        textAnchor="middle"
        fill="#343434"
        fontSize={isMobile ? 12 : 16}
        fontWeight={400}
      >
        {!isNaN(value) && value !== 0 ? `${value.toFixed(0)}%` : ''}
      </text>
    </g>
  );

  const generateLinearGradient = (id, color, opacity) => (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor={color} stopOpacity={opacity} />
      <stop offset="100%" stopColor={color} stopOpacity={1} />
    </linearGradient>
  );

  return (
    <Schedule>
      <Container>
        <Title>Tasks</Title>
        <ResponsiveContainer width="100%" height={266}>
          <BarChart
            data={chartData}
            barGap={isMobile ? 8 : 14}
            barSize={isMobile ? 22 : 27}
          >
            <CartesianGrid
              stroke="#e3f3ff"
              strokeWidth={1}
              strokeDasharray="none"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: isMobile ? 12 : 16, fill: '#343434' }}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              tickFormatter={value => value}
              domain={[0, 'dataMax']}
              allowDataOverflow={true}
              scale="linear"
              axisLine={false}
              // tickCount={totalTasks}
              tickLine={false}
              tickMargin={30}
              tick={{ fill: '#343434' }}
            />
            <Bar
              dataKey="day"
              fill="url(#schedule-day)"
              radius={[0, 0, 10, 10]}
            >
              <LabelList
                dataKey="dayPercentage"
                position="top"
                content={<Meaning />}
                fill="#343434"
              />
            </Bar>
            <Bar
              dataKey="month"
              fill="url(#schedule-month)"
              radius={[0, 0, 10, 10]}
            >
              <LabelList
                dataKey="monthPercentage"
                position="top"
                content={<Meaning />}
                fill="#343434"
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
