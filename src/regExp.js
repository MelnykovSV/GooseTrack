export const emailRegexp =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const userNameRegexp = /^[a-zA-Z0-9_]+$/;
export const passwordRegexp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;
export const birthdayRegexp = /^\d{4}-\d{2}-\d{2}$/;
export const skypeRegexp = /^[a-zA-Z0-9_]{3,16}$/;
