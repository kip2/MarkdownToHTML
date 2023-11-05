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

type HTMLPreviewProps = {
  editorValue: string 
  isMarkdownHidden: boolean
}

export default function HTMLPreview({ editorValue, isMarkdownHidden=true }: HTMLPreviewProps) {
  const resultHtml = jsxToHtml(
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              children={editorValue} 
            />
  );
    return (
        <Wrapper hidden={!isMarkdownHidden}>
          {resultHtml}
        </Wrapper>
    );
}