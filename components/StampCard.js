'use client'

import { useState } from "react"
import Section from "./Section";

const GOAL = 10;

export default function StampCard() {
  const [stamps, setStamps] = useState([]);
  const isFull = stamps.length >= GOAL;

  function addStamp() {
    setStamps([...stamps, '☕'])
  }

  function removeLast() {
    setStamps(stamps.slice(0, -1))
  }

  function reset() {
    setStamps([])
  }



  return (
    <Section className="stamp-card" title={`🏷️스템프 쿠폰(${stamps.length}/${GOAL})`}>
      <div className="stamp">
        {stamps.length === 0 ?
          <p className="empty" style={{ letterSpacing: 0 }}>아직 스템프가 없습니다.</p> :
          stamps.map((stamp, index) => <span key={index}>{stamp}</span>)
        }
      </div>
      {isFull && <p className="notice" style={{ gridColumn: 'span 3' }}>무료 음료 1잔 쿠폰이 완성되었습니다</p>}

      <button onClick={addStamp} disabled={isFull}>스템프 찍기</button>
      <button onClick={removeLast} disabled={stamps.length === 0}>스템프 하나 빼기</button>
      <button onClick={reset}>리셋</button>
    </Section>
  )
}