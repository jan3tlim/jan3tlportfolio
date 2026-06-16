// Ambient falling-food layer — a food-themed take on the classic "falling
// snowflakes" effect. Emoji drift down the left/right margins so they frame the
// page without sitting on top of the text. Purely decorative (aria-hidden), and
// the CSS hides it entirely for visitors who prefer reduced motion.

// Each item is pinned to a side + offset so the field is evenly spread and
// stable between renders (no random reshuffle on every paint).
const FOODS = [
  { emoji: '🍕', side: 'left', pos: '1%', delay: '0s', dur: '11s', size: '1.7rem' },
  { emoji: '🍣', side: 'right', pos: '2%', delay: '1.5s', dur: '13s', size: '1.5rem' },
  { emoji: '🍩', side: 'left', pos: '4%', delay: '3s', dur: '12s', size: '1.9rem' },
  { emoji: '🍜', side: 'right', pos: '5%', delay: '4.5s', dur: '14s', size: '1.6rem' },
  { emoji: '🍓', side: 'left', pos: '6.5%', delay: '6s', dur: '10s', size: '1.4rem' },
  { emoji: '🥑', side: 'right', pos: '8%', delay: '2s', dur: '15s', size: '1.7rem' },
  { emoji: '🌮', side: 'left', pos: '8.5%', delay: '7.5s', dur: '12.5s', size: '1.8rem' },
  { emoji: '🧋', side: 'right', pos: '10.5%', delay: '5s', dur: '13.5s', size: '1.6rem' },
  { emoji: '🍰', side: 'left', pos: '3%', delay: '9s', dur: '14.5s', size: '1.5rem' },
  { emoji: '🍦', side: 'right', pos: '12.5%', delay: '8s', dur: '11.5s', size: '1.7rem' },
  { emoji: '🍱', side: 'left', pos: '7%', delay: '10.5s', dur: '13s', size: '1.5rem' },
  { emoji: '🥐', side: 'right', pos: '14%', delay: '3.5s', dur: '12s', size: '1.6rem' },
  { emoji: '🍇', side: 'left', pos: '2%', delay: '12s', dur: '15s', size: '1.4rem' },
  { emoji: '🍔', side: 'right', pos: '6.5%', delay: '6.5s', dur: '14s', size: '1.8rem' },
]

export default function FallingFood() {
  return (
    <div className="foodfall" aria-hidden="true">
      {FOODS.map((f, i) => (
        <span
          key={i}
          className="foodfall__item"
          style={{
            [f.side]: f.pos,
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
