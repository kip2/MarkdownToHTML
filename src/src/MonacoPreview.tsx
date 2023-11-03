import './App.css'
import Editor from "@monaco-editor/react"

function MonacoPreview({ editorValue, setEditorValue }) {

  return (
    <>
    <div>
        <Editor 
            height="90vh" 
            width="50vw" 
            theme="vs-dark"
            defaultLanguage="markdown" 
            value={editorValue}
            onChange={
                (value:string, e:IModelContentChangeEvent) => setEditorValue(value)
            }
        />
    </div>
    </>
  )
}

export default MonacoPreview

