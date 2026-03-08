export default defineEventHandler((event) => {
  const hostname = getRequestHost(event)
  if (hostname.endsWith('pages.dev')) {
    throw createError({ statusCode: 403, statusMessage: 'Access Denied' })
  }
})
