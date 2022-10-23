export const response = <E, S extends Function>(error: E, success?: S) => ({
  error,
  success
})