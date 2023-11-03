import './App.css'
import Editor from "@monaco-editor/react"

function MonacoPreview({ editorValue, setEditorValue }) {

  function handleEditorChange(value, event) {
    setEditorValue(value);
  }

  return (
    <>
    <div>
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

