import Link from 'next/link'
import Image from 'next/image'
import formatter from '../utils/priceFormatter'

function ProductCard({ name, price, badges, img, permalink }) {
  return (
    <div className="col">
      <div className="card product-card">
        {img ? <img src={img} style={{height: 170, objectFit:"cover" }}/> : <svg className="bd-placeholder-img card-img-top" width="100%" height={150} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
          <rect width="100%" height="100%" fill="#55595c" />
        </svg>}
        <div className="card-body">
          {
            badges &&
            <div className="">
              {
                badges.map(badge =>
                  <div className="badge bg-secondary mb-2 me-2">{badge}</div>
                )
              }
            </div>
          }
          <h6 className="card-title"><Link href={`/product/${permalink}`}><a className="stretched-link text-dark nounderline">{name}</a></Link></h6>
          <p className="fw-bold">{formatter.format(price)}</p>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
