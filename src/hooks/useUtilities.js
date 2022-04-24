const useUtilities = () => {
  const capitalize = (string) => {
    if (typeof string !== 'string') return ''

    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const formatPrice = (price, withoutDecimals = true) => {
    let config = {
      style: 'currency',
      currency: 'ARS',
    }

    if (withoutDecimals) {
      config = {
        ...config,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }
    }

    const formatter = new Intl.NumberFormat('es-AR', config)

    return formatter.format(price)
  }

  return { capitalize, formatPrice }
}

export default useUtilities
