export function checkParams(day, month) {
  if (day) {
    return { date: day, pattern: 'yyyy-MM-dd' };
  }
  if (month) {
    return { date: month, pattern: 'yyyy-MM' };
  } else {
    return null;
  }
}
export function checkPageType(day, month) {
  if (day) {
    return 'day';
  }
  if (month) {
    return 'month';
  } else {
    return null;
  }
}
