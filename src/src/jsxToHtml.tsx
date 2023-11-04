import { renderToStaticMarkup } from "react-dom/server";

export default function jsxToHtml(jsx: React.ReactElement): string {
  return renderToStaticMarkup(jsx);
}