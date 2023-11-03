import './App.css'
import Editor from "@monaco-editor/react"
import { useRef } from 'react';

function MonacoPreview() {
  const editorRef = useRef("");

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <>
    <div>
        <button onClick={showValue}>Show Value</button>
        <Editor 
            height="90vh" 
            width="50vw" 
            theme="vs-dark"
            defaultLanguage="markdown" 
            defaultValue="// some comment" 
            onMount={handleEditorDidMount}
        />
    </div>
    </>
  )
}

export default MonacoPreview

