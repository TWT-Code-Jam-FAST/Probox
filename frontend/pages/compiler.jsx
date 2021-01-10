import React, {useState} from "react";
import {Box, Button} from "@material-ui/core";

import styles from "../styles/Compiler.module.css";

function Compiler() {
  const [data, setData] = useState({
    status: 0,
    signal: "",
    compiler_output: "",
    compiler_error: "",
    compiler_message: "",
    program_output: "",
    program_error: "",
    program_message: "",
    permlink: "",
    url: ""
  });

  const [done, setDone] = useState(0);

  const fetchData = async () => {
    const req = await fetch(window.origin + '/api/wandbox?code=console.log("hello, world!")&lang=nodejs-head');
    const newData = await req.json();

    setData(newData);
    setDone(1);
  };

  const handleClick = (event) => {
    setDone(2);
    event.preventDefault();
    fetchData().then();
  };

  return (
    <>
      <main className={styles.main}>
        <Box>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Run Code!
          </Button>
          <h4>{done === 1 ? "Done" : (done === 0 ? "Idle" : "Compiling...")}</h4>

          <h2>Standard Output:</h2>
          <h3>{data.program_output}</h3>
          <h2>Standard Error:</h2>
          <h3>{data.program_error}</h3>
        </Box>
      </main>
    </>
  );
}

export default Compiler;
