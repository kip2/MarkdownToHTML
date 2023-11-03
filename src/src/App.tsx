import './App.css'
import MarkdownBuf from './MarkdownBuf'
import MonacoPreview from './MonacoPreview'
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <Wrapper>
        <MonacoPreview />
        <MarkdownBuf/>
      </Wrapper>
    </>
  )
}


export default App

