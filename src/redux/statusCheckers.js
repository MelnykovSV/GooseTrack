export function isAuthError(action) {
  return (
    action.type.endsWith('rejected') && action.type.split('/')[0] === 'auth'
  );
}

export function isAuthPending(action) {
  return (
    action.type.endsWith('pending') && action.type.split('/')[0] === 'auth'
  );
}

export function isReviewsError(action) {
  return (
    action.type.endsWith('rejected') && action.type.split('/')[0] === 'reviews'
  );
}

export function isReviewsPending(action) {
  return (
    action.type.endsWith('pending') && action.type.split('/')[0] === 'reviews'
  );
}

export function isTasksError(action) {
  return (
    action.type.endsWith('rejected') && action.type.split('/')[0] === 'tasks'
  );
}

export function isTasksPending(action) {
  return (
    action.type.endsWith('pending') && action.type.split('/')[0] === 'tasks'
  );
}

export function islogout(action) {
  return action.type.includes('logOut');
}
