/**
 * Convert single image to target format
 */
export function convertSingleImage(
  file: File,
  targetFormat: 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif' | 'image/bmp',
  quality = 0.8
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const objectUrl = URL.createObjectURL(file)
    img.src = objectUrl

    // Set timeout to prevent hanging
    const timeout = setTimeout(() => {
      URL.revokeObjectURL(objectUrl)
      reject(new Error('Image load timeout'))
    }, 10000)

    img.onload = () => {
      clearTimeout(timeout)
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        URL.revokeObjectURL(objectUrl)
        reject(new Error('Canvas not supported'))
        return
      }

      ctx.drawImage(img, 0, 0)

      // PNG and BMP don't need quality parameter
      const qualityParam = (targetFormat === 'image/png' || targetFormat === 'image/bmp') ? undefined : quality

      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(objectUrl)
          if (blob) resolve(blob)
          else reject(new Error('Convert failed'))
        },
        targetFormat,
        qualityParam
      )
    }

    img.onerror = () => {
      clearTimeout(timeout)
      URL.revokeObjectURL(objectUrl)
      reject(new Error('Image load error'))
    }
  })
}

/**
 * Batch convert images
 */
export async function convertImages(
  files: File[],
  targetFormat: 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif' | 'image/bmp',
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
  const objectUrl = URL.createObjectURL(blob)
  a.href = objectUrl
  a.download = filename
  a.click()
  // Clean up the object URL after download
  setTimeout(() => URL.revokeObjectURL(objectUrl), 100)
}
