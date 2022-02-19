import React  from "react";
import { useState } from "react";
import Editor from "../components/editor/Editor";
import TaskDescription from "../components/task-description/TaskDescription";
import TerminalOutput from "../components/terminal-output/TerminalOutput";

const Home = () => {
    const [terminalLog, setTerminalLog] = useState(0);

    return(
        <div>
            <Editor setTerminalLog={setTerminalLog} />
            <div className="output-tabs">
                <div className="task-desc">
                    <TaskDescription />
                </div>
                <div className="output">
                    <TerminalOutput code={terminalLog}/>
                </div>
            </div>
        </div>
    );
}

export default Home;