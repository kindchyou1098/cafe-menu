import LikeButton from "@/components/LikeButton"
import OrderButton from "@/components/OrderButton"

export default function MenuCard({ emoji = '☕', name, price, desc, isNew = false, soldout = false }) {
  return (
    <div className={soldout ? "card soldout" : "card"}>
      <h3>
        {emoji} {name}
        {isNew && <span className="badge">NEW</span>}
      </h3>
      {soldout
        ? <p className="soldout-label">품절</p>
        : <p className="price">{price.toLocaleString()}원</p>
      }
      <p style={{ fontSize: '13.5px', color: '#666' }}>
        {desc}
      </p>
      <div className="card-actions">
        <OrderButton name={name} soldout={soldout}/>
        <LikeButton/>
      </div>
    </div>
  )
}