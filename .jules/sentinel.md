## 2025-02-14 - Fix XSS in Share Markdown Rendering
**Vulnerability:** XSS vulnerability in `packages/web/src/components/share/content-markdown.tsx` where raw markdown parsed by `marked` was directly injected via `innerHTML` without sanitization.
**Learning:** Solid.js/Astro SSR applications require `isomorphic-dompurify` rather than standard `dompurify` to avoid server-side crashes while maintaining client-side functionality.
**Prevention:** Always sanitize dynamically rendered markdown or HTML using `isomorphic-dompurify` in web components.
