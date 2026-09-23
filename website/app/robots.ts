import type { MetadataRoute } from "next";

const BASE_URL = "https://www.holofridge.com";

// Explicitly welcome AI crawlers and answer engines.
// Listing them by name matters: some default to "not allowed" unless named.
const AI_CRAWLERS = [
  "GPTBot",            // OpenAI training
  "OAI-SearchBot",     // ChatGPT search / citations
  "ChatGPT-User",      // ChatGPT browsing on user request
  "ClaudeBot",         // Anthropic
  "anthropic-ai",      // Anthropic (legacy UA)
  "Claude-Web",        // Anthropic browsing
  "PerplexityBot",     // Perplexity
  "Google-Extended",   // Gemini / Google AI features
  "Applebot-Extended", // Apple Intelligence
  "Amazonbot",
  "Bytespider",
  "CCBot",             // Common Crawl (feeds many open models)
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
