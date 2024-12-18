import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => <h1 className="text-4xl">{children}</h1>,
        h2: ({ children }) => (
            <h2 className="text-3xl text-blue-500">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl text-green-500">{children}</h3>
        ),
        p: ({ children }) => <p className="text-base leading-6">{children}</p>,
        strong: ({ children }) => (
            <strong className="font-regular text-primary">{children}</strong>
        ),
        img: props => (
            <Image
                sizes="100vw"
                className="h-auto w-full"
                {...(props as ImageProps)}
                alt={props.alt ?? ''}
            />
        ),
        ul: ({ children }) => (
            <ul className="list-disc list-inside">{children}</ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal list-inside">• {children}</ol>
        ),
        li: ({ children }) => (
            <li className="ml-4">• {children}</li>
        ),
        table: ({ children }) => (
            <table className="min-w-full w-full divide-y divide-gray-200">{children}</table>
        ),
        thead: ({ children }) => (
            <thead className="bg-gray-200 bg-opacity-0">{children}</thead>
        ),
        tbody: ({ children }) => (
            <tbody className="divide-y divide-gray-200">{children}</tbody>
        ),
        tr: ({ children }) => (
            <tr className="border-b border-gray-200">{children}</tr>
        ),
        th: ({ children }) => (
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 text-primary">{children}</th>
        ),
        td: ({ children }) => (
            <td className="px-6 py-4 whitespace-nowrap">{children}</td>
        ),
        a: ({ href, children }) => (
            <a href={href} className="underline hover:underline">
                <p>{children}</p>
            </a>
        ),
        ...components,
    };
}
