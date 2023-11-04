import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import remarkGfm from "remark-gfm";
import { renderToStaticMarkup } from "react-dom/server";

  const Wrapper = styled.div`
    height: 90vh;
    width: 50vw;
    text-align: left;
    padding-left:20px;
    border: solid 1px black;
    background-color: white;
    overflow-y: auto;
  `;

function jsxToHtml(jsx: React.ReactElement): string {
  return renderToStaticMarkup(jsx);
}


export default function HTMLPreview({ editorValue }) {
  let resultHtml = jsxToHtml(
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