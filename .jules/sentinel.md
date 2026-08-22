## 2025-02-28 - Missing SSR-compatible DOM purification in Markdown rendering
**Vulnerability:** XSS vulnerability in Markdown rendering via `marked` module.
**Learning:** Found that rendering raw HTML from `marked` parsing output using innerHTML causes potential XSS on client side or via unsanitized strings in SSR mode if standard `dompurify` is used.
**Prevention:** Ensured we always use `isomorphic-dompurify` to sanitize HTML securely across environments.
