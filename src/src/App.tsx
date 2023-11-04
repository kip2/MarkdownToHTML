import './App.css'
import "sanitize.css"
import styled from "styled-components";
import { useState } from 'react';
import MakdownPreview from './MarkdownPreview';
import MonacoPreview from './MonacoPreview'
import HTMLPreview from './HTMLPreview';
import DownloadButton from "./DownloadButton";

const Wrapper = styled.div`
  display: flex;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const ToggleButton = styled.button`
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 36px;
  padding:0px;
  margin:0px;
  margin-bottom:10px;
  color: #000080;
`;

function App() {
  const [isMarkdownHidden, setIsMarkdownHidden] = useState(false);

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
      <Buttons>
        <DownloadButton editorValue={editorValue} />
        <ToggleButton
          onClick={() => {setIsMarkdownHidden(!isMarkdownHidden)}}
        >
          {
            !isMarkdownHidden ? "HTMLに切り替え" : "Markdownに切り替え"
          }
        </ToggleButton>
      </Buttons>
      <Wrapper>
        <MonacoPreview 
          editorValue={editorValue}
          setEditorValue={setEditorValue}
        />
        <MakdownPreview 
          editorValue={editorValue}
          isMarkdownHidden={isMarkdownHidden}
        />
        <HTMLPreview 
          editorValue={editorValue}
          isMarkdownHidden={isMarkdownHidden}
        />
      </Wrapper>
    </>
  )
}


export default App

