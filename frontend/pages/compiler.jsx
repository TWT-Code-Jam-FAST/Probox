import React, {useState} from "react";
import {Box, Button} from "@material-ui/core";

import styles from "../styles/Compiler.module.css";

import helper from "../helper/helper";
import CodeInterface from "../components/codeInterface";

function Compiler() {
  const [data, setData] = useState(helper.wbConfig);

  const [done, setDone] = useState(0);

  const [code, setCode] = useState(``);

  const lang = `nodejs-head`;

  const fetchData = async () => {
    const req = await fetch(
      window.origin +
      `/api/wandbox?code=${encodeURIComponent(code)}&lang=${encodeURIComponent(lang)}`
    );
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
    <div className={styles.container}>
      <CodeInterface updateCode={setCode.bind(this)}/>
      <div className={styles.main}>
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
      </div>
    </div>
  );
}

export default Compiler;
