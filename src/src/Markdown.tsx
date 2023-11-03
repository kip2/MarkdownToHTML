import ReactMarkdown from "react-markdown";

const markdown = `# Heading

This is a *markdown* example.

- List item 1
- List item 2

[OpenAI](https://openai.com)
`;

export default function MakdownTransfer() {
    return (
        <ReactMarkdown children={markdown} />
    );
}