import ReactMarkdown from "react-markdown";
import styled from "styled-components";

  const Wrapper = styled.div`
    margin-top:20px;
    height: 90vh;
    width: 50vw;
    text-align: left;
    padding-left:20px;
  `;

export default function MakdownPreview({ editorValue }) {
    return (
        <Wrapper>
            {/* <ReactMarkdown children={markdown} /> */}
            <ReactMarkdown children={editorValue} />
        </Wrapper>
    );
}