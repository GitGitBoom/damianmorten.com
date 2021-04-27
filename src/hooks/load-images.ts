import { useState, useEffect } from 'react'
import Promise from 'bluebird'

export const useLoadImages = (urls: string[]): boolean => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    Promise.map(
      urls,
      (url: string) =>
        new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = reject
          img.src = url
        }),
      {
        concurrency: 30,
      }
    )
      .then(() => {
        setIsLoaded(true)
      })
      .catch((e) => {
        console.error('Failed to load image.', e)
      })
  }, [])

  return isLoaded
}
