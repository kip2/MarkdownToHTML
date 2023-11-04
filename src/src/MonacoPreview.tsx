import './App.css'
import Editor from "@monaco-editor/react"

function MonacoPreview({ editorValue, setEditorValue }) {
  return (
    <>
        <Editor 
            height="90vh" 
            width="50vw" 
            defaultLanguage="markdown" 
            value={editorValue}
            onChange={
                (value:string, e:IModelContentChangeEvent) => setEditorValue(value)
            }
        />
    </>
  )
}

export default MonacoPreview

