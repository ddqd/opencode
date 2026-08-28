## 2024-05-18 - Prevent XSS in Markdown rendering
**Vulnerability:** XSS vulnerability when directly assigning Markdown parsing output (`marked.parse`) to `innerHTML` without sanitization.
**Learning:** Even though `shiki` output is safe, user-provided Markdown could contain raw HTML or malicious link tags. Sanitize HTML output, ensuring `target="_blank"` on links is preserved.
**Prevention:** Always use `isomorphic-dompurify` (for SSR compatibility) or `dompurify` and add appropriate code comments explaining security concerns.
