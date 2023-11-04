import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import remarkGfm from "remark-gfm";
import jsxToHtml from "./jsxToHtml";

  const Wrapper = styled.div`
    height: 90vh;
    width: 50vw;
    text-align: left;
    padding-left:20px;
    border: solid 1px black;
    background-color: white;
    overflow-y: auto;
  `;

export default function HTMLPreview({ editorValue }) {
  const resultHtml = jsxToHtml(
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              children={editorValue} 
            />
  );
    return (
        <Wrapper>
          {resultHtml}
        </Wrapper>
    );
}