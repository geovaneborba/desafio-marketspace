export function formatToBRLCurrency(number: number) {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number)
}

export function convertTextToCurrency(value: string) {
  if (value.trim() === '') {
    return undefined
  }

  const onlyNumber = '0000' + value.replace(/\D/g, '').slice(0, 10)

  const numberFormatted = onlyNumber.slice(0, -2) + '.' + onlyNumber.slice(-2)

  return parseFloat(numberFormatted)
}
