## 2025-02-14 - Fix XSS in ContentMarkdown component
**Vulnerability:** The `ContentMarkdown` component parsed markdown using `marked` and directly injected the HTML into the DOM via `innerHTML` without sanitization. This allows `<script>` or `javascript:` links to execute arbitrary JavaScript (XSS).
**Learning:** `marked` does not sanitize HTML by default. We must use `DOMPurify` to ensure all HTML is safe. Because `packages/web` uses SSR, we must use `isomorphic-dompurify`.
**Prevention:** Always sanitize user-provided or dynamically parsed content using a secure sanitizer before passing it to `innerHTML` or `dangerouslySetInnerHTML`.
