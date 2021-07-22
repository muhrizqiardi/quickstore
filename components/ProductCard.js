function ProductCard({ name, price, badges, img }) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
  });
  return (
    <div className="col">
      <div className="card">
        {img ? <img src={img} style={{maxHeight: 170, backgroundSize:"cover" }}/> : <svg className="bd-placeholder-img card-img-top" width="100%" height={150} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
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
          <h6 className="card-title">{name}</h6>
          <p className="fw-bold">{formatter.format(price)}</p>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
