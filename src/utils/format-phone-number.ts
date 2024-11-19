export function cleanPhoneNumber(tel: string) {
  return tel.length === 0 ? '' : tel.replace(/\D/g, '').slice(0, 11)
}

export function formatPhoneNumber(tel: string) {
  const numberTelClean = cleanPhoneNumber(tel)

  let numberTelFormatted = ''

  const isTenDigitNumber = numberTelClean.length === 10

  if (numberTelClean.length > 0) {
    numberTelFormatted += `(${numberTelClean.slice(0, 2)}`

    if (numberTelClean.length > 2) {
      numberTelFormatted += `) ${numberTelClean.slice(2, isTenDigitNumber ? 6 : 7)}`
    }

    if (numberTelClean.length > 7) {
      numberTelFormatted += `-${numberTelClean.slice(isTenDigitNumber ? 6 : 7, 11)}`
    }
  }

  return numberTelFormatted
}
