export async function GET() {
  const response = await fetch('https://github.com/3raphat/master-bo')
  const html = await response.text()

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
      'X-Frame-Options': 'ALLOWALL',
    },
  })
}
