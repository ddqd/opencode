import { marked, type Tokens } from "marked"
import DOMPurify from "isomorphic-dompurify"

const renderer = new marked.Renderer()

renderer.link = ({ href, title, text }: Tokens.Link) => {
  const titleAttr = title ? ` title="${title}"` : ""
  return `<a href="${href}"${titleAttr} class="external-link" target="_blank" rel="noopener noreferrer">${text}</a>`
}

export function parseMarkdown(input: string) {
  const parsed = marked(input, {
    renderer,
    breaks: false,
    gfm: true,
  })
  return DOMPurify.sanitize(parsed as string)
}
