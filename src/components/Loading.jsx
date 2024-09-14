import React from "react";
import Typography from "@mui/material/Typography";

const Loading = () => {
  return (
    <div className="w-svw h-svh bg-slate-500 opacity-80 flex justify-center align-center">
      <Typography
        variant="h4"
        color="white"
        className="font-bold my-auto animate-pulse"
      >
        KAYZI.2HIGH
      </Typography>
    </div>
  );
};

export default Loading;
