import ReactMarkdown from "react-markdown";
import styled from "styled-components";

// const StyledMarkdownPreview = styled.div`
//     height: 90vh;
//     width: 50vw;
// `;

  const Wrapper = styled.div`
    height: 90vh;
    width: 50vw;
  `;

const markdown = `# Heading

This is a *markdown* example.

- List item 1
- List item 2

[OpenAI](https://openai.com)
`;

export default function MakdownTransfer() {
    return (
        <Wrapper>

        <ReactMarkdown children={markdown} />
        </Wrapper>
    );
}