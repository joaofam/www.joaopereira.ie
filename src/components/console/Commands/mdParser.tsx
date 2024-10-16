// Updated Markdown Parser for line breaks and empty lines
export const parseMarkdown = (content: string): React.ReactNode[] => {
    const lines = content.split('\n');
    const parsedContent: React.ReactNode[] = lines.map((line, index) => {
        // Headings
        if (line.startsWith('### ')) {
            return <h3 key={index}>{line.slice(4)}</h3>;
        } else if (line.startsWith('## ')) {
            return <h2 key={index}>{line.slice(3)}</h2>;
        } else if (line.startsWith('# ')) {
            return <h1 key={index}>{line.slice(2)}</h1>;
        }

        // Horizontal line
        if (line === '---') {
            return <hr key={index} className="border-accent" />;
        }

        // Highlighted text ===text===
        const highlightMatch = line.match(/===([^=]+)===/);
        if (highlightMatch) {
            return (
                <p key={index}>
                    <span className="bg-secondary text-foreground">{highlightMatch[1]}</span>
                </p>
            );
        }

        // Bold text **text**
        const boldMatch = line.match(/\*\*([^*]+)\*\*/);
        if (boldMatch) {
            return (
                <p key={index}>
                    <strong>{boldMatch[1]}</strong>
                </p>
            );
        }

        // Italic text _text_
        const italicMatch = line.match(/_([^_]+)_/);
        if (italicMatch) {
            return (
                <p key={index}>
                    <em>{italicMatch[1]}</em>
                </p>
            );
        }

        // Handle empty lines (double \n)
        if (line.trim() === '') {
            return <br key={index} />;
        }

        // If no special markdown, return the line as a regular paragraph
        return <p key={index} className="text-accent">{line}</p>;
    });

    return parsedContent;
};
