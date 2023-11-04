import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import DownloadButton from "./DownloadButton";

  const Wrapper = styled.div`
    height: 90vh;
    width: 50vw;
    text-align: left;
    padding-left:20px;
    border: solid 1px black;
    background-color: white;
    overflow-y: auto;
  `;

export default function MakdownPreview({ editorValue }) {
    return (
        <Wrapper>
            <DownloadButton 
              editorValue={editorValue}
            />
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              children={editorValue} 
              components={{
                code(props) {
                  const {children, className, node, ...rest} = props
                  const match = /language-(\w+)/.exec(className || '')
                  return match ? (
                    <SyntaxHighlighter
                      {...rest}
                      children={String(children).replace(/\n$/,'')}
                      style={coy}
                      language={match[1]}
                      PreTag="div"
                    />
                  ):(
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  )
                }
              }}
            />
        </Wrapper>
    );
}