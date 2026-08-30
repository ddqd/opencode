## 2024-05-18 - [Missing XSS Sanitization in Markdown rendering]
**Vulnerability:** XSS vulnerability through unsanitized Markdown input rendered directly with innerHTML.
**Learning:** `marked` parses markdown but does not sanitize HTML by default. When using `innerHTML`, the output must be explicitly sanitized to prevent script injection.
**Prevention:** Always wrap `marked` output (and any other HTML string set via `innerHTML`) with a sanitizer like `DOMPurify` (or `isomorphic-dompurify` in SSR contexts). Use `ADD_ATTR: ["target"]` if links need to open in new tabs.
