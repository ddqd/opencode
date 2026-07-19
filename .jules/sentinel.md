## 2024-05-18 - Missing HTML Sanitization on Markdown Render

**Vulnerability:** Markdown parsing in both web (`packages/web/src/components/share/content-markdown.tsx`) and desktop (`packages/desktop/src/main/markdown.ts`) packages lacked HTML sanitization. Since Markdown output is directly set via `innerHTML`, an attacker could inject malicious scripts leading to XSS vulnerabilities.

**Learning:** When rendering user-controlled Markdown or rendering Markdown dynamically on client or SSR, it must be properly sanitized, especially if the framework directly injects the resulting HTML into the DOM without escaping.

**Prevention:** Always pair `marked.parse` (or similar markdown parsers) with an HTML sanitizer like `DOMPurify` (or `isomorphic-dompurify` for SSR-compatible components) before using `innerHTML` or similar framework injection methods.
