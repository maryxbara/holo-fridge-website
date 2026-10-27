import { readFileSync } from "fs";
import path from "path";
import { Fragment, type ReactNode } from "react";
import { renderMarkdownLite } from "@/lib/markdown-lite";
import type { Locale } from "@/lib/i18n";

/**
 * Legal documents rendered verbatim from content/legal/<name>.<locale>.md.
 * Those files are byte-for-byte copies of holo-fridge-app/docs/legal/<name>_<locale>.md
 * (Ukrainian: <name>_ua.md → <name>.uk.md) — update them by copying, never by editing.
 *
 * Supported markdown: "# " title, a bold "Last updated" line, "## " headings,
 * standalone "**Label:**" lines (rendered as h3), "- " lists, paragraphs, **bold**, *italic*.
 */

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "p"; lines: string[] };

export type LegalDoc = { title: string; lastUpdated: string; blocks: Block[] };

const BOLD_LINE = /^\*\*([^*]+)\*\*$/;
const BOLD_LABEL = /^\*\*([^*]+?)\s*:\*\*$/;
// A URL never ends in punctuation, so "…/delete-account." links without the full stop.
const LINK = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+|https?:\/\/[^\s)]*[^\s).,;:!?])/;
const EMAIL = /[\w.+-]+@[\w-]+(?:\.[\w-]+)+/;

export function loadLegalDoc(name: "privacy" | "terms", locale: Locale): LegalDoc {
  const file = path.join(process.cwd(), "content/legal", `${name}.${locale}.md`);
  const chunks = readFileSync(file, "utf8")
    .trim()
    .split(/\n\s*\n/)
    .map((chunk) => chunk.split("\n").map((line) => line.trim()));

  const [titleChunk, updatedChunk, ...rest] = chunks;
  const updated = updatedChunk?.length === 1 ? BOLD_LINE.exec(updatedChunk[0]) : null;
  if (titleChunk?.length !== 1 || !titleChunk[0].startsWith("# ") || !updated) {
    throw new Error(`${file}: expected "# Title" followed by a bold "Last updated" line`);
  }

  const blocks: Block[] = rest.map((lines) => {
    const isItem = lines.map((line) => line.startsWith("- "));
    if (isItem.every(Boolean)) {
      return { type: "ul", items: lines.map((line) => line.slice(2)) };
    }
    if (isItem.some(Boolean) || (lines[0].startsWith("#") && lines.length > 1)) {
      throw new Error(`${file}: unsupported block starting "${lines[0]}"`);
    }
    if (lines[0].startsWith("## ")) return { type: "h2", text: lines[0].slice(3) };
    if (lines[0].startsWith("#")) throw new Error(`${file}: unsupported heading "${lines[0]}"`);
    const label = lines.length === 1 ? BOLD_LABEL.exec(lines[0]) : null;
    if (label) return { type: "h3", text: label[1] };
    return { type: "p", lines };
  });

  return { title: titleChunk[0].slice(2), lastUpdated: updated[1], blocks };
}

function renderInline(text: string): ReactNode {
  return text.split(LINK).map((part, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{renderMarkdownLite(part)}</Fragment>;
    const href = part.includes("@") ? `mailto:${part}` : part;
    return (
      <a key={i} href={href} className="text-deepTurquoise hover:underline">
        {part}
      </a>
    );
  });
}

function renderBlock(block: Block, key: number, className?: string): ReactNode {
  switch (block.type) {
    case "h2":
      return <h2 key={key} className={className}>{block.text}</h2>;
    case "h3":
      return <h3 key={key}>{block.text}</h3>;
    case "ul":
      return (
        <ul key={key}>
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case "p":
      return (
        <p key={key}>
          {block.lines.map((line, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              {renderInline(line)}
            </Fragment>
          ))}
        </p>
      );
  }
}

/**
 * The company block — a multi-line paragraph opening with a bold name line
 * (no trailing colon), plus a directly following paragraph of email lines —
 * sits in the company card.
 */
function renderBlocks(blocks: Block[], inCard: boolean): ReactNode[] {
  const out: ReactNode[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    const name =
      block.type === "p" && block.lines.length > 1 ? BOLD_LINE.exec(block.lines[0]) : null;
    if (block.type === "p" && name && !name[1].endsWith(":")) {
      const next = blocks[i + 1];
      const contactLines =
        next?.type === "p" && next.lines.every((line) => EMAIL.test(line)) ? next.lines : [];
      out.push(
        <div key={i} className="glass rounded-2xl p-6 my-4">
          <p className="font-semibold text-charcoal dark:text-white">{name[1]}</p>
          {block.lines.slice(1).map((line, j) => (
            <p key={j}>{renderInline(line)}</p>
          ))}
          {contactLines.map((line, j) => (
            <p key={`c${j}`} className={j === 0 ? "mt-4" : undefined}>
              {renderInline(line)}
            </p>
          ))}
        </div>
      );
      if (contactLines.length) i++;
      continue;
    }

    out.push(renderBlock(block, i, inCard && i === 0 ? "!mt-0" : undefined));
  }

  return out;
}

/**
 * A "## " section (counted from 0) rendered inside a card, with its heading
 * either inside the card or above it.
 */
export type LegalCard = { section: number; heading: "inside" | "above"; className: string };

/** Body of a legal document in the site's existing legal layout. */
export function LegalDocBody({ blocks, cards = [] }: { blocks: Block[]; cards?: LegalCard[] }) {
  const starts = blocks.flatMap((b, i) => (b.type === "h2" ? [i] : []));
  const bounds = [0, ...starts, blocks.length];
  // segments[0] is the text before the first heading (possibly empty); segments[k] is section k - 1.
  const segments = bounds.slice(0, -1).map((start, k) => blocks.slice(start, bounds[k + 1]));

  return (
    <>
      {segments.map((segment, k) => {
        const card = k > 0 ? cards.find((c) => c.section === k - 1) : undefined;
        if (!card) return <Fragment key={k}>{renderBlocks(segment, false)}</Fragment>;
        if (card.heading === "inside") {
          return (
            <div key={k} className={card.className}>
              {renderBlocks(segment, true)}
            </div>
          );
        }
        return (
          <Fragment key={k}>
            {renderBlock(segment[0], 0)}
            <div className={card.className}>{renderBlocks(segment.slice(1), false)}</div>
          </Fragment>
        );
      })}
    </>
  );
}
