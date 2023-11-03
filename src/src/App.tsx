import './App.css'
import MonacoPreview from './MonacoPreview'
import styled from "styled-components";
import "sanitize.css"
import { useState } from 'react';
import MakdownTransfer from './MarkdownTransfer';


const Wrapper = styled.div`
  display: flex;
`;

function App() {
  const [editorValue, setEditorValue] = useState("//some comment");

  return (
    <>
      <Wrapper>
        <MonacoPreview 
          editorValue={editorValue}
          setEditorValue={setEditorValue}
        />
        <MakdownTransfer />
      </Wrapper>
    </>
  )
}


export default App

