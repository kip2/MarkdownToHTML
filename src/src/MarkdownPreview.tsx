import ReactMarkdown from "react-markdown";
import styled from "styled-components";

  const Wrapper = styled.div`
    height: 90vh;
    width: 50vw;
    text-align: left;
    padding-left:20px;
    border: solid 1px black;
  `;

export default function MakdownPreview({ editorValue }) {
    return (
        <Wrapper>
            <ReactMarkdown children={editorValue} />
        </Wrapper>
    );
}