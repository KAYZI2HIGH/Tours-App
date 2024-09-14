import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Loading from "./components/Loading";
import CardContainer from "./components/Card";
function App() {
  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => {
        if (!res.ok) {
          throw Error("Endpoint invalid");
        }
        return res.json();
      })
      .then((data) => {
        setData(data.users);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="w-svw h-svh flex justify-center align-center bg-cyan-200 opacity-60">
      <div className="w-svw h-svh bg-slate-400  flex justify-center align-center">
        {loading ? <Loading /> : <CardContainer data={ data } />}
      </div>
    </div>
  );
}

export default App;
