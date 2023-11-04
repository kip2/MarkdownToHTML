import jsxToHtml from "./jsxToHtml"

export default function DownloadButton({ editorValue }) {
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
        <button onClick={handleDownload}>
            Download HTML
        </button>
    );
}