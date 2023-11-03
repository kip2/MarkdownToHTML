import './App.css'
import MakdownTransfer from './MarkdownTransfer';
import styled from "styled-components";

function MarkdownBuf() {
  const Wrapper = styled.div`
    display: flex;
    justify-content: end;
  `;
  const Hello = styled.h1`
    height: 90vh;
    width: 50vw;
  `;
  return (
    <>
      <Wrapper>
        <Hello>Hello</Hello>
        <MakdownTransfer/>
      </Wrapper>
    </>
  );

}

export default MarkdownBuf
