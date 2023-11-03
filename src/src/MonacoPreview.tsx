import './App.css'
import Editor from "@monaco-editor/react"
import { useEffect } from 'react';

function MonacoPreview({ editorValue, setEditorValue }) {

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
        />
    </div>
    </>
  )
}

export default MonacoPreview

