## 2024-05-18 - [Fix Timing Attack in Share API]
**Vulnerability:** Timing attack vulnerability in secret verification due to using strict inequality `!==` for string comparison in `packages/enterprise/src/core/share.ts`.
**Learning:** Checking auth tokens or secrets with `!==` allows timing attacks.
**Prevention:** Always use `timingSafeEqual` (from `node:crypto`) to verify secrets or tokens by comparing their byte arrays.
