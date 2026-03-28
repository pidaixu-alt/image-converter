/**
 * Convert single image to target format
 */
export function convertSingleImage(
  file: File,
  targetFormat: 'image/jpeg' | 'image/png' | 'image/webp',
  quality = 0.8
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = URL.createObjectURL(file)

    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('Canvas not supported'))
        return
      }

      ctx.drawImage(img, 0, 0)

      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob)
          else reject(new Error('Convert failed'))
        },
        targetFormat,
        quality
      )
    }

    img.onerror = () => reject(new Error('Image load error'))
  })
}

/**
 * Batch convert images
 */
export async function convertImages(
  files: File[],
  targetFormat: 'image/jpeg' | 'image/png' | 'image/webp',
  quality = 0.8
): Promise<Blob[]> {
  const tasks = files.map(file => convertSingleImage(file, targetFormat, quality))
  return Promise.all(tasks)
}

/**
 * Download blob as file
 */
export function downloadBlob(blob: Blob, filename: string) {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = filename
  a.click()
}
