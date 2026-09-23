import type { ReactNode } from "react";

/**
 * Minimal markdown-lite renderer.
 * Converts a paragraph string to React nodes:
 * - **text** → <strong>
 * - *text*  → <em>
 * - [n]     → <sup><a href="#source-n">n</a></sup>
 * 
 * No external dependencies.
 */

type TokenType = "text" | "bold" | "italic" | "citation";

interface Token {
  type: TokenType;
  content: string;
}

function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  // Pattern matches **bold**, *italic*, and [n] citations
  // Order matters: bold (**) must come before italic (*)
  const pattern = /(\*\*[^*]+\*\*)|(\*[^*]+\*)|(\[\d+\])/g;
  
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    // Add any text before this match
    if (match.index > lastIndex) {
      tokens.push({ type: "text", content: text.slice(lastIndex, match.index) });
    }

    const fullMatch = match[0];

    if (fullMatch.startsWith("**")) {
      // Bold: **text**
      tokens.push({ type: "bold", content: fullMatch.slice(2, -2) });
    } else if (fullMatch.startsWith("*")) {
      // Italic: *text*
      tokens.push({ type: "italic", content: fullMatch.slice(1, -1) });
    } else if (fullMatch.startsWith("[")) {
      // Citation: [n]
      tokens.push({ type: "citation", content: fullMatch.slice(1, -1) });
    }

    lastIndex = match.index + fullMatch.length;
  }

  // Add any remaining text
  if (lastIndex < text.length) {
    tokens.push({ type: "text", content: text.slice(lastIndex) });
  }

  return tokens;
}

function tokensToReact(tokens: Token[]): ReactNode[] {
  return tokens.map((token, i) => {
    switch (token.type) {
      case "bold":
        return <strong key={i}>{token.content}</strong>;
      case "italic":
        return <em key={i}>{token.content}</em>;
      case "citation":
        return (
          <sup key={i}>
            <a
              href={`#source-${token.content}`}
              className="text-deepTurquoise hover:underline"
            >
              {token.content}
            </a>
          </sup>
        );
      default:
        return token.content;
    }
  });
}

/**
 * Render a single paragraph of markdown-lite text to React nodes.
 */
export function renderMarkdownLite(text: string): ReactNode {
  const tokens = tokenize(text);
  return <>{tokensToReact(tokens)}</>;
}

/**
 * Check if a line is a numbered list item (1. , 2. , etc.)
 */
function isNumberedListItem(line: string): boolean {
  return /^\d+\.\s/.test(line);
}

/**
 * Extract content from a numbered list item, removing the number prefix.
 */
function getListItemContent(line: string): string {
  return line.replace(/^\d+\.\s/, "");
}

/**
 * Render an array of paragraphs, detecting numbered lists.
 * Returns an array of React elements (<p> or <ol>).
 */
export function renderParagraphs(paragraphs: string[], className?: string): ReactNode[] {
  const elements: ReactNode[] = [];
  let listItems: string[] = [];
  let paragraphIndex = 0;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ol key={`ol-${paragraphIndex}`} className={`list-decimal list-inside space-y-2 ${className || ""}`}>
          {listItems.map((item, j) => (
            <li key={j}>{renderMarkdownLite(item)}</li>
          ))}
        </ol>
      );
      listItems = [];
    }
  };

  for (const para of paragraphs) {
    if (isNumberedListItem(para)) {
      listItems.push(getListItemContent(para));
    } else {
      flushList();
      elements.push(
        <p key={`p-${paragraphIndex}`} className={className}>
          {renderMarkdownLite(para)}
        </p>
      );
    }
    paragraphIndex++;
  }

  flushList();

  return elements;
}
