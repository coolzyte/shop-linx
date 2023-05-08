const getError = (err: any): string => {
  if (err.response && err.response.data && err.response.data.message) {
    return err.response.data.message;
  } else {
    return err.message;
  }
};

export { getError };
