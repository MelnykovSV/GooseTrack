export function isAuthError(action) {
  return (
    action.type.endsWith('rejected') && action.type.split('/')[0] === 'auth'
  );
}

export function isAuthPending(action) {
  console.log(action.type);
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
  console.log(action.type.includes('logOut'));
  return action.type.includes('logOut');
}
