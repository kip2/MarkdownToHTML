import './App.css'
import Editor from "@monaco-editor/react"
import { useRef, useState, useEffect } from 'react';

function MonacoPreview() {
    const editorRef = useRef("");
    const [editorValue, setEditorValue] = useState("//some comment");

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  function handleEditorChange(value, event) {
    setEditorValue(value);
  }

  function showValue() {
    alert(editorValue)
  }

  useEffect(() => {
    // alert(editorValue)
  }, [editorValue])


  return (
    <>
    <div>
        <button onClick={showValue}>Show Value</button>
        <Editor 
            height="90vh" 
            width="50vw" 
            theme="vs-dark"
            defaultLanguage="markdown" 
            value={editorValue}
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
        />
    </div>
    </>
  )
}

export default MonacoPreview

