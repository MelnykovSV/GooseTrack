import { createSelector } from '@reduxjs/toolkit';

export const selectToken = state => state.auth.accessToken;

export const selectUser = state => state.auth.user;

export const selectTasks = state => state.tasks.tasks;

export const selectFilteredTasks = createSelector([selectTasks], tasks => {
  const filteredTasks = tasks.reduce(
    (acc, task) => {
      const { status } = task;

      switch (status) {
        case 'todo':
          acc.tasksTodo.push(task);
          break;
        case 'inProgress':
          acc.tasksInProgress.push(task);
          break;
        case 'done':
          acc.tasksDone.push(task);
          break;
        default:
          break;
      }

      return acc;
    },
    {
      tasksTodo: [],
      tasksInProgress: [],
      tasksDone: [],
    }
  );

  return filteredTasks;
});

export const selectIsLoadingTask = state => state.tasks.isLoading;
