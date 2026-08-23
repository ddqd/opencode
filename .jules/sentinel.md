## 2024-05-24 - Cross-Site Scripting (XSS) in Markdown Rendering
**Vulnerability:** XSS via unsanitized Markdown input rendered using `innerHTML`. The `packages/web` component `ContentMarkdown` parses markdown using `marked` and sets the resulting HTML directly into the DOM using `innerHTML` without sanitization.
**Learning:** SolidJS's `innerHTML` and similar mechanisms in other frameworks do not sanitize the HTML they render. When processing user-generated or external markdown, a secondary sanitization step is absolutely required.
**Prevention:** Always use a library like `dompurify` (or `isomorphic-dompurify` for SSR-compatible environments) to sanitize parsed Markdown or any user-generated HTML before injecting it into the DOM.
