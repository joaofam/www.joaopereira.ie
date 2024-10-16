export const parseMarkdown = (content: string): React.ReactNode[] => {
    // Process highlighted text ===text===
    const highlightRegex = /===([^=]+)===/g;
    content = content.replace(
        highlightRegex,
        '<span class="bg-secondary text-foreground">$1</span>'
    );

    // Process bold text **text**
    const boldRegex = /\*\*([^*]+)\*\*/g;
    content = content.replace(
        boldRegex,
        '<strong class="text-white">$1</strong>'
    );

    // Process italic text *text*
    const italicRegex = /\*([^*]+)\*/g;
    content = content.replace(italicRegex, '<em>$1</em>');

    const lines = content.split('\n');
    const parsedContent: React.ReactNode[] = lines.map((line, index) => {
        // Headings
        if (line.startsWith('### ')) {
            return (
                <h3
                    className="font-bold"
                    key={index}
                    dangerouslySetInnerHTML={{ __html: line.slice(4) }}
                />
            );
        } else if (line.startsWith('## ')) {
            return (
                <h2
                    className="text-2xs sm:text-xs md:text-sm"
                    key={index}
                    dangerouslySetInnerHTML={{ __html: line.slice(3) }}
                />
            );
        } else if (line.startsWith('# ')) {
            return (
                <h1
                    className="text-2xs font-bold sm:text-xs md:text-sm"
                    key={index}
                    dangerouslySetInnerHTML={{ __html: line.slice(2) }}
                />
            );
        }

        // Bullet points
        if (line.startsWith('- ')) {
            return (
                <li
                    key={index}
                    className="text-accent"
                    dangerouslySetInnerHTML={{ __html: line.slice(2) }}
                />
            );
        }

        // Horizontal line
        if (line === '---') {
            return <hr key={index} className="border-accent" />;
        }

        // Handle empty lines (double \n)
        if (line.trim() === '') {
            return <br key={index} />;
        }

        // If no special markdown, return the line as a regular paragraph
        return (
            <p
                key={index}
                className="text-accent"
                dangerouslySetInnerHTML={{ __html: line }}
            />
        );
    });

    return parsedContent;
};
