const production = process.env.NODE_ENV === 'production'

export const APIPROTOCOL = production ? 'https' : 'http'
export const APIHOST = production ? '192.168.1.4' : '192.168.1.28'
export const APIPORT = production ? '4000' : '3000'
export const APIVERSION = production ? '/api/wievent' : ''

export const APIPORTIMAGE = production ? '4000' : '4000'
export const APIHOSTIMAGE = production ? '192.168.1.4' : '192.168.1.4'
export const APIVERSIONIMAGE = production ? '/api/wiimage' : '/api/wiimage'

export const APIURL = `${APIPROTOCOL}://${APIHOST}:${APIPORT}${APIVERSION}`
export const APIUPLOAD = `${APIPROTOCOL}://${APIHOSTIMAGE}:${APIPORTIMAGE}${APIVERSIONIMAGE}`

export const apiAuth = '/auth'
export const apiUser = '/user'
export const apiEvent = '/event'
export const apiOrganizer = '/organizer'
export const apiArticle = '/article'
export const apiCategory = '/category'
export const apiProduct = '/product'
export const apiSlider = '/home/slider'
export const apiHomeIntro = '/home/intro'
export const apiTestimonial = '/testimonial'
export const apiImage = '/image/upload'
