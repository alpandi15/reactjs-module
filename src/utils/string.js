export const currencyFormatter = (currency) => {
  if (typeof currency === 'string' || typeof currency === 'number') {
    return `Rp ${currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
  }
  return 'Rp 0'
}

export const numberFormatter = (currency) => {
  if (typeof currency === 'string' || typeof currency === 'number') {
    return `${currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
  }
  return '0'
}

export const discountFormatter = (number) => {
  if (typeof number === 'string' || typeof number === 'number') {
    return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}%`
  }
  return ''
}

export const passwordValidate = (value) => {
  if (typeof number === 'string' || typeof number === 'number') {
    return `${value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)}`
  }
  return ''
}

export const Capitalize = (value) => {
  if (typeof value === 'string') {
    return `${value.replace(/^\w/, c => c.toUpperCase())}`
  }
  return ''
}

export const trimDescription = (text = '') => {
  return text.substring(0, 200)
}
