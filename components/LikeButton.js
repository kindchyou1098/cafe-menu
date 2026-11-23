'use client'

import { useState } from "react"

export default function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <button className="like-btn" onClick={() => setCount(count + 1)}>
      {count === 0 ? '🤍' : '❤️'}{count}
    </button>
  )
}