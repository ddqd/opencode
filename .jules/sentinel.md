## 2024-05-24 - [High] Fix XSS Vulnerability in Markdown Rendering
**Vulnerability:** The Markdown renderer (`packages/web/src/components/share/content-markdown.tsx`) used `markedWithShiki.parse()` to output HTML from user input without sanitization. This directly leads to Cross-Site Scripting (XSS) when rendered via `innerHTML`.
**Learning:** SolidJS's `innerHTML` property renders arbitrary string as HTML without sanitizing it. Whenever we translate Markdown (or other raw input) to HTML manually using `marked` or similar libraries, the resulting string must be sanitized before insertion.
**Prevention:** Always use `isomorphic-dompurify` (for SSR compatibility) to sanitize the result of a Markdown parser before injecting it into the DOM via `innerHTML`.
