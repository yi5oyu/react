const MarkdownText = ({ markdownText, setMarkdownText }) => {
    return (
        <textarea
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
        placeholder="Enter Markdown text here..."
        style={{
        width: "100%",
        height: "100%",
        border: "none",
        outline: "none",
        resize: "none",
        backgroundColor: "transparent",
        fontSize: "16px",
        fontFamily: "monospace",
        }}
        />
    );
};

export default MarkdownText;
