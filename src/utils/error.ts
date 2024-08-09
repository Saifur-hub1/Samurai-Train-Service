interface CustomError extends Error{
  status?: number
}

const error = (msg = 'Something Went Wrong', status = 500): CustomError => {
  const e: CustomError = new Error(msg) as CustomError;
  e.status = status;
  return e;
}

export default error;