export const Highlight: React.FC<{ text: string; highlight: string }> = ({
    text,
    highlight,
}) => {
    if (!highlight.trim()) {
        return <>{text}</>;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return (
        <>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <mark key={index} className="bg-white text-primary">
                        {part}
                    </mark>
                ) : (
                    part
                )
            )}
        </>
    );
};