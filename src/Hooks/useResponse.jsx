const useResponse = () => {
  const success = (message = "") => ({
    error: false,
    success: true,
    message,
  });

  const error = (message = "Error") => ({
    error: true,
    success: false,
    message,
  });

  return {
    success,
    error,
  };
};

export default useResponse;
