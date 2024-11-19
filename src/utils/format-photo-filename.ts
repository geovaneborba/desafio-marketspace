export function formatPhotoFilename(name: string, fileExtension: string) {
  return `${name}.${fileExtension}`.trim().replaceAll(' ', '-').toLowerCase()
}
