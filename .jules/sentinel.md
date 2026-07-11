## 2025-03-09 - [CRITICAL] Command Injection in macOS Clipboard Copy
**Vulnerability:** AppleScript injection via `osascript` when copying text to the clipboard. The code escaped `\` and `"` but allowed other shell/AppleScript metacharacters like `\r` to break out and execute arbitrary commands via `do shell script`.
**Learning:** `osascript -e` is notoriously difficult to sandbox correctly because it involves two layers of interpretation: the shell and the AppleScript compiler. Escaping just quotes is insufficient.
**Prevention:** Avoid `osascript` entirely for standard clipboard operations. Use native utilities like `pbcopy` that read safely from standard input, preventing any command injection vector since the text is not interpreted as a command arguments.
