import './App.css'
import Editor from "@monaco-editor/react"

type MonacoPreviewProps = {
  editorValue: string
  setEditorValue: (value: string) => void 
}

function MonacoPreview({ editorValue, setEditorValue }: MonacoPreviewProps) {
  return (
    <>
        <Editor 
            height="90vh" 
            width="50vw" 
            defaultLanguage="markdown" 
            value={editorValue}
            onChange={
                (value:string | undefined) => {
                  if (value !== undefined)
                  setEditorValue(value)
                }
            }
        />
    </>
  )
}

export default MonacoPreview

