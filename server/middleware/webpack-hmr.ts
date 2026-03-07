export default defineEventHandler((event) => {
  if (getRequestURL(event).pathname === '/__webpack_hmr') {
    setResponseStatus(event, 204)
    return ''
  }
})
