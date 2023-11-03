import './App.css'
// import Markdown from 'react-markdown'
import ReactMarkdown from "react-markdown";

const markdown = `# Heading

This is a *markdown* example.

- List item 1
- List item 2

[OpenAI](https://openai.com)
`;

function App() {

  return (
    <>
        <ReactMarkdown children={markdown}/>
    </>
  );

}

export default App
