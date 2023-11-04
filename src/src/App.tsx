import './App.css'
import "sanitize.css"
import styled from "styled-components";
import { useState } from 'react';
import MakdownPreview from './MarkdownPreview';
import MonacoPreview from './MonacoPreview'
import HTMLPreview from './HTMLPreview';

const Wrapper = styled.div`
  display: flex;
`;

function App() {
  const [editorValue, setEditorValue] = useState<string>(
`//some comment


# Heading

This is a *markdown* example.

- List item 1
- List item 2

---

[Recursion](https://recursionist.io/)
`);

  return (
    <>
      <Wrapper>
        <MonacoPreview 
          editorValue={editorValue}
          setEditorValue={setEditorValue}
        />
        <MakdownPreview 
          editorValue={editorValue}
        />
        <HTMLPreview 
          editorValue={editorValue}
        />
      </Wrapper>
    </>
  )
}


export default App

