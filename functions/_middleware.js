export async function onRequest(context) {
  const hostname = context.request.headers.get('host') || ''
  
  if (hostname.endsWith('pages.dev')) {
    return new Response('Access Denied', { status: 403 })
  }
  
  return await context.next()
}
