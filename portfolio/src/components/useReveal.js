import { useEffect, useRef, useState } from 'react'

// Reveals an element with a fade/slide when it scrolls into view.
// Usage: const [ref, shown] = useReveal(); <div ref={ref} className={shown ? 'in' : ''} />
export function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    // Respect users who prefer reduced motion — show immediately.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true)
        obs.disconnect()
      }
    }, options)
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return [ref, shown]
}
