export function isError(action) {
  return action.type.endsWith('rejected');
}

export function isPending(action) {
  return action.type.endsWith('pending');
}
