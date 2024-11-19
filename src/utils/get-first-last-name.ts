export function getFirstLastName(name: string) {
  const fullName = name.trim().split(' ')

  if (fullName.length >= 2) {
    const fistName = capitalize(fullName.shift())
    const lastName = capitalize(fullName.pop())

    return `${fistName} ${lastName}`
  }

  return fullName[0] || ''
}

export function capitalize(str: string | undefined): string {
  return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : ''
}
