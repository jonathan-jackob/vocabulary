import React, { forwardRef } from "react";
import { Slide } from "@mui/material";

const SlideUp = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default SlideUp;
