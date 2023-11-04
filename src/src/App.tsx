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

const Title = styled.h1`
  padding:0px;
  margin:0px;
  margin-bottom:10px;
  color: #000080;
`;

function App() {
  const [editorValue, setEditorValue] = useState<string>(
`# Heading

This is a *markdown* example.

- List item 1
- List item 2

\`\`\`js
console.log("Hello World");
\`\`\`

---

[Recursion](https://recursionist.io/)
`);

  return (
    <>
      <Title >Markdown to HTML</Title>
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

