import './App.css'
import Editor from "@monaco-editor/react"
import styled from "styled-components";

function MonacoPreview({ editorValue, setEditorValue }) {
    const Wrapper = styled.div`
        border: solid 1px black;
    `;

  return (
    <>
    <Wrapper>
        <Editor 
            height="90vh" 
            width="50vw" 
            // theme="vs-dark"
            defaultLanguage="markdown" 
            value={editorValue}
            onChange={
                (value:string, e:IModelContentChangeEvent) => setEditorValue(value)
            }
        />
    </Wrapper>
    </>
  )
}

export default MonacoPreview

