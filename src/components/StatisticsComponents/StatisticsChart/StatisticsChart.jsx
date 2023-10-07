import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { useMediaQuery, useTheme } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

import { Container, Title } from './StatisticsChart.styled';
import { getTasksByMonth } from 'redux/tasks/operations';
import { useDispatch } from 'react-redux';
import { getTasks, getMonth } from 'redux/tasks/tasksSlice';

const StatisticsChart = ({ currentDayMonth, _ }) => {
  const theme = useTheme();
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
        dayPercentage: Math.round(
          (todoDayTasksNumber / totalDayTasksNumber) * 100
        ),
        month: todoMonthTasksNumber,
        monthPercentage: Math.round(
          (todoMonthTasksNumber / totalMonthTasksNumber) * 100
        ),
      },
      {
        name: 'In Progress',
        day: inProgressDayTasksNumber,
        dayPercentage: Math.floor(
          (inProgressDayTasksNumber / totalDayTasksNumber) * 100
        ),
        month: inProgressMonthTasksNumber,
        monthPercentage: Math.floor(
          (inProgressMonthTasksNumber / totalMonthTasksNumber) * 100
        ),
      },
      {
        name: 'Done',
        day: doneDayTasksNumber,
        dayPercentage: Math.round(
          (doneDayTasksNumber / totalDayTasksNumber) * 100
        ),
        month: doneMonthTasksNumber,
        monthPercentage: Math.round(
          (doneMonthTasksNumber / totalMonthTasksNumber) * 100
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

  const formatValue = value => {
    return !isNaN(value) && value !== 0 ? `${value.toFixed(0)}%` : '';
  };

  const generateLinearGradient = (id, color, opacity) => (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor={color} stopOpacity={opacity} />
      <stop offset="100%" stopColor={color} stopOpacity={1} />
    </linearGradient>
  );

  return (
    <Container>
      <Title>Tasks</Title>
      <ResponsiveContainer width="100%" height={290}>
        <BarChart
          data={chartData}
          barGap={isMobile ? 8 : 14}
          barSize={isMobile ? 22 : 27}
          margin={{
            top: 24,
            right: 0,
            left: -16,
            bottom: 20,
          }}
        >
          <CartesianGrid
            stroke={theme.borderChart}
            strokeWidth={1}
            strokeDasharray="none"
            vertical={false}
          />

          <XAxis
            dataKey="name"
            tick={{
              fontFamily: 'Inter',
              fontSize: isMobile ? 12 : 16,
              fill: theme.textPrimaryLight,
              fontWeight: 400,
              lineHeight: 1.33,
            }}
            tickLine={false}
            tickMargin={20}
            axisLine={false}
          />

          <YAxis
            tickFormatter={value => value}
            domain={[0, 100]}
            allowDataOverflow={true}
            scale="linear"
            axisLine={false}
            tickLine={false}
            tickMargin={14}
            tick={{
              fontFamily: 'Inter',
              fontSize: 14,
              fill: theme.textPrimaryLight,
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          />

          <Bar
            dataKey="dayPercentage"
            fill="url(#schedule-day)"
            radius={[0, 0, 8, 8]}
          >
            <LabelList
              dataKey="dayPercentage"
              position="top"
              offset={8}
              fill={theme.textPrimaryLight}
              formatter={formatValue}
            />
          </Bar>
          <Bar
            dataKey="monthPercentage"
            fill="url(#schedule-month)"
            radius={[0, 0, 8, 8]}
          >
            <LabelList
              dataKey="monthPercentage"
              position="top"
              offset={8}
              fill={theme.textPrimaryLight}
              formatter={formatValue}
            />
          </Bar>
          <defs>
            {generateLinearGradient('schedule-day', theme.accentRedLight, 0)}
            {generateLinearGradient('schedule-month', theme.accentPrimary, 0)}
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default StatisticsChart;
