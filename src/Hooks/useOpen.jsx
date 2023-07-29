import { useState } from "react";

const useOpen = (state = false) => {
  const [status, setStatus] = useState(state);

  const open = () => {
    setStatus(true);
  };

  const close = () => {
    setStatus(false);
  };

  const toggle = () => {
    setStatus(!status);
  };
  return {
    close,
    status,
    open,
    toggle,
  };
};

export default useOpen;
