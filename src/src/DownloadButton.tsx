import styled from "styled-components";
import jsxToHtml from "./jsxToHtml"

const Button = styled.button`
    margin-right:10px;
    margin-bottom:10px;
`;

type DownloadButtonProps = {
    editorValue:React.ReactElement
}

export default function DownloadButton({ editorValue }: DownloadButtonProps) : React.ReactElement{
    const handleDownload = () => {
        const downloadContents = jsxToHtml( editorValue );

        const blob = new Blob([downloadContents], { type: "text/html" });
        const downloadUrl = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = "download.html";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(downloadUrl);

    }
    return (
        <Button onClick={handleDownload}>
            Download HTML
        </Button>
    );
}

