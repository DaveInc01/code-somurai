import React, { useState } from "react";

const TerminalOutput = (props) => {
    

    return(
        <p style={{ color: props.code.error ? 'red' : '#fff' }}>{props.code.output}</p>
    );
}

export default TerminalOutput;