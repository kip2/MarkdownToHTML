import ReactMarkdown from "react-markdown";
import styled from "styled-components";

  const Wrapper = styled.div`
    height: 90vh;
    width: 50vw;
    text-align: left;
    padding-left:20px;
  `;

const markdown = `# Heading

This is a *markdown* example.

- List item 1
- List item 2

[OpenAI](https://openai.com)
`;

export default function MakdownTransfer({ editorValue }) {
    return (
        <Wrapper>
            {/* <ReactMarkdown children={markdown} /> */}
            <ReactMarkdown children={editorValue} />
        </Wrapper>
    );
}