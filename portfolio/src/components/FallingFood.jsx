// Ambient falling-food layer — a food-themed take on the classic "falling
// snowflakes" effect. Emoji drift down across the full width of the page so the
// whole viewport gets the effect. The layer sits BEHIND the content (see the
// z-index rules in index.css), so opaque cards/text always stay legible — the
// food only shows through gutters and transparent gaps. Purely decorative
// (aria-hidden), and the CSS hides it entirely for prefers-reduced-motion.

// Each item is pinned to a horizontal position + offset so the field is evenly
// spread across the page and stable between renders (no random reshuffle).
const FOODS = [
  { emoji: '🍕', pos: '3%', delay: '0s', dur: '11s', size: '1.7rem' },
  { emoji: '🍣', pos: '11%', delay: '1.5s', dur: '13s', size: '1.5rem' },
  { emoji: '🍩', pos: '18%', delay: '3s', dur: '12s', size: '1.9rem' },
  { emoji: '🍜', pos: '26%', delay: '4.5s', dur: '14s', size: '1.6rem' },
  { emoji: '🍓', pos: '34%', delay: '6s', dur: '10s', size: '1.4rem' },
  { emoji: '🥑', pos: '41%', delay: '2s', dur: '15s', size: '1.7rem' },
  { emoji: '🌮', pos: '49%', delay: '7.5s', dur: '12.5s', size: '1.8rem' },
  { emoji: '🧋', pos: '57%', delay: '5s', dur: '13.5s', size: '1.6rem' },
  { emoji: '🍰', pos: '64%', delay: '9s', dur: '14.5s', size: '1.5rem' },
  { emoji: '🍦', pos: '72%', delay: '8s', dur: '11.5s', size: '1.7rem' },
  { emoji: '🍱', pos: '79%', delay: '10.5s', dur: '13s', size: '1.5rem' },
  { emoji: '🥐', pos: '87%', delay: '3.5s', dur: '12s', size: '1.6rem' },
  { emoji: '🍇', pos: '94%', delay: '12s', dur: '15s', size: '1.4rem' },
  { emoji: '🍔', pos: '7%', delay: '6.5s', dur: '14s', size: '1.8rem' },
  { emoji: '🍪', pos: '22%', delay: '9.5s', dur: '12s', size: '1.6rem' },
  { emoji: '🍉', pos: '38%', delay: '13s', dur: '13.5s', size: '1.7rem' },
  { emoji: '🍡', pos: '53%', delay: '11s', dur: '11s', size: '1.5rem' },
  { emoji: '🥟', pos: '68%', delay: '4s', dur: '14.5s', size: '1.6rem' },
  { emoji: '🍫', pos: '83%', delay: '7s', dur: '12.5s', size: '1.5rem' },
  { emoji: '🧁', pos: '97%', delay: '10s', dur: '13s', size: '1.6rem' },
]

export default function FallingFood() {
  return (
    <div className="foodfall" aria-hidden="true">
      {FOODS.map((f, i) => (
        <span
          key={i}
          className="foodfall__item"
          style={{
            left: f.pos,
            fontSize: f.size,
            animationDelay: `${f.delay}, ${f.delay}`,
            animationDuration: `${f.dur}, 3s`,
          }}
        >
          {f.emoji}
        </span>
      ))}
    </div>
  )
}
