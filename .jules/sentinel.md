## 2025-02-27 - [XSS in Shared Markdown Content]
**Vulnerability:** XSS via un-sanitized parsed Markdown HTML output. The `markedWithShiki.parse(markdown)` result was passed directly to Solid's `innerHTML` in `packages/web/src/components/share/content-markdown.tsx`.
**Learning:** `marked` does not sanitize HTML by default. When wrapping `marked` with custom renderers, it's easy to overlook HTML escaping. We must explicitly sanitize the final HTML output.
**Prevention:** Always use `isomorphic-dompurify` (for SSR environments) when piping parsed markdown HTML strings into `innerHTML`.
