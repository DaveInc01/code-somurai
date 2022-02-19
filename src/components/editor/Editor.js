import React,{useRef} from "react";
import MonacoEditor from "@monaco-editor/react";
import { exeCode } from "../../services";

const Editor = (props) => {
    const editorRef = useRef(null);
    
    const playCode = async() => {
        try {
            const response = await exeCode(editorRef.current.getValue());
            console.log(response);
            props.setTerminalLog(response.data)
        } catch (error) {
            console.log(error);
        }
        
    }

    const onEditorMount = editor => {
        editorRef.current = editor;
    }

    return(
        <div className="editor">
            <div className="editor-header">
                <button onClick={playCode}>Play</button>
            </div>
            <MonacoEditor
                height="50vh"
                defaultLanguage="javascript"
                defaultValue="// some comment"
                theme="vs-dark"
                onMount={onEditorMount}
            />
        </div>
    );
}

export default Editor;